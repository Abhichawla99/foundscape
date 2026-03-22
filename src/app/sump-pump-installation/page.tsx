import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sump Pump Installation Calgary | Foundscape",
  description:
    "Sump pump installation, replacement & repair in Calgary. Primary & battery backup systems installed by certified technicians. Free inspection. Call (587) 804-9266.",
  keywords: [
    "sump pump installation Calgary",
    "sump pump Calgary",
    "sump pump replacement Calgary",
    "basement sump pump Calgary",
    "battery backup sump pump Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/sump-pump-installation" },
};

export default function SumpPumpPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60">Home</Link>
            <span>/</span>
            <span className="text-white/60">Sump Pump Installation Calgary</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">Sump Pump Calgary</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Sump Pump Installation
              <br />
              <span className="text-gradient">Calgary</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              A properly installed sump pump is the last line of defence between your basement and flooding. We install, replace, and service sump pump systems across Calgary.
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
          <h2 className="text-3xl font-extrabold text-white mb-10" style={{ fontFamily: "'Syne', sans-serif" }}>
            Our Sump Pump Services in Calgary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "New Installation", desc: "Full sump pit excavation and primary pump installation for homes without an existing system." },
              { title: "Replacement", desc: "Old or failed sump pump replaced quickly — minimizing downtime and flood risk." },
              { title: "Battery Backup Systems", desc: "Keep your basement dry even during Calgary power outages with a battery backup pump." },
              { title: "Combination Systems", desc: "Primary + battery backup combo systems for maximum protection during heavy storms." },
              { title: "Annual Maintenance", desc: "We test and service your existing pump to make sure it works when you need it." },
              { title: "Emergency Service", desc: "Sump pump failed during a storm? We have crews available for emergency callouts." },
            ].map((s) => (
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
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Protect Your Calgary Basement
          </h2>
          <p className="text-white/55 mb-8">Don&apos;t wait until your basement floods. Book a free consultation today.</p>
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
