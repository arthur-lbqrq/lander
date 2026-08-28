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
    description:
      "Alinhamento de objetivos, público-alvo e referências visuais para definir o escopo da página.",
  },
  {
    number: "02",
    title: "Protótipo",
    duration: "2 dias",
    description:
      "Wireframe e direção visual para validar estrutura e conteúdo antes de ir para o código.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    duration: "3 dias",
    description:
      "Código de produção, otimização de performance e testes em diferentes dispositivos.",
  },
  {
    number: "04",
    title: "Entrega",
    duration: "1 dia",
    description:
      "Deploy, ajustes finais e handoff — tudo pronto para captar clientes.",
  },
];
