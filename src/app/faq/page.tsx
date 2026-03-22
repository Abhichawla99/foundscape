import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foundation Repair FAQ Calgary | Foundscape",
  description:
    "Common questions about foundation repair and basement waterproofing in Calgary. Costs, timelines, warranties, and more.",
  alternates: { canonical: "https://foundscape.ca/faq" },
};

const faqs = [
  { q: "How much does foundation repair cost in Calgary?", a: "Foundation repair in Calgary ranges from $500 for a simple crack injection to $30,000+ for major structural work. Most jobs fall between $3,000 and $15,000. We provide free, transparent quotes — no hidden fees." },
  { q: "How do I know if I need foundation repair?", a: "Common signs: cracks in walls or floors, sticking doors/windows, sloping floors, water in the basement, visible foundation cracks, or gaps between walls and ceiling. Book a free inspection if you see any of these." },
  { q: "How long does foundation repair take?", a: "Minor crack injections can be done in a few hours. Full foundation stabilization with piers may take 1–3 days. We minimize disruption and work efficiently." },
  { q: "Does foundation repair come with a warranty?", a: "Yes. Most of our repairs come with a transferable lifetime warranty. The specific warranty depends on the method used — we'll explain it clearly before any work begins." },
  { q: "Will my home insurance cover foundation repair?", a: "It depends on the cause. Sudden events (flood, earthquake) may be covered. Gradual deterioration typically isn't. We can provide documentation to help with insurance claims." },
  { q: "How much does basement waterproofing cost in Calgary?", a: "Interior drainage systems typically cost $5,000–$15,000 depending on the size of the basement. Exterior waterproofing is more involved and can range from $10,000–$30,000. We quote free, upfront, no surprises." },
  { q: "Can you work in the winter in Calgary?", a: "Yes. We work year-round. Interior work can always be done in winter. Exterior excavation may have limitations during deep freeze, but we'll advise you on timing." },
  { q: "What neighbourhoods do you serve in Calgary?", a: "We serve all of Calgary including NW, NE, SW, SE, and surrounding areas like Airdrie, Cochrane, Okotoks, and Chestermere." },
  { q: "How do I book a free inspection?", a: "Call or text us at (587) 804-9266. We respond within 24 hours — usually same day." },
];

export default function FAQPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-3">Questions & Answers</p>
        <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          FAQ
        </h1>
        <p className="text-white/55 text-lg mb-14">Everything you need to know about foundation repair and basement waterproofing in Calgary.</p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="glass rounded-2xl p-7">
              <h2 className="text-white font-semibold text-base mb-3">{faq.q}</h2>
              <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
