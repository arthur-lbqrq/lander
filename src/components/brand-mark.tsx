type BrandMarkProps = {
  className?: string;
};

/**
 * Símbolo da marca: uma janela de navegador com um cursor "pousando"
 * dentro dela — a referência visual a "landing". Usado no nav, no
 * rodapé e (como arquivo estático equivalente) no favicon.
 */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="2.5"
        y="4"
        width="19"
        height="16"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <line
        x1="2.5"
        y1="8.4"
        x2="21.5"
        y2="8.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeOpacity="0.5"
      />
      <path
        d="M13 10L19 13.2L15.7 14.35L17.6 18.2L16 19L14.1 15.15L11.9 17Z"
        fill="#2D5CFF"
      />
    </svg>
  );
}
