import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Foundscape | Calgary Foundation Repair Company",
  description:
    "Learn about Foundscape — Calgary's trusted foundation repair and basement waterproofing specialists. Local team, honest pricing, lifetime warranty.",
  alternates: { canonical: "https://foundscape.ca/about" },
};

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">About Us</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          Calgary-Built.<br />
          <span className="text-gradient">Foundation-Focused.</span>
        </h1>

        <div className="text-white/60 space-y-6 text-lg leading-relaxed mb-14">
          <p>
            Foundscape was built by people who got tired of seeing Calgary homeowners get overcharged for patch jobs that fail within a year.
            We started with one mission: fix foundations the right way, the first time, at a fair price.
          </p>
          <p>
            We&apos;ve worked on hundreds of Calgary homes — from Inglewood to Tuscany, from McKenzie Towne to Edgemont.
            We know Calgary&apos;s soil. We know the climate. We know exactly what causes foundations to fail here and exactly how to fix them permanently.
          </p>
          <p>
            Every job we do comes with transparent pricing (no surprise invoices), a clean worksite, and a warranty that actually stands behind the work.
            That&apos;s not marketing — it&apos;s just how we operate.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {[
            { value: "500+", label: "Homes Repaired" },
            { value: "15+", label: "Years in Calgary" },
            { value: "100%", label: "Satisfaction Rate" },
            { value: "24h", label: "Emergency Response" },
          ].map((s) => (
            <div key={s.value} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-extrabold text-gradient mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{s.value}</div>
              <div className="text-white/40 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Link href="/contact" className="px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">
            Book Free Inspection
          </Link>
          <Link href="/services" className="px-7 py-4 rounded-xl border border-white/10 text-white font-semibold transition-all hover:bg-white/5">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
