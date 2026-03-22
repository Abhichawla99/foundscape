import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Foundscape | Free Foundation Inspection Calgary",
  description:
    "Book a free foundation inspection in Calgary. Call or text (587) 804-9266 — we respond fast. No forms, no wait.",
  alternates: { canonical: "https://foundscape.ca/contact" },
};

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-4">Get In Touch</p>
        <h1
          className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Call or Text Us.
          <br />
          <span className="text-gradient">We Respond Fast.</span>
        </h1>
        <p className="text-white/55 text-xl mb-14 max-w-lg mx-auto">
          No forms. No waiting. Just reach out directly and we&apos;ll get you booked for a free Calgary foundation inspection.
        </p>

        {/* Primary CTA — Call */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="tel:+15878049266"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xl transition-all hover:shadow-2xl hover:shadow-sky-500/30 hover:-translate-y-1"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call (587) 804-9266
          </a>
          <a
            href="sms:+15878049266"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl border border-white/15 hover:border-sky-500/50 hover:bg-sky-500/10 text-white font-bold text-xl transition-all hover:-translate-y-1"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Text Us
          </a>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="glass rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center mb-4">
              <svg width="18" height="18" fill="none" stroke="#38bdf8" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="text-white font-bold text-sm mb-1">Hours</h3>
            <p className="text-white/50 text-sm">Mon–Fri: 7am–7pm<br/>Sat: 8am–5pm<br/>24/7 Emergency</p>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center mb-4">
              <svg width="18" height="18" fill="none" stroke="#38bdf8" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 className="text-white font-bold text-sm mb-1">Service Area</h3>
            <p className="text-white/50 text-sm">All of Calgary, AB<br/>Airdrie · Cochrane<br/>Okotoks · Chestermere</p>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center mb-4">
              <svg width="18" height="18" fill="none" stroke="#38bdf8" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3 className="text-white font-bold text-sm mb-1">Free Inspection</h3>
            <p className="text-white/50 text-sm">No obligation.<br/>Honest assessment.<br/>Same-day response.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
