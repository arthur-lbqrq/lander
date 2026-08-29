import type { StaticImageData } from "next/image";
import tinoScreenshot from "./images/tino.png";
import concrepisosScreenshot from "./images/concrepisos.png";

export type LiveProject = {
  status: "live";
  id: string;
  client: string;
  description: string;
  tag: string;
  image: StaticImageData;
  url?: string;
};

type UpcomingProject = {
  status: "soon";
  id: string;
};

export type Project = LiveProject | UpcomingProject;

/**
 * Os dois primeiros projetos estão prontos para receber conteúdo real:
 * troque `client`, `description`, `tag` e `image` pelos dados do case.
 * Os demais itens (status "soon") são contados num indicador único
 * abaixo do grid ("+N em breve") em vez de aparecerem como cards
 * individuais — basta trocar o status para "live" e preencher os campos
 * quando o próximo case estiver pronto.
 */
export const projects: Project[] = [
  {
    status: "live",
    id: "projeto-01",
    client: "Tino",
    description:
      "SaaS de gestão financeira para pequenos negócios: antecipa problemas de caixa com alertas inteligentes, antes que virem prejuízo.",
    tag: "SaaS Financeiro",
    image: tinoScreenshot,
    url: "https://tino-gfin-beta.vercel.app/",
  },
  {
    status: "live",
    id: "projeto-02",
    client: "CONCREPISOS",
    description:
      "Site institucional para empresa de pisos e acabamentos em Recife-PE, com portfólio de obras e captação direta via WhatsApp.",
    tag: "Pisos & Acabamentos",
    image: concrepisosScreenshot,
    url: "https://concrepisos.vercel.app/",
  },
  { status: "soon", id: "projeto-03" },
  { status: "soon", id: "projeto-04" },
  { status: "soon", id: "projeto-05" },
  { status: "soon", id: "projeto-06" },
];
