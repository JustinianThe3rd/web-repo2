const SERVICES = [
  {
    icon: (
      <svg className="w-7 h-7 text-brand-red group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "AC Repair & Installation",
    description: "Fast, reliable air conditioning repair and new system installations. We service all major brands and offer energy-efficient upgrades.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-red group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "Heating Systems",
    description: "Furnace repair, boiler service, and full heating system installations. Keep your home warm and safe through every winter.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-red group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Electrical Services",
    description: "Licensed electricians for panel upgrades, wiring, outlets, lighting installations, and emergency electrical repairs.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-red group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Plumbing Solutions",
    description: "From leak repairs to full pipe replacement. We handle drain cleaning, water heaters, fixtures, and emergency plumbing.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-gray-900 mb-4">
            Complete Home Comfort Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            From HVAC to electrical and plumbing, we provide comprehensive services to keep your home running smoothly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className={`reveal reveal-delay-${i + 1} group p-6 lg:p-8 rounded-2xl border-2 border-gray-100 bg-card hover:border-brand-red hover:shadow-card-hover transition-all duration-300`}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-red/10 mb-5 group-hover:bg-brand-red transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 mt-4 text-brand-red font-semibold text-sm hover:gap-2 transition-all"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
