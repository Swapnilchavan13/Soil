import { useState } from "react";

const faqs = [
  { q: "What is B3?", a: "B3 — Bhoomi Bio Booster — is a biochar-enriched organic soil conditioner made from rice straw and orchard pruning, blended with cow manure and natural fortifiers." },
  { q: "How is B3 made?", a: "Crop residue is converted into stable biochar through controlled pyrolysis, then blended with organic matter and natural fortifiers, and delivered to farmers." },
  { q: "How does my ₹50 help?", a: "₹50 funds 1 kg of B3 — physically delivered and applied to a real farmer's field. You receive geo-pin, photo, and crop details." },
  { q: "Will I really get proof?", a: "Yes. Once your B3 is applied, you receive a digital impact certificate with the farmer, village, district, geo-pin, batch ID, crop, and field photograph." },
  { q: "When will I get the geo-pin and photo?", a: "Most donations are deployed within 30–60 days, depending on the cropping season in the assigned region." },
  { q: "Can I sponsor a whole acre?", a: "Yes. Custom and corporate sponsorships are available — including per-village and per-district pilots." },
  { q: "Is this CSR eligible for companies?", a: "B3 partnerships are designed to be CSR-aligned, with traceable, farmer-level reporting suitable for ESG disclosures." },
  { q: "How do you verify delivery?", a: "Every batch is tracked from production to field application with geo-tagging and photo documentation. Audit-ready logs are maintained." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28">
      <div className="container-editorial grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
            Questions, answered.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Still curious? Reach us at{" "}
            <a href="mailto:hello@b3.earth" className="underline underline-offset-4">hello@b3.earth</a>.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="border-y border-border divide-y divide-border">
            {faqs.map((f, i) => (
              <li key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="font-display text-lg md:text-xl pr-4">{f.q}</span>
                  <span
                    className={`mt-1 grid h-7 w-7 place-items-center rounded-full border border-border transition-transform ${
                      open === i ? "rotate-45 bg-foreground text-background" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all overflow-hidden"
                  style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-12 text-foreground/70 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
