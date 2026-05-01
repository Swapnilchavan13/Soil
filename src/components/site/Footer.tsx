export function SiteFooter() {
  const groups = [
    {
      title: "Movement",
      items: ["About B3", "How It Works", "Science of Biochar", "Impact Dashboard", "Farmer Stories"],
    },
    {
      title: "Action",
      items: ["Donate", "Gift a Donation", "Corporate CSR", "Start a Soil Circle", "Sponsor a Village"],
    },
    {
      title: "Trust",
      items: ["FAQ", "Traceability", "80G / CSR Documents", "Privacy Policy", "Terms", "Refund Policy"],
    },
  ];

  return (
    <footer
      id="contact"
      className="text-bone"
      style={{ background: "var(--soil-deep)", color: "var(--bone)" }}
    >
      <div className="container-editorial pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="grid h-10 w-10 place-items-center rounded-full font-display"
                style={{ background: "var(--leaf-bright)", color: "oklch(0.18 0.02 145)" }}
              >
                B3
              </span>
              <div>
                <div className="font-display text-lg">Bhoomi Bio Booster</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-bone/60">
                  A National Soil Movement
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-bone/70 leading-relaxed">
              Donate biochar-enriched soil conditioner to a real farmer.
              Traceable. Photo-verified. Geo-tagged. This is ESG done at ground level.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Traceable", "Farmer Verified", "Geo-tagged", "Photo Documented"].map((b) => (
                <span
                  key={b}
                  className="px-3 py-1 text-[11px] rounded-full border border-bone/20 text-bone/80"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title} className="lg:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.18em] text-bone/60 mb-4">
                {g.title}
              </div>
              <ul className="space-y-2.5 text-sm text-bone/85">
                {g.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-bone transition">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <div className="text-[10px] uppercase tracking-[0.18em] text-bone/60 mb-4">Contact</div>
            <ul className="space-y-2.5 text-sm text-bone/85">
              <li><a href="mailto:hello@b3.earth" className="hover:text-bone">hello@b3.earth</a></li>
              <li><a href="#csr" className="hover:text-bone">CSR Enquiries</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline opacity-30" />

        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-bone/60">
          <div>© {new Date().getFullYear()} B3 — Bhoomi Bio Booster. Restore Indian soil.</div>
          <div className="italic font-display text-sm" style={{ color: "var(--bone)" }}>
            Don't just offset. Restore.
          </div>
        </div>
      </div>
    </footer>
  );
}
