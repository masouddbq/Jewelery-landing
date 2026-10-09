import { useId } from 'react';

function useMetalId() {
  return useId().replace(/:/g, '');
}

function MetalDefs({ id }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fbfbfa" />
        <stop offset="38%" stopColor="#bdbdb8" />
        <stop offset="62%" stopColor="#4a4a47" />
        <stop offset="100%" stopColor="#f4f4f2" />
      </linearGradient>
      <linearGradient id={`${id}d`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6a6a66" />
        <stop offset="100%" stopColor="#1c1c1b" />
      </linearGradient>
    </defs>
  );
}

function frameFor(view) {
  if (view === 'top') return { rotate: 72, sy: 0.4 };
  if (view === 'side') return { rotate: -2, sy: 0.96 };
  return { rotate: -16, sy: 0.74 };
}

export function FacetRing({ className, view = 'three' }) {
  const id = useMetalId();
  const { rotate, sy } = frameFor(view);
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <MetalDefs id={id} />
      <g transform={`translate(100 116) rotate(${rotate}) scale(1 ${sy}) translate(-100 -100)`}>
        <path
          d="M100 34 L146 54 L166 100 L146 146 L100 166 L54 146 L34 100 L54 54 Z"
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth="18"
          strokeLinejoin="round"
        />
        <path d="M76 48 h48 l10 22 l-10 22 h-48 l-10 -22 z" fill={`url(#${id})`} />
      </g>
    </svg>
  );
}

export function BeadBracelet({ className, view = 'three' }) {
  const id = useMetalId();
  const { rotate, sy } = frameFor(view);
  const beads = Array.from({ length: 16 }, (_, index) => {
    const angle = (index / 16) * Math.PI * 2;
    return [100 + Math.cos(angle) * 58, 100 + Math.sin(angle) * 58, index % 3 === 0 ? 11 : 8];
  });
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <MetalDefs id={id} />
      <g transform={`translate(100 112) rotate(${rotate}) scale(1 ${sy}) translate(-100 -100)`}>
        {beads.map(([x, y, r], index) => (
          <circle key={index} cx={x} cy={y} r={r} fill={index % 2 ? `url(#${id})` : `url(#${id}d)`} />
        ))}
      </g>
    </svg>
  );
}

export function ThinRing({ className, view = 'three' }) {
  const id = useMetalId();
  const { rotate, sy } = frameFor(view);
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <MetalDefs id={id} />
      <g transform={`translate(100 118) rotate(${rotate}) scale(1 ${sy}) translate(-100 -100)`}>
        <ellipse cx="100" cy="100" rx="62" ry="62" fill="none" stroke={`url(#${id})`} strokeWidth="7" />
        <ellipse cx="100" cy="100" rx="54" ry="54" fill="none" stroke="#fafbfb" strokeWidth="1" opacity="0.7" />
      </g>
    </svg>
  );
}

export function Signet({ className, view = 'three' }) {
  const id = useMetalId();
  const { rotate, sy } = frameFor(view);
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <MetalDefs id={id} />
      <g transform={`translate(100 116) rotate(${rotate}) scale(1 ${sy}) translate(-100 -100)`}>
        <ellipse cx="100" cy="118" rx="58" ry="46" fill="none" stroke={`url(#${id})`} strokeWidth="20" />
        <rect x="68" y="42" width="64" height="54" rx="8" fill={`url(#${id})`} />
        <rect x="78" y="52" width="44" height="34" rx="4" fill={`url(#${id}d)`} opacity="0.35" />
      </g>
    </svg>
  );
}

export function BrokenBand({ className, view = 'three' }) {
  const id = useMetalId();
  const { rotate, sy } = frameFor(view);
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <MetalDefs id={id} />
      <g transform={`translate(100 116) rotate(${rotate}) scale(1 ${sy}) translate(-100 -100)`}>
        <path
          d="M100 40 a60 60 0 1 1 -42 102"
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth="14"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export function DoubleBand({ className, view = 'three' }) {
  const id = useMetalId();
  const { rotate, sy } = frameFor(view);
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <MetalDefs id={id} />
      <g transform={`translate(100 116) rotate(${rotate}) scale(1 ${sy}) translate(-100 -100)`}>
        <ellipse cx="100" cy="92" rx="60" ry="48" fill="none" stroke={`url(#${id})`} strokeWidth="9" />
        <ellipse cx="100" cy="112" rx="60" ry="48" fill="none" stroke={`url(#${id}d)`} strokeWidth="9" />
      </g>
    </svg>
  );
}

export function SmoothBand({ className, view = 'three' }) {
  const id = useMetalId();
  const { rotate, sy } = frameFor(view);
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <MetalDefs id={id} />
      <g transform={`translate(100 118) rotate(${rotate}) scale(1 ${sy}) translate(-100 -100)`}>
        <ellipse cx="100" cy="100" rx="64" ry="50" fill="none" stroke={`url(#${id})`} strokeWidth="16" />
        <ellipse cx="100" cy="96" rx="58" ry="44" fill="none" stroke="#fff" strokeWidth="2" opacity="0.55" />
      </g>
    </svg>
  );
}

export function ChainRing({ className, view = 'three' }) {
  const id = useMetalId();
  const { rotate, sy } = frameFor(view);
  const links = Array.from({ length: 12 }, (_, index) => {
    const angle = (index / 12) * Math.PI * 2;
    return {
      x: 100 + Math.cos(angle) * 56,
      y: 100 + Math.sin(angle) * 56,
      r: (angle * 180) / Math.PI,
    };
  });
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <MetalDefs id={id} />
      <g transform={`translate(100 114) rotate(${rotate}) scale(1 ${sy}) translate(-100 -100)`}>
        {links.map((link, index) => (
          <rect
            key={index}
            x={link.x - 11}
            y={link.y - 6}
            width="22"
            height="12"
            rx="3"
            transform={`rotate(${link.r} ${link.x} ${link.y})`}
            fill={index % 2 ? `url(#${id})` : `url(#${id}d)`}
          />
        ))}
      </g>
    </svg>
  );
}

export function RawStone({ className }) {
  const id = useMetalId();
  return (
    <svg viewBox="0 0 220 200" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8d8d89" />
          <stop offset="100%" stopColor="#2b2b29" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        fillRule="evenodd"
        d="M48 78 L78 36 L132 28 L176 58 L168 112 L124 164 L62 150 L30 108 Z M110 86 a18 16 0 1 0 0.2 0 Z"
      />
    </svg>
  );
}

export function Rock({ className }) {
  const id = useMetalId();
  return (
    <svg viewBox="0 0 360 180" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4e4e4b" />
          <stop offset="45%" stopColor="#1a1a19" />
          <stop offset="100%" stopColor="#0e0e0e" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M18 128 C48 92 78 104 108 78 C136 54 168 46 206 70 C236 88 258 74 292 96 C324 116 346 108 352 136 C330 162 250 176 170 174 C86 172 28 158 18 128 Z"
      />
    </svg>
  );
}

export function LogoMark({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
    </svg>
  );
}

const kinds = {
  facet: FacetRing,
  beads: BeadBracelet,
  thin: ThinRing,
  signet: Signet,
  broken: BrokenBand,
  double: DoubleBand,
  smooth: SmoothBand,
  chain: ChainRing,
};

export function Piece({ kind, view = 'three', className }) {
  const Shape = kinds[kind] || ThinRing;
  return <Shape view={view} className={className} />;
}
