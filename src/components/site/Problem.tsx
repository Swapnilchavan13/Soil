const cards = [
  {
    n: "01",
    title: "Soil Carbon Collapse",
    body: "Healthy soil needs organic carbon to hold water, retain nutrients, support microbial life, and sustain yields. Across large parts of India, soil organic carbon is dangerously low. When carbon falls, land becomes harder, weaker, and more dependent on external inputs.",
  },
  {
    n: "02",
    title: "Fertiliser Dependence",
    body: "As soil weakens, farmers are forced to use more fertiliser to protect yields. But depleted soils cannot retain nutrients efficiently — more fertiliser is lost, more money is spent, and the cycle deepens.",
  },
  {
    n: "03",
    title: "Imports & Subsidy Burden",
    body: "India's fertiliser system is exposed to global price shocks and import dependence. A large subsidy burden keeps fertilisers affordable. Improving soil efficiency reduces long-term pressure on both farmers and the government.",
  },
  {
    n: "04",
    title: "Stubble Burning",
    body: "Rice straw is often treated as waste and burned in the field. This creates severe air pollution, releases greenhouse gases, and destroys biomass that could have been converted into a soil-building resource.",
  },
  {
    n: "05",
    title: "Farmer Income Distress",
    body: "When input costs rise and soil productivity falls, farmers carry the burden. Restoring soil health is one of the most direct ways to reduce input stress and improve long-term farm resilience.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-20 md:py-28">
      <div className="container-editorial">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">The Problem</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
            India's food system is under pressure
            <span className="italic" style={{ color: "var(--soil)" }}> from the ground up.</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-2xl text-pretty">
            Five interconnected pressures are weakening the foundation of Indian agriculture.
            Each one feeds the next. None can be solved without rebuilding the soil itself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {cards.map((c) => (
            <article key={c.n} className="bg-card p-7 md:p-9 flex flex-col">
              <div className="flex items-baseline justify-between mb-5">
                <span
                  className="font-display text-2xl"
                  style={{ color: "var(--leaf-bright)" }}
                >
                  {c.n}
                </span>
                <div className="h-px flex-1 ml-4 bg-border" />
              </div>
              <h3 className="font-display text-2xl md:text-[26px] mb-3 tracking-tight">
                {c.title}
              </h3>
              <p className="text-sm md:text-[15px] text-foreground/70 leading-relaxed">
                {c.body}
              </p>
            </article>
          ))}

          {/* Crisis loop diagram cell */}
          <article
            className="p-7 md:p-9 flex flex-col justify-between text-bone"
            style={{ background: "var(--charcoal)", color: "var(--bone)" }}
          >
            <div>
              <div className="eyebrow mb-4" style={{ color: "var(--leaf-bright)" }}>
                The Crisis Loop
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-bone/85">
                <li>Low soil carbon →</li>
                <li className="pl-4">More fertiliser →</li>
                <li className="pl-8">Higher import & subsidy load →</li>
                <li className="pl-12">Farmer distress →</li>
                <li className="pl-16">Residue burning →</li>
                <li className="pl-20" style={{ color: "var(--leaf-bright)" }}>
                  Climate & pollution impact
                </li>
              </ul>
            </div>
            <div className="text-xs uppercase tracking-[0.16em] text-bone/60 mt-6">
              The cycle compounds — until the soil is restored.
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
