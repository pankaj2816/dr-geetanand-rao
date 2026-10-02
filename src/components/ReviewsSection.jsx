import { useState, useRef, useEffect } from 'react'
import { site, reviews } from '../data'
import GoogleIcon from './GoogleIcon'

const categories = [
  ['all', 'All Reflections'],
  ['Chemotherapy', 'Chemotherapy'],
  ['Second Opinion', 'Second Opinion'],
  ['Targeted Care', 'Targeted Care'],
  ['Consultation', 'Consultation'],
]

export default function ReviewsSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const sliderRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeDot, setActiveDot] = useState(0)

  const visibleReviews =
    activeCategory === 'all'
      ? reviews
      : reviews.filter((r) => r.category === activeCategory)

  const checkScroll = () => {
    const el = sliderRef.current
    if (!el) return
    const isAtStart = el.scrollLeft <= 8
    const isAtEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 8

    setCanScrollLeft(!isAtStart)
    setCanScrollRight(!isAtEnd)

    // Calculate active slide index
    const cards = el.querySelectorAll('.review-card')
    if (cards.length > 0) {
      const cardWidth = cards[0].offsetWidth + 24
      const index = Math.round(el.scrollLeft / cardWidth)
      setActiveDot(Math.max(0, Math.min(index, visibleReviews.length - 1)))
    }
  }

  useEffect(() => {
    checkScroll()
    const el = sliderRef.current
    if (!el) return
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [visibleReviews])

  const slide = (direction) => {
    const el = sliderRef.current
    if (!el) return
    const firstCard = el.querySelector('.review-card')
    const scrollAmount = firstCard ? firstCard.offsetWidth + 24 : 420

    el.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  const scrollToIndex = (index) => {
    const el = sliderRef.current
    if (!el) return
    const cards = el.querySelectorAll('.review-card')
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      })
    }
  }

  return (
    <section className="section reviews-section" id="reviews" aria-label="Patient Reviews">
      <div className="wrap">
        <div className="reviews-header">
          <div>
            <p className="kicker kicker-dark">Patient Experiences</p>
            <h2>Care described by patients and families.</h2>
            <p className="reviews-subtitle">
              Authentic reflections from consultations, treatment planning, and therapy at Park
              Hospital, Gurugram.
            </p>
          </div>

          <a
            className="google-trust-card"
            href={site.googleBusinessUrl}
            target="_blank"
            rel="noreferrer"
            title="Open Dr. Geetanand Rao on Google"
          >
            <div className="google-trust-top">
              <span className="google-icon-pill">
                <GoogleIcon size={20} />
              </span>
              <div>
                <strong>Google Business Profile</strong>
                <small>Official Profile · Gurugram</small>
              </div>
            </div>

            <div className="google-trust-score">
              <span className="rating-number">{site.googleRating}</span>
              <div>
                <div className="stars-row" aria-label="5.0 out of 5 rating on Google">
                  ★★★★★
                </div>
                <span className="review-subtext">Google Listing Score</span>
              </div>
            </div>

            <span className="google-trust-action">
              <span>Read Reviews on Google</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </a>
        </div>

        {/* Toolbar: Category Filters */}
        <div className="reviews-toolbar">
          <div className="review-filter-bar" role="tablist" aria-label="Filter reviews by category">
            {categories.map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={activeCategory === id}
                className={`review-tab ${activeCategory === id ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveCategory(id)
                  if (sliderRef.current) sliderRef.current.scrollLeft = 0
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Single Row Sliding Carousel Track with Side Navigation Arrows */}
        <div className="reviews-slider-wrap">
          <button
            type="button"
            className="slider-arrow-side slider-arrow-prev"
            onClick={() => slide('prev')}
            disabled={!canScrollLeft}
            aria-label="Previous review"
            title="Previous review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="reviews-track" ref={sliderRef}>
            {visibleReviews.map((rev) => (
              <article key={rev.id} className="review-card">
                <header className="review-card-head">
                  <div className="review-card-stars">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className="verified-pill" title="Verified Consultation Experience">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Verified Experience
                  </span>
                </header>

                <span className="review-tag">{rev.tag}</span>

                <blockquote className="review-body">
                  <p>"{rev.text}"</p>
                </blockquote>

                <footer className="review-footer">
                  <div className="author-avatar" aria-hidden="true">
                    {rev.author.replace('Col. ', '').replace('Dr. ', '').charAt(0)}
                  </div>
                  <div className="author-info">
                    <strong>{rev.author}</strong>
                    <small>
                      {rev.relation} · {rev.location}
                    </small>
                  </div>
                  <span className="review-date">{rev.date}</span>
                </footer>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="slider-arrow-side slider-arrow-next"
            onClick={() => slide('next')}
            disabled={!canScrollRight}
            aria-label="Next review"
            title="Next review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicator Dots */}
          {visibleReviews.length > 1 && (
            <div className="slider-dots" role="tablist" aria-label="Review page dots">
              {visibleReviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={activeDot === i}
                  aria-label={`Go to review ${i + 1}`}
                  className={`slider-dot ${activeDot === i ? 'is-active' : ''}`}
                  onClick={() => scrollToIndex(i)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="reviews-cta-banner">
          <div className="cta-left">
            <span className="map-pin-icon" aria-hidden="true">
              📍
            </span>
            <div>
              <strong>Consultations at {site.clinic}</strong>
              <p>{site.address}</p>
            </div>
          </div>
          <div className="cta-actions">
            <a
              className="btn btn-brass"
              href={site.googleMapsDirections}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions on Maps
            </a>
            <a
              className="btn btn-ghost-dark"
              href={site.googleBusinessUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Google Knowledge Panel
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
