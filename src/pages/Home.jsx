import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { usePageTitle } from '../usePageTitle'
import { site, focus, education, publications, memberships, highlights } from '../data'
import ReviewsSection from '../components/ReviewsSection'
import GoogleIcon from '../components/GoogleIcon'

function StatIcon({ type }) {
  if (type === 'experience') {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 14" />
      </svg>
    )
  }
  if (type === 'papers') {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="9" y1="7" x2="16" y2="7" />
        <line x1="9" y1="11" x2="14" y2="11" />
      </svg>
    )
  }
  if (type === 'procedures') {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l2.9 6.2 6.8 1-4.9 4.8 1.2 6.8L12 17.5 6 20.8l1.2-6.8-4.9-4.8 6.8-1z" />
    </svg>
  )
}

function AnimatedCounter({ value, suffix = '', delay = 0 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setCount(value)
      setStarted(true)
      return undefined
    }

    let frameId
    let timerId

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          timerId = setTimeout(() => {
            setStarted(true)
            const duration = 1400
            const startTime = performance.now()

            const step = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              // Organic ease-out quart curve
              const easeOut = 1 - Math.pow(1 - progress, 4)
              const current = Math.round(easeOut * value)

              setCount(current)

              if (progress < 1) {
                frameId = requestAnimationFrame(step)
              } else {
                setCount(value)
              }
            }

            frameId = requestAnimationFrame(step)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(node)

    // Guaranteed visibility safety fallback
    const safety = setTimeout(() => {
      setCount(value)
      setStarted(true)
    }, 2000)

    return () => {
      observer.disconnect()
      clearTimeout(timerId)
      clearTimeout(safety)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [value, delay])

  return (
    <div
      ref={ref}
      className={`stat-digit-display ${started ? 'is-live' : ''}`}
      aria-label={`${value}${suffix}`}
    >
      <span className="stat-digit-num">{count}</span>
      {suffix ? <span className="stat-digit-suffix">{suffix}</span> : null}
    </div>
  )
}

export default function Home() {
  usePageTitle('')

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker">Medical oncologist</p>
            <h1>
              Geetanand
              <span>Rao</span>
            </h1>
            <p className="hero-line">Clear plans. Careful treatment.</p>
            <div className="hero-actions">
              <Link className="btn btn-brass" to="/contact">
                Book a consult
              </Link>
              <Link className="btn btn-ghost" to="/credentials">
                Credentials
              </Link>
            </div>
            <a
              className="hero-google-badge"
              href={site.googleBusinessUrl}
              target="_blank"
              rel="noreferrer"
              title="Verified Oncologist on Google Business · Park Hospital, Gurugram"
            >
              <GoogleIcon size={16} />
              <span>
                <strong>5.0 ★★★★★</strong> Verified on Google · {site.addressShort}
              </span>
            </a>
          </div>
          <ol className="hero-aside">
            {education.map((item) => (
              <li key={item.city}>
                <span>{item.years}</span>
                <strong>{item.city}</strong>
              </li>
            ))}
          </ol>
          <figure className="hero-portrait">
            <img
              src={`${import.meta.env.BASE_URL}media/portrait-front.jpg`}
              alt="Portrait of Dr. Geetanand Rao"
            />
            <figcaption>
              <span>MBBS</span>
              <span>MD</span>
              <span>DrNB</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="cred-strip" aria-label="Clinical Standing & Qualifications">
        <div className="wrap">
          <div className="stat-strip-head">
            <div>
              <span className="kicker-gold">Verified Clinical Credentials</span>
              <h2 className="stat-strip-heading">Practice Highlights & Standing.</h2>
            </div>
            <p className="stat-strip-lead">
              Evidence-based medical oncology backed by triple specialization, published clinical papers, and accredited procedures.
            </p>
          </div>

          <div className="stat-card-grid">
            {highlights.map((item, index) => (
              <article key={item.id} className="stat-card">
                <header className="stat-card-top">
                  <span className="stat-card-kicker">{item.kicker}</span>
                  <div className="stat-card-icon" aria-hidden="true">
                    <StatIcon type={item.icon} />
                  </div>
                </header>

                <div className="stat-value-row">
                  <AnimatedCounter
                    value={item.value}
                    suffix={item.suffix}
                    delay={index * 130}
                  />
                </div>

                <h3 className="stat-card-label">{item.label}</h3>
                <p className="stat-card-detail">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="cred-timeline-band">
            <div className="cred-timeline-badge">
              <span>Medical Training</span>
              <small>3 Premier Institutions</small>
            </div>
            <div className="cred-timeline-cards">
              {education.map((item) => (
                <article key={item.degree} className="cred-degree-card">
                  <span className="cred-degree-years">{item.years}</span>
                  <h3 className="cred-degree-title">{item.degree}</h3>
                  <p className="cred-degree-place">{item.place.split(',')[0]}</p>
                  <span className="cred-degree-city">{item.city}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker kicker-dark">Focus</p>
            <h2>Four parts of the work.</h2>
          </div>
          <div className="focus-grid focus-slim">
            {focus.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.line}</p>
              </article>
            ))}
          </div>
          <div className="gallery">
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}media/portrait-brown.jpg`}
                alt="Dr. Geetanand Rao in a studio portrait"
              />
            </figure>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}media/still-desk.jpg`}
                alt="A stethoscope resting on warm stone"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="wrap society-rail" aria-label="Societies">
        {memberships.map((item) => (
          <span key={item.short} title={item.name}>
            {item.short}
          </span>
        ))}
        <span title={site.council}>DMC {site.registration}</span>
      </section>

      <section className="section">
        <div className="wrap split-head">
          <div>
            <p className="kicker kicker-dark">Papers</p>
            <h2>Selected work.</h2>
          </div>
          <Link className="text-link" to="/credentials">
            Research & credentials
          </Link>
        </div>
        <div className="wrap pub-list">
          {publications.slice(0, 3).map((paper, index) => (
            <article key={paper.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{paper.title}</h3>
                <p>{paper.journal}</p>
              </div>
            </article>
          ))}
        </div>
      </section>


      <ReviewsSection />

      <section className="close-band">
        <div className="wrap close-row">
          <h2>Speak directly.</h2>
          <div className="hero-actions">
            <a className="btn btn-brass" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <Link className="btn btn-ghost" to="/contact">
              Write
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
