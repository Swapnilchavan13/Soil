export function UrgencyStrip() {
  const items = [
    { stat: "Falling", label: "India's soil organic carbon is declining across major cropping zones." },
    { stat: "Rising", label: "Farmers are using more fertiliser to maintain the same yields." },
    { stat: "Imported", label: "A large share of fertiliser inputs is dependent on global supply." },
    { stat: "Burnt", label: "Crop residue is set on fire instead of being returned to the soil." },
  ];

  return (
    <section
      className="relative grain-overlay text-bone"
      style={{ background: "var(--gradient-soil)", color: "var(--bone)" }}
    >
      <div className="container-editorial py-14 md:py-20">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow" style={{ color: "var(--leaf-bright)" }}>The State of the Soil</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.05] text-balance">
            This is not just a farming issue.
            <span className="italic opacity-80"> It is a national resilience issue.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-px bg-bone/10 rounded-xl overflow-hidden">
          {items.map((it, i) => (
            <div
              key={i}
              className="p-6 md:p-8"
              style={{ background: "var(--soil-deep)" }}
            >
              <div
                className="font-display text-2xl md:text-3xl mb-3"
                style={{ color: "var(--leaf-bright)" }}
              >
                {it.stat}.
              </div>
              <p className="text-sm md:text-base text-bone/80 leading-relaxed">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
