const HOURS = [
  { day: "Monday – Sunday", hours: "Open 24 Hours" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg">
            Need service? We&apos;re available 24/7. Call us or visit our office in Cherry Hill.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Info Column */}
          <div className="reveal space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-gray-900 mb-1">Phone</h3>
                <a
                  href="tel:+18569002260"
                  className="text-brand-red hover:text-brand-red-dark font-semibold text-lg transition-colors block"
                >
                  (856) 900-2260
                </a>
                <a
                  href="tel:+18565487018"
                  className="text-brand-blue hover:text-brand-blue-dark font-semibold text-lg transition-colors block"
                >
                  (856) 548-7018
                </a>
                <p className="text-sm text-gray-500 mt-1">Call anytime — 24/7 emergency line</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-gray-900 mb-1">Address</h3>
                <a
                  href="https://www.google.com/maps/search/2050+Fairfax+Ave+Unit+K,+Cherry+Hill,+NJ+08003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-brand-red transition-colors"
                >
                  <p>2050 Fairfax Ave Unit K</p>
                  <p>Cherry Hill Township, NJ 08003</p>
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-gray-900 mb-1">Email</h3>
                <a
                  href="mailto:DoctorHVACR@KNJRealty.com"
                  className="text-brand-blue hover:text-brand-blue-dark font-semibold text-lg transition-colors"
                >
                  DoctorHVACR@KNJRealty.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-gray-900 mb-1">Hours</h3>
                {HOURS.map((h) => (
                  <div key={h.day} className="flex items-center gap-3">
                    <span className="text-gray-700 text-sm">{h.day}</span>
                    <span className="text-sm font-medium text-green-600">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-red to-brand-red-dark text-white">
              <h3 className="font-display font-bold text-xl mb-2">Need Emergency Service?</h3>
              <p className="text-white/90 text-sm mb-4">Don&apos;t wait — our team is available 24/7 to handle your HVAC, electrical, and plumbing emergencies.</p>
              <a
                href="tel:+18569002260"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-brand-red font-bold hover:bg-white/90 transition-colors"
              >
                📞 Call Now
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl overflow-hidden border-2 border-gray-200 h-full min-h-[400px] bg-gray-100">
              <iframe
                title="Doctor HVACR location on Google Maps — 2050 Fairfax Ave Unit K, Cherry Hill Township, NJ 08003"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.1!2d-75.002!3d39.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6cba0fdf0537d%3A0x6e4a9e2b1c9d5e0!2s2050+Fairfax+Ave%2C+Cherry+Hill%2C+NJ+08003!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
