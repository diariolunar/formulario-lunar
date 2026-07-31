"use client";

import { useState, type FormEvent } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { SubId } from "@/lib/types";

type YesNoProps = { name:string; legend:string; value:boolean|null; onChange:(value:boolean)=>void };
function YesNo({ name,legend,value,onChange }:YesNoProps) {
  return <fieldset className="question"><legend>{legend}</legend><div className="choice-row">
    <label className="choice"><input required type="radio" name={name} checked={value===true} onChange={()=>onChange(true)} /><span>Sim</span></label>
    <label className="choice"><input required type="radio" name={name} checked={value===false} onChange={()=>onChange(false)} /><span>Não</span></label>
  </div></fieldset>;
}

const clean = (value:string) => value.trim();
export function LunarForm({ sub }:{sub:SubId}) {
  const [prologo,setPrologo]=useState<boolean|null>(null);
  const [mais,setMais]=useState<boolean|null>(null);
  const [menos,setMenos]=useState<boolean|null>(null);
  const [sending,setSending]=useState(false);
  const [feedback,setFeedback]=useState<{type:"success"|"error";text:string}|null>(null);
  const [resetKey,setResetKey]=useState(0);

  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form=event.currentTarget;
    const data=new FormData(form);
    if (prologo===null || mais===null || menos===null) { setFeedback({type:"error",text:"Responda às perguntas de Sim ou Não."}); return; }
    const maisQuais=clean(String(data.get("maisQuais")??""));
    const menosQuais=clean(String(data.get("menosQuais")??""));
    const chapterPattern=/^[0-9]+(?:[ ,]+[0-9]+)*$/;
    if ((mais && !chapterPattern.test(maisQuais)) || (menos && !chapterPattern.test(menosQuais))) {
      setFeedback({type:"error",text:"Nos capítulos, informe apenas números separados por vírgula."}); return;
    }
    setSending(true); setFeedback(null);
    try {
      const ref=doc(db,"submissions",crypto.randomUUID());
      await setDoc(ref,{
        id:ref.id, sub,
        nome:clean(String(data.get("nome"))), user:clean(String(data.get("user"))), obra:clean(String(data.get("obra"))), link:clean(String(data.get("link"))),
        prologoMaisDe1k:prologo,
        capitulosMaisDe41k:{tem:mais,quais:mais?maisQuais:""},
        capitulosMenosDe500:{tem:menos,quais:menos?menosQuais:""},
        gatilhoUsuario:clean(String(data.get("gatilhoUsuario"))), gatilhoObra:clean(String(data.get("gatilhoObra"))),
        createdAt:serverTimestamp(),
      });
      form.reset(); setPrologo(null); setMais(null); setMenos(null); setResetKey((k)=>k+1);
      setFeedback({type:"success",text:"Resposta enviada com sucesso. Obrigada por compartilhar sua obra!"});
    } catch {
      setFeedback({type:"error",text:"Não foi possível enviar agora. Seus dados foram preservados; verifique a conexão e tente novamente."});
    } finally { setSending(false); }
  }

  return <form key={resetKey} className="lunar-form" onSubmit={submit} noValidate={false}>
    <div className="section-label">Sobre você e sua obra</div>
    <div className="field"><label htmlFor="nome">Nome</label><input id="nome" name="nome" required minLength={2} maxLength={120} autoComplete="name" placeholder="Como você quer ser chamado(a)?" /></div>
    <div className="field"><label htmlFor="user">User</label><input id="user" name="user" required minLength={2} maxLength={80} placeholder="@seuuser" /></div>
    <div className="field"><label htmlFor="obra">Obra</label><input id="obra" name="obra" required minLength={2} maxLength={180} placeholder="Título da sua obra" /></div>
    <div className="field"><label htmlFor="link">Link</label><input id="link" name="link" type="url" required inputMode="url" placeholder="https://..." /></div>
    <div className="section-label">Detalhes da história</div>
    <YesNo name="prologo" legend="Seu Prólogo tem +1k palavras?" value={prologo} onChange={setPrologo} />
    <YesNo name="mais" legend="Algum capítulo tem +4,1k palavras?" value={mais} onChange={setMais} />
    {mais && <div className="field conditional"><label htmlFor="maisQuais">Quais? (Apenas números)</label><input id="maisQuais" name="maisQuais" required inputMode="numeric" placeholder="Ex.: 3, 7" aria-describedby="mais-hint" /><span id="mais-hint" className="hint">Separe os números por vírgula.</span></div>}
    <YesNo name="menos" legend="Algum capítulo tem 500 palavras ou menos?" value={menos} onChange={setMenos} />
    {menos && <div className="field conditional"><label htmlFor="menosQuais">Quais? (Apenas números)</label><input id="menosQuais" name="menosQuais" required inputMode="numeric" placeholder="Ex.: 2, 9" aria-describedby="menos-hint" /><span id="menos-hint" className="hint">Separe os números por vírgula.</span></div>}
    <div className="field"><label htmlFor="gatilhoUsuario">Você tem algum gatilho?</label><textarea id="gatilhoUsuario" name="gatilhoUsuario" required maxLength={1000} placeholder="Informe seus gatilhos ou escreva “Não”." /></div>
    <div className="field"><label htmlFor="gatilhoObra">Sua obra tem algum gatilho?</label><textarea id="gatilhoObra" name="gatilhoObra" required maxLength={1000} placeholder="Informe os gatilhos da obra ou escreva “Não”." /></div>
    <button className="submit" type="submit" disabled={sending}>{sending?"Enviando...":"Enviar resposta"}</button>
    {feedback && <p className={`feedback ${feedback.type}`} role="status" aria-live="polite">{feedback.text}</p>}
  </form>;
}
