import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="reveal relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-blue">
              <Image
                src="/images/Our team.webp"
                alt="Doctor HVACR team of certified HVACR technicians and electricians"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Credential Badge Overlay */}
            <div className="absolute -bottom-4 -right-2 lg:-right-4 bg-white rounded-xl shadow-lg p-3 sm:p-4 flex items-center gap-3 z-10">
              <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-accent text-white font-display font-bold text-base sm:text-lg">
                PhD
              </div>
              <div>
                <p className="font-display font-bold text-sm text-gray-900">Kevin</p>
                <span className="text-xs text-gray-500">Founder & Lead Engineer</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="reveal reveal-delay-2">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Meet Kevin
            </span>
            <h2 className="text-gray-900 mb-6">
              15 Years of Designing & Building — From Blueprint to Finished System
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Kevin founded Doctor HVACR with a simple philosophy: do the job right, treat customers like family, and never stop learning. With a <strong>PhD</strong> and over <strong>15 years of hands-on design and build experience</strong> spanning mechanical, electrical, and plumbing systems — as well as architectural and builder-grade construction — Kevin brings an engineer&apos;s precision and a tradesperson&apos;s practicality to every project.
              </p>
              <p>
                His expertise covers the full spectrum: <strong>custom ductwork fabrication, Manual J load calculations</strong> for precise system sizing, <strong>AC and furnace efficiency design</strong>, refrigerant management, and complete HVACR system builds. From routine maintenance tune-ups to brand-new installations, most services are completed within a single day — because he knows your time matters.
              </p>
              <p>
                Whether it&apos;s a residential retrofit requiring architectural integration or a commercial build demanding MEP coordination, Kevin&apos;s cross-disciplinary background ensures every system is designed correctly from the start — no guesswork, no callbacks, just performance.
              </p>
            </div>

            {/* Expertise badges */}
            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {[
                "PhD — Mechanical Engineering",
                "15+ Years Design & Build",
                "HVACR & Refrigerant Specialist",
                "MEP Systems Integration",
                "Architectural Coordination",
                "Same-Day Service",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-red/5 border border-brand-red/10 text-brand-red text-xs font-medium"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-brand-red text-white font-semibold hover:bg-brand-red-dark transition-colors"
            >
              Talk to Kevin
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
