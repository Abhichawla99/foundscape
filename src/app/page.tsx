import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation Repair Calgary | Basement Waterproofing | Foundscape",
  description:
    "Calgary's #1 foundation repair and basement waterproofing company. We fix foundation cracks, wet basements, and water damage. Free inspection. Call (587) 804-9266.",
  alternates: { canonical: "https://foundscape.ca" },
};

const services = [
  {
    icon: "🏗️",
    title: "Foundation Repair",
    desc: "Cracks, settling, shifting — we diagnose and permanently fix foundation issues before they become disasters.",
    href: "/foundation-repair",
  },
  {
    icon: "💧",
    title: "Basement Waterproofing",
    desc: "Interior and exterior waterproofing systems that keep water out for good. Backed by warranty.",
    href: "/basement-waterproofing",
  },
  {
    icon: "🔩",
    title: "Foundation Crack Repair",
    desc: "Hairline to structural — we seal and repair all types of foundation cracks using proven injection methods.",
    href: "/foundation-crack-repair",
  },
  {
    icon: "⚙️",
    title: "Sump Pump Installation",
    desc: "Professional sump pump install, replacement, and backup systems to protect your basement year-round.",
    href: "/sump-pump-installation",
  },
  {
    icon: "🌊",
    title: "Wet Basement Solutions",
    desc: "Standing water, damp walls, musty smell — we find the source and fix it at the root cause.",
    href: "/wet-basement-calgary",
  },
  {
    icon: "🔍",
    title: "Free Inspection",
    desc: "Book a free foundation inspection. No pressure, no obligation — just an honest assessment.",
    href: "/contact",
  },
];

const stats = [
  { value: "500+", label: "Calgary Homes Fixed" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "24h", label: "Emergency Response" },
];

const faqs = [
  {
    q: "How do I know if I need foundation repair?",
    a: "Common signs include cracks in walls or floors, doors and windows that stick, sloping floors, water in the basement, or visible cracks in the foundation itself. If you notice any of these, book a free inspection.",
  },
  {
    q: "How much does foundation repair cost in Calgary?",
    a: "Foundation repair in Calgary typically costs between $3,000 and $30,000 depending on the severity and method. Minor crack injections start around $500–$1,500. We provide free, transparent quotes with no surprise fees.",
  },
  {
    q: "How long does basement waterproofing take?",
    a: "Most interior waterproofing jobs take 1–3 days. Exterior waterproofing is more involved and can take 3–7 days. We minimize disruption and clean up after every job.",
  },
  {
    q: "Is foundation repair covered by home insurance?",
    a: "It depends on the cause. Sudden damage from a water backup or earthquake may be covered. Gradual deterioration typically isn't. We can help document the damage for your insurance claim.",
  },
  {
    q: "Do you offer warranties on foundation repair?",
    a: "Yes. Most of our foundation repairs come with a transferable lifetime warranty. Ask us about warranty specifics for your project.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0a0f]">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-950/30 via-transparent to-blue-950/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-300 text-xs font-medium">Serving All of Calgary, AB</span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Calgary&apos;s Foundation
              <br />
              <span className="text-gradient">Repair Experts.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              Cracks. Wet basements. Settling foundations. We fix them permanently — not temporarily.
              Trusted by 500+ Calgary homeowners. Free inspection, no obligation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-base transition-all hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-0.5"
              >
                Book Free Inspection
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a
                href="tel:+15878049266"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/10 hover:border-white/20 text-white font-semibold text-base transition-all hover:bg-white/5"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                (587) 804-9266
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              {["✓ Free Inspection", "✓ Lifetime Warranty", "✓ Licensed & Insured", "✓ Calgary Local"].map((t) => (
                <span key={t} className="text-white/50 text-sm">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/[0.06] bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <div
                  className="text-4xl md:text-5xl font-extrabold text-gradient mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-3">What We Do</p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Foundation & Basement Services
              <br />
              <span className="text-gradient">in Calgary</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl">
              Every service backed by experience, warranty, and a team that shows up when they say they will.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                href={s.href}
                key={s.title}
                className="group glass rounded-2xl p-7 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all duration-300"
              >
                <div className="text-3xl mb-5">{s.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-sky-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-sky-400 text-sm font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Learn more
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-3">Why Foundscape</p>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                We fix it right the first time.
              </h2>
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                Most companies patch symptoms. We find the root cause and fix it permanently.
                Every job comes with honest pricing, a clean worksite, and a warranty that actually means something.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Transparent Pricing",
                    desc: "No surprise fees. We quote the full job up front — what you see is what you pay.",
                  },
                  {
                    title: "Lifetime Warranty",
                    desc: "Our repairs are built to last. Most come with a transferable lifetime warranty.",
                  },
                  {
                    title: "Local Calgary Team",
                    desc: "We live and work in Calgary. We know the soil, the climate, and the homes here.",
                  },
                  {
                    title: "Emergency Response",
                    desc: "Water in your basement at 2am? We have emergency crews available 24/7.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="12" height="12" fill="none" stroke="#38bdf8" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                      <div className="text-white/50 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              {[
                {
                  name: "Mark T.",
                  location: "NW Calgary",
                  text: "Had water coming in through a foundation crack every spring. Foundscape fixed it in one day. Two years later — totally dry. Worth every penny.",
                  stars: 5,
                },
                {
                  name: "Sandra & Mike R.",
                  location: "Tuscany, Calgary",
                  text: "Called 3 companies. Foundscape was the only one who actually explained what was happening and gave us a real fix — not just a bandage. Highly recommend.",
                  stars: 5,
                },
                {
                  name: "Dave K.",
                  location: "SE Calgary",
                  text: "Our basement was flooding every time it rained. They installed a full interior drainage system and sump pump. Completely transformed our basement.",
                  stars: 5,
                },
              ].map((review) => (
                <div key={review.name} className="glass rounded-2xl p-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <svg key={i} width="14" height="14" fill="#f59e0b" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">&quot;{review.text}&quot;</p>
                  <div className="text-white/40 text-xs">
                    <span className="font-semibold text-white/60">{review.name}</span> · {review.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14 text-center">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-3">Questions</p>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Frequently Asked
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass rounded-2xl p-7">
                <h3 className="text-white font-semibold text-base mb-3">{faq.q}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-sky-950 via-[#0a0a0f] to-blue-950 border-y border-sky-500/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Worried about your foundation?
          </h2>
          <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto">
            Don&apos;t wait. Foundation problems get worse — and more expensive — over time.
            Book a free inspection today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-base transition-all hover:shadow-xl hover:shadow-sky-500/25 hover:-translate-y-0.5"
            >
              Book Free Inspection
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a
              href="tel:+15878049266"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/15 hover:border-white/30 text-white font-semibold text-base transition-all hover:bg-white/5"
            >
              Call (587) 804-9266
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
