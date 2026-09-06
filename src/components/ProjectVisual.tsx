import type { Visual } from "@/data/projects";

const wrap = "h-full w-full";
const stroke = "stroke-[var(--border-strong)]";
const accentStroke = "stroke-[var(--accent)]";
const accentFill = "fill-[var(--accent)]";

function Vision() {
  const cells = Array.from({ length: 36 });
  return (
    <svg viewBox="0 0 240 200" className={wrap} aria-hidden>
      <g transform="translate(20,20)">
        {cells.map((_, i) => {
          const col = i % 6;
          const row = Math.floor(i / 6);
          const highlighted = i === 14 || i === 15 || i === 21;
          return (
            <rect
              key={i}
              x={col * 24}
              y={row * 24}
              width={20}
              height={20}
              rx={3}
              className={highlighted ? accentFill : "fill-[var(--border)]"}
              opacity={highlighted ? 0.9 : 0.6}
            />
          );
        })}
      </g>
      <line x1="180" y1="70" x2="215" y2="70" className={accentStroke} strokeWidth="1.5" markerEnd="url(#arrow)" />
      <rect x="20" y="150" width="130" height="26" rx="13" className="fill-none stroke-[var(--accent)]" strokeWidth="1.5" />
      <text x="85" y="167" textAnchor="middle" className="fill-[var(--accent)]" style={{ font: "11px var(--font-mono)" }}>
        disease detected
      </text>
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className={accentFill} />
        </marker>
      </defs>
    </svg>
  );
}

function Dashboard() {
  const rows = [0.9, 0.6, 0.75, 0.4, 0.85];
  return (
    <svg viewBox="0 0 240 200" className={wrap} aria-hidden>
      <rect x="16" y="16" width="208" height="168" rx="10" className={`fill-none ${stroke}`} strokeWidth="1.5" />
      <line x1="16" y1="52" x2="224" y2="52" className={stroke} strokeWidth="1" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={36 + i * 18} cy="34" r="4" className="fill-[var(--border-strong)]" />
      ))}
      {rows.map((w, i) => (
        <g key={i} transform={`translate(32, ${72 + i * 22})`}>
          <rect width="8" height="8" rx="2" className={accentFill} opacity={0.8 - i * 0.1} />
          <rect x="18" y="1" width={150 * w} height="6" rx="3" className="fill-[var(--border)]" />
        </g>
      ))}
    </svg>
  );
}

function PipelineML() {
  const stages = ["data", "features", "model", "prediction"];
  return (
    <svg viewBox="0 0 240 200" className={wrap} aria-hidden>
      {stages.map((s, i) => {
        const x = 20 + i * 58;
        return (
          <g key={s} transform={`translate(${x}, 90)`}>
            <rect
              width="44"
              height="34"
              rx="8"
              className={i === 2 ? `${accentFill}` : "fill-none stroke-[var(--border-strong)]"}
              strokeWidth="1.5"
              opacity={i === 2 ? 0.9 : 1}
            />
            {i < stages.length - 1 && (
              <line x1="46" y1="17" x2="58" y2="17" className={accentStroke} strokeWidth="1.5" />
            )}
          </g>
        );
      })}
      <text x="120" y="150" textAnchor="middle" className="fill-[var(--fg-faint)]" style={{ font: "10px var(--font-mono)" }}>
        feature engineering &rarr; ensemble model &rarr; recommendation
      </text>
    </svg>
  );
}

function Queue() {
  return (
    <svg viewBox="0 0 240 200" className={wrap} aria-hidden>
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={30} cy={60 + i * 30} r="8" className="fill-[var(--border-strong)]" />
      ))}
      <rect x="70" y="55" width="60" height="90" rx="8" className="fill-none stroke-[var(--accent)]" strokeWidth="1.5" />
      <text x="100" y="105" textAnchor="middle" className="fill-[var(--accent)]" style={{ font: "10px var(--font-mono)" }}>
        queue
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <line x1="130" y1={70 + i * 25} x2="170" y2={70 + i * 25} className={stroke} strokeWidth="1.5" />
          <circle cx="184" cy={70 + i * 25} r="7" className={accentFill} opacity={0.9 - i * 0.2} />
        </g>
      ))}
    </svg>
  );
}

function Etl() {
  const stages = ["extract", "transform", "load"];
  return (
    <svg viewBox="0 0 240 200" className={wrap} aria-hidden>
      {stages.map((s, i) => (
        <g key={s} transform={`translate(${20 + i * 76}, 80)`}>
          <rect width="56" height="40" rx="8" className="fill-none stroke-[var(--border-strong)]" strokeWidth="1.5" />
          <circle cx="28" cy="20" r="5" className={accentFill} opacity={0.4 + i * 0.3} />
          <text x="28" y="60" textAnchor="middle" className="fill-[var(--fg-faint)]" style={{ font: "10px var(--font-mono)" }}>
            {s}
          </text>
          {i < stages.length - 1 && (
            <line x1="58" y1="20" x2="72" y2="20" className={accentStroke} strokeWidth="1.5" />
          )}
        </g>
      ))}
    </svg>
  );
}

function CloudTopology() {
  const nodes = [
    { x: 60, y: 70, label: "EC2" },
    { x: 150, y: 60, label: "S3" },
    { x: 170, y: 120, label: "RDS" },
    { x: 80, y: 130, label: "IAM" },
  ];
  return (
    <svg viewBox="0 0 240 200" className={wrap} aria-hidden>
      <rect x="30" y="30" width="170" height="130" rx="14" className="fill-none stroke-[var(--border-strong)]" strokeDasharray="4 4" strokeWidth="1.5" />
      {nodes.map((n, i) => (
        <g key={n.label}>
          {nodes.slice(i + 1).map((m) => (
            <line key={m.label} x1={n.x} y1={n.y} x2={m.x} y2={m.y} className={stroke} strokeWidth="1" opacity={0.6} />
          ))}
        </g>
      ))}
      {nodes.map((n) => (
        <g key={n.label} transform={`translate(${n.x}, ${n.y})`}>
          <circle r="14" className={accentFill} opacity={0.15} />
          <circle r="6" className={accentFill} />
          <text y="24" textAnchor="middle" className="fill-[var(--fg-faint)]" style={{ font: "9px var(--font-mono)" }}>
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

const map: Record<Visual, () => JSX.Element> = {
  vision: Vision,
  dashboard: Dashboard,
  "pipeline-ml": PipelineML,
  queue: Queue,
  etl: Etl,
  "cloud-topology": CloudTopology,
};

export default function ProjectVisual({ visual }: { visual?: Visual }) {
  const Comp = (visual && map[visual]) || Etl;
  return (
    <div className="group flex aspect-[6/5] w-full items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-500 ease-signature hover:border-[var(--accent)]/50 hover:shadow-[0_0_0_1px_var(--accent-soft),0_24px_60px_-24px_var(--accent-soft)]">
      <div className="transition-transform duration-500 ease-signature group-hover:scale-[1.03]">
        <Comp />
      </div>
    </div>
  );
}
