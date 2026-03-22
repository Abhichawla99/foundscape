import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Foundation Repair Calgary | 24/7 | Foundscape",
  description:
    "Emergency foundation repair in Calgary. Water flooding in, walls cracking fast, foundation shifting — we respond 24/7. Call now: (587) 804-9266.",
  keywords: [
    "emergency foundation repair Calgary",
    "24/7 foundation repair Calgary",
    "urgent foundation repair Calgary",
    "emergency basement waterproofing Calgary",
    "foundation repair emergency Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/emergency-foundation-repair-calgary" },
};

export default function EmergencyFoundationRepairPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60">Home</Link>
            <span>/</span>
            <span className="text-white/60">Emergency Foundation Repair Calgary</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="text-red-300 text-xs font-medium">24/7 Emergency Response Available</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Emergency Foundation
              <br /><span className="text-gradient">Repair Calgary</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Foundation emergencies don&apos;t wait for business hours. Neither do we. If water is flooding in, walls are moving, or you have a structural emergency — call right now.
            </p>
            <a href="tel:+15878049266" className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xl transition-all hover:shadow-2xl hover:shadow-sky-500/30 hover:-translate-y-1">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call Now: (587) 804-9266
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-white mb-10" style={{ fontFamily: "'Syne', sans-serif" }}>What Counts as a Foundation Emergency?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Active Water Flooding", desc: "Water actively entering through foundation cracks or floor joints needs immediate attention to prevent structural and mould damage." },
              { title: "Sudden Large Cracks", desc: "Cracks that appeared suddenly or are growing rapidly indicate active movement — stop it before it gets worse." },
              { title: "Bowing or Leaning Walls", desc: "A wall that is visibly bowing inward is under extreme pressure and can fail without warning." },
              { title: "Foundation Shifting", desc: "Doors suddenly not closing, floors cracking overnight, or visible gaps forming are signs of rapid movement." },
              { title: "Sump Pump Failure During Storm", desc: "A failed sump pump during a Calgary rainstorm can flood a finished basement in hours." },
              { title: "Sewage Backup", desc: "A sewage backup into the basement is both an emergency and a health hazard requiring immediate response." },
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
          <h2 className="text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Don&apos;t Wait. Call Now.</h2>
          <p className="text-white/55 mb-8">Every hour matters in a foundation emergency. We have crews on call 24/7 across Calgary.</p>
          <a href="tel:+15878049266" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/25">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            (587) 804-9266
          </a>
        </div>
      </section>
    </>
  );
}
