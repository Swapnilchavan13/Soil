import macro from "@/assets/biochar-macro.jpg";

const features = [
  {
    t: "High Stable Carbon Content",
    b: "Biochar component provides long-term carbon stability and soil structure improvement.",
  },
  {
    t: "Enhanced Water Retention",
    b: "Improves soil moisture holding capacity, helping crops withstand heat and irrigation stress.",
  },
  {
    t: "Nutrient Locking Capacity",
    b: "Improves cation exchange capacity (CEC), reducing nutrient loss and increasing fertiliser efficiency.",
  },
  {
    t: "Compatible With Existing Fertiliser",
    b: "Can be used alongside urea and other inputs, improving their effectiveness.",
  },
  {
    t: "Reduces Dependence on Chemical Inputs",
    b: "Over time, helps reduce excessive fertiliser usage by improving soil efficiency.",
  },
  {
    t: "Microbial Activity Support",
    b: "Provides structure for beneficial soil microbiology to thrive.",
  },
];

const composition = [
  { p: "Organic Carbon", r: "30–50%", b: "Builds soil carbon" },
  { p: "Moisture", r: "10–20%", b: "Stable handling" },
  { p: "pH", r: "Neutral to mildly alkaline", b: "Soil compatibility" },
  { p: "CEC", r: "High", b: "Nutrient retention" },
  { p: "Porosity", r: "High", b: "Water + air flow" },
  { p: "NPK", r: "Low–moderate", b: "Supplemental nutrition" },
];

const quality = [
  "Batch-wise production tracking",
  "Lab-tested for consistency",
  "Controlled biochar production process",
  "Free from harmful contaminants",
  "Designed for Indian soil conditions",
];

export function WhyB3() {
  return (
    <section id="why-b3" className="py-20 md:py-28" style={{ background: "var(--bone-2)" }}>
      <div className="container-editorial">
        {/* Heading */}
        <div className="max-w-4xl">
          <span className="eyebrow">Product Credibility</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
            Why B3 is a high-quality
            <span className="italic" style={{ color: "var(--leaf)" }}> soil solution.</span>
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed text-pretty md:text-lg max-w-3xl">
            Scientifically designed, rigorously processed, and built for long-term soil
            restoration.
          </p>
          <p className="mt-6 text-foreground/70 leading-relaxed text-pretty max-w-3xl">
            B3 is a biochar-enriched soil conditioner designed to improve soil carbon, enhance
            nutrient efficiency, and restore long-term soil health. It is produced through
            controlled processes and formulated to deliver consistent quality at scale.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {features.map((f, i) => (
            <div key={f.t} className="bg-card p-7 md:p-8">
              <div className="font-display text-sm mb-4" style={{ color: "var(--leaf-bright)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl md:text-2xl tracking-tight mb-3 leading-tight">
                {f.t}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{f.b}</p>
            </div>
          ))}
        </div>

        {/* Composition table + visual */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <figure className="rounded-2xl overflow-hidden border border-border">
              <img
                src={macro}
                alt="Macro close-up of biochar granules and soil texture"
                loading="lazy"
                className="w-full h-auto"
              />
            </figure>
            <p className="mt-5 text-sm text-foreground/60 italic">
              B3 is not a short-term fertiliser input. It is a long-term soil restoration tool.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="card-soft overflow-hidden">
              <div className="px-6 py-5 border-b border-border flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl tracking-tight">Typical Composition of B3</h3>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Indicative
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      <th className="px-6 py-4 font-medium">Parameter</th>
                      <th className="px-6 py-4 font-medium">Typical Range</th>
                      <th className="px-6 py-4 font-medium">Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {composition.map((c) => (
                      <tr key={c.p} className="border-t border-border">
                        <td className="px-6 py-4 font-medium">{c.p}</td>
                        <td className="px-6 py-4 text-foreground/75">{c.r}</td>
                        <td className="px-6 py-4 text-foreground/70">{c.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Quality strip */}
        <div className="mt-12 rounded-2xl border border-border p-7 md:p-8" style={{ background: "var(--card)" }}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="eyebrow">Quality Assured</div>
              <h3 className="mt-2 font-display text-2xl md:text-3xl tracking-tight">
                Engineered for consistency at scale.
              </h3>
            </div>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {quality.map((q) => (
              <div
                key={q}
                className="flex gap-3 items-start text-sm text-foreground/80 border-t border-border pt-4"
              >
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center h-5 w-5 rounded-full text-[11px] shrink-0 mt-0.5"
                  style={{ background: "var(--leaf-bright)", color: "oklch(0.18 0.02 145)" }}
                >
                  ✓
                </span>
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
