import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Basement Waterproofing Calgary | Keep It Dry | Foundscape",
  description:
    "Professional basement waterproofing in Calgary. Interior & exterior systems, sump pumps, drainage — we keep water out permanently. Free inspection. Call (587) 804-9266.",
  keywords: [
    "basement waterproofing Calgary",
    "Calgary basement waterproofing",
    "waterproof basement Calgary",
    "leaking basement Calgary",
    "wet basement Calgary",
    "basement water damage Calgary",
    "interior waterproofing Calgary",
    "exterior waterproofing Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/basement-waterproofing" },
};

const solutions = [
  {
    title: "Interior Drainage System",
    desc: "A perimeter drainage channel installed along the basement floor collects and redirects water to a sump pump — the most effective long-term solution for most Calgary homes.",
  },
  {
    title: "Exterior Waterproofing",
    desc: "We excavate around the foundation, apply a waterproof membrane, and install proper drainage to prevent water from ever reaching the foundation wall.",
  },
  {
    title: "Sump Pump Installation",
    desc: "We install and service primary and battery backup sump pumps so your basement stays dry even during power outages or heavy Calgary storms.",
  },
  {
    title: "Window Well Drains",
    desc: "Improperly drained window wells are a major source of basement water. We install drain systems that carry water away from the foundation.",
  },
  {
    title: "Crack Injection Sealing",
    desc: "Polyurethane or epoxy injection seals foundation cracks from the inside — stops water infiltration immediately.",
  },
  {
    title: "Vapor Barrier Systems",
    desc: "Heavy-duty vapor barriers applied to basement walls stop moisture from seeping through porous concrete block foundations.",
  },
];

export default function BasementWaterproofingPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60">Home</Link>
            <span>/</span>
            <span className="text-white/60">Basement Waterproofing Calgary</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">Basement Waterproofing Calgary</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Basement Waterproofing
              <br />
              <span className="text-gradient">Done Right</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              A wet basement isn&apos;t just annoying — it&apos;s a structural risk and a health hazard. We waterproof Calgary basements with systems that last decades, not months.
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
            Waterproofing Solutions for Calgary Basements
          </h2>
          <p className="text-white/50 mb-10 max-w-xl">
            Every basement is different. We assess yours and recommend the right system — not the most expensive one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s) => (
              <div key={s.title} className="glass rounded-2xl p-7">
                <h3 className="text-white font-bold text-base mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            Why Calgary Basements Get Wet
          </h2>
          <div className="text-white/60 space-y-4 text-base leading-relaxed">
            <p>
              Calgary&apos;s spring snowmelt and heavy summer storms create huge volumes of water that saturate the soil around foundations.
              Older homes built before modern waterproofing standards are especially vulnerable — many have nothing but poured concrete between the soil and your living space.
            </p>
            <p>
              The clay-heavy soils common in Calgary hold water against your foundation walls for weeks after rain.
              Over time, hydrostatic pressure forces water through even small cracks or porous concrete.
            </p>
            <p>
              The result: damp walls, musty smells, mould growth, and eventually structural damage. The longer you wait, the worse it gets.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-950 via-[#0a0a0f] to-blue-950 border-y border-sky-500/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Stop the Water. Start Today.
          </h2>
          <p className="text-white/55 mb-8">Book a free basement inspection in Calgary. We&apos;ll find the source and give you a straight answer.</p>
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
