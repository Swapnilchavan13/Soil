import heroImg from "@/assets/hero-split.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-editorial pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-foreground/40" />
              <span className="eyebrow">A Citizen Movement for Indian Soil</span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] tracking-tight text-balance">
              Donate B3.<br />
              <span className="italic text-soil-deep" style={{ color: "var(--soil-deep)" }}>
                Restore India's soil.
              </span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-xl text-pretty">
              For <span className="font-semibold text-foreground">₹50</span>, you can donate{" "}
              <span className="font-semibold text-foreground">1 kg of biochar-enriched soil conditioner</span>{" "}
              to a real farmer — and help rebuild soil carbon, reduce fertiliser dependence,
              prevent stubble burning, and strengthen Indian agriculture.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#donate" className="btn-primary">Donate Now →</a>
              <a href="#how" className="btn-secondary">See How It Works</a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <Trust label="Geo-tagged" />
              <Trust label="Photo-verified" />
              <Trust label="Farmer-delivered" />
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-6 relative reveal" style={{ animationDelay: "0.15s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-deep)] aspect-[16/10]">
              <img
                src={"https://iili.io/fe5y8CB.jpg"}
                alt="Split scene: degraded burnt stubble field on the left, restored soil with biochar being applied by a farmer on the right"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              {/* Geo-pin overlay */}
              <div className="absolute right-5 bottom-5 bg-bone/95 backdrop-blur rounded-xl px-4 py-3 shadow-[var(--shadow-card)] flex items-center gap-3">
                <div
                  aria-hidden
                  className="grid h-9 w-9 place-items-center rounded-full"
                  style={{ background: "var(--leaf-bright)", color: "oklch(0.18 0.02 145)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Field 04-218</div>
                  <div className="text-sm font-medium text-charcoal" style={{ color: "var(--charcoal)" }}>
                    Bandhavgarh,  Madhya Pradesh
                  </div>
                </div>
              </div>
            </div>

            {/* Stat card */}
            <div className="absolute -left-2 -bottom-6 hidden md:block">
              <div className="card-soft px-5 py-4 max-w-[230px]">
                <div className="font-display text-3xl text-charcoal" style={{ color: "var(--charcoal)" }}>
                  1 kg = ₹50
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Every kg donated is traceable to a real field.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inline donation selector */}
        <div id="donate-quick" className="mt-16">
          <DonationStrip />
        </div>
      </div>
    </section>
  );
}

function Trust({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--leaf-bright)" }}
      />
      {label}
    </span>
  );
}

function DonationStrip() {
  const tiers = [
    { kg: "1 kg", price: "₹50", note: "Begin restoration" },
    { kg: "5 kg", price: "₹250", note: "Larger application" },
    { kg: "10 kg", price: "₹500", note: "Meaningful impact" },
    { kg: "Custom", price: "Any amount", note: "Choose your kg" },
  ];

  return (
    <div className="card-soft p-2 md:p-3 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
      {tiers.map((t, i) => (
        <a
          key={i}
          href="#donate"
          className="group relative flex flex-col items-start gap-1 rounded-xl px-4 py-4 md:py-5 transition-all hover:bg-secondary"
        >
          <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{t.kg}</div>
          <div className="font-display text-2xl md:text-3xl">{t.price}</div>
          <div className="text-xs text-muted-foreground">{t.note}</div>
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition"
            aria-hidden
          >
            →
          </span>
        </a>
      ))}
    </div>
  );
}
