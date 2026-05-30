const REVIEWS = [
  {
    name: "nams - Local Guide",
    rating: 5,
    text: "Our fireplace had electrical problem and gas was off too. Kevin send couple of workers to check on both. He was quick to respond and got our problem fixed in no time. Excellent service and experienced team, specially with storm round the corner couldn't be better than this. Thank you HVAC team.",
  },
  {
    name: "NF - Local Guide",
    rating: 5,
    text: "This company is one of the best companies I've had the pleasure of working with. I've had them over for various projects from installing flooring, to smaller projects (like fence work or installing panels) and they never disappoint.",
  },
  {
    name: "Paris L - Local Guide",
    rating: 5,
    text: "Kevin and his team just finished a project in Voorhees for a sale of mine. Great price and most of all, his professionalism and expertise, and SERVICE makes this your to go company!",
  },
  {
    name: "Customer Review",
    rating: 5,
    text: "Good people and great service, you can trust them. Couldn't be happier! 🩵",
  },
  {
    name: "Customer Review",
    rating: 5,
    text: "The service quality and attention to detail were far beyond my expectations.",
  },
  {
    name: "Customer Review",
    rating: 5,
    text: "Their prices are fair and the work is excellent.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ name, rating, text }: { name: string; rating: number; text: string }) {
  return (
    <article className="flex-shrink-0 w-80 sm:w-96 p-6 rounded-2xl bg-white border border-border hover:border-brand-red/20 transition-colors">
      <StarRating rating={rating} />
      <p className="mt-3 text-gray-700 text-sm leading-relaxed line-clamp-4">&ldquo;{text}&rdquo;</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-display font-bold text-sm">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-sm text-gray-900">{name}</p>
          <p className="text-xs text-muted">Verified Review</p>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="section-padding bg-surface overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 text-sm font-semibold mb-4">
            ⭐ 5.0 Rating
          </span>
          <h2 className="text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">
            Don&apos;t just take our word for it — hear from homeowners and businesses we&apos;ve helped across New Jersey.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="reveal reveal-delay-2">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

          <div
            className="marquee-track"
            style={{ "--marquee-duration": "45s" } as React.CSSProperties}
          >
            <div className="marquee-content gap-6 px-3">
              {doubled.map((review, i) => (
                <ReviewCard key={`review-${i}`} name={review.name} rating={review.rating} text={review.text} />
              ))}
            </div>
            <div className="marquee-content gap-6 px-3" aria-hidden="true">
              {doubled.map((review, i) => (
                <ReviewCard key={`review-dup-${i}`} name={review.name} rating={review.rating} text={review.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
