import { useState } from "react";

const tiers = [
  { kg: 1, price: 50, label: "Helps begin soil restoration for a farmer", cta: "Donate 1 kg" },
  { kg: 5, price: 250, label: "Supports a larger application share for active farmland", cta: "Donate 5 kg", featured: true },
  { kg: 10, price: 500, label: "A meaningful contribution to rebuilding soil carbon", cta: "Donate 10 kg" },
];

export function DonationCards() {
  const [amount, setAmount] = useState<number | "">(500);
  const kg = typeof amount === "number" ? Math.max(0, Math.floor(amount / 50)) : 0;

  return (
    <section id="donate" className="py-20 md:py-28">
      <div className="container-editorial">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Donate</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              Choose your soil
              <span className="italic" style={{ color: "var(--leaf)" }}> restoration action.</span>
            </h2>
          </div>
          <div className="text-sm text-muted-foreground max-w-xs">
            Your donation is not symbolic. It funds physical soil conditioner distributed to farmers.
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((t) => (
            <article
              key={t.kg}
              className={`relative card-soft p-7 flex flex-col ${
                t.featured ? "ring-1 ring-foreground" : ""
              }`}
            >
              {t.featured && (
                <span
                  className="absolute -top-3 right-6 px-3 py-1 text-[10px] uppercase tracking-[0.18em] rounded-full"
                  style={{ background: "var(--leaf-bright)", color: "oklch(0.18 0.02 145)" }}
                >
                  Most Chosen
                </span>
              )}
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                {t.kg} kg of B3
              </div>
              <div className="font-display text-5xl tracking-tight">
                ₹{t.price}
              </div>
              <p className="mt-4 text-sm text-foreground/70 leading-relaxed flex-1">
                {t.label}
              </p>
              <button className="btn-primary mt-6 w-full">{t.cta}</button>
            </article>
          ))}

          {/* Custom */}
          <article className="card-soft p-7 flex flex-col" style={{ background: "var(--charcoal)", color: "var(--bone)" }}>
            <div className="text-xs uppercase tracking-[0.18em] mb-3" style={{ color: "var(--leaf-bright)" }}>
              Custom Donation
            </div>
            <div className="font-display text-3xl mb-1">Choose any amount</div>
            <div className="text-xs text-bone/60 mb-5">₹50 = 1 kg B3</div>

            <label className="block text-xs uppercase tracking-[0.16em] text-bone/70 mb-2">
              Amount (₹)
            </label>
            <input
              type="number"
              min={50}
              step={50}
              value={amount}
              onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
              className="w-full bg-transparent border-b border-bone/30 focus:border-bone outline-none py-2 font-display text-3xl text-bone placeholder:text-bone/40"
              placeholder="500"
            />

            <div className="mt-5 flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-[0.16em] text-bone/60">You donate</span>
              <span
                className="font-display text-3xl"
                style={{ color: "var(--leaf-bright)" }}
              >
                {kg} kg B3
              </span>
            </div>

            <button
              className="btn-primary mt-6 w-full"
              style={{ background: "var(--leaf-bright)", color: "oklch(0.18 0.02 145)", borderColor: "var(--leaf-bright)" }}
            >
              Choose Amount →
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
