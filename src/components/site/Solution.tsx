import biocharMacro from "@/assets/biochar-macro.jpg";
import riceStraw from "@/assets/rice-straw.jpg";

const flow = [
  "Rice Straw + Orchard Pruning",
  "Controlled Biochar Production",
  "Biochar + Cow Manure + Natural Fortifiers",
  "B3 — Bhoomi Bio Booster",
  "Free Distribution to Farmers",
  "Increased Soil Organic Carbon",
];

export function Solution() {
  return (
    <section id="solution" className="relative py-20 md:py-28 bg-secondary">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow">The Solution</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              B3 turns agricultural waste into
              <span className="italic" style={{ color: "var(--leaf)" }}> soil regeneration.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-foreground/75 leading-relaxed text-pretty">
              <span className="font-semibold text-foreground">B3 — Bhoomi Bio Booster</span> is a
              biochar-enriched organic soil conditioner. It converts crop residues such as rice
              straw and orchard pruning into stable biochar, then blends it with organic matter
              and natural fortifiers. Instead of burning biomass and losing soil carbon, the
              process returns stable carbon back to the land.
            </p>
          </div>
        </div>

        {/* Photo row */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <figure className="relative aspect-[5/3] rounded-2xl overflow-hidden">
            <img
              src={"https://iili.io/f51ybef.jpg"}
              alt="Golden rice straw rows in an Indian field at dusk"
              loading="lazy"
              width={1280}
              height={800}
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 bg-bone/95 px-3 py-1.5 rounded-full text-xs font-medium">
              Input · Crop residue
            </figcaption>
          </figure>
          <figure className="relative aspect-[5/3] rounded-2xl overflow-hidden">
            <img
              src={"https://iili.io/qcZWAv9.jpg"}
              alt="Macro photograph of porous black biochar granules"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
            <figcaption
              className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ background: "var(--leaf-bright)", color: "oklch(0.18 0.02 145)" }}
            >
              Output · Stable carbon
            </figcaption>
          </figure>
        </div>

        {/* Process flow */}
        <div className="card-soft p-6 md:p-8">
          <div className="eyebrow mb-5">The B3 Process</div>
          <ol className="grid md:grid-cols-6 gap-4">
            {flow.map((step, i) => (
              <li key={i} className="relative">
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-base md:text-[17px] leading-snug">
                  {step}
                </div>
                {i < flow.length - 1 && (
                  <div
                    className="hidden md:block absolute top-7 -right-2 text-foreground/30"
                    aria-hidden
                  >
                    →
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div
          className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-5 p-6 md:p-8 rounded-2xl text-bone"
          style={{ background: "var(--charcoal)", color: "var(--bone)" }}
        >
          <div
            className="font-display text-xl md:text-2xl flex-1"
            style={{ color: "var(--bone)" }}
          >
            B3 is not just fertiliser. It is a soil-rebuilding intervention.
          </div>
          <a
            href="#donate"
            className="btn-primary"
            style={{ background: "var(--leaf-bright)", color: "oklch(0.18 0.02 145)", borderColor: "var(--leaf-bright)" }}
          >
            Donate B3 →
          </a>
        </div>
      </div>
    </section>
  );
}
