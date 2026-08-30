export type ProcessStep = {
  number: string;
  title: string;
  duration: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Briefing",
    duration: "1 dia",
    description: "Objetivos, público e referências.",
  },
  {
    number: "02",
    title: "Protótipo",
    duration: "2 dias",
    description: "Wireframe e direção visual.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    duration: "3 dias",
    description: "Código, performance e testes.",
  },
  {
    number: "04",
    title: "Entrega",
    duration: "1 dia",
    description: "Deploy e ajustes finais.",
  },
];
