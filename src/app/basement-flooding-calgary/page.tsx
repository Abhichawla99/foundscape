import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Basement Flooding Calgary | Emergency Water Damage | Foundscape",
  description:
    "Basement flooding in Calgary? We provide emergency response and permanent solutions for water damage, mold, and foundation protection. Free inspection. Call (587) 804-9266.",
  keywords: [
    "basement flooding Calgary",
    "flooded basement Calgary",
    "basement water damage Calgary",
    "emergency basement flooding",
    "sump pump failure Calgary",
    "basement flooding solutions",
  ],
  alternates: { canonical: "https://foundscape.ca/basement-flooding-calgary" },
  openGraph: {
    title: "Basement Flooding Calgary | Foundscape",
    description: "Emergency basement flooding response and permanent prevention solutions.",
    url: "https://foundscape.ca/basement-flooding-calgary",
    type: "website",
  },
};

const floodCauses = [
  {
    cause: "Spring Snowmelt & Heavy Rain",
    desc: "Calgary receives 40–50 cm of snow annually. April and May melt creates massive water volume. Combined with spring rain events, hydrostatic pressure overwhelms aging drainage systems and forces water into basements.",
  },
  {
    cause: "Failed or Overloaded Sump Pumps",
    desc: "A dead pump can't handle Calgary's spring surge. Backups, power failures, frozen discharge lines, or pump clogs mean water accumulates fast. Many homes have undersized pumps for the water volume.",
  },
  {
    cause: "Poor Foundation Drainage",
    desc: "Old Calgary homes often lack perimeter drainage systems. Modern homes may have undersized or clogged weeping tile. Water pools against foundation walls and finds cracks, holes, or weak spots.",
  },
  {
    cause: "Basement Window & Egress Wells",
    desc: "Sunken window wells collect water during heavy rain. Poor drainage or missing covers allow water to overflow into the basement. Calgary's heavy spring rain exploits this weak point.",
  },
  {
    cause: "Foundation Cracks & Settlement",
    desc: "Calgary's clay soils shift seasonally. Houses settle unevenly, creating cracks. Freeze-thaw cycles expand these openings. Hydrostatic pressure forces water through even small gaps.",
  },
  {
    cause: "Plumbing Failures & Backups",
    desc: "Broken water lines, sewage backups, and failed interior plumbing can flood basements fast. Tree roots clogging sewer lines are common in older Calgary neighbourhoods.",
  },
];

const floodStages = [
  "Water appears in corners or near foundation cracks",
  "Water level rises across the floor — often fast during heavy rain",
  "Standing water accumulates — can reach inches to feet deep in hours",
  "Mould growth begins within 24–48 hours if water isn't removed",
  "Structural damage, ruined belongings, and expensive restoration needed",
];

const preventionSteps = [
  "Install or upgrade a reliable sump pump with backup power",
  "Clean and inspect weeping tile and perimeter drainage annually",
  "Grade soil away from the foundation — at least 1 meter slope",
  "Seal foundation cracks and gaps with hydraulic cement or epoxy injection",
  "Install or repair window well covers and drainage",
  "Check gutters and downspouts — extend them 2 meters from foundation",
  "Have plumbing inspected for hidden leaks and sewer line health",
];

export default function BasementFloodingCalgarayPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60">Home</Link>
            <span>/</span>
            <Link href="/basement-waterproofing" className="hover:text-white/60">
              Basement Waterproofing
            </Link>
            <span>/</span>
            <span className="text-white/60">Basement Flooding</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">Basement Flood Damage & Prevention</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Basement Flooding?
              <br />
              <span className="text-gradient">We Stop It — Fast</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Flooding destroys homes. Water in Calgary basements can cause thousands in damage within hours. We provide emergency response and permanent prevention so it never happens again.
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

      {/* Why Calgary Basements Flood */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
            Why Calgary Basements Flood
          </h2>
          <p className="text-white/50 mb-10 max-w-xl">Calgary's climate and aging infrastructure create perfect conditions for basement flooding.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="glass rounded-2xl p-7 border border-sky-500/20">
              <h3 className="text-white font-bold text-lg mb-3">Spring Melt Surge</h3>
              <p className="text-white/60 leading-relaxed">
                Every April and May, Calgary's snow melts rapidly. Combined with spring rain, the volume of water overwhelming yard drainage is massive. Old systems can't handle it.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 border border-sky-500/20">
              <h3 className="text-white font-bold text-lg mb-3">Aging Sump Pumps</h3>
              <p className="text-white/60 leading-relaxed">
                Many Calgary homes have sump pumps from 1995–2005. These pumps are tired, slow, or fail completely. Frozen discharge lines and power loss also disable them during critical moments.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 border border-sky-500/20">
              <h3 className="text-white font-bold text-lg mb-3">Poor Lot Grading</h3>
              <p className="text-white/60 leading-relaxed">
                Soil settles over decades. Many Calgary yards now slope toward the foundation instead of away. Water pools against walls and forces its way in through cracks and gaps.
              </p>
            </div>
            <div className="glass rounded-2xl p-7 border border-sky-500/20">
              <h3 className="text-white font-bold text-lg mb-3">Outdated Drainage Systems</h3>
              <p className="text-white/60 leading-relaxed">
                Calgary's pre-2000 homes often lack interior or exterior perimeter drainage. Even newer homes may have weeping tile clogged by soil and roots — useless when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Flood Causes */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
            What Actually Causes Basement Flooding?
          </h2>
          <p className="text-white/50 mb-10 max-w-xl">Most floods result from one or more of these predictable failure points.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {floodCauses.map((item) => (
              <div key={item.cause} className="glass rounded-2xl p-6 border border-white/5 hover:border-sky-500/30 transition-colors">
                <h3 className="text-white font-bold text-base mb-2">{item.cause}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flood Timeline */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
            How Fast Does Basement Flooding Happen?
          </h2>
          <p className="text-white/50 mb-10 max-w-xl">Water moves faster than you think. Understand the timeline so you can act.</p>
          <div className="glass rounded-2xl p-8 border border-sky-500/20">
            <div className="space-y-5">
              {floodStages.map((stage, idx) => (
                <div key={stage} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-sky-500/20 border border-sky-500/40">
                      <span className="text-sky-400 font-bold text-sm">{idx + 1}</span>
                    </div>
                  </div>
                  <p className="text-white/70 pt-0.5">{stage}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-white/40 text-sm mt-8 italic">
            Mould can begin growing in as little as 24 hours. Structural damage compounds quickly. Act immediately if your basement floods.
          </p>
        </div>
      </section>

      {/* Our Emergency Response */}
      <section className="py-20 bg-gradient-to-br from-sky-950 via-[#0a0a0f] to-blue-950 border-y border-sky-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-3 text-center" style={{ fontFamily: "'Syne', sans-serif" }}>
            Our Emergency Response & Prevention Plan
          </h2>
          <p className="text-white/55 max-w-3xl mx-auto text-center mb-12">
            When water is flowing, we respond quickly. But prevention is better. We inspect, diagnose, and install permanent solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-7 text-center border border-sky-500/20">
              <div className="text-5xl font-bold text-sky-400 mb-3">1</div>
              <h3 className="text-white font-bold mb-2">Emergency Assessment</h3>
              <p className="text-white/50 text-sm">If flooding is active, we identify the source and implement immediate containment. If it's already happened, we inspect for damage and mould risk.</p>
            </div>
            <div className="glass rounded-2xl p-7 text-center border border-sky-500/20">
              <div className="text-5xl font-bold text-sky-400 mb-3">2</div>
              <h3 className="text-white font-bold mb-2">Root Cause Diagnosis</h3>
              <p className="text-white/50 text-sm">Water always finds a path. We trace it back — sump pump failure, grading issues, cracks, or drainage problems. Fix the cause, not just the symptom.</p>
            </div>
            <div className="glass rounded-2xl p-7 text-center border border-sky-500/20">
              <div className="text-5xl font-bold text-sky-400 mb-3">3</div>
              <h3 className="text-white font-bold mb-2">Permanent Prevention</h3>
              <p className="text-white/50 text-sm">New sump pump systems, drainage installation, foundation sealing, grading corrections — whatever it takes so your basement stays dry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Checklist */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
            7-Point Flood Prevention Checklist
          </h2>
          <p className="text-white/50 mb-10">Don't wait for a flood. Act now to protect your Calgary home.</p>
          <div className="glass rounded-2xl p-8 border border-sky-500/20">
            <ul className="space-y-4">
              {preventionSteps.map((step, idx) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold text-lg mt-0.5 flex-shrink-0">{idx + 1}.</span>
                  <span className="text-white/70">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-10" style={{ fontFamily: "'Syne', sans-serif" }}>
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/sump-pump-installation" className="glass rounded-2xl p-7 border border-white/5 hover:border-sky-500/40 transition-colors group">
              <h3 className="text-white font-bold text-lg group-hover:text-sky-400 transition-colors mb-2">Sump Pump Installation</h3>
              <p className="text-white/50 text-sm">New, reliable pumps that handle Calgary's spring surge. Backup power options available.</p>
            </Link>
            <Link href="/basement-waterproofing" className="glass rounded-2xl p-7 border border-white/5 hover:border-sky-500/40 transition-colors group">
              <h3 className="text-white font-bold text-lg group-hover:text-sky-400 transition-colors mb-2">Basement Waterproofing</h3>
              <p className="text-white/50 text-sm">Interior and exterior waterproofing to seal cracks and prevent water intrusion.</p>
            </Link>
            <Link href="/foundation-repair" className="glass rounded-2xl p-7 border border-white/5 hover:border-sky-500/40 transition-colors group">
              <h3 className="text-white font-bold text-lg group-hover:text-sky-400 transition-colors mb-2">Foundation Repair</h3>
              <p className="text-white/50 text-sm">Fix cracks, settlement, and structural issues that allow water to enter.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Prevent Basement Flooding Before It Starts
          </h2>
          <p className="text-white/55 mb-8 leading-relaxed">
            A free inspection reveals exactly what your Calgary home needs. We'll check your sump pump, grading, drainage, and foundation — then give you a clear plan to stay dry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">
              Schedule Free Inspection
            </Link>
            <a href="tel:+15878049266" className="px-8 py-4 rounded-xl border border-white/15 text-white font-semibold transition-all hover:bg-white/5">
              Call (587) 804-9266
            </a>
          </div>
          <p className="text-white/40 text-sm mt-6">Serving all of Calgary and surrounding areas — 24/7 emergency response available</p>
        </div>
      </section>
    </>
  );
}
