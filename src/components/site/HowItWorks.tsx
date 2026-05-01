const steps = [
  { t: "Choose Your B3 Donation", b: "Donate 1 kg, 5 kg, 10 kg, or a custom amount. Every ₹50 = 1 kg of B3." },
  { t: "B3 Is Allocated to a Farmer", b: "Your contribution is pooled into a batch and assigned to farmers in a target region." },
  { t: "B3 Is Delivered and Applied", b: "The soil conditioner is physically supplied and applied to farmland." },
  { t: "You Receive Proof", b: "Geo-pin of the land, a field photo, crop details, and application confirmation." },
  { t: "You Track the Impact", b: "Long-term updates on acres supported, B3 distributed, and carbon restoration." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-28 bg-secondary">
      <div className="container-editorial">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
            Your small donation becomes
            <span className="italic" style={{ color: "var(--soil)" }}> real fertiliser on a real farm.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-4 md:gap-3">
          {steps.map((s, i) => (
            <div key={i} className="card-soft p-6 flex flex-col h-full relative">
              <div
                className="absolute -top-3 left-6 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] rounded-full"
                style={{ background: "var(--charcoal)", color: "var(--bone)" }}
              >
                Step {i + 1}
              </div>
              <h3 className="font-display text-xl mt-3 mb-3 tracking-tight">{s.t}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#donate" className="btn-primary">Donate B3 Now →</a>
        </div>
      </div>
    </section>
  );
}
