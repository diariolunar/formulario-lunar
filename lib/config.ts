import type { SubId } from "./types";

export const SUBS: Record<SubId, { slug:string; name:string; kicker:string; description:string; image:string }> = {
  A1: { slug:"a1", name:"Chama Eterna", kicker:"A1 · História do dia", description:"Onde cada história renasce em fogo, palavra e energia.", image:"/themes/a1.webp" },
  A6: { slug:"a6", name:"Trono Profano", kicker:"A6 · Grimório literário", description:"Sele sua obra em fogo e conquiste um lugar entre leitores fiéis.", image:"/themes/a6.webp" },
  A7: { slug:"a7", name:"Margens de Mundos", kicker:"A7 · Portal literário", description:"Abra o livro, atravesse fronteiras e revele o seu mundo.", image:"/themes/a7.webp" },
  A17:{ slug:"a17",name:"Lâmina Sombria", kicker:"A17 · Histórias na escuridão", description:"Palavras afiadas, sombras profundas e histórias que deixam marcas.", image:"/themes/a17.webp" },
};

export const slugToSub = (slug:string): SubId | null =>
  (Object.keys(SUBS) as SubId[]).find((key)=>SUBS[key].slug===slug.toLowerCase()) ?? null;
