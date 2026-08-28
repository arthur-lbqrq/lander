type BrandMarkProps = {
  className?: string;
};

/**
 * Símbolo oficial da marca (Kit de Identidade v1.0): janela quadrada com
 * barra superior preenchida e uma seta pousando no centro — a leitura
 * literal de "landing". Geometria fixa (rx 14, traço 5 em base 60) —
 * não redesenhar; só escalar via className. Usado no nav, no rodapé e,
 * como arquivo estático equivalente, no favicon/ícones gerados.
 */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="-3 -3 66 66"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="0"
        y="0"
        width="60"
        height="60"
        rx="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      />
      <rect x="0" y="0" width="60" height="16" rx="14" fill="currentColor" />
      <path
        d="M30 26L30 48M30 48L20 38M30 48L40 38"
        stroke="#2D5CFF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
