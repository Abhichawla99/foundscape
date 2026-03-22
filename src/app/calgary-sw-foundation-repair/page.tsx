import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation Repair SW Calgary | Foundscape",
  description:
    "Foundation repair and basement waterproofing in SW Calgary. Serving Signal Hill, Aspen Woods, Springbank Hill, Pump Hill & all SW neighbourhoods. Call (587) 804-9266.",
  keywords: [
    "foundation repair SW Calgary",
    "SW Calgary foundation repair",
    "basement waterproofing SW Calgary",
    "foundation repair Signal Hill Calgary",
    "foundation repair Aspen Woods Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/calgary-sw-foundation-repair" },
};

const neighbourhoods = ["Signal Hill", "Aspen Woods", "Springbank Hill", "Pump Hill", "Palliser", "Woodbine", "Braeside", "Glamorgan", "Glenbrook", "Christie Park", "West Springs", "Cougar Ridge", "Discovery Ridge"];

export default function SWCalgaryPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60">Home</Link><span>/</span>
            <span className="text-white/60">Foundation Repair SW Calgary</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">SW Calgary</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Foundation Repair
              <br /><span className="text-gradient">SW Calgary</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              SW Calgary has some of the most valuable homes in the city — and some of the most complex foundation conditions. We know SW Calgary inside and out.
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
          <h2 className="text-3xl font-extrabold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>SW Calgary Neighbourhoods We Serve</h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {neighbourhoods.map(n => (
              <span key={n} className="px-4 py-2 glass rounded-xl text-white/70 text-sm">{n}</span>
            ))}
          </div>
          <div className="text-white/60 space-y-4 text-base leading-relaxed max-w-3xl">
            <p>SW Calgary includes some of Calgary&apos;s oldest and newest neighbourhoods — from mid-century homes in Glamorgan and Glenbrook to newer builds in Aspen Woods and Discovery Ridge. Older SW homes often have original weeping tile systems that have failed after 40–60 years, leading to chronic wet basement issues.</p>
            <p>The escarpment terrain in SW Calgary also creates unique drainage challenges — water flows toward foundations from uphill rather than away. We&apos;ve fixed hundreds of SW Calgary basements and know exactly what works here.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-950 via-[#0a0a0f] to-blue-950 border-y border-sky-500/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Free Inspection in SW Calgary</h2>
          <p className="text-white/55 mb-8">Call or text — we respond same day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">Book Free Inspection</Link>
            <a href="tel:+15878049266" className="px-8 py-4 rounded-xl border border-white/15 text-white font-semibold transition-all hover:bg-white/5">Call (587) 804-9266</a>
          </div>
        </div>
      </section>
    </>
  );
}
