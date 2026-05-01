const achieves = [
  "Direct increase in Soil Organic Carbon",
  "Reduction in fertiliser intensity over time",
  "Prevention of crop residue burning",
  "Strengthening of farmer resilience",
  "Contribution to long-term carbon removal",
];

const different = [
  "Not awareness. Direct field intervention.",
  "Not one-time distribution. Soil-building input.",
  "Fully traceable deployment",
  "Measurable environmental outputs",
  "High ESG narrative credibility",
];

const cards = [
  {
    title: "Sponsor Farmland",
    desc: "Support soil restoration across defined acreage.",
    points: [
      "₹18.75L → 1,000 acres",
      "₹93.75L → 5,000 acres",
      "₹1.87Cr → 10,000 acres",
    ],
    cta: "Sponsor Acreage",
  },
  {
    title: "Adopt a District",
    desc: "Fund large-scale deployment across a geography.",
    points: ["Multi-season intervention", "High visibility impact", "Region-wide farmer onboarding"],
    cta: "Adopt a Region",
  },
  {
    title: "Employee Engagement Program",
    desc: "Turn employees into contributors.",
    points: ["₹50 = 1 kg B3", "Company matching option", "Leaderboards + impact tracking"],
    cta: "Launch Employee Campaign",
  },
  {
    title: "Custom CSR Program",
    desc: "Tailored intervention based on your ESG goals.",
    points: ["Soil carbon focus", "Carbon removal alignment", "Farmer livelihood linkage"],
    cta: "Speak to Us",
  },
];

const trustBadges = [
  "80G Eligible",
  "CSR Compliant (Schedule VII)",
  "Geo-tagged deployment",
  "Field-level verification",
  "Impact reporting dashboards",
];

export function CorporateCSR() {
  return (
    <section
      id="corporate-csr"
      className="relative py-20 md:py-28 grain-overlay"
      style={{ background: "var(--charcoal)", color: "var(--bone)" }}
    >
      <div className="container-editorial">
        <div className="max-w-4xl mb-14 md:mb-16">
          <span className="eyebrow" style={{ color: "var(--leaf-bright)" }}>For Corporates</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
            Turn CSR into measurable
            <span className="italic" style={{ color: "var(--leaf-bright)" }}> soil restoration.</span>
          </h2>
          <p className="mt-6 text-bone/75 leading-relaxed text-pretty md:text-lg max-w-3xl">
            Fund large-scale soil regeneration while delivering measurable environmental,
            agricultural, and climate impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — Persuasive copy */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-8">
            <p className="text-bone/80 leading-relaxed text-pretty">
              India's soil crisis, fertiliser dependence, and stubble burning are not isolated
              challenges — they are interconnected systemic risks affecting agriculture, climate,
              and rural stability. CSR capital has the ability to intervene at scale and create
              measurable, long-term impact.
            </p>
            <p className="text-bone/80 leading-relaxed text-pretty">
              ClimeGrove's B3 program enables corporates to directly fund soil restoration by
              providing biochar-enriched fertiliser to farmers, with full traceability and
              reporting.
            </p>

            <div>
              <div className="text-xs uppercase tracking-[0.18em] font-semibold mb-4" style={{ color: "var(--leaf-bright)" }}>
                What your CSR achieves
              </div>
              <ul className="space-y-3">
                {achieves.map((a) => (
                  <li key={a} className="flex gap-3 text-bone/85">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--leaf-bright)" }} />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.18em] font-semibold mb-4" style={{ color: "var(--leaf-bright)" }}>
                Why this is different
              </div>
              <ul className="space-y-3">
                {different.map((d) => (
                  <li key={d} className="flex gap-3 text-bone/85">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--leaf-bright)" }} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — Program cards */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {cards.map((c, i) => (
                <article
                  key={c.title}
                  className="group relative p-7 rounded-2xl border border-bone/15 hover:border-[var(--leaf-bright)] transition-colors flex flex-col"
                  style={{ background: "var(--soil-deep)" }}
                >
                  <div className="font-display text-sm mb-4" style={{ color: "var(--leaf-bright)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl tracking-tight mb-2 leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-bone/70 text-sm leading-relaxed mb-5">{c.desc}</p>
                  <ul className="space-y-2 mb-7 text-sm text-bone/85">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span aria-hidden style={{ color: "var(--leaf-bright)" }}>—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium pb-1 border-b w-fit transition-colors"
                    style={{ color: "var(--leaf-bright)", borderColor: "oklch(0.62 0.14 145 / 0.4)" }}
                  >
                    {c.cta} <span aria-hidden>→</span>
                  </a>
                </article>
              ))}
            </div>

            {/* CSR Trust Strip */}
            <div className="mt-8 p-6 rounded-2xl border border-bone/15" style={{ background: "oklch(0.18 0.012 60)" }}>
              <div className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 text-bone/60">
                CSR Trust & Compliance
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {trustBadges.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-bone/85">
                    <span
                      aria-hidden
                      className="inline-flex items-center justify-center h-5 w-5 rounded-full text-[11px]"
                      style={{ background: "var(--leaf-bright)", color: "oklch(0.18 0.02 145)" }}
                    >
                      ✓
                    </span>
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3 items-center">
              <a
                href="#contact"
                className="btn-primary"
                style={{ background: "var(--leaf-bright)", color: "oklch(0.18 0.02 145)", borderColor: "var(--leaf-bright)" }}
              >
                Start a CSR Partnership →
              </a>
              <a
                href="#contact"
                className="btn-secondary"
                style={{ borderColor: "var(--bone)", color: "var(--bone)" }}
              >
                Request a Proposal
              </a>
              <a
                href="#contact"
                className="text-sm text-bone/70 hover:text-bone underline-offset-4 hover:underline ml-1"
              >
                ↓ Download CSR Deck
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
