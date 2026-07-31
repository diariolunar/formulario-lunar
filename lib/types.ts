import type { Timestamp } from "firebase/firestore";

export type SubId = "A1" | "A6" | "A7" | "A17";
export type ChapterAnswer = { tem: boolean; quais: string };

export type Submission = {
  id: string;
  sub: SubId;
  nome: string;
  user: string;
  obra: string;
  link: string;
  prologoMaisDe1k: boolean;
  capitulosMaisDe41k: ChapterAnswer;
  capitulosMenosDe500: ChapterAnswer;
  gatilhoUsuario: string;
  gatilhoObra: string;
  createdAt: Timestamp | null;
};

export type SubmissionDraft = Omit<Submission, "id" | "createdAt">;
