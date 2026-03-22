import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation Repair NW Calgary | Foundscape",
  description:
    "Foundation repair and basement waterproofing in NW Calgary. Serving Tuscany, Edgemont, Hamptons, Bearspaw & all NW neighbourhoods. Call (587) 804-9266.",
  keywords: [
    "foundation repair NW Calgary",
    "NW Calgary foundation repair",
    "basement waterproofing NW Calgary",
    "foundation repair Tuscany Calgary",
    "foundation repair Edgemont Calgary",
    "foundation repair Hamptons Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/calgary-nw-foundation-repair" },
};

const neighbourhoods = ["Tuscany", "Edgemont", "Hamptons", "Scenic Acres", "Bearspaw", "Rocky Ridge", "Royal Oak", "Nolan Hill", "Sherwood", "Kincora", "Evanston", "Sage Hill"];

export default function NWCalgaryPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60">Home</Link><span>/</span>
            <span className="text-white/60">Foundation Repair NW Calgary</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">NW Calgary</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Foundation Repair
              <br /><span className="text-gradient">NW Calgary</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Serving all NW Calgary neighbourhoods — from Tuscany and Edgemont to Bearspaw and beyond. Local foundation repair experts who know NW Calgary soil conditions.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">Free Inspection</Link>
              <a href="tel:+15878049266" className="px-7 py-4 rounded-xl border border-white/10 text-white font-semibold transition-all hover:bg-white/5">(587) 804-9266</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>NW Calgary Neighbourhoods We Serve</h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {neighbourhoods.map(n => (
              <span key={n} className="px-4 py-2 glass rounded-xl text-white/70 text-sm">{n}</span>
            ))}
          </div>
          <h2 className="text-2xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Foundation Issues Common in NW Calgary</h2>
          <div className="text-white/60 space-y-4 text-base leading-relaxed max-w-3xl">
            <p>NW Calgary sits on glacial till and clay-heavy soils that swell and contract dramatically with moisture changes. Homes in Tuscany, Edgemont, and the Hamptons — many built in the 1990s and 2000s — are now hitting the age where foundation movement becomes visible.</p>
            <p>The hilly terrain of NW Calgary also means many homes have uphill soil pressure against foundation walls, accelerating lateral movement and cracking. If you&apos;re in NW Calgary and noticing cracks, sticking doors, or moisture in your basement, call us for a free inspection.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>Our Services in NW Calgary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Foundation Repair", href: "/foundation-repair" },
              { title: "Basement Waterproofing", href: "/basement-waterproofing" },
              { title: "Foundation Crack Repair", href: "/foundation-crack-repair" },
              { title: "Sump Pump Installation", href: "/sump-pump-installation" },
              { title: "Wet Basement Solutions", href: "/wet-basement-calgary" },
              { title: "Emergency Repair", href: "/emergency-foundation-repair-calgary" },
            ].map(s => (
              <Link key={s.title} href={s.href} className="glass rounded-xl p-5 text-white/70 hover:text-sky-300 text-sm font-medium transition-colors hover:border-sky-500/30">
                {s.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-950 via-[#0a0a0f] to-blue-950 border-y border-sky-500/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Free Foundation Inspection in NW Calgary</h2>
          <p className="text-white/55 mb-8">We come to you. No travel fees. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">Book Free Inspection</Link>
            <a href="tel:+15878049266" className="px-8 py-4 rounded-xl border border-white/15 text-white font-semibold transition-all hover:bg-white/5">Call (587) 804-9266</a>
          </div>
        </div>
      </section>
    </>
  );
}
