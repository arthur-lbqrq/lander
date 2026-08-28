type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Pequeno rótulo com marcador azul. O texto fica em paper/70 (não accent)
 * de propósito: accent (#2D5CFF) sobre o fundo ink só atinge contraste AA
 * em tamanhos grandes de texto — em texto pequeno, o azul vira só o marcador
 * decorativo (não precisa atingir 4.5:1 por não carregar informação sozinho).
 */
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-paper/70 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}
