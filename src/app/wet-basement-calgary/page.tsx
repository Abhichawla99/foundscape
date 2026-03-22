import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wet Basement Calgary | Solutions That Last | Foundscape",
  description:
    "Wet basement in Calgary? We find the source and fix it permanently. Water damage, flooding, damp walls — all fixed. Free inspection. Call (587) 804-9266.",
  keywords: [
    "wet basement Calgary",
    "water in basement Calgary",
    "basement flooding Calgary",
    "leaking basement Calgary",
    "damp basement Calgary",
    "basement water damage Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/wet-basement-calgary" },
};

export default function WetBasementPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60">Home</Link>
            <span>/</span>
            <span className="text-white/60">Wet Basement Calgary</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">Wet Basement Solutions</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Wet Basement?
              <br />
              <span className="text-gradient">We Fix That.</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Water in your basement is never normal. It means something has failed — and it will get worse. We find the source and fix it before it becomes a disaster.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">
                Get Free Inspection
              </Link>
              <a href="tel:+15878049266" className="px-7 py-4 rounded-xl border border-white/10 text-white font-semibold transition-all hover:bg-white/5">
                (587) 804-9266
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-10" style={{ fontFamily: "'Syne', sans-serif" }}>
            Common Causes of Wet Basements in Calgary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { cause: "Foundation Cracks", fix: "Crack injection to seal entry points permanently." },
              { cause: "Poor Grading / Drainage", fix: "Re-grading soil so water flows away from the foundation." },
              { cause: "Failed Window Wells", fix: "Install window well drains to prevent pooling." },
              { cause: "High Water Table", fix: "Interior drainage system + sump pump to manage groundwater." },
              { cause: "Failed Weeping Tile", fix: "Excavate and replace exterior drainage tile." },
              { cause: "Porous Concrete Walls", fix: "Interior vapor barrier and drainage membrane." },
            ].map((item) => (
              <div key={item.cause} className="glass rounded-2xl p-6 flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" fill="none" stroke="#38bdf8" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2C6 2 2 7 2 12s4 10 10 10 10-4.5 10-10S18 2 12 2z" /><path d="M12 8v4l3 3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1.5">{item.cause}</h3>
                  <p className="text-white/50 text-sm">Fix: {item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-950 via-[#0a0a0f] to-blue-950 border-y border-sky-500/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Don&apos;t Ignore a Wet Basement
          </h2>
          <p className="text-white/55 mb-8">Mould grows within 24–48 hours of water exposure. Act fast — book a free inspection today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">
              Book Free Inspection
            </Link>
            <a href="tel:+15878049266" className="px-8 py-4 rounded-xl border border-white/15 text-white font-semibold transition-all hover:bg-white/5">
              Call (587) 804-9266
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
