import Image from "next/image";

const GALLERY_ITEMS = [
  {
    title: "Commercial HVACR Installation",
    category: "HVACR",
    image: "/images/Commercial HVAC install.webp",
    alt: "Commercial HVACR system installation at a business site in Cherry Hill, NJ",
  },
  {
    title: "Commercial Equipment Setup",
    category: "HVACR",
    image: "/images/Equipment on comercial sites.webp",
    alt: "Large commercial HVACR equipment installed at an industrial site",
  },
  {
    title: "Heating System Installation",
    category: "Heating",
    image: "/images/Heating install.webp",
    alt: "Professional heating system and furnace efficiency installation in a New Jersey home",
  },
  {
    title: "HVACR System — Complete Install",
    category: "HVACR",
    image: "/images/HVAC install.webp",
    alt: "Complete HVACR system installation with indoor and outdoor units, custom ductwork",
  },
  {
    title: "Diagnostics & Refrigerant Service",
    category: "Service",
    image: "/images/Identification of problems.webp",
    alt: "HVACR technician performing diagnostics, refrigerant checks, and system troubleshooting",
  },
  {
    title: "Outdoor Unit Installation",
    category: "HVACR",
    image: "/images/Outdoor install 2.webp",
    alt: "Outdoor condenser unit installation for a residential air conditioning and refrigerant system",
  },
  {
    title: "Outdoor AC Unit Setup",
    category: "HVACR",
    image: "/images/Outdoor unit install.webp",
    alt: "Freshly installed outdoor HVACR unit at a home in Cherry Hill, refrigerant-charged and tested",
  },
];

function GalleryCard({ title, category, image, alt }: {
  title: string;
  category: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80 rounded-xl overflow-hidden relative group cursor-pointer">
      {/* Image container — portrait aspect ratio matching source images (~3:4) */}
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-6">
        <span className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#ff8a94" }}>
          {category}
        </span>
        <h3 className="text-white font-display font-bold text-base sm:text-lg leading-tight">
          {title}
        </h3>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/15 transition-colors duration-300 pointer-events-none" />
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
          <h2 className="text-gray-900 mb-4">HVACR & MEP Projects — Same-Day Turnaround</h2>
          <p className="text-gray-600 text-lg">
            Browse recent HVACR, refrigerant, electrical, and plumbing projects across Cherry Hill and South Jersey. From custom ductwork to full commercial system design — completed rapidly, built to last.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="reveal reveal-delay-2">
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Repeating marquee rows */}
          <div className="flex flex-col gap-4">
            {/* Row 1 — left to right */}
            <div>
              <div
                className="marquee-track"
                style={{ "--marquee-duration": "50s" } as React.CSSProperties}
              >
                <div className="marquee-content gap-4 px-2">
                  {doubled.map((item, i) => (
                    <GalleryCard
                      key={`r1-${i}`}
                      title={item.title}
                      category={item.category}
                      image={item.image}
                      alt={item.alt}
                    />
                  ))}
                </div>
                <div className="marquee-content gap-4 px-2" aria-hidden="true">
                  {doubled.map((item, i) => (
                    <GalleryCard
                      key={`r1-dup-${i}`}
                      title={item.title}
                      category={item.category}
                      image={item.image}
                      alt={item.alt}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2 — right to left */}
            <div>
              <div
                className="marquee-track"
                style={{ "--marquee-duration": "45s", animationDirection: "reverse" } as React.CSSProperties}
              >
                <div className="marquee-content gap-4 px-2">
                  {[...doubled].reverse().map((item, i) => (
                    <GalleryCard
                      key={`r2-${i}`}
                      title={item.title}
                      category={item.category}
                      image={item.image}
                      alt={item.alt}
                    />
                  ))}
                </div>
                <div className="marquee-content gap-4 px-2" aria-hidden="true">
                  {[...doubled].reverse().map((item, i) => (
                    <GalleryCard
                      key={`r2-dup-${i}`}
                      title={item.title}
                      category={item.category}
                      image={item.image}
                      alt={item.alt}
                    />
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
