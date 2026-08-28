import type { StaticImageData } from "next/image";
import projectPlaceholderOne from "./images/project-placeholder-01.svg";
import projectPlaceholderTwo from "./images/project-placeholder-02.svg";

type LiveProject = {
  status: "live";
  id: string;
  client: string;
  description: string;
  tag: string;
  image: StaticImageData;
};

type UpcomingProject = {
  status: "soon";
  id: string;
};

export type Project = LiveProject | UpcomingProject;

/**
 * Os dois primeiros projetos estão prontos para receber conteúdo real:
 * troque `client`, `description`, `tag` e `image` pelos dados do case.
 * Os demais itens (status "soon") aparecem como "Em breve" no grid —
 * basta trocar o status para "live" e preencher os campos quando o
 * próximo case estiver pronto.
 */
export const projects: Project[] = [
  {
    status: "live",
    id: "projeto-01",
    // TODO: substituir pelo nome real do cliente.
    client: "Nome do Cliente 01",
    // TODO: substituir pela descrição real do projeto.
    description:
      "Descrição breve do projeto: o que foi construído e qual resultado a landing page entrega.",
    tag: "Landing Page",
    // TODO: substituir pelo screenshot real do projeto.
    image: projectPlaceholderOne,
  },
  {
    status: "live",
    id: "projeto-02",
    client: "Nome do Cliente 02",
    description:
      "Descrição breve do projeto: o que foi construído e qual resultado a landing page entrega.",
    tag: "Landing Page",
    image: projectPlaceholderTwo,
  },
  { status: "soon", id: "projeto-03" },
  { status: "soon", id: "projeto-04" },
  { status: "soon", id: "projeto-05" },
  { status: "soon", id: "projeto-06" },
];
