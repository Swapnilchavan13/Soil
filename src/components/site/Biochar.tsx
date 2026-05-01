import soilCross from "@/assets/soil-cross-section.jpg";

const tiles = [
  { t: "Builds Soil Carbon", b: "Biochar contains stable carbon that can remain in soil for centuries — rebuilding depleted Soil Organic Carbon." },
  { t: "Holds Water", b: "Its porous structure improves water retention, helping crops withstand heat and moisture stress." },
  { t: "Locks Nutrients", b: "Biochar acts like a nutrient sponge, reducing leaching and helping fertilisers work more efficiently." },
  { t: "Supports Microbes", b: "It creates habitat for beneficial soil microbes, improving soil biology over time." },
  { t: "Reduces Emissions", b: "Converting residue into biochar — instead of burning it — cuts pollution and stores carbon in soil." },
];

export function Biochar() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <span className="eyebrow">The Science</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
              Why biochar-enriched fertiliser
              <span className="italic" style={{ color: "var(--leaf)" }}> works.</span>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed text-pretty">
              Biochar is stable, porous carbon. When mixed into the soil, its structure changes
              the soil itself — not just for a season, but for generations.
            </p>

            <figure className="mt-8 rounded-2xl overflow-hidden border border-border">
              <img
                src={soilCross}
                alt="Cross-section illustration of soil showing biochar layer, roots, and water droplets"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-auto"
              />
            </figure>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {tiles.map((tile, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[auto_1fr] gap-6 py-7 group hover:bg-secondary/50 transition-colors px-2 -mx-2 rounded-lg"
                >
                  <div
                    className="font-display text-2xl pt-1 w-10"
                    style={{ color: "var(--leaf-bright)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-[28px] tracking-tight mb-2">
                      {tile.t}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">{tile.b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
