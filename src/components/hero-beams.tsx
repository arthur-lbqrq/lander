/**
 * Feixes de luz azul do hero — design_handoff_navbar_hero/README.md. Puro
 * CSS (nenhum "use client" necessário): a animação `beam-drift`
 * (globals.css) já respeita `prefers-reduced-motion` via a regra global de
 * congelamento de animação, então não precisa de lógica própria aqui.
 */
export function HeroBeams() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          width: 560,
          height: 900,
          marginLeft: -280,
          background: "linear-gradient(to bottom, rgba(45,92,255,.55), rgba(45,92,255,0) 72%)",
          filter: "blur(80px)",
          transformOrigin: "top center",
          rotate: "-18deg",
          animation: "beam-drift 14s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-25%",
          left: "50%",
          width: 420,
          height: 880,
          marginLeft: -60,
          background: "linear-gradient(to bottom, rgba(45,92,255,.42), rgba(45,92,255,0) 70%)",
          filter: "blur(96px)",
          transformOrigin: "top center",
          rotate: "20deg",
          animation: "beam-drift 18s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -180,
          left: "50%",
          width: 900,
          height: 520,
          marginLeft: -450,
          background: "radial-gradient(ellipse at center, rgba(45,92,255,.30), transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 90% 60% at 50% 0%, transparent 20%, rgba(10,10,10,.72) 78%)",
        }}
      />
    </div>
  );
}
