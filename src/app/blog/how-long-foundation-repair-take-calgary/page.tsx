import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Long Does Foundation Repair Take in Calgary? Timeline & Factors",
  description:
    "Learn how long foundation repair takes in Calgary. From inspection to completion, here's what to expect and the factors that affect your project timeline.",
  keywords: [
    "how long does foundation repair take Calgary",
    "foundation repair timeline Calgary",
    "foundation repair duration",
    "foundation repair project length Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/blog/how-long-foundation-repair-take-calgary" },
};

const timelineItems = [
  { phase: "Initial Inspection", duration: "1–2 days", description: "We assess the damage, identify root causes, and create a detailed repair plan. This includes checking for water intrusion, soil pressure, settling, and structural integrity." },
  { phase: "Engineering Review", duration: "3–7 days", description: "Depending on severity, your project may require structural engineering drawings and city permits. Simple repairs may not need permits; major work (foundation underpinning, wall replacement) often does." },
  { phase: "Permit Approval", duration: "5–14 days", description: "Calgary's building department reviews permits. Timeline varies based on workload and whether revisions are needed. Some repairs proceed without permits if deemed non-structural." },
  { phase: "Site Preparation", duration: "1–3 days", description: "We prep the basement by removing clutter, tarping contents, and setting up equipment. We ensure safe working conditions and protect your home from dust and debris." },
  { phase: "Active Repair Work", duration: "3–21 days", description: "This is the core work. Minor crack sealing takes 1–3 days. Basement waterproofing averages 5–10 days. Major structural repairs (wall bracing, underpinning) can take 2–3 weeks." },
  { phase: "Curing & Finishing", duration: "3–7 days", description: "Concrete sealer and waterproofing coatings need time to cure before backfilling. Some repairs require 28 days for full strength, but you can use the space sooner." },
];

const factors = [
  { title: "Scope of Damage", detail: "A single vertical crack is a day or two. Multiple cracks, bowing walls, or foundation settling can take weeks. The bigger the problem, the longer the fix." },
  { title: "Type of Repair", detail: "Crack injection (1–2 days) vs. sump pump installation (2–3 days) vs. full basement waterproofing system (5–10 days) vs. wall underpinning (2–3 weeks) — complexity drives timeline." },
  { title: "Permit Requirements", detail: "Structural repairs in Calgary often require permits. Add 1–2 weeks for city review. Non-structural repairs (interior sealing, sump pumps) may not need permits and start faster." },
  { title: "Season & Weather", detail: "Calgary winters can delay outdoor work like grading, backfilling, and exterior waterproofing. Spring and fall are fastest. Summer is often booked months ahead." },
  { title: "Site Access & Staging", detail: "Basements packed with storage take longer to prep. Finishing basements require careful protection. Single-storey vs. two-storey affects how crews move materials in and out." },
  { title: "Crew Availability", detail: "A dedicated crew can finish faster. During busy seasons, crews juggle multiple jobs. Booking early or choosing off-season work can shorten your timeline." },
];

export default function HowLongBlogPost() {
  return (
    <article className="min-h-screen pt-32 pb-24 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-white/60">Home</Link><span>/</span>
          <Link href="/blog" className="hover:text-white/60">Blog</Link><span>/</span>
          <span className="text-white/60">How Long Does Foundation Repair Take?</span>
        </nav>

        <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">Calgary Foundation Guide</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          How Long Does Foundation Repair Take in Calgary?
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-12">
          You've spotted a crack in your basement or noticed water seeping in. Your next question: how long will this take? And how much will your home be disrupted? Here's what to expect — from the first inspection to the last shovel of dirt.
        </p>

        {/* Quick Answer */}
        <div className="glass rounded-2xl p-8 mb-12 border-l-4 border-sky-400">
          <h2 className="text-white font-extrabold text-2xl mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>Quick Answer</h2>
          <p className="text-white/80 mb-4">
            Most foundation repairs in Calgary take <strong>2–4 weeks</strong> from inspection to completion. Simple crack sealing takes 1–2 days. Major structural work (wall bracing, underpinning) takes 2–3 weeks. Permits can add 1–2 weeks.
          </p>
          <p className="text-white/60 text-sm">
            Bottom line: Get an inspection immediately if you see signs of trouble. Don't wait — waiting makes repairs more expensive and time-consuming.
          </p>
        </div>

        {/* Timeline Breakdown */}
        <h2 className="text-3xl font-extrabold text-white mb-8 mt-12" style={{ fontFamily: "'Syne', sans-serif" }}>The Complete Foundation Repair Timeline</h2>
        <div className="space-y-6 mb-12">
          {timelineItems.map((item, idx) => (
            <div key={idx} className="glass rounded-2xl p-8">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <span className="text-sky-400/40 font-black text-2xl" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="text-white font-bold text-lg">{item.phase}</h3>
                    <span className="text-sky-400 text-sm font-semibold whitespace-nowrap">{item.duration}</span>
                  </div>
                  <p className="text-white/60 text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Factors */}
        <h2 className="text-3xl font-extrabold text-white mb-8" style={{ fontFamily: "'Syne', sans-serif" }}>6 Factors That Affect How Long Your Repair Takes</h2>
        <div className="space-y-6 mb-12">
          {factors.map((f, idx) => (
            <div key={idx} className="glass rounded-2xl p-8">
              <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-white/60 text-base leading-relaxed">{f.detail}</p>
            </div>
          ))}
        </div>

        {/* Real Examples */}
        <h2 className="text-3xl font-extrabold text-white mb-8" style={{ fontFamily: "'Syne', sans-serif" }}>Real Calgary Examples</h2>
        <div className="space-y-6 mb-12">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-white font-bold text-lg mb-3">Small Vertical Crack in SW Calgary Home</h3>
            <p className="text-white/60 mb-4 text-base"><strong className="text-white">Repair:</strong> Interior crack injection + waterproofing primer</p>
            <p className="text-white/60 text-base"><strong className="text-white">Timeline:</strong> 1.5 days (inspection + repair, no permit needed)</p>
            <p className="text-white/60 text-sm mt-4">Why so fast? Interior work doesn't require city approval, no excavation, and the crew works inside.</p>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-white font-bold text-lg mb-3">Wet Basement in NE Calgary (Multiple Cracks)</h3>
            <p className="text-white/60 mb-4 text-base"><strong className="text-white">Repair:</strong> Exterior waterproofing system + interior drainage + sump pump</p>
            <p className="text-white/60 text-base"><strong className="text-white">Timeline:</strong> 12–15 days total (3 days engineering + permits, 8 days active work)</p>
            <p className="text-white/60 text-sm mt-4">Why longer? Excavation around exterior, grading work, curing time for coatings, and weather delays.</p>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-white font-bold text-lg mb-3">Bowing Wall in Inglewood (Calgary Inner City)</h3>
            <p className="text-white/60 mb-4 text-base"><strong className="text-white">Repair:</strong> Wall underpinning with structural support + anchor system</p>
            <p className="text-white/60 text-base"><strong className="text-white">Timeline:</strong> 22–28 days total (1 week permits, 2–3 weeks repair work)</p>
            <p className="text-white/60 text-sm mt-4">Why the longest? Major structural work requires city engineering sign-off, specialized equipment, and daily progress verification.</p>
          </div>
        </div>

        {/* Do You Need to Leave? */}
        <h2 className="text-3xl font-extrabold text-white mb-8" style={{ fontFamily: "'Syne', sans-serif" }}>Do You Have to Leave Your Home During Repairs?</h2>
        <div className="glass rounded-2xl p-8 mb-12">
          <p className="text-white/60 text-base leading-relaxed mb-4">
            <strong className="text-white">Short answer: Usually no.</strong> Most foundation repairs don't require you to vacate. Here's when you might want to temporarily relocate:
          </p>
          <ul className="text-white/60 text-base space-y-3 ml-4">
            <li className="flex gap-3"><span className="text-sky-400">•</span> <span><strong className="text-white">Major excavation work</strong> — dust and noise can be intense for 5–10 days</span></li>
            <li className="flex gap-3"><span className="text-sky-400">•</span> <span><strong className="text-white">Finishing basement repairs</strong> — if work is happening where kids play or sleep</span></li>
            <li className="flex gap-3"><span className="text-sky-400">•</span> <span><strong className="text-white">Extreme noise from wall cutting or jackhammering</strong> — uncommon but possible with major structural work</span></li>
          </ul>
          <p className="text-white/60 text-base leading-relaxed mt-6">
            Most interior work — crack sealing, sump pump installation, interior waterproofing — you can remain home. The crew will isolate their work area and maintain professional standards.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <h3 className="text-white font-extrabold text-2xl mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>Ready to Get Started?</h3>
          <p className="text-white/55 mb-6">
            The sooner you get an inspection, the faster we can give you an exact timeline for your situation. Most inspections take just 1–2 days, and we'll give you a no-pressure quote same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">Schedule Inspection</Link>
            <a href="tel:+15878049266" className="px-7 py-4 rounded-xl border border-white/15 text-white font-semibold transition-all hover:bg-white/5">Call (587) 804-9266</a>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-white font-extrabold text-lg mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>Related Articles</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/foundation-repair" className="glass rounded-lg p-4 hover:bg-white/5 transition">
              <p className="text-white/80 text-sm">← Foundation Repair Services</p>
              <p className="text-white font-semibold text-base mt-1">Learn About Our Services</p>
            </Link>
            <Link href="/basement-waterproofing" className="glass rounded-lg p-4 hover:bg-white/5 transition">
              <p className="text-white/80 text-sm">← Basement Waterproofing</p>
              <p className="text-white font-semibold text-base mt-1">Prevent Water Damage</p>
            </Link>
            <Link href="/blog/signs-you-need-foundation-repair-calgary" className="glass rounded-lg p-4 hover:bg-white/5 transition">
              <p className="text-white/80 text-sm">← Signs of Foundation Problems</p>
              <p className="text-white font-semibold text-base mt-1">10 Warning Signs</p>
            </Link>
            <Link href="/faq" className="glass rounded-lg p-4 hover:bg-white/5 transition">
              <p className="text-white/80 text-sm">← Foundation Repair FAQ</p>
              <p className="text-white font-semibold text-base mt-1">Common Questions</p>
            </Link>
          </div>
        </div>

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How Long Does Foundation Repair Take in Calgary?",
          description: "Learn how long foundation repair takes in Calgary — from inspection through completion. See timelines, factors that affect duration, and real examples.",
          author: { "@type": "Organization", name: "Foundscape" },
          publisher: { "@type": "Organization", name: "Foundscape", url: "https://foundscape.ca" },
          datePublished: new Date().toISOString().split("T")[0],
        })}} />
      </div>
    </article>
  );
}
