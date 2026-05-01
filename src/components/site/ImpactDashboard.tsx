import aerial from "@/assets/aerial-fields.jpg";

const stats = [
  { v: "48,200", u: "kg", l: "B3 Donated" },
  { v: "1,240", u: "acres", l: "Farmland Supported" },
  { v: "2,860", u: "", l: "Farmers Reached" },
  { v: "184", u: "", l: "Villages Covered" },
  { v: "62.4", u: "tonnes", l: "Biomass Converted" },
  { v: "24.1", u: "tCO₂e", l: "Stable Carbon Returned" },
];

export function ImpactDashboard() {
  return (
    <section id="impact" className="py-20 md:py-28">
      <div className="container-editorial">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">Impact Dashboard</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
            Together, we can track a
            <span className="italic" style={{ color: "var(--leaf)" }}> national soil movement.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card-soft p-2 overflow-hidden">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <img
                src={aerial}
                alt="Aerial view of Indian farmland mosaic"
                loading="lazy"
                width={1600}
                height={900}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, oklch(0.22 0.012 60 / 0.5) 100%)",
                }}
              />
              {/* Map pins */}
              {[
                { top: "28%", left: "22%" },
                { top: "44%", left: "55%" },
                { top: "62%", left: "30%" },
                { top: "36%", left: "78%" },
                { top: "70%", left: "68%" },
                { top: "20%", left: "60%" },
              ].map((p, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="absolute h-3 w-3 rounded-full ring-4 ring-bone/70"
                  style={{
                    top: p.top,
                    left: p.left,
                    background: "var(--leaf-bright)",
                    boxShadow: "0 0 0 8px oklch(0.62 0.14 145 / 0.18)",
                  }}
                />
              ))}
              <div className="absolute bottom-4 left-4 bg-bone/95 rounded-lg px-3 py-2 text-xs">
                <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Live</div>
                <div className="font-medium">B3 Application Sites · India</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 p-4">
              {["State", "District", "Crop", "Batch", "Month"].map((f) => (
                <button
                  key={f}
                  className="px-3 py-1.5 rounded-full border border-border text-xs hover:bg-secondary transition"
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {stats.map((s) => (
              <div key={s.l} className="bg-card p-6">
                <div className="font-display text-3xl md:text-4xl tracking-tight">
                  {s.v}
                  {s.u && (
                    <span className="text-base text-muted-foreground ml-1.5 font-sans font-medium">
                      {s.u}
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
