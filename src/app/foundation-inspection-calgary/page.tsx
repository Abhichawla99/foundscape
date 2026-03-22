import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Foundation Inspection Calgary | Foundscape",
  description:
    "Book a free foundation inspection in Calgary. We assess cracks, settling, moisture, and structural issues — honest report, no obligation. Call (587) 804-9266.",
  keywords: [
    "foundation inspection Calgary",
    "free foundation inspection Calgary",
    "foundation assessment Calgary",
    "basement inspection Calgary",
    "foundation check Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/foundation-inspection-calgary" },
};

export default function FoundationInspectionPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60">Home</Link><span>/</span>
            <span className="text-white/60">Foundation Inspection Calgary</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">Free Inspection</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Free Foundation Inspection
              <br /><span className="text-gradient">Calgary</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Not sure if you have a problem? That&apos;s exactly what the inspection is for. We come to your Calgary home, assess everything, and give you a straight answer — no pressure, no obligation.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">Book Free Inspection</Link>
              <a href="tel:+15878049266" className="px-7 py-4 rounded-xl border border-white/10 text-white font-semibold transition-all hover:bg-white/5">(587) 804-9266</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-10" style={{ fontFamily: "'Syne', sans-serif" }}>What We Check During an Inspection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Foundation Walls", desc: "We check for cracks, bowing, inward lean, horizontal cracking, and signs of water infiltration through all foundation walls." },
              { title: "Floor & Structure", desc: "We assess floor levelness, structural beam condition, and signs of settling or differential movement." },
              { title: "Moisture & Water Entry", desc: "We identify all moisture sources — cracks, porous concrete, window wells, weeping tile failures — and rate their severity." },
              { title: "Exterior Drainage", desc: "We check grading around the foundation, downspout drainage, and soil conditions that affect water flow." },
              { title: "Sump Pump System", desc: "We test your existing sump pump if present — checking operation, backup power, and discharge line." },
              { title: "Honest Report", desc: "We give you a plain-language summary of what we found, what needs fixing, what can wait, and what it will cost." },
            ].map(s => (
              <div key={s.title} className="glass rounded-2xl p-7">
                <h3 className="text-white font-bold text-base mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-950 via-[#0a0a0f] to-blue-950 border-y border-sky-500/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Book Your Free Inspection</h2>
          <p className="text-white/55 mb-8">Same-day or next-day availability across Calgary. Call or text to book.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">Book Online</Link>
            <a href="tel:+15878049266" className="px-8 py-4 rounded-xl border border-white/15 text-white font-semibold transition-all hover:bg-white/5">Call (587) 804-9266</a>
          </div>
        </div>
      </section>
    </>
  );
}
