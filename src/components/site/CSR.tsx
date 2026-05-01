export function CSR() {
  const options = [
    "Sponsor 1,000 acres",
    "Sponsor a village",
    "District-level pilot",
    "Match consumer donations",
    "Employee giving campaign",
    "Customer checkout integration",
    "Brand-funded distribution",
    "ESG reporting dashboard",
  ];
  const proof = ["CSR-aligned", "Traceable", "Farmer-facing", "Climate-linked", "Soil-health linked"];

  return (
    <section
      id="csr"
      className="relative py-20 md:py-28 grain-overlay"
      style={{ background: "var(--charcoal)", color: "var(--bone)" }}
    >
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow" style={{ color: "var(--leaf-bright)" }}>For Companies</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
              Turn CSR into measurable
              <span className="italic" style={{ color: "var(--leaf-bright)" }}> soil restoration.</span>
            </h2>
            <p className="mt-6 text-bone/75 leading-relaxed text-pretty">
              India cannot solve fertiliser dependence by importing more, or stubble burning by
              penalising farmers. The long-term answer begins with rebuilding soil carbon. B3 lets
              corporates participate at scale — with farmer-level proof.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {proof.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1.5 text-xs rounded-full border border-bone/20 text-bone/85"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="btn-primary"
                style={{ background: "var(--leaf-bright)", color: "oklch(0.18 0.02 145)", borderColor: "var(--leaf-bright)" }}
              >
                Partner With Us →
              </a>
              <a
                href="#contact"
                className="btn-secondary"
                style={{ borderColor: "var(--bone)", color: "var(--bone)" }}
              >
                Start a Soil Circle
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-px bg-bone/10 rounded-2xl overflow-hidden">
              {options.map((o, i) => (
                <li
                  key={o}
                  className="p-5 md:p-6 flex items-center gap-4 group hover:bg-bone/5 transition"
                  style={{ background: "var(--soil-deep)" }}
                >
                  <span
                    className="font-display text-sm w-7"
                    style={{ color: "var(--leaf-bright)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-bone/90">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
