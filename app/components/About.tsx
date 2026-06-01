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
                alt="Doctor HVACR team of certified HVAC technicians and electricians"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Rating Badge Overlay */}
            <div className="absolute -bottom-4 -right-2 lg:-right-4 bg-white rounded-xl shadow-lg p-3 sm:p-4 flex items-center gap-3 z-10">
              <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-accent text-white font-display font-bold text-lg sm:text-xl">
                5.0
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500">44 Reviews</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="reveal reveal-delay-2">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-gray-900 mb-6">
              Your Trusted Local Experts Since Day One
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Doctor HVACR Electrical & Plumbing is a women-owned and Asian-owned business proudly serving Cherry Hill Township and the greater New Jersey area. We specialize in providing top-quality HVAC, electrical, and plumbing services with a focus on honesty, professionalism, and customer satisfaction.
              </p>
              <p>
                Our experienced team handles everything from emergency repairs to full system installations. We believe in transparent pricing — no upselling, no hidden fees, just quality work you can count on.
              </p>
              <p>
                Available 24/7 for emergencies, we&apos;re the team your neighbors trust when it matters most.
              </p>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {[
                "Licensed & Insured",
                "Women-Owned Business",
                "Asian-Owned Business",
                "LGBTQ+ Friendly",
                "No Upselling",
                "24/7 Emergency",
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
              Schedule Service
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
