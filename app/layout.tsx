import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Doctor HVACR | Electrical, HVAC & Plumbing Services in Cherry Hill, NJ",
  description:
    "Doctor HVACR Electrical & Plumbing — Cherry Hill's trusted HVAC contractor. 5-star rated, 24/7 emergency service. HVAC repair, electrical, and plumbing for homes and businesses.",
  keywords: [
    "HVAC contractor Cherry Hill",
    "HVAC repair New Jersey",
    "electrical services NJ",
    "plumbing services Cherry Hill",
    "air conditioning repair",
    "heating repair",
    "emergency HVAC",
  ],
  openGraph: {
    title: "Doctor HVACR | HVAC, Electrical & Plumbing",
    description:
      "Cherry Hill's premier HVAC contractor. 5-star rated, 24/7 emergency service. Licensed & insured.",
    url: "https://doctorhvacr.com",
    siteName: "Doctor HVACR",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctor HVACR | HVAC, Electrical & Plumbing",
    description:
      "Cherry Hill's premier HVAC contractor. 5-star rated, 24/7 emergency service.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Doctor HVACR Electrical & Plumbing",
  description:
    "HVAC contractor. We specialize in electrical, heating, cooling, and plumbing services for residential and commercial properties.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2050 Fairfax Ave Unit K",
    addressLocality: "Cherry Hill Township",
    addressRegion: "NJ",
    postalCode: "08003",
    addressCountry: "US",
  },
  telephone: "+18569002260",
  url: "https://doctorhvacr.com",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "44",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var revealed = false;
                function reveal() {
                  if (revealed) return;
                  revealed = true;
                  var els = document.querySelectorAll('.reveal, .hero-fade-up, .hero-line');
                  for (var i = 0; i < els.length; i++) {
                    els[i].classList.add('is-visible');
                  }
                }
                if ('IntersectionObserver' in window) {
                  var observer = new IntersectionObserver(function(entries) {
                    for (var i = 0; i < entries.length; i++) {
                      if (entries[i].isIntersecting) {
                        entries[i].target.classList.add('is-visible');
                      }
                    }
                  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
                  document.addEventListener('DOMContentLoaded', function() {
                    var els = document.querySelectorAll('.reveal, .hero-fade-up, .hero-line');
                    for (var i = 0; i < els.length; i++) {
                      observer.observe(els[i]);
                    }
                  });
                } else {
                  document.addEventListener('DOMContentLoaded', reveal);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
