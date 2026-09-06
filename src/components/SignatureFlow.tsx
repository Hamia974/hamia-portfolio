const stages = [
  { label: "Data", x: 16, y: 118 },
  { label: "Transform", x: 132, y: 84 },
  { label: "Model", x: 248, y: 50 },
  { label: "Intelligence", x: 366, y: 16 },
];

const pathD = "M16,118 C60,110 90,96 132,84 C176,72 206,60 248,50 C292,40 324,28 366,16";

export default function SignatureFlow({ reduced = false }: { reduced?: boolean }) {
  return (
    <svg
      viewBox="0 0 384 140"
      className="h-auto w-full overflow-visible"
      role="img"
      aria-label="Career identity flow: data becomes transformation, then a model, then intelligence"
    >
      <defs>
        <linearGradient id="signatureFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--fg-faint)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <path
        d={pathD}
        fill="none"
        stroke="url(#signatureFade)"
        strokeWidth="1"
        strokeDasharray="1 4"
        vectorEffect="non-scaling-stroke"
        className={reduced ? undefined : "signature-flow-dash"}
      />

      {!reduced && (
        <circle r="2.6" className="fill-[var(--accent)]" opacity="0.9">
          <animateMotion dur="9s" repeatCount="indefinite" path={pathD} />
          <animate
            attributeName="opacity"
            values="0;0.9;0.9;0"
            keyTimes="0;0.08;0.85;1"
            dur="9s"
            repeatCount="indefinite"
          />
        </circle>
      )}

      {stages.map((s, i) => {
        const isLast = i === stages.length - 1;
        return (
          <g key={s.label} transform={`translate(${s.x}, ${s.y})`}>
            {isLast && (
              <circle
                r="9"
                className={`fill-[var(--accent)] ${reduced ? "" : "signature-node-glow"}`}
                opacity="0.16"
              />
            )}
            <circle
              r={isLast ? 3.5 : 2.5}
              className={isLast ? "fill-[var(--accent)]" : "fill-[var(--fg-faint)]"}
            />
            <text
              x="0"
              y={16}
              textAnchor="middle"
              className={isLast ? "fill-[var(--accent)]" : "fill-[var(--fg-faint)]"}
              style={{ font: "9px var(--font-mono)", letterSpacing: "0.08em" }}
            >
              {s.label.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
