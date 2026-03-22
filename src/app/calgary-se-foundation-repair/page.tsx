import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation Repair SE Calgary | Foundscape",
  description:
    "Foundation repair and basement waterproofing in SE Calgary. Serving McKenzie Towne, Auburn Bay, Cranston, Mahogany & all SE neighbourhoods. Call (587) 804-9266.",
  keywords: [
    "foundation repair SE Calgary",
    "SE Calgary foundation repair",
    "basement waterproofing SE Calgary",
    "foundation repair McKenzie Towne",
    "foundation repair Auburn Bay Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/calgary-se-foundation-repair" },
};

const neighbourhoods = ["McKenzie Towne", "Auburn Bay", "Cranston", "Mahogany", "Legacy", "Seton", "New Brighton", "Copperfield", "Mckenzie Lake", "Chaparral", "Walden", "Wolf Willow"];

export default function SECalgaryPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60">Home</Link><span>/</span>
            <span className="text-white/60">Foundation Repair SE Calgary</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">SE Calgary</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Foundation Repair
              <br /><span className="text-gradient">SE Calgary</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              SE Calgary is one of the fastest-growing areas in the city. New homes here face unique foundation challenges from fresh fill soil and high water tables near the lake communities.
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
          <h2 className="text-3xl font-extrabold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>SE Calgary Neighbourhoods We Serve</h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {neighbourhoods.map(n => (
              <span key={n} className="px-4 py-2 glass rounded-xl text-white/70 text-sm">{n}</span>
            ))}
          </div>
          <div className="text-white/60 space-y-4 text-base leading-relaxed max-w-3xl">
            <p>Lake communities like Auburn Bay, Mahogany, and Chaparral are built near water — which means higher water tables and more aggressive moisture management needed around foundations. We see a lot of sump pump failures and wet basements in these areas.</p>
            <p>Newer SE Calgary developments like Legacy and Seton are built on engineered fill — which settles differently than native soil and can lead to foundation movement in homes as young as 5–10 years old.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-950 via-[#0a0a0f] to-blue-950 border-y border-sky-500/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Free Inspection in SE Calgary</h2>
          <p className="text-white/55 mb-8">Same-day response. No travel fees anywhere in SE Calgary.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">Book Free Inspection</Link>
            <a href="tel:+15878049266" className="px-8 py-4 rounded-xl border border-white/15 text-white font-semibold transition-all hover:bg-white/5">Call (587) 804-9266</a>
          </div>
        </div>
      </section>
    </>
  );
}
