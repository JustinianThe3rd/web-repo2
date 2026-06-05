export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-brand-navy via-brand-blue-dark to-brand-blue"
      style={{ minHeight: "100vh" }}
    >
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red" />

      {/* Large decorative text */}
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 font-display font-bold text-[20rem] leading-none text-white/[0.04] select-none pointer-events-none hidden xl:block">
        HVACR
      </div>

      {/* Main content — vertically centered */}
      <div className="relative z-10 container flex flex-col items-center justify-center text-center pt-20 pb-28 px-4">
        {/* Badge */}
        <div className="hero-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open 24/7 — Emergency HVACR Service Available
        </div>

        {/* Heading */}
        <h1 className="hero-fade-up reveal-delay-1 text-white max-w-4xl mx-auto mb-6">
          Cherry Hill&apos;s Premier
          <span className="block text-white drop-shadow-[0_0_30px_rgba(255,60,80,0.4)]" style={{ color: "#ff6b7a" }}>
            HVACR & Air Conditioning Specialists
          </span>
        </h1>

        {/* Subheading */}
        <p className="hero-fade-up reveal-delay-2 text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-6">
          From refrigerant recovery and custom ductwork to Manual J load calculations and furnace efficiency design — Doctor HVACR delivers expert mechanical, electrical, and plumbing services. Most jobs completed within a single day.
        </p>

        {/* Warranty Strip */}
        <div className="hero-fade-up reveal-delay-2 flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-xs sm:text-sm font-semibold">
            ✓ 10-Year Equipment Warranty
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-xs sm:text-sm font-semibold">
            ✓ Covers NJ, DE, and PA
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-xs sm:text-sm font-semibold">
            ✓ 2-Year Labor Warranty on New Installs
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-xs sm:text-sm font-semibold">
            ✓ Extended 5–10 Year Warranty Available
          </span>
        </div>

        {/* CTAs */}
        <div className="hero-fade-up reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+18569002260"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-red text-white font-semibold text-lg hover:bg-brand-red-dark transition-colors shadow-lg shadow-brand-red/30 w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now — (856) 900-2260
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-brand-blue font-semibold text-lg hover:bg-white/95 transition-colors shadow-lg w-full sm:w-auto"
          >
            Get a Free Quote
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Stats Row */}
        <div className="hero-fade-up reveal-delay-4 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-3xl w-full mx-auto">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "5★", label: "44 Reviews" },
            { value: "24/7", label: "Emergency Service" },
            { value: "1-Day", label: "Most Jobs Done" },
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-5">
              <div className="font-display font-bold text-2xl lg:text-3xl text-white">{stat.value}</div>
              <div className="text-sm text-white/80 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 lg:h-16 block">
          <polygon points="0,60 1440,60 1440,20" fill="white" />
          <rect x="0" y="58" width="1440" height="2" fill="white" />
        </svg>
      </div>
    </section>
  );
}
