import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Heating Systems Repair & Installation | Doctor HVACR — Cherry Hill, NJ",
  description:
    "Expert heating repair, furnace service, and boiler installation in Cherry Hill, NJ. Doctor HVACR keeps your home warm all winter. Call (856) 900-2260.",
  keywords: [
    "heating repair Cherry Hill",
    "furnace installation NJ",
    "boiler service Cherry Hill",
    "emergency heating repair",
    "heat pump installation",
  ],
};

const SERVICES = [
  {
    title: "Furnace Repair",
    description:
      "A broken furnace in the middle of winter is an emergency. Our technicians repair all gas, electric, and oil furnaces quickly and correctly. We troubleshoot ignition issues, blower motor failures, thermostat malfunctions, and airflow problems — getting your heat back on the same day whenever possible.",
  },
  {
    title: "Furnace Installation & Replacement",
    description:
      "If your furnace is over 15 years old or needs frequent repairs, it may be time for an upgrade. We install high-efficiency furnaces that cut your energy bills by up to 30%. Our team handles everything: load calculations, equipment selection, removal of your old unit, professional installation, and full system testing.",
  },
  {
    title: "Boiler Service & Repair",
    description:
      "Boilers provide reliable, comfortable heat — but they need expert care. We service and repair all boiler types, from conventional gas boilers to high-efficiency condensing models. Common issues we fix include leaks, pressure problems, strange noises, and pilot light failures.",
  },
  {
    title: "Heat Pump Solutions",
    description:
      "Heat pumps are the most energy-efficient way to heat and cool your home. We install and repair air-source and geothermal heat pumps, providing year-round comfort with significantly lower operating costs than traditional systems.",
  },
];

const SIGNS = [
  { icon: "🌡️", text: "Uneven heating or cold spots throughout your home" },
  { icon: "🔊", text: "Unusual noises — banging, rattling, or squealing" },
  { icon: "💸", text: "Rising energy bills without increased usage" },
  { icon: "🔄", text: "Frequent cycling — system turns on and off repeatedly" },
  { icon: "👃", text: "Strange odors like burning or musty smells" },
  { icon: "⏰", text: "System is more than 15 years old" },
];

export default function HeatingPage() {
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
                Heating Services
              </span>
              <h1 className="text-white mb-6">
                Heating Systems Repair & Installation
              </h1>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                From emergency furnace repairs to full heating system installations, Doctor HVACR keeps Cherry Hill homes warm through every winter.
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
                  Schedule Service
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="w-64 h-64 rounded-full bg-white/10 flex items-center justify-center border-4 border-white/5">
                <span className="text-8xl">🔥</span>
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

      {/* Warning Signs */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-gray-900 mb-4">Is Your Heating System Failing?</h2>
            <p className="text-gray-600 text-lg">
              Watch for these warning signs that your furnace or boiler needs professional attention.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SIGNS.map((sign) => (
              <div
                key={sign.text}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border"
              >
                <span className="text-2xl flex-shrink-0">{sign.icon}</span>
                <p className="text-gray-700 text-sm font-medium">{sign.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center rounded-2xl bg-gradient-to-br from-brand-red to-brand-red-dark p-10 lg:p-14">
            <h2 className="text-white mb-4">Don&apos;t Let the Cold Catch You Off Guard</h2>
            <p className="text-white/90 text-lg mb-8">
              Whether you need an emergency repair or a new heating system, our licensed technicians are ready to help — 24/7.
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
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
