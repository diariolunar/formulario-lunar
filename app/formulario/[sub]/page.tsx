import Image from "next/image";
import { notFound } from "next/navigation";
import { LunarForm } from "@/components/LunarForm";
import { slugToSub, SUBS } from "@/lib/config";

export function generateStaticParams() { return ["a1","a6","a7","a17"].map((sub)=>({sub})); }

export default async function FormPage({ params }: { params:Promise<{sub:string}> }) {
  const { sub:slug } = await params;
  const sub = slugToSub(slug);
  if (!sub) notFound();
  const config = SUBS[sub];
  return (
    <main className={`form-page theme-${config.slug}`}>
      <div className="form-shell">
        <header className="hero">
          <Image src={config.image} alt={`Símbolo de ${config.name}`} fill priority sizes="(max-width: 760px) 100vw, 760px" />
          <div className="hero-copy">
            <p className="eyebrow">{config.kicker}</p>
            <h1>{config.name}</h1>
            <p>{config.description}</p>
          </div>
        </header>
        <LunarForm sub={sub} />
      </div>
    </main>
  );
}
