import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation Repair Okotoks | Foundscape",
  description:
    "Foundation repair and basement waterproofing in Okotoks, AB. Cracks, settlement, wet basements — we fix it all. Serving all Okotoks neighbourhoods. Free inspection. Call (587) 804-9266.",
  keywords: [
    "foundation repair Okotoks",
    "Okotoks foundation repair",
    "basement waterproofing Okotoks",
    "foundation crack repair Okotoks",
    "wet basement Okotoks",
    "foundation inspection Okotoks AB",
    "Okotoks basement repair",
  ],
  alternates: { canonical: "https://foundscape.ca/foundation-repair-okotoks" },
  openGraph: {
    title: "Foundation Repair Okotoks | Foundscape",
    description:
      "Foundation repair and basement waterproofing in Okotoks, AB. Free inspection. Call (587) 804-9266.",
    url: "https://foundscape.ca/foundation-repair-okotoks",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Foundation Repair Okotoks",
  provider: {
    "@type": "LocalBusiness",
    name: "Foundscape",
    telephone: "+15878049266",
    url: "https://foundscape.ca",
    areaServed: {
      "@type": "City",
      name: "Okotoks",
      addressRegion: "AB",
      addressCountry: "CA",
    },
  },
  serviceType: "Foundation Repair",
  description:
    "Professional foundation repair and basement waterproofing services in Okotoks, Alberta. We address cracks, settlement, heaving, and water intrusion with permanent solutions.",
};

const neighbourhoods = [
  "Cimarron",
  "D'Arcy Ranch",
  "Wedderburn",
  "Crystal Shores",
  "Drake Landing",
  "Mountainview",
  "Sandstone",
  "Foothills",
  "Westridge",
  "Rangeview",
  "Sheep River",
  "Tower Hill",
  "Air Ranch",
  "Heritage Okotoks",
  "Suntree",
];

const commonIssues = [
  {
    title: "Foundation Cracks",
    desc: "Okotoks sits at the edge of the foothills, where clay-rich soils absorb snowmelt from surrounding hills and swell significantly in spring. This expansion — and the subsequent summer contraction — drives vertical, diagonal, and horizontal cracking in poured concrete and block foundations.",
  },
  {
    title: "Foundation Settlement",
    desc: "Many Okotoks neighbourhoods were developed quickly over former agricultural land. Homes built on improperly compacted fill, or on naturally varied terrain near the Sheep River valley, are susceptible to differential settlement — where one corner or side of a foundation sinks faster than another.",
  },
  {
    title: "Wet & Leaking Basements",
    desc: "Spring snowmelt in the Okotoks area is substantial. The town receives significant annual snowfall and is surrounded by higher terrain that channels water toward lower-lying areas. Hydrostatic pressure from saturated soils pushes water through cracks, cold joints, and window wells at the seasonal peak.",
  },
  {
    title: "Bowing Foundation Walls",
    desc: "Lateral earth pressure from swelling clay soils is a persistent problem in Okotoks. Over time, this pressure causes basement walls — especially unreinforced block or older poured walls — to bow inward. This is a structural issue that worsens with each freeze-thaw cycle.",
  },
  {
    title: "Sump Pump Overwhelm",
    desc: "Homes in lower-lying Okotoks areas — particularly near Crystal Shores and the Sheep River — often rely heavily on sump pumps. During major melt events, an aging or undersized pump can be overwhelmed, leading to rapid basement flooding.",
  },
  {
    title: "Window Well Water Intrusion",
    desc: "Basement egress windows are common in Okotoks homes built in the last two decades. Without proper drainage or gravel-filled wells with functioning drains, these window wells collect water and direct it straight into the basement.",
  },
];

const warningSignsList = [
  "Cracks in drywall, plaster, or the exterior foundation — especially diagonal cracks at door and window corners",
  "Doors and windows that stick, jam, or no longer latch properly",
  "Floors that feel uneven, bouncy, or slope noticeably in one direction",
  "White mineral staining (efflorescence) on basement walls — a clear indicator of water moving through concrete",
  "Musty or mouldy smell in the basement, especially after rain or snowmelt",
  "Gaps forming between the floor and baseboards, or between wall and ceiling",
  "Visible inward bowing or bulging on a basement wall",
];

export default function FoundationRepairOkotoksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-800/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-white/30 text-xs mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white/60">Home</Link>
            <span>/</span>
            <Link href="/foundation-repair" className="hover:text-white/60">Foundation Repair</Link>
            <span>/</span>
            <span className="text-white/60">Okotoks</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">
              Okotoks, AB — Foundation Specialists
            </p>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Foundation Repair
              <br />
              <span className="text-gradient">Okotoks</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Foundscape provides professional foundation repair and basement waterproofing throughout Okotoks, AB. From Cimarron to D&apos;Arcy Ranch, we understand the unique soil conditions and seasonal challenges that Okotoks homeowners face — and we deliver lasting results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5"
              >
                Free Inspection in Okotoks
              </Link>
              <a
                href="tel:+15878049266"
                className="px-7 py-4 rounded-xl border border-white/10 text-white font-semibold transition-all hover:bg-white/5"
              >
                (587) 804-9266
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Okotoks Context */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl font-extrabold text-white mb-5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Why Okotoks Homes Need Foundation Attention
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Okotoks has transformed from a quiet foothills town into one of Canada&apos;s fastest-growing municipalities. With a population that has roughly tripled in the past twenty years, thousands of homes were built rapidly across varied terrain — and many of those homes are now entering the critical 15–25 year window when foundation issues become most apparent.
                </p>
                <p>
                  Sitting at the foothills edge south of Calgary, Okotoks experiences pronounced freeze-thaw cycles throughout the year. The soils beneath most of the town are composed of expansive glacial clays — the same problematic geology found throughout the Calgary region. These clays swell significantly when wet and shrink when dry, creating cyclical pressure against foundations that can cause cracking and movement over time.
                </p>
                <p>
                  The Sheep River valley, which runs through the heart of Okotoks, introduces additional complexity. Homes near the river or in lower-lying areas of town can experience higher water tables and greater hydrostatic pressure during spring melt. The surrounding foothills funnel meltwater toward Okotoks, meaning spring flooding events can be severe even in years of average snowfall.
                </p>
                <p>
                  Neighbourhoods like Cimarron and Mountainview — now well over two decades old — are increasingly seeing homeowners deal with foundation cracks, water seepage, and settling. Newer developments such as D&apos;Arcy Ranch and Wedderburn are still settling into their surrounding soils and may experience early movement, particularly on lots that involved significant grading or fill placement.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass rounded-2xl p-6 border border-sky-500/20">
                <div className="text-3xl font-bold text-sky-400 mb-1">35,000+</div>
                <div className="text-white/60 text-sm">Okotoks residents — one of Canada&apos;s fastest-growing towns</div>
              </div>
              <div className="glass rounded-2xl p-6 border border-sky-500/20">
                <div className="text-3xl font-bold text-sky-400 mb-1">18 km</div>
                <div className="text-white/60 text-sm">South of Calgary — foothills terrain with significant seasonal moisture</div>
              </div>
              <div className="glass rounded-2xl p-6 border border-sky-500/20">
                <div className="text-3xl font-bold text-sky-400 mb-1">Clay</div>
                <div className="text-white/60 text-sm">Expansive glacial clay soils throughout — the primary driver of foundation movement</div>
              </div>
              <div className="glass rounded-2xl p-6 border border-sky-500/20">
                <div className="text-3xl font-bold text-sky-400 mb-1">Free</div>
                <div className="text-white/60 text-sm">Foundation inspection in Okotoks — no travel fees, no obligation, clear answers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighbourhoods */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-2xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Okotoks Neighbourhoods We Serve
          </h2>
          <p className="text-white/50 mb-8 max-w-xl">
            We work throughout all of Okotoks — no travel surcharge, no minimum job size.
          </p>
          <div className="flex flex-wrap gap-3">
            {neighbourhoods.map((n) => (
              <span
                key={n}
                className="px-4 py-2 glass rounded-xl text-white/70 text-sm"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl font-extrabold text-white mb-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Common Foundation Problems in Okotoks
          </h2>
          <p className="text-white/50 mb-10 max-w-2xl">
            These are the issues we encounter most often across Okotoks&apos; residential areas — from homes built in the 1990s to brand-new construction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {commonIssues.map((issue) => (
              <div
                key={issue.title}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-sky-500/30 transition-colors"
              >
                <h3 className="text-white font-bold text-base mb-3">{issue.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl font-extrabold text-white mb-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Warning Signs Your Okotoks Home Has a Foundation Problem
          </h2>
          <p className="text-white/50 mb-10">
            These symptoms often start subtle and worsen over time. Don&apos;t wait until minor cracks become major structural issues.
          </p>
          <div className="glass rounded-2xl p-8 border border-sky-500/20">
            <ul className="space-y-4">
              {warningSignsList.map((sign, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-6 w-6 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-sky-400" />
                    </div>
                  </div>
                  <span className="text-white/70 leading-relaxed">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-white/40 text-sm mt-6 italic">
            Noticing one or more of these signs? Call us at (587) 804-9266 for a free inspection — early diagnosis is always less expensive than emergency repair.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl font-extrabold text-white mb-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            How We Approach Foundation Repair in Okotoks
          </h2>
          <p className="text-white/50 mb-12 max-w-2xl">
            No two foundations are identical. We assess your specific situation before recommending solutions — and we never upsell repairs you don&apos;t need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Free Inspection",
                desc: "We visit your Okotoks home, examine the foundation inside and out, check for moisture intrusion, and identify any structural concerns. No charge, no obligation.",
              },
              {
                step: "02",
                title: "Clear Diagnosis",
                desc: "We explain exactly what we found — what&apos;s serious, what&apos;s cosmetic, and what can wait. You get a written assessment you can keep and refer to.",
              },
              {
                step: "03",
                title: "Transparent Quote",
                desc: "Our quotes are itemized and honest. We don&apos;t pad estimates or add mystery fees. You know exactly what you&apos;re paying for before any work begins.",
              },
              {
                step: "04",
                title: "Quality Repair",
                desc: "We use materials suited to Alberta&apos;s climate — engineered for the freeze-thaw cycles and expansive soils of the Okotoks area. All work is backed by our warranty.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="glass rounded-2xl p-7 border border-sky-500/15 hover:border-sky-500/40 transition-colors"
              >
                <div className="text-4xl font-bold text-sky-500/40 mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA strip */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-2xl font-extrabold text-white mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Foundation &amp; Waterproofing Services in Okotoks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Foundation Repair", href: "/foundation-repair" },
              { title: "Basement Waterproofing", href: "/basement-waterproofing" },
              { title: "Foundation Crack Repair", href: "/foundation-crack-repair" },
              { title: "Sump Pump Installation", href: "/sump-pump-installation" },
              { title: "Wet Basement Solutions", href: "/wet-basement-calgary" },
              { title: "Emergency Foundation Repair", href: "/emergency-foundation-repair-calgary" },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="glass rounded-xl p-5 text-white/70 hover:text-sky-300 text-sm font-medium transition-colors hover:border-sky-500/30"
              >
                {s.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sky-950 via-[#0a0a0f] to-blue-950 border-y border-sky-500/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Free Foundation Inspection in Okotoks
          </h2>
          <p className="text-white/55 mb-8 leading-relaxed">
            We come to you anywhere in Okotoks — no travel fees, no pressure, no obligation. Get a clear picture of your foundation&apos;s health before small problems become expensive ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5"
            >
              Book Free Inspection
            </Link>
            <a
              href="tel:+15878049266"
              className="px-8 py-4 rounded-xl border border-white/15 text-white font-semibold transition-all hover:bg-white/5"
            >
              Call (587) 804-9266
            </a>
          </div>
          <p className="text-white/40 text-sm mt-6">
            Serving Okotoks, Calgary, Airdrie, Cochrane, Chestermere, and all surrounding communities
          </p>
        </div>
      </section>
    </>
  );
}
