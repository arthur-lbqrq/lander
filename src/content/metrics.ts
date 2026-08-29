export type Metric = {
  value: string;
  label: string;
  /**
   * Needle position on the instrument dial, 0–1. The literal `value` string
   * is always the real claim; this fraction is an honest, documented
   * illustrative mapping onto a dial arc, never a fabricated extra metric.
   */
  gauge: number;
};

export const metrics: Metric[] = [
  // 90+ out of a 0–100 PageSpeed scale — direct, no interpretation.
  { value: "90+", label: "Performance no PageSpeed", gauge: 0.9 },
  // <2s on a 0–5s "slow → fast" arc, inverted so a low time reads high: (5-2)/5.
  { value: "<2s", label: "Tempo de carregamento", gauge: 0.6 },
  // 7 days on a 1–14 day typical freelance delivery range: 7/14.
  { value: "7 dias", label: "Prazo médio de entrega", gauge: 0.5 },
];
