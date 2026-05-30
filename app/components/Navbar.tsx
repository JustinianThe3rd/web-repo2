"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="container flex items-center justify-between h-16 lg:h-20" aria-label="Main navigation">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Doctor HVACR Home"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-red text-white font-display font-bold text-lg">
            D
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-display font-bold text-base lg:text-lg transition-colors ${
              scrolled ? "text-gray-900" : "text-white"
            }`}>
              Doctor HVACR
            </span>
            <span className={`text-[10px] lg:text-xs font-medium tracking-wider uppercase transition-colors ${
              scrolled ? "text-muted" : "text-white/70"
            }`}>
              Electrical & Plumbing
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-red ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+18569002260"
            className={`text-sm font-semibold transition-colors ${
              scrolled
                ? "text-brand-red hover:text-brand-red-dark"
                : "text-white hover:text-white/80"
            }`}
            aria-label="Call (856) 900-2260"
          >
            (856) 900-2260
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-red text-white text-sm font-semibold hover:bg-brand-red-dark transition-colors shadow-sm shadow-brand-red/20"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block w-6 h-0.5 rounded transition-all duration-300 ${
            scrolled ? "bg-gray-900" : "bg-white"
          } ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 rounded my-1 transition-all duration-300 ${
            scrolled ? "bg-gray-900" : "bg-white"
          } ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 rounded transition-all duration-300 ${
            scrolled ? "bg-gray-900" : "bg-white"
          } ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-16 bg-white transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="container py-8">
          <ul className="flex flex-col gap-2" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 px-4 text-lg font-medium text-gray-800 hover:text-brand-red hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4">
            <a
              href="tel:+18569002260"
              className="flex items-center justify-center py-3 px-4 rounded-lg border-2 border-brand-red text-brand-red font-semibold"
            >
              📞 (856) 900-2260
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex items-center justify-center py-3 px-4 rounded-lg bg-brand-red text-white font-semibold"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
