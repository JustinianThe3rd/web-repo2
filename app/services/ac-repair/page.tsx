import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair & Installation | Doctor HVACR — Cherry Hill, NJ",
  description:
    "Expert air conditioning repair and installation in Cherry Hill, NJ. Doctor HVACR services all major brands. Fast, reliable, and affordable AC solutions. Call (856) 900-2260.",
  keywords: [
    "AC repair Cherry Hill",
    "air conditioning installation NJ",
    "AC service near me",
    "emergency AC repair",
    "central air installation",
  ],
};

const SERVICES = [
  {
    title: "AC Repair",
    description:
      "When your air conditioning breaks down, you need fast, reliable service. Our technicians diagnose and repair all makes and models — from central air systems and ductless mini-splits to window units and heat pumps. We arrive with the tools and parts needed to get your system running the same day.",
  },
  {
    title: "AC Installation & Replacement",
    description:
      "Ready for a new AC system? We help you choose the right unit for your home's size, layout, and budget. From energy-efficient central air to ductless solutions, we handle the entire installation process — removal of old equipment, new system setup, ductwork modifications, and thorough testing.",
  },
  {
    title: "AC Maintenance & Tune-Ups",
    description:
      "Prevent costly breakdowns with seasonal maintenance. Our tune-ups include refrigerant level checks, coil cleaning, electrical inspection, thermostat calibration, and airflow testing. Regular maintenance keeps your system efficient and extends its lifespan.",
  },
  {
    title: "Emergency AC Service",
    description:
      "AC failures don't wait for business hours — and neither do we. Our 24/7 emergency service means you'll never be stuck in a sweltering home. Call anytime and we'll dispatch a technician immediately.",
  },
];

const BRANDS = [
  "Carrier", "Trane", "Lennox", "Rheem", "Goodman", "York", "Daikin", "Mitsubishi", "Bryant", "American Standard",
];

export default function ACRepairPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-blue-dark to-brand-blue pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red" />
        <div className="relative z-10 container">
          <nav className="mb-8">
            <Link href="/#services" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-sm font-semibold mb-6">
                HVAC Services
              </span>
              <h1 className="text-white mb-6">
                AC Repair & Installation
              </h1>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Stay cool all summer with expert air conditioning repair, installation, and maintenance from Cherry Hill&apos;s most trusted HVAC team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+18569002260"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-red text-white font-semibold hover:bg-brand-red-dark transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (856) 900-2260
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-blue font-semibold hover:bg-white/95 transition-colors"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="w-64 h-64 rounded-full bg-white/10 flex items-center justify-center border-4 border-white/5">
                <span className="text-8xl">❄️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {SERVICES.map((service) => (
                <article
                  key={service.title}
                  className="p-8 rounded-2xl border-2 border-gray-100 hover:border-brand-red/30 hover:shadow-card-hover transition-all duration-300"
                >
                  <h2 className="text-gray-900 text-xl mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding bg-surface">
        <div className="container text-center">
          <h2 className="text-gray-900 mb-4">Brands We Service</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            We install and repair all major air conditioning and cooling brands.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="px-5 py-2.5 rounded-full bg-white border border-border text-gray-700 text-sm font-medium shadow-sm"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center rounded-2xl bg-gradient-to-br from-brand-red to-brand-red-dark p-10 lg:p-14">
            <h2 className="text-white mb-4">Ready to Stay Cool?</h2>
            <p className="text-white/90 text-lg mb-8">
              Whether you need a quick repair or a complete system installation, Doctor HVACR has you covered. Call us 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+18569002260"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-brand-red font-bold hover:bg-white/95 transition-colors"
              >
                📞 Call (856) 900-2260
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
