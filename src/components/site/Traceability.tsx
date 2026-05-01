import farmer from "@/assets/farmer-portrait.jpg";

export function Traceability() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow">Traceability</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
              You will know where your
              <span className="italic" style={{ color: "var(--soil)" }}> B3 went.</span>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed text-pretty">
              Every donor receives a simple traceability record. Once your donated B3 is assigned
              and applied, you receive a digital certificate with the geo-pin of the farmland,
              field photograph, crop type, and batch ID.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Donor name & quantity",
                "Farmer, village, district",
                "Crop type & date of application",
                "Geo-pin + field photograph",
                "Batch ID for verification",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3 text-sm">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--leaf-bright)" }}
                  />
                  {x}
                </li>
              ))}
            </ul>
            <a href="#donate" className="btn-primary mt-9">Donate and receive your field proof →</a>
          </div>

          {/* Mock impact certificate */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="card-soft overflow-hidden">
                <div
                  className="px-6 py-4 flex items-center justify-between text-bone"
                  style={{ background: "var(--charcoal)", color: "var(--bone)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="grid h-7 w-7 place-items-center rounded-full font-display text-xs"
                      style={{ background: "var(--leaf-bright)", color: "oklch(0.18 0.02 145)" }}
                    >
                      B3
                    </span>
                    <div className="leading-tight">
                      <div className="text-sm font-medium">Impact Certificate</div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-bone/60">
                        Batch · B3-24-KRN-0418
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-bone/70">Verified ✓</div>
                </div>

                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 relative aspect-[4/5] md:aspect-auto">
                    <img
                      src={farmer}
                      alt="Indian farmer portrait in his rice field"
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-6 md:p-8">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                      Donor
                    </div>
                    <div className="font-display text-2xl">Priya M.</div>
                    <div className="text-sm text-foreground/70">Donated 5 kg of B3</div>

                    <div className="hairline my-5" />

                    <div className="grid grid-cols-2 gap-5 text-sm">
                      <Field label="Farmer" value="Ramesh Kumar" />
                      <Field label="Village" value="Nigdhu, Karnal" />
                      <Field label="Crop" value="Basmati Rice" />
                      <Field label="Applied On" value="18 Apr 2025" />
                      <Field label="Geo-Pin" value="29.6857° N, 76.9905° E" />
                      <Field label="Field ID" value="04-218" />
                    </div>

                    <div className="mt-6 p-4 rounded-xl bg-secondary text-xs text-foreground/70 leading-relaxed">
                      Your B3 was applied to rebuild soil organic carbon and reduce
                      fertiliser dependence on this 1.2-acre paddy field.
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating geo-pin */}
              <div
                className="absolute -bottom-5 -left-3 card-soft px-4 py-3 hidden md:flex items-center gap-3"
              >
                <span
                  aria-hidden
                  className="grid h-8 w-8 place-items-center rounded-full"
                  style={{ background: "var(--leaf-bright)", color: "oklch(0.18 0.02 145)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div className="leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Geo-tagged</div>
                  <div className="text-sm font-medium">Karnal, Haryana</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}
