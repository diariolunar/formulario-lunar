import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const body = Inter({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Formulário Lunar", template: "%s · Formulário Lunar" },
  description: "Formulários oficiais dos subs da comunidade Lunar.",
  openGraph: { title:"Formulário Lunar", description:"Quatro universos literários, quatro formulários oficiais.", images:[{url:"/og.png",width:1200,height:630,alt:"Formulário Lunar"}] },
  twitter: { card:"summary_large_image", title:"Formulário Lunar", description:"Quatro universos literários, quatro formulários oficiais.", images:["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
