import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Foundation Repair Airdrie | Foundscape",
  description:
    "Foundation repair and basement waterproofing in Airdrie, AB. Cracks, settling, wet basements — we fix it all. Serving all Airdrie neighbourhoods. Free inspection. Call (587) 804-9266.",
  keywords: [
    "foundation repair Airdrie",
    "Airdrie foundation repair",
    "basement waterproofing Airdrie",
    "foundation crack repair Airdrie",
    "wet basement Airdrie",
    "foundation inspection Airdrie AB",
    "Airdrie basement repair",
  ],
  alternates: { canonical: "https://foundscape.ca/foundation-repair-airdrie" },
  openGraph: {
    title: "Foundation Repair Airdrie | Foundscape",
    description:
      "Foundation repair and basement waterproofing in Airdrie, AB. Free inspection. Call (587) 804-9266.",
    url: "https://foundscape.ca/foundation-repair-airdrie",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Foundation Repair Airdrie",
  provider: {
    "@type": "LocalBusiness",
    name: "Foundscape",
    telephone: "+15878049266",
    url: "https://foundscape.ca",
    areaServed: {
      "@type": "City",
      name: "Airdrie",
      addressRegion: "AB",
      addressCountry: "CA",
    },
  },
  serviceType: "Foundation Repair",
  description:
    "Professional foundation repair and basement waterproofing services in Airdrie, Alberta. We address cracks, settlement, heaving, and water intrusion with permanent solutions.",
};

const neighbourhoods = [
  "Bayside",
  "Chinook Gates",
  "Cooper's Crossing",
  "Meadowbrook",
  "King's Heights",
  "Sagewood",
  "Windsong",
  "Luxstone",
  "Ridgegate",
  "Williamstown",
  "Ravenswood",
  "Waterford",
  "Reunion",
  "Cobblestone Creek",
  "Midtown",
  "Genesis",
  "Iron Horse",
];

const commonIssues = [
  {
    title: "Foundation Cracks",
    desc: "Vertical, horizontal, and diagonal cracks form as Airdrie's clay-heavy soils shift seasonally. Horizontal cracks in particular indicate lateral pressure from surrounding soil — these require prompt professional assessment.",
  },
  {
    title: "Foundation Settlement & Heaving",
    desc: "Airdrie sits on glacially-deposited soils that shrink in drought and swell with moisture. This constant movement causes uneven settlement. You may notice sloping floors, sticking doors, or gaps where walls meet ceilings.",
  },
  {
    title: "Wet & Leaking Basements",
    desc: "Spring snowmelt in Airdrie is significant — the city averages over 130 cm of snow annually. Melting ice and spring rain saturate soils, creating hydrostatic pressure that pushes water through cracks, joints, and window wells.",
  },
  {
    title: "Bowing or Bulging Walls",
    desc: "Heavy clay soils press against foundation walls from the outside. Over years, this lateral pressure causes walls to bow inward — a structural concern that worsens rapidly if ignored.",
  },
  {
    title: "Window Well Flooding",
    desc: "Basement windows and their wells are common entry points for water. Poor grading, missing drainage, and clogged well drains allow water to pool and overflow into the basement.",
  },
  {
    title: "Sump Pump Failures",
    desc: "Many Airdrie homes rely on sump pumps to manage groundwater. During spring melt, an aging or undersized pump can be overwhelmed — or fail completely — leading to rapid basement flooding.",
  },
];

const warningSignsList = [
  "Cracks in drywall, especially diagonal cracks from door/window corners",
  "Doors or windows that stick, jam, or no longer close properly",
  "Floors that feel uneven, springy, or slope noticeably",
  "Visible cracks on the exterior foundation wall or exposed basement wall",
  "Efflorescence (white mineral deposits) on basement walls — a sign of water movement",
  "Musty odour or standing water in the basement after rain or snowmelt",
  "Gaps between walls and ceilings, or between the floor and baseboard",
];

export default function FoundationRepairAirdriePage() {
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
            <span className="text-white/60">Airdrie</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">
              Airdrie, AB — Foundation Specialists
            </p>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Foundation Repair
              <br />
              <span className="text-gradient">Airdrie</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Foundscape provides professional foundation repair and basement waterproofing throughout Airdrie, AB. From Cooper&apos;s Crossing to Bayside, we know Airdrie&apos;s soils and serve every neighbourhood — fast response, lasting results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all hover:-translate-y-0.5"
              >
                Free Inspection in Airdrie
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

      {/* Airdrie Context */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl font-extrabold text-white mb-5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Why Airdrie Homes Need Foundation Attention
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Airdrie has grown from a small town into a city of over 80,000 residents in just a few decades. This rapid growth means thousands of homes were built quickly, across wide swaths of land with varying soil conditions — and many are now reaching the 20–30 year mark where foundation issues become evident.
                </p>
                <p>
                  The land beneath Airdrie is predominantly glacial till and expansive clay soils — the same problematic composition found across the Calgary region. These soils behave differently from season to season: they hold and absorb water in spring, then dry and contract during Alberta&apos;s warm summers. This constant swelling and shrinking is the primary driver of foundation movement in the area.
                </p>
                <p>
                  Airdrie also sits at a slightly higher elevation and exposed position on the prairie, meaning cold winters and significant annual snowfall. Spring melt happens quickly, generating high volumes of water that saturate soils around foundations before drainage systems can handle it.
                </p>
                <p>
                  Newer neighbourhoods like Windsong, Ravenswood, and Cobblestone Creek were built on former farmland that may have varied fill quality. Homes in these areas can experience unexpected settlement in their first decade. Older areas like Luxstone and Meadowbrook — now 25+ years old — are seeing foundation movement, cracking, and water intrusion at increasing rates.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass rounded-2xl p-6 border border-sky-500/20">
                <div className="text-3xl font-bold text-sky-400 mb-1">80,000+</div>
                <div className="text-white/60 text-sm">Airdrie residents — one of Canada&apos;s fastest-growing cities</div>
              </div>
              <div className="glass rounded-2xl p-6 border border-sky-500/20">
                <div className="text-3xl font-bold text-sky-400 mb-1">130 cm+</div>
                <div className="text-white/60 text-sm">Average annual snowfall — spring melt is Airdrie basements&apos; biggest test</div>
              </div>
              <div className="glass rounded-2xl p-6 border border-sky-500/20">
                <div className="text-3xl font-bold text-sky-400 mb-1">30 km</div>
                <div className="text-white/60 text-sm">North of Calgary — same glacial soil geology, same foundation risks</div>
              </div>
              <div className="glass rounded-2xl p-6 border border-sky-500/20">
                <div className="text-3xl font-bold text-sky-400 mb-1">Free</div>
                <div className="text-white/60 text-sm">Foundation inspection — no travel fees, no obligation, clear answers</div>
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
            Airdrie Neighbourhoods We Serve
          </h2>
          <p className="text-white/50 mb-8 max-w-xl">
            We work throughout all of Airdrie — no travel surcharge, no minimum job size.
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
            Common Foundation Problems in Airdrie
          </h2>
          <p className="text-white/50 mb-10 max-w-2xl">
            These are the issues we encounter most often across Airdrie&apos;s residential areas — from newly built homes to those built in the 1990s.
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
            Warning Signs Your Airdrie Home Has a Foundation Problem
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
            How We Approach Foundation Repair in Airdrie
          </h2>
          <p className="text-white/50 mb-12 max-w-2xl">
            No two foundations are identical. We assess your specific situation before recommending solutions — and we never upsell repairs you don&apos;t need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Free Inspection",
                desc: "We visit your Airdrie home, examine the foundation inside and out, check for moisture, and identify any structural concerns. No charge, no obligation.",
              },
              {
                step: "02",
                title: "Clear Diagnosis",
                desc: "We explain exactly what we found — what&apos;s serious, what&apos;s cosmetic, and what can wait. You get a written assessment you can keep.",
              },
              {
                step: "03",
                title: "Transparent Quote",
                desc: "Our quotes are itemized and honest. We don&apos;t pad estimates or add mystery fees. You know what you&apos;re paying for before any work begins.",
              },
              {
                step: "04",
                title: "Quality Repair",
                desc: "We use materials suited to Airdrie&apos;s climate — engineered for Alberta&apos;s freeze-thaw cycles and expansive soils. Work is backed by our warranty.",
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
            Foundation & Waterproofing Services in Airdrie
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
            Free Foundation Inspection in Airdrie
          </h2>
          <p className="text-white/55 mb-8 leading-relaxed">
            We come to you anywhere in Airdrie — no travel fees, no pressure, no obligation. Get a clear picture of your foundation&apos;s health before small problems become expensive ones.
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
            Serving Airdrie, Calgary, Cochrane, Okotoks, Chestermere, and all surrounding communities
          </p>
        </div>
      </section>
    </>
  );
}
