"use client";

import { useEffect,useRef,useState,type FormEvent } from "react";
import { onAuthStateChanged,signInWithEmailAndPassword,signOut,type User } from "firebase/auth";
import { collection,deleteDoc,doc,getDocs,orderBy,query,where } from "firebase/firestore";
import { auth,db } from "@/lib/firebase";
import { SUBS } from "@/lib/config";
import type { Submission,SubId } from "@/lib/types";
import { formatWhatsApp } from "@/lib/whatsapp";

const SUB_IDS:SubId[]=["A1","A6","A7","A17"];
const emptyData=():Record<SubId,Submission[]>=>({A1:[],A6:[],A7:[],A17:[]});
const dateOf=(r:Submission)=>r.createdAt?.toDate().toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})??"Sincronizando...";
const chapters=(answer:Submission["capitulosMaisDe41k"])=>answer.tem?`Sim — ${answer.quais}`:"Não";

export function AdminDashboard(){
  const [user,setUser]=useState<User|null>(null); const [checking,setChecking]=useState(true);
  const [active,setActive]=useState<SubId>("A1"); const [data,setData]=useState(emptyData);
  const [loading,setLoading]=useState(false); const [error,setError]=useState("");
  const [selected,setSelected]=useState<Submission|null>(null); const [deleting,setDeleting]=useState<Submission|null>(null);
  const [copied,setCopied]=useState(false); const [deleteBusy,setDeleteBusy]=useState(false); const [notice,setNotice]=useState("");

  useEffect(()=>onAuthStateChanged(auth,(next)=>{setUser(next);setChecking(false);}),[]);
  async function load(){setLoading(true);setError("");try{
    const entries=await Promise.all(SUB_IDS.map(async sub=>{
      const snap=await getDocs(query(collection(db,"submissions"),where("sub","==",sub),orderBy("createdAt","desc")));
      return [sub,snap.docs.map(d=>d.data() as Submission)] as const;
    })); setData(Object.fromEntries(entries) as Record<SubId,Submission[]>);
  }catch{setError("Não foi possível carregar as respostas. Tente novamente.");}finally{setLoading(false);}}
  useEffect(()=>{if(user) queueMicrotask(()=>void load());},[user]);
  async function copy(record:Submission){try{await navigator.clipboard.writeText(formatWhatsApp(record));setCopied(true);setNotice("Texto copiado para a área de transferência.");}catch{setNotice("Não foi possível copiar. Autorize o acesso à área de transferência e tente novamente.");}}
  async function remove(){if(!deleting||deleteBusy)return;setDeleteBusy(true);setNotice("");try{await deleteDoc(doc(db,"submissions",deleting.id));setData(prev=>({...prev,[deleting.sub]:prev[deleting.sub].filter(r=>r.id!==deleting.id)}));if(selected?.id===deleting.id)setSelected(null);setDeleting(null);setNotice("Resposta excluída permanentemente.");}catch{setNotice("Falha ao excluir. O registro foi mantido; tente novamente.");}finally{setDeleteBusy(false);}}
  if(checking)return <main className="admin-page"><div className="loading">Verificando acesso...</div></main>;
  if(!user)return <Login/>;
  const records=data[active];
  return <main className="admin-page"><div className="admin-shell">
    <header className="admin-header"><div><p className="eyebrow">Área privada</p><h1>Formulário Lunar</h1><p>Respostas organizadas por sub.</p></div><button className="ghost-btn" onClick={()=>signOut(auth)}>Sair</button></header>
    <nav className="tabs" aria-label="Subs">{SUB_IDS.map(sub=><button key={sub} className={`tab ${active===sub?"active":""}`} onClick={()=>setActive(sub)} aria-pressed={active===sub}><strong>{sub}</strong><span>{SUBS[sub].name} · {data[sub].length}</span></button>)}</nav>
    {notice&&<p className="feedback success" role="status">{notice}</p>}
    {error&&<p className="feedback error" role="alert">{error} <button className="small-btn" onClick={load}>Tentar novamente</button></p>}
    <section className="panel"><div className="panel-head"><div><p className="eyebrow">{active}</p><h2>{SUBS[active].name}</h2></div><span>{records.length} {records.length===1?"resposta":"respostas"}</span></div>
      {loading?<div className="loading">Carregando respostas...</div>:records.length===0?<div className="empty">Nenhuma resposta recebida ainda.</div>:<div className="records">{records.map(record=><article className="record" key={record.id}>
        <div className="record-main"><strong>{record.nome}</strong><small>{record.user} · {dateOf(record)}</small></div><div><strong>{record.obra}</strong><small>{record.sub}</small></div><div><small>{record.link}</small></div>
        <div className="actions"><button className="small-btn" onClick={()=>{setCopied(false);setSelected(record);}}>Visualizar</button><button className="small-btn" onClick={()=>void copy(record)}>Copiar</button><button className="danger-btn" onClick={()=>setDeleting(record)}>Excluir</button></div>
      </article>)}</div>}
    </section>
  </div>
  {selected&&<DetailModal record={selected} copied={copied} onCopy={()=>void copy(selected)} onClose={()=>setSelected(null)}/>}
  {deleting&&<ConfirmModal busy={deleteBusy} onCancel={()=>!deleteBusy&&setDeleting(null)} onConfirm={remove}/>}
  </main>;
}

function Login(){const [busy,setBusy]=useState(false);const [error,setError]=useState("");async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setBusy(true);setError("");const fd=new FormData(e.currentTarget);try{await signInWithEmailAndPassword(auth,String(fd.get("email")),String(fd.get("password")));}catch{setError("E-mail ou senha inválidos. Verifique os dados e tente novamente.");}finally{setBusy(false);}}return <main className="admin-page"><form className="login-card" onSubmit={submit}><div className="moon-mark" aria-hidden="true"/><p className="eyebrow">Administração</p><h1>Formulário Lunar</h1><p>Entre com a conta administrativa autorizada.</p><div className="field"><label htmlFor="email">E-mail</label><input id="email" name="email" type="email" autoComplete="username" required/></div><div className="field"><label htmlFor="password">Senha</label><input id="password" name="password" type="password" autoComplete="current-password" required minLength={6}/></div><button className="submit" disabled={busy}>{busy?"Entrando...":"Entrar"}</button>{error&&<p className="feedback error" role="alert">{error}</p>}</form></main>}

function ModalFrame({title,onClose,children}:{title:string;onClose:()=>void;children:React.ReactNode}){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{ref.current?.focus();const esc=(e:KeyboardEvent)=>{if(e.key==="Escape")onClose();};document.addEventListener("keydown",esc);return()=>document.removeEventListener("keydown",esc);},[onClose]);return <div className="modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabIndex={-1} ref={ref}><div className="modal-head"><h2 id="modal-title">{title}</h2><button className="close-btn" aria-label="Fechar" onClick={onClose}>×</button></div>{children}</div></div>}
function DetailModal({record,onClose,onCopy,copied}:{record:Submission;onClose:()=>void;onCopy:()=>void;copied:boolean}){const fields=[['Nome',record.nome],['User',record.user],['Obra',record.obra],['Link',record.link],['Prólogo +1k',record.prologoMaisDe1k?'Sim':'Não'],['Capítulos >4,1K',chapters(record.capitulosMaisDe41k)],['Capítulos ≤500',chapters(record.capitulosMenosDe500)],['Gatilho do usuário',record.gatilhoUsuario],['Gatilho da obra',record.gatilhoObra],['Data/hora',dateOf(record)],['Sub',record.sub]];return <ModalFrame title="Resposta completa" onClose={onClose}><div className="modal-body"><dl className="details">{fields.map(([label,value])=><div className={`detail ${String(value).length>90?'wide':''}`} key={label}><dt>{label}</dt><dd>{label==='Link'?<a href={value} target="_blank" rel="noreferrer">{value}</a>:value}</dd></div>)}</dl><h3 className="preview-title">Prévia para WhatsApp</h3><pre className="preview">{formatWhatsApp(record)}</pre><button className="copy-btn" onClick={onCopy}>{copied?'✓ Copiado':'Copiar para WhatsApp'}</button></div></ModalFrame>}
function ConfirmModal({busy,onCancel,onConfirm}:{busy:boolean;onCancel:()=>void;onConfirm:()=>void}){return <ModalFrame title="Excluir resposta" onClose={onCancel}><div className="modal-body confirm"><p>Tem certeza de que deseja excluir permanentemente esta resposta?</p><div className="confirm-actions"><button className="ghost-btn" disabled={busy} onClick={onCancel}>Cancelar</button><button className="danger-btn" disabled={busy} onClick={onConfirm}>{busy?'Excluindo...':'Excluir'}</button></div></div></ModalFrame>}
