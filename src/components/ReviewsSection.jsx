import { useState } from 'react'
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

  const visibleReviews =
    activeCategory === 'all'
      ? reviews
      : reviews.filter((r) => r.category === activeCategory)

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
                <strong>Google Business</strong>
                <small>Verified Profile · Gurugram</small>
              </div>
            </div>

            <div className="google-trust-score">
              <span className="rating-number">{site.googleRating}</span>
              <div>
                <div className="stars-row" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <span className="review-subtext">5.0 / 5.0 Rating</span>
              </div>
            </div>

            <span className="google-trust-action">
              <span>Read on Google Search</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </a>
        </div>

        <div className="review-filter-bar" role="tablist" aria-label="Filter reviews by category">
          {categories.map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeCategory === id}
              className={`review-tab ${activeCategory === id ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="reviews-grid">
          {visibleReviews.map((rev) => (
            <article key={rev.id} className="review-card">
              <header className="review-card-head">
                <div className="review-card-stars">
                  {'★'.repeat(rev.rating)}
                </div>
                <span className="verified-pill" title="Verified Google Business Review">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Verified Patient
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
