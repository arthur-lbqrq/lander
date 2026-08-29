type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

type SwitchIconProps = IconProps & {
  /** Plays the one-time power-on pulse (hero's primary switch only). */
  animated?: boolean;
};

export function SwitchIcon({ className, animated }: SwitchIconProps) {
  return (
    <svg viewBox="0 0 24 12" className={className} aria-hidden="true" focusable="false">
      <rect
        x="0.75"
        y="0.75"
        width="22.5"
        height="10.5"
        rx="5.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="17"
        cy="6"
        r="3.25"
        fill="#2D5CFF"
        className="origin-[center] transition-transform duration-150 group-hover:scale-110 group-active:-translate-x-1 group-active:scale-90"
        style={
          animated
            ? { animation: "switch-pulse 500ms cubic-bezier(0.16, 1, 0.3, 1) 900ms both" }
            : undefined
        }
      />
    </svg>
  );
}

export function MessageIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}
