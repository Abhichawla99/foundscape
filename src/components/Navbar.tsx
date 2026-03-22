"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L15 5V11L8 15L1 11V5L8 1Z" fill="white" fillOpacity="0.9"/>
            </svg>
          </div>
          <span className="font-bold text-white text-lg tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            Foundscape
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/foundation-repair" className="text-sm text-white/60 hover:text-white transition-colors">Foundation Repair</Link>
          <Link href="/basement-waterproofing" className="text-sm text-white/60 hover:text-white transition-colors">Waterproofing</Link>
          <Link href="/services" className="text-sm text-white/60 hover:text-white transition-colors">All Services</Link>
          <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">About</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+15878049266" className="text-sm text-white/60 hover:text-white transition-colors">
            (587) 804-9266
          </a>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold transition-colors"
          >
            Free Inspection
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#111118] border-t border-white/[0.06] px-6 py-4 flex flex-col gap-4">
          <Link href="/foundation-repair" className="text-sm text-white/70 hover:text-white" onClick={() => setOpen(false)}>Foundation Repair</Link>
          <Link href="/basement-waterproofing" className="text-sm text-white/70 hover:text-white" onClick={() => setOpen(false)}>Waterproofing</Link>
          <Link href="/services" className="text-sm text-white/70 hover:text-white" onClick={() => setOpen(false)}>All Services</Link>
          <Link href="/about" className="text-sm text-white/70 hover:text-white" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="text-sm text-white/70 hover:text-white" onClick={() => setOpen(false)}>Contact</Link>
          <a href="tel:+15878049266" className="mt-2 w-full text-center px-4 py-3 rounded-lg bg-sky-500 text-white text-sm font-semibold">
            Call (587) 804-9266
          </a>
        </div>
      )}
    </header>
  );
}
