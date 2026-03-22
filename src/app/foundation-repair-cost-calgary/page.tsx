import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation Repair Cost Calgary 2026 | Pricing Guide | Foundscape",
  description:
    "How much does foundation repair cost in Calgary? Real pricing for crack injection, underpinning, waterproofing & more. Free quote — no hidden fees. Call (587) 804-9266.",
  keywords: [
    "foundation repair cost Calgary",
    "how much does foundation repair cost Calgary",
    "foundation repair price Calgary",
    "basement waterproofing cost Calgary",
    "foundation crack repair cost Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/foundation-repair-cost-calgary" },
};

const costs = [
  { service: "Foundation Crack Injection", low: "$400", high: "$1,500", notes: "Per crack. Polyurethane or epoxy. Most common fix." },
  { service: "Interior Drainage System", low: "$5,000", high: "$15,000", notes: "Perimeter drain + sump pump. Best long-term waterproofing." },
  { service: "Exterior Waterproofing", low: "$10,000", high: "$30,000", notes: "Excavation + membrane. Most comprehensive solution." },
  { service: "Sump Pump Installation", low: "$1,500", high: "$4,000", notes: "Primary pump. Battery backup adds $800–$1,500." },
  { service: "Wall Anchors (Bowing Walls)", low: "$3,000", high: "$8,000", notes: "Per wall. Stops inward movement permanently." },
  { service: "Carbon Fibre Straps", low: "$2,000", high: "$6,000", notes: "Per wall. Non-invasive. Stops bowing walls." },
  { service: "Helical Piers (Settling)", low: "$1,200", high: "$2,500", notes: "Per pier. Full job typically 5–15 piers." },
  { service: "Push Piers (Settling)", low: "$1,500", high: "$3,000", notes: "Per pier. Best for heavier loads." },
  { service: "Full Foundation Underpinning", low: "$15,000", high: "$50,000+", notes: "Severe settling. Major structural work." },
];

export default function FoundationRepairCostPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60">Home</Link>
            <span>/</span>
            <span className="text-white/60">Foundation Repair Cost Calgary</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">2026 Pricing Guide</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Foundation Repair Cost
              <br /><span className="text-gradient">Calgary 2026</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Real numbers. No fluff. Here&apos;s what foundation repair and basement waterproofing actually costs in Calgary — and what affects the price.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">
                Get Free Quote
              </Link>
              <a href="tel:+15878049266" className="px-7 py-4 rounded-xl border border-white/10 text-white font-semibold transition-all hover:bg-white/5">
                (587) 804-9266
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
            Foundation Repair Pricing in Calgary
          </h2>
          <p className="text-white/50 mb-8">Prices vary based on severity, access, and scope. These are real Calgary market ranges for 2026.</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/50 text-xs font-semibold uppercase tracking-wider">Service</th>
                  <th className="text-left py-3 px-4 text-white/50 text-xs font-semibold uppercase tracking-wider">Low</th>
                  <th className="text-left py-3 px-4 text-white/50 text-xs font-semibold uppercase tracking-wider">High</th>
                  <th className="text-left py-3 px-4 text-white/50 text-xs font-semibold uppercase tracking-wider hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {costs.map((row, i) => (
                  <tr key={row.service} className={`border-b border-white/[0.05] ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                    <td className="py-4 px-4 text-white font-medium text-sm">{row.service}</td>
                    <td className="py-4 px-4 text-sky-400 font-bold text-sm">{row.low}</td>
                    <td className="py-4 px-4 text-sky-400 font-bold text-sm">{row.high}</td>
                    <td className="py-4 px-4 text-white/40 text-xs hidden md:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What affects price */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            What Affects Foundation Repair Cost in Calgary?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { factor: "Severity of Damage", desc: "A hairline crack costs far less than a bowing wall or settling foundation. Early fixes are always cheaper." },
              { factor: "Method Required", desc: "Crack injection is simple. Helical piers and underpinning are complex. The right method depends on the diagnosis." },
              { factor: "Access & Excavation", desc: "Exterior waterproofing requires excavation around the foundation. More excavation = higher cost." },
              { factor: "Foundation Type", desc: "Poured concrete, block, or stone foundations each require different approaches and materials." },
              { factor: "Size of the Area", desc: "Larger basement perimeters mean more drainage material, labour, and time." },
              { factor: "Calgary Soil Conditions", desc: "Clay-heavy soil in some Calgary neighbourhoods requires more aggressive solutions." },
            ].map((item) => (
              <div key={item.factor} className="glass rounded-2xl p-6">
                <h3 className="text-white font-bold text-sm mb-2">{item.factor}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How much does foundation repair cost in Calgary?", acceptedAnswer: { "@type": "Answer", text: "Foundation repair in Calgary ranges from $400 for a simple crack injection to $50,000+ for major underpinning. Most jobs cost between $3,000 and $15,000." } },
          { "@type": "Question", name: "How much does basement waterproofing cost in Calgary?", acceptedAnswer: { "@type": "Answer", text: "Interior drainage systems cost $5,000–$15,000. Exterior waterproofing ranges from $10,000–$30,000 depending on the size and access." } },
        ]
      })}} />

      <section className="py-20 bg-gradient-to-br from-sky-950 via-[#0a0a0f] to-blue-950 border-y border-sky-500/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Get a Free, Transparent Quote</h2>
          <p className="text-white/55 mb-8">We inspect for free and give you a full quote upfront — no surprises, no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">Book Free Inspection</Link>
            <a href="tel:+15878049266" className="px-8 py-4 rounded-xl border border-white/15 text-white font-semibold transition-all hover:bg-white/5">Call (587) 804-9266</a>
          </div>
        </div>
      </section>
    </>
  );
}
