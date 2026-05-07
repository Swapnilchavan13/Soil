

const stories = [
  {
    img: "https://iili.io/BZTMc7t.jpg",
    name: "Ramesh Kumar",
    place: "Bandhavgarh, Madhya Pradesh",
    crop: "Basmati Rice · 1.2 acres",
    quote:
      "The first season after B3, the soil felt different in my hands. Softer. It held water longer.",
    note: "Application designed to improve soil carbon and reduce excess fertiliser dependence.",
  },
  {
    img: "https://iili.io/q5D0eff.jpg",
    name: "Anita Devi",
    place: "Rajgarh, Himachal Pradesh",
    crop: "Wheat & Paddy · 2.4 acres",
    quote:
      "We used to burn the straw because there was no choice. Now it returns to our field as black soil.",
    note: "Crop residue from her own field is being processed back into B3 for the region.",
  },
  {
    img: "https://iili.io/q5tUHEQ.jpg",
    name: "Prakash N.",
    place: "Pilibhit, Madhya Pradesh",
    crop: "Sugarcane · 3.0 acres",
    quote:
      "The roots reach deeper now. That is something I can see — not just measure on paper.",
    note: "Long-term tracking is on root depth, water retention, and reduced input cost.",
  },
];

export function FarmerStories() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container-editorial">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">Farmer Stories</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
            Behind every donation is
            <span className="italic" style={{ color: "var(--soil)" }}> a farmer and a field.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {stories.map((s) => (
            <article key={s.name} className="card-soft overflow-hidden flex flex-col">
              <div className="relative aspect-[4/5]">
                <img
                  src={s.img}
                  alt={`${s.name}, ${s.crop}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.place}
                </div>
                <div className="font-display text-2xl mt-1">{s.name}</div>
                <div className="text-sm text-foreground/70">{s.crop}</div>
                <blockquote
                  className="mt-5 font-display text-lg leading-snug border-l-2 pl-4"
                  style={{ borderColor: "var(--leaf-bright)" }}
                >
                  "{s.quote}"
                </blockquote>
                <p className="mt-5 text-xs text-muted-foreground leading-relaxed">{s.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
