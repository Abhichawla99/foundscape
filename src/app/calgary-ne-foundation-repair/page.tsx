import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation Repair NE Calgary | Foundscape",
  description:
    "Foundation repair and basement waterproofing in NE Calgary. Serving Taradale, Skyview Ranch, Saddle Ridge, Martindale & all NE neighbourhoods. Call (587) 804-9266.",
  keywords: [
    "foundation repair NE Calgary",
    "NE Calgary foundation repair",
    "basement waterproofing NE Calgary",
    "foundation repair Taradale Calgary",
    "foundation repair Saddle Ridge Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/calgary-ne-foundation-repair" },
};

const neighbourhoods = ["Taradale", "Skyview Ranch", "Saddle Ridge", "Martindale", "Cornerstone", "Redstone", "Cityscape", "Stoney 3", "Falconridge", "Castleridge", "Temple", "Pineridge"];

export default function NECalgaryPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60">Home</Link><span>/</span>
            <span className="text-white/60">Foundation Repair NE Calgary</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">NE Calgary</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Foundation Repair
              <br /><span className="text-gradient">NE Calgary</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              NE Calgary has experienced massive growth — with many homes now reaching the age where foundation and waterproofing issues first appear. We serve all NE Calgary communities.
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
          <h2 className="text-3xl font-extrabold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>NE Calgary Neighbourhoods We Serve</h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {neighbourhoods.map(n => (
              <span key={n} className="px-4 py-2 glass rounded-xl text-white/70 text-sm">{n}</span>
            ))}
          </div>
          <div className="text-white/60 space-y-4 text-base leading-relaxed max-w-3xl">
            <p>NE Calgary sits on flat prairie terrain with clay-rich soils that are especially prone to frost heave and seasonal movement. Many NE homes from the 1980s and 90s — particularly in Falconridge, Castleridge, and Temple — are now showing the results of decades of soil movement.</p>
            <p>Newer NE communities like Skyview Ranch and Cornerstone are built rapidly on mass-graded land, which can lead to uneven settling in the first decade of a home&apos;s life. If you&apos;re seeing early signs of movement, don&apos;t wait.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-950 via-[#0a0a0f] to-blue-950 border-y border-sky-500/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Free Inspection in NE Calgary</h2>
          <p className="text-white/55 mb-8">We come to you anywhere in NE Calgary. Same-day response.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">Book Free Inspection</Link>
            <a href="tel:+15878049266" className="px-8 py-4 rounded-xl border border-white/15 text-white font-semibold transition-all hover:bg-white/5">Call (587) 804-9266</a>
          </div>
        </div>
      </section>
    </>
  );
}
