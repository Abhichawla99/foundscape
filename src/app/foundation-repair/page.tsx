import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation Repair Calgary | Permanent Fix | Foundscape",
  description:
    "Expert foundation repair in Calgary. Cracks, settling, bowing walls — we fix all foundation issues permanently. Free inspection. Licensed & insured. Call (587) 804-9266.",
  keywords: [
    "foundation repair Calgary",
    "Calgary foundation repair",
    "foundation repair company Calgary",
    "foundation settling Calgary",
    "foundation problems Calgary",
    "bowing foundation walls Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/foundation-repair" },
};

const signs = [
  "Cracks in walls, floors, or ceilings",
  "Doors or windows that stick or won't close",
  "Sloping or uneven floors",
  "Gaps between walls and the ceiling",
  "Bowing or leaning foundation walls",
  "Visible cracks in the exterior foundation",
  "Water seeping into the basement",
  "Chimney separating from the house",
];

const methods = [
  {
    title: "Helical Piers",
    desc: "Steel piers screwed deep into stable soil to permanently lift and stabilize a settling foundation.",
  },
  {
    title: "Push Piers",
    desc: "Hydraulically driven steel piers that transfer foundation load to load-bearing bedrock.",
  },
  {
    title: "Wall Anchors",
    desc: "Steel anchors installed through bowing basement walls to stabilize and gradually straighten them.",
  },
  {
    title: "Carbon Fibre Straps",
    desc: "High-strength carbon fibre straps bonded to basement walls to stop inward movement.",
  },
  {
    title: "Crack Injection",
    desc: "Polyurethane or epoxy injected directly into cracks to seal and restore structural integrity.",
  },
  {
    title: "Underpinning",
    desc: "Extending the depth of the existing foundation to increase load capacity and stability.",
  },
];

export default function FoundationRepairPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Foundation Repair Calgary</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">Foundation Repair in Calgary</p>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Foundation Repair
              <br />
              <span className="text-gradient">Calgary</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8 max-w-2xl">
              Calgary&apos;s soil conditions — expansive clay, freeze-thaw cycles, and moisture fluctuations — are hard on foundations.
              We permanently repair settling, cracking, and structural foundation issues that cheaper fixes only mask.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/25">
                Get Free Inspection
              </Link>
              <a href="tel:+15878049266" className="px-7 py-4 rounded-xl border border-white/10 hover:border-white/20 text-white font-semibold transition-all hover:bg-white/5">
                (587) 804-9266
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signs */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-10" style={{ fontFamily: "'Syne', sans-serif" }}>
            Warning Signs Your Calgary Home Needs Foundation Repair
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {signs.map((sign) => (
              <div key={sign} className="glass rounded-xl p-5 flex items-center gap-4">
                <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" fill="none" stroke="#38bdf8" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <span className="text-white/70 text-sm">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
            Foundation Repair Methods We Use
          </h2>
          <p className="text-white/50 mb-10 max-w-xl">
            Not every foundation problem needs the same solution. We diagnose first, then recommend only what&apos;s needed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {methods.map((m) => (
              <div key={m.title} className="glass rounded-2xl p-7">
                <h3 className="text-white font-bold text-base mb-3">{m.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calgary Context */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            Why Calgary Foundations Fail
          </h2>
          <div className="prose prose-invert max-w-none text-white/60 space-y-4 text-base leading-relaxed">
            <p>
              Calgary sits on a mix of glacial till, clay-rich soils, and bedrock formations that shift dramatically with moisture.
              When it rains or snow melts, expansive clay soils swell. During dry summers or cold winters, they contract.
              This constant movement creates enormous pressure on foundations — eventually causing cracks, settling, and structural movement.
            </p>
            <p>
              Chinooks and extreme freeze-thaw cycles in Calgary accelerate foundation damage faster than most other Canadian cities.
              Homes in older neighbourhoods like Ramsay, Inglewood, and Bankview often show signs of foundation movement decades in the making.
            </p>
            <p>
              If you&apos;re seeing cracks or noticing your floors are off-level, don&apos;t wait. Foundation issues are always cheaper to fix early.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sky-950 via-[#0a0a0f] to-blue-950 border-y border-sky-500/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Book a Free Foundation Inspection in Calgary
          </h2>
          <p className="text-white/55 mb-8">No pressure. No obligation. Just an honest assessment from a local expert.</p>
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
