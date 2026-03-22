import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation Crack Repair Calgary | Foundscape",
  description:
    "Foundation crack repair in Calgary. Hairline cracks to structural damage — we seal and repair all foundation cracks permanently. Free inspection. Call (587) 804-9266.",
  keywords: [
    "foundation crack repair Calgary",
    "basement crack repair Calgary",
    "concrete crack repair Calgary",
    "crack injection Calgary",
    "foundation cracks Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/foundation-crack-repair" },
};

const crackTypes = [
  { type: "Hairline Cracks", severity: "Low–Medium", desc: "Thin cracks less than 1/16\". Often cosmetic but can allow water in. Sealed with polyurethane injection." },
  { type: "Horizontal Cracks", severity: "High", desc: "Caused by soil pressure. Indicate serious structural stress on basement walls. Require immediate attention." },
  { type: "Vertical Cracks", severity: "Medium", desc: "Common from concrete curing or settling. Usually not structural but often leak water." },
  { type: "Diagonal Cracks", severity: "Medium–High", desc: "Indicate differential settling. Wider at one end than the other. May indicate foundation movement." },
  { type: "Stair-Step Cracks", severity: "Medium–High", desc: "Follow the mortar joints in block foundations. Sign of settling or soil movement." },
  { type: "Wide / Structural Cracks", severity: "Critical", desc: "Cracks wider than 1/4\". Require full structural assessment and reinforcement." },
];

export default function FoundationCrackRepairPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60">Home</Link>
            <span>/</span>
            <span className="text-white/60">Foundation Crack Repair Calgary</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">Foundation Crack Repair</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Foundation Crack Repair
              <br />
              <span className="text-gradient">Calgary</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Not all cracks are equal. Some are cosmetic. Some are serious. We inspect, diagnose, and permanently seal foundation cracks in Calgary homes — fast.
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
          <h2 className="text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
            Types of Foundation Cracks
          </h2>
          <p className="text-white/50 mb-10 max-w-xl">Understanding the crack type is the first step to fixing it right.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {crackTypes.map((c) => (
              <div key={c.type} className="glass rounded-2xl p-7">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-base">{c.type}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    c.severity === "Critical" ? "bg-red-500/20 text-red-400" :
                    c.severity === "High" ? "bg-orange-500/20 text-orange-400" :
                    c.severity === "Medium–High" ? "bg-yellow-500/20 text-yellow-400" :
                    "bg-sky-500/20 text-sky-400"
                  }`}>
                    {c.severity}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-950 via-[#0a0a0f] to-blue-950 border-y border-sky-500/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Crack in your foundation? Don&apos;t guess.
          </h2>
          <p className="text-white/55 mb-8">Book a free inspection and get a straight answer from a Calgary foundation specialist.</p>
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
