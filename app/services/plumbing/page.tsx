import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plumbing Services | Doctor HVACR — Cherry Hill, NJ",
  description:
    "Expert plumbing repair and installation in Cherry Hill, NJ. Water heaters, drain cleaning, leak repair, and emergency plumbing. Call (856) 900-2260.",
  keywords: [
    "plumber Cherry Hill",
    "plumbing repair NJ",
    "water heater installation",
    "drain cleaning Cherry Hill",
    "emergency plumber NJ",
  ],
};

const SERVICES = [
  {
    title: "Leak Detection & Repair",
    description:
      "Hidden leaks can cause thousands of dollars in water damage before you even notice. We use advanced leak detection tools to find and repair leaks in walls, under slabs, and in your yard — fast and with minimal disruption to your home.",
  },
  {
    title: "Drain Cleaning & Sewer Services",
    description:
      "Slow drains, clogs, and backups are no match for our professional drain cleaning. From snaking and hydro jetting to sewer line camera inspections and repairs, we clear blockages completely and help prevent future problems.",
  },
  {
    title: "Water Heater Installation & Repair",
    description:
      "Whether you have a tank or tankless water heater, we keep the hot water flowing. We repair all common issues — pilot light failures, sediment buildup, thermostat problems, and leaks. When it&apos;s time for replacement, we install energy-efficient models that save you money.",
  },
  {
    title: "Fixture Installation",
    description:
      "Upgrading your bathroom or kitchen? We install faucets, sinks, toilets, showers, bathtubs, garbage disposals, and more. Every installation is done to code with proper sealing and connections to prevent future leaks.",
  },
  {
    title: "Pipe Repair & Repiping",
    description:
      "Old, corroded pipes can contaminate your water and cause low pressure. We repair leaky pipes and perform whole-home repiping when needed, using durable copper and PEX materials that last for decades.",
  },
  {
    title: "Emergency Plumbing",
    description:
      "Burst pipes, sewage backups, major leaks — plumbing emergencies can&apos;t wait. Our 24/7 emergency plumbers arrive quickly to minimize damage and get your system back in working order.",
  },
];

const MAINTENANCE_TIPS = [
  { tip: "Check under sinks monthly for signs of moisture or dripping", icon: "🔍" },
  { tip: "Faucet aerators should be cleaned every few months to maintain water pressure", icon: "💧" },
  { tip: "Set your water heater to 120°F to save energy and prevent scalding", icon: "🌡️" },
  { tip: "Pour boiling water down drains monthly to prevent buildup", icon: "🫖" },
  { tip: "Know where your main water shut-off valve is in case of emergency", icon: "🚰" },
  { tip: "Have your sewer line camera-inspected every 2-3 years if your home is older", icon: "📹" },
];

export default function PlumbingPage() {
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
                Plumbing Services
              </span>
              <h1 className="text-white mb-6">
                Plumbing Repair & Installation
              </h1>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                From leak repairs to water heater installations, Doctor HVACR provides complete plumbing solutions for your home — available 24/7 for emergencies.
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
                <span className="text-8xl">🔧</span>
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

      {/* Maintenance Tips */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-gray-900 mb-4">Plumbing Maintenance Tips</h2>
            <p className="text-gray-600 text-lg">
              A little preventive care goes a long way. Follow these tips to keep your plumbing in top shape.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            {MAINTENANCE_TIPS.map((item) => (
              <div
                key={item.tip}
                className="flex items-start gap-3 p-5 rounded-xl bg-white border border-border"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center rounded-2xl bg-gradient-to-br from-accent to-accent-dark p-10 lg:p-14">
            <h2 className="text-white mb-4">Plumbing Problem? We&apos;re Here 24/7.</h2>
            <p className="text-white/90 text-lg mb-8">
              Don&apos;t let a leak turn into a disaster. Call Doctor HVACR for fast, reliable plumbing service any time of day or night.
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
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
