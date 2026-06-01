import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Electrical Services | Doctor HVACR — Cherry Hill, NJ",
  description:
    "Licensed electricians in Cherry Hill, NJ. Panel upgrades, wiring, outlets, lighting, and emergency electrical repairs. Doctor HVACR — Call (856) 900-2260.",
  keywords: [
    "electrician Cherry Hill",
    "electrical panel upgrade NJ",
    "electrical wiring Cherry Hill",
    "emergency electrician",
    "lighting installation NJ",
  ],
};

const SERVICES = [
  {
    title: "Panel Upgrades & Replacements",
    description:
      "An outdated or overloaded electrical panel is a safety hazard. We upgrade older 100-amp panels to modern 200-amp (or higher) systems to handle today's electrical demands. We also replace recalled or dangerous panels like Federal Pacific and Zinsco.",
  },
  {
    title: "Wiring & Rewiring",
    description:
      "From adding new circuits to whole-home rewiring, our licensed electricians handle it all. We replace knob-and-tube and aluminum wiring with modern copper, add dedicated circuits for appliances, and ensure your home meets current code.",
  },
  {
    title: "Outlet & Switch Installation",
    description:
      "Need more outlets? Want to upgrade to USB-integrated or smart outlets? We install, replace, and troubleshoot all types of outlets and switches — including dimmers, motion-sensor switches, and GFCI/AFCI protection.",
  },
  {
    title: "Lighting Installation",
    description:
      "Transform your home with professional lighting design and installation. From recessed lighting and under-cabinet LEDs to outdoor security lighting and chandelier installation, we make your home brighter and safer.",
  },
  {
    title: "Generator Installation",
    description:
      "Keep the power on during outages with a whole-home standby generator. We install Generac, Kohler, and other top brands — including automatic transfer switches so your generator kicks on the moment power is lost.",
  },
  {
    title: "Emergency Electrical Service",
    description:
      "Sparking outlets, burning smells, power outages — electrical emergencies demand immediate response. Our 24/7 emergency electricians diagnose and resolve dangerous situations quickly and safely.",
  },
];

const SAFETY_TIPS = [
  "Flickering lights can indicate loose wiring — have them checked immediately",
  "Warm or discolored outlets are a fire hazard — call an electrician today",
  "Breakers that trip repeatedly signal an overloaded circuit",
  "Humming from your panel is not normal — it may indicate a failing breaker",
];

export default function ElectricalPage() {
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
                Electrical Services
              </span>
              <h1 className="text-white mb-6">
                Licensed Electrical Services
              </h1>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                From panel upgrades to emergency repairs, our licensed electricians deliver safe, code-compliant electrical work for homes and businesses.
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
                  Get a Free Estimate
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="w-64 h-64 rounded-full bg-white/10 flex items-center justify-center border-4 border-white/5">
                <span className="text-8xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Safety Notice */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="max-w-3xl mx-auto rounded-2xl bg-white border-2 border-accent/20 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <h2 className="text-gray-900 text-xl">Electrical Safety Warning Signs</h2>
            </div>
            <ul className="space-y-4">
              {SAFETY_TIPS.map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-500 text-sm font-medium">
              If you notice any of these warning signs, call us immediately for a safety inspection.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center rounded-2xl bg-gradient-to-br from-accent to-accent-dark p-10 lg:p-14">
            <h2 className="text-white mb-4">Need an Electrician?</h2>
            <p className="text-white/90 text-lg mb-8">
              Our licensed electrical team is available for projects of any size — from a single outlet to a complete panel replacement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+18569002260"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-accent font-bold hover:bg-white/95 transition-colors"
              >
                📞 Call (856) 900-2260
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
              >
                Schedule Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
