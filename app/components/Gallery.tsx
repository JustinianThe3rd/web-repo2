const GALLERY_ITEMS = [
  { title: "AC Installation", category: "HVAC" },
  { title: "Electrical Panel Upgrade", category: "Electrical" },
  { title: "Furnace Repair", category: "Heating" },
  { title: "Water Heater Install", category: "Plumbing" },
  { title: "Ductwork Service", category: "HVAC" },
  { title: "Lighting Installation", category: "Electrical" },
];

function GalleryCard({ title, category }: { title: string; category: string }) {
  return (
    <div className="flex-shrink-0 w-72 sm:w-80 lg:w-96 h-56 sm:h-64 rounded-xl overflow-hidden relative group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-navy" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
        <span className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#ff8a94" }}>{category}</span>
        <h3 className="text-white font-display font-bold text-lg">{title}</h3>
      </div>
      <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/20 transition-colors duration-300" />
    </div>
  );
}

export default function Gallery() {
  const doubled = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

  return (
    <section id="gallery" className="section-padding bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="text-gray-900 mb-4">Projects We&apos;re Proud Of</h2>
          <p className="text-gray-600 text-lg">
            Browse a selection of recent HVAC, electrical, and plumbing projects we&apos;ve completed for homeowners across Cherry Hill.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="reveal reveal-delay-2">
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Repeating marquee rows */}
          <div className="flex flex-col gap-4">
            {/* Row 1 — left to right */}
            <div>
              <div
                className="marquee-track"
                style={{ "--marquee-duration": "40s" } as React.CSSProperties}
              >
                <div className="marquee-content gap-4 px-2">
                  {doubled.map((item, i) => (
                    <GalleryCard key={`r1-${i}`} title={item.title} category={item.category} />
                  ))}
                </div>
                <div className="marquee-content gap-4 px-2" aria-hidden="true">
                  {doubled.map((item, i) => (
                    <GalleryCard key={`r1-dup-${i}`} title={item.title} category={item.category} />
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2 — right to left */}
            <div>
              <div
                className="marquee-track"
                style={{ "--marquee-duration": "35s", animationDirection: "reverse" } as React.CSSProperties}
              >
                <div className="marquee-content gap-4 px-2">
                  {[...doubled].reverse().map((item, i) => (
                    <GalleryCard key={`r2-${i}`} title={item.title} category={item.category} />
                  ))}
                </div>
                <div className="marquee-content gap-4 px-2" aria-hidden="true">
                  {[...doubled].reverse().map((item, i) => (
                    <GalleryCard key={`r2-dup-${i}`} title={item.title} category={item.category} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
