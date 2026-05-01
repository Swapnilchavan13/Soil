import biocharHands from "@/assets/biochar-hands.jpg";

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden grain-overlay"
      style={{ background: "var(--charcoal)", color: "var(--bone)" }}
    >
      <img
        src={biocharHands}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, oklch(0.22 0.012 60 / 0.7), oklch(0.22 0.012 60 / 0.95))" }}
      />
      <div className="container-editorial relative py-24 md:py-32 text-center">
        <span className="eyebrow" style={{ color: "var(--leaf-bright)" }}>The Final Step</span>
        <h2 className="mt-4 font-display text-4xl md:text-7xl leading-[1.02] tracking-tight text-balance max-w-4xl mx-auto">
          ₹50 can put 1 kg of soil restoration
          <span className="italic" style={{ color: "var(--leaf-bright)" }}> into a farmer's field.</span>
        </h2>
        <p className="mt-6 text-lg text-bone/75 max-w-2xl mx-auto text-pretty">
          This is the simplest way to participate in India's soil recovery.
          Don't just feel concerned. Put carbon back into the soil.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#donate"
            className="btn-primary"
            style={{ background: "var(--leaf-bright)", color: "oklch(0.18 0.02 145)", borderColor: "var(--leaf-bright)" }}
          >
            Donate 1 kg · ₹50
          </a>
          <a href="#donate" className="btn-secondary" style={{ borderColor: "var(--bone)", color: "var(--bone)" }}>
            Donate 5 kg · ₹250
          </a>
          <a href="#donate" className="btn-secondary" style={{ borderColor: "var(--bone)", color: "var(--bone)" }}>
            Donate 10 kg · ₹500
          </a>
          <a href="#csr" className="btn-secondary" style={{ borderColor: "var(--bone)", color: "var(--bone)" }}>
            Start a Corporate Campaign
          </a>
        </div>

        <p
          className="mt-10 font-display italic text-xl md:text-2xl"
          style={{ color: "var(--bone)" }}
        >
          Don't just offset. Restore.
        </p>
      </div>
    </section>
  );
}
