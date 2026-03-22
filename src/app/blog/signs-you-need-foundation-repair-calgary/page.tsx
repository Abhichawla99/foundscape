import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Signs You Need Foundation Repair in Calgary | Foundscape",
  description:
    "Is your Calgary home showing foundation problems? Here are 10 warning signs you should never ignore — and what to do about them.",
  keywords: [
    "signs foundation repair needed Calgary",
    "foundation problems Calgary",
    "how to tell if foundation is failing Calgary",
    "foundation warning signs Calgary",
  ],
  alternates: { canonical: "https://foundscape.ca/blog/signs-you-need-foundation-repair-calgary" },
};

const signs = [
  { num: "01", title: "Cracks in Your Foundation Walls", body: "Horizontal cracks are the most serious — they indicate soil pressure pushing inward. Vertical and diagonal cracks are common from settling and should still be inspected. Any crack wider than 1/4\" or growing over time needs immediate attention." },
  { num: "02", title: "Water in Your Basement", body: "A wet basement after rain or snowmelt is not normal. It means water is finding a path through your foundation. Left unaddressed, it causes mould, rot, and structural damage. The source is always fixable — but faster is cheaper." },
  { num: "03", title: "Sticking Doors and Windows", body: "When a foundation shifts, the door and window frames shift with it. If doors that used to open smoothly now stick or don't latch, or windows are hard to open, your foundation may be moving." },
  { num: "04", title: "Sloping or Uneven Floors", body: "Floors that slope toward one corner, bounce when walked on, or feel soft underfoot indicate settling beneath. In Calgary, this is often caused by clay soil shrinking during dry summers." },
  { num: "05", title: "Gaps Around Windows and Doors", body: "Visible gaps between window/door frames and the surrounding wall mean the structure is racking — pulling apart as the foundation moves. This is a serious sign that needs a professional assessment." },
  { num: "06", title: "Bowing or Bulging Walls", body: "A basement wall that visibly curves inward is under lateral soil pressure. This is a structural emergency — bowing walls can fail suddenly. Carbon fibre straps or wall anchors can stop the movement if caught early." },
  { num: "07", title: "Musty Smell or Mould in the Basement", body: "Mould needs moisture to grow. A persistent musty smell means moisture is entering — either through cracks, porous concrete, or condensation from high humidity caused by groundwater. It will get worse without intervention." },
  { num: "08", title: "Cracks in Interior Drywall", body: "Diagonal cracks running from the corners of windows and doors, or cracks at ceiling-wall joints, are classic signs of foundation movement transmitting up through the structure of the home." },
  { num: "09", title: "Chimney Pulling Away from the House", body: "If your chimney is visibly separating from the exterior wall, the foundation beneath it is settling at a different rate than the main foundation. This is a serious structural problem." },
  { num: "10", title: "Your Home Is Over 25 Years Old and Has Never Been Inspected", body: "Calgary homes built before 2000 often have original weeping tile systems that are now failing. If your home has never had a foundation inspection, now is the time — especially before selling or buying." },
];

export default function SignsBlogPost() {
  return (
    <article className="min-h-screen pt-32 pb-24 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-white/60">Home</Link><span>/</span>
          <Link href="/blog" className="hover:text-white/60">Blog</Link><span>/</span>
          <span className="text-white/60">Signs You Need Foundation Repair</span>
        </nav>

        <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">Calgary Foundation Guide</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          10 Signs Your Calgary Home Needs Foundation Repair
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-12">
          Foundation problems rarely appear overnight. They build slowly — small cracks, a sticky door, a musty smell. By the time homeowners notice, the damage is often much more extensive than it needed to be. Here&apos;s what to watch for.
        </p>

        <div className="space-y-8">
          {signs.map((s) => (
            <div key={s.num} className="glass rounded-2xl p-8">
              <div className="flex items-start gap-5">
                <span className="text-sky-400/40 font-black text-3xl leading-none" style={{ fontFamily: "'Syne', sans-serif" }}>{s.num}</span>
                <div>
                  <h2 className="text-white font-bold text-xl mb-3">{s.title}</h2>
                  <p className="text-white/60 text-base leading-relaxed">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <h3 className="text-white font-extrabold text-2xl mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>Seeing Any of These Signs?</h3>
          <p className="text-white/55 mb-6">Don&apos;t wait. Book a free foundation inspection in Calgary — we&apos;ll give you an honest assessment with no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5">Book Free Inspection</Link>
            <a href="tel:+15878049266" className="px-7 py-4 rounded-xl border border-white/15 text-white font-semibold transition-all hover:bg-white/5">Call (587) 804-9266</a>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "10 Signs Your Calgary Home Needs Foundation Repair",
          description: "10 warning signs of foundation problems in Calgary homes — and what to do about them.",
          author: { "@type": "Organization", name: "Foundscape" },
          publisher: { "@type": "Organization", name: "Foundscape", url: "https://foundscape.ca" },
        })}} />
      </div>
    </article>
  );
}
