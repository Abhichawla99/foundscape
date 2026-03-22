import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 5V11L8 15L1 11V5L8 1Z" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              <span className="font-bold text-white text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>Foundscape</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Calgary&apos;s foundation repair and basement waterproofing specialists. We fix wet basements, foundation cracks, and water damage — fast.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href="tel:+15878049266" className="text-sky-400 text-sm font-medium hover:text-sky-300 transition-colors">
                (587) 804-9266
              </a>
              <a href="mailto:hello@foundscape.ca" className="text-white/40 text-sm hover:text-white/70 transition-colors">
                hello@foundscape.ca
              </a>
              <span className="text-white/40 text-sm">Calgary, Alberta, Canada</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/80 text-sm font-semibold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Foundation Repair", href: "/foundation-repair" },
                { label: "Basement Waterproofing", href: "/basement-waterproofing" },
                { label: "Foundation Crack Repair", href: "/foundation-crack-repair" },
                { label: "Sump Pump Installation", href: "/sump-pump-installation" },
                { label: "Wet Basement Solutions", href: "/wet-basement-calgary" },
                { label: "All Services", href: "/services" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 text-sm hover:text-white/80 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white/80 text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Free Inspection", href: "/contact" },
                { label: "FAQ", href: "/faq" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 text-sm hover:text-white/80 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Foundscape. All rights reserved. Serving Calgary, AB.
          </p>
          <p className="text-white/30 text-xs">
            Foundation Repair · Basement Waterproofing · Calgary, Alberta
          </p>
        </div>
      </div>
    </footer>
  );
}
