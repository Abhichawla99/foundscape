import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation & Basement Services Calgary | Foundscape",
  description:
    "Complete foundation repair and basement waterproofing services in Calgary. Foundation cracks, wet basements, sump pumps, and more. Free inspection.",
  alternates: { canonical: "https://foundscape.ca/services" },
};

const services = [
  { title: "Foundation Repair", desc: "Settling, cracking, bowing walls — permanent fixes for all foundation issues.", href: "/foundation-repair" },
  { title: "Basement Waterproofing", desc: "Interior and exterior systems to keep your basement dry permanently.", href: "/basement-waterproofing" },
  { title: "Foundation Crack Repair", desc: "Hairline to structural — all foundation cracks sealed with professional injection methods.", href: "/foundation-crack-repair" },
  { title: "Sump Pump Installation", desc: "Primary and battery backup sump pumps installed by certified technicians.", href: "/sump-pump-installation" },
  { title: "Wet Basement Solutions", desc: "Water in your basement? We find the source and fix it at the root.", href: "/wet-basement-calgary" },
  { title: "Free Inspection", desc: "Not sure what you have? Book a free no-obligation inspection.", href: "/contact" },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-3">What We Do</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            All Services
          </h1>
          <p className="text-white/55 text-xl max-w-xl">Foundation repair and basement waterproofing across Calgary — done right, with warranty.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="group glass rounded-2xl p-8 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all">
              <h2 className="text-white font-bold text-xl mb-3 group-hover:text-sky-300 transition-colors">{s.title}</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{s.desc}</p>
              <span className="text-sky-400 text-sm font-medium flex items-center gap-1.5">
                Learn more
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
