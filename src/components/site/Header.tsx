import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-editorial flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full bg-charcoal text-bone font-display text-lg"
            style={{ background: "var(--charcoal)", color: "var(--bone)" }}
          >
            B3
          </span>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold tracking-tight">
              Bhoomi Bio Booster
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              A National Soil Movement
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-foreground/80">
          <a href="#problem" className="hover:text-foreground transition-colors">The Problem</a>
          <a href="#solution" className="hover:text-foreground transition-colors">B3 Solution</a>
          <a href="#how" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#impact" className="hover:text-foreground transition-colors">Impact</a>
          <a href="#csr" className="hover:text-foreground transition-colors">For Companies</a>
        </nav>

        <a href="#donate" className="btn-primary !py-2.5 !px-5 !text-sm">
          Donate B3
        </a>
      </div>
    </header>
  );
}
