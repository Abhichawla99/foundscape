import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation Repair Blog Calgary | Foundscape",
  description: "Expert guides on foundation repair, basement waterproofing, and home maintenance in Calgary. Written by Calgary foundation specialists.",
  alternates: { canonical: "https://foundscape.ca/blog" },
};

const posts = [
  { title: "10 Signs Your Calgary Home Needs Foundation Repair", desc: "Foundation problems build slowly. Here's what to watch for before small issues become expensive disasters.", href: "/blog/signs-you-need-foundation-repair-calgary", date: "March 2026" },
  { title: "Foundation Repair Cost Guide: Calgary 2026", desc: "Real pricing for crack injection, waterproofing, underpinning and more — no fluff, just numbers.", href: "/foundation-repair-cost-calgary", date: "March 2026" },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-3">Foundation Resources</p>
        <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>Blog</h1>
        <p className="text-white/55 text-lg mb-12">Guides and insights from Calgary foundation repair specialists.</p>
        <div className="space-y-5">
          {posts.map(p => (
            <Link key={p.href} href={p.href} className="group block glass rounded-2xl p-8 hover:border-sky-500/30 transition-all">
              <div className="text-white/30 text-xs mb-3">{p.date}</div>
              <h2 className="text-white font-bold text-xl mb-3 group-hover:text-sky-300 transition-colors">{p.title}</h2>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
