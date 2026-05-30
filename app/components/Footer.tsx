import Link from "next/link";

const FOOTER_LINKS = {
  services: [
    { label: "AC Repair & Installation", href: "#services" },
    { label: "Heating Systems", href: "#services" },
    { label: "Electrical Services", href: "#services" },
    { label: "Plumbing Solutions", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-red text-white font-display font-bold text-lg">
                D
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-base">Doctor HVACR</span>
                <span className="text-[10px] font-medium tracking-wider uppercase text-white/50">
                  Electrical & Plumbing
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Cherry Hill&apos;s trusted HVAC, electrical, and plumbing contractor. Licensed, insured, and available 24/7.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-white/60 ml-2">5.0 (44 reviews)</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3" role="list">
              <li>
                <a href="tel:+18569002260" className="text-white/70 hover:text-white text-sm transition-colors">
                  📞 (856) 900-2260
                </a>
              </li>
              <li>
                <span className="text-white/70 text-sm">
                  📍 2050 Fairfax Ave Unit K<br />
                  Cherry Hill Township, NJ 08003
                </span>
              </li>
              <li>
                <span className="text-white/70 text-sm">🕐 Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Doctor HVACR Electrical & Plumbing. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/30 text-xs">Women-Owned</span>
            <span className="text-white/30 text-xs">Asian-Owned</span>
            <span className="text-white/30 text-xs">LGBTQ+ Friendly</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
