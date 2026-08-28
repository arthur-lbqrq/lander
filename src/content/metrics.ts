export type Metric = {
  value: string;
  label: string;
};

export const metrics: Metric[] = [
  { value: "90+", label: "Performance no PageSpeed" },
  { value: "<2s", label: "Tempo de carregamento" },
  { value: "7 dias", label: "Prazo médio de entrega" },
];
