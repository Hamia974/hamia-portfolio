export default function BackgroundAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="bg-grid-fade absolute inset-0" />

      <div className="ambient-glow ambient-glow-a" style={{ top: "6%", left: "-8%" }} />
      <div className="ambient-glow ambient-glow-b" style={{ top: "44%", right: "-10%" }} />
      <div
        className="ambient-glow ambient-glow-a"
        style={{ top: "82%", left: "-6%", animationDelay: "-24s" }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flowFadeA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="18%" stopColor="var(--accent)" stopOpacity="0.7" />
            <stop offset="82%" stopColor="var(--accent)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M 10 0 C 18 14, 3 28, 13 44 S 24 64, 15 80 S 5 94, 16 100"
          fill="none"
          stroke="url(#flowFadeA)"
          strokeWidth="0.13"
          strokeDasharray="0.6 2.6"
          vectorEffect="non-scaling-stroke"
          className="flow-line"
        />
        <path
          d="M 88 0 C 80 16, 95 30, 85 48 S 74 66, 90 80 S 97 92, 84 100"
          fill="none"
          stroke="url(#flowFadeA)"
          strokeWidth="0.12"
          strokeDasharray="0.5 3"
          vectorEffect="non-scaling-stroke"
          className="flow-line"
          style={{ animationDuration: "40s", animationDirection: "reverse" }}
        />
      </svg>

      <span className="flow-node" style={{ top: "44%", left: "13%", animationDelay: "-1s" }} />
      <span className="flow-node" style={{ top: "80%", left: "15%", animationDelay: "-3.5s" }} />
      <span className="flow-node" style={{ top: "48%", left: "85%", animationDelay: "-2s" }} />
      <span className="flow-node" style={{ top: "80%", left: "90%", animationDelay: "-5s" }} />
      <span className="flow-node" style={{ top: "30%", left: "52%", animationDelay: "-4s" }} />
      <span className="flow-node" style={{ top: "68%", left: "48%", animationDelay: "-6s" }} />
    </div>
  );
}
