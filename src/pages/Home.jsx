import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { usePageTitle } from '../usePageTitle'
import { site, focus, education, publications, memberships, highlights } from '../data'
import ReviewsSection from '../components/ReviewsSection'

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
            <div className="hero-kicker-row">
              <p className="kicker">Medical Oncologist</p>
              <span className="hero-status-badge">
                <span className="live-pulse" aria-hidden="true" />
                OPD Consultations · {site.clinic}
              </span>
            </div>
            <div className="hero-identity-lockup">
              <div className="hero-title-group">
                <h1>
                  Geetanand
                  <span>Rao</span>
                </h1>
                <p className="hero-line">Clear plans. Careful treatment.</p>
              </div>

              <div className="hero-mobile-avatar-wrap" aria-label="Dr. Geetanand Rao">
                <div className="hero-mobile-avatar-frame">
                  <img
                    src={`${import.meta.env.BASE_URL}media/portrait-front.jpg`}
                    alt="Dr. Geetanand Rao"
                  />
                  <span className="hero-mobile-verified" title={`Verified by ${site.council}`}>
                    <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </span>
                </div>
                <div className="hero-mobile-degree-tags">
                  <span>MBBS</span>
                  <span>MD</span>
                  <span>DrNB</span>
                </div>
              </div>
            </div>

            <p className="hero-desc">
              Dedicated cancer care specializing in evidence-based systemic therapies, targeted protocols, and compassionate patient management.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-brass hero-btn-main" to="/contact">
                <span>Book a Consultation</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link className="btn btn-ghost hero-btn-sub" to="/credentials">
                <span>Research & Credentials</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="hero-aside-wrap">
            <span className="hero-aside-kicker">Training Milestones</span>
            <ol className="hero-aside">
              {education.map((item) => (
                <li key={item.degree} className="hero-milestone-item">
                  <span className="hero-milestone-year">{item.years}</span>
                  <strong className="hero-milestone-degree">{item.degree}</strong>
                  <span className="hero-milestone-place">
                    {item.place.split(',')[0]} · {item.city}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <figure className="hero-portrait">
            <div className="hero-portrait-glow" aria-hidden="true" />
            <div className="hero-portrait-frame">
              <img
                src={`${import.meta.env.BASE_URL}media/portrait-front.jpg`}
                alt="Portrait of Dr. Geetanand Rao"
              />
              <figcaption>
                <span>MBBS</span>
                <span>MD</span>
                <span>DrNB</span>
              </figcaption>
            </div>
            <div className="hero-verified-badge" title={`Verified by ${site.council}`}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <div>
                <strong>DMC Reg. {site.registration}</strong>
                <small>{site.council}</small>
              </div>
            </div>
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

      <section className="section section-tight" aria-label="Professional Affiliations and Medical Accreditations">
        <div className="wrap affiliations-band">
          <div className="affiliations-head">
            <div>
              <p className="kicker kicker-dark">Recognised Standing</p>
              <h2 className="affiliations-title">Professional Affiliations & Licensure.</h2>
            </div>
            <p className="affiliations-lead">
              Active memberships in national and international oncology societies alongside official state medical council registration.
            </p>
          </div>

          <div className="affiliations-grid">
            {memberships.map((item) => (
              <article key={item.short} className="affiliation-card">
                <header className="affiliation-card-top">
                  <span className="affiliation-badge">{item.short}</span>
                  <span className="affiliation-type">
                    {item.short === 'AROI' ? 'Radiation Oncology' : item.short === 'ISMPO' ? 'Medical Oncology' : 'International'}
                  </span>
                </header>
                <h3 className="affiliation-name">{item.name}</h3>
                <span className="affiliation-meta">
                  {item.short === 'AROI'
                    ? 'Apex national association for radiation oncology practitioners'
                    : item.short === 'ISMPO'
                    ? 'Premier Indian society for medical and paediatric oncology'
                    : 'Leading European professional society for medical oncology'}
                </span>
              </article>
            ))}

            <article className="affiliation-card is-licence">
              <header className="affiliation-card-top">
                <span className="affiliation-badge badge-licence">DMC</span>
                <span className="affiliation-type type-licence">Official Licence</span>
              </header>
              <h3 className="affiliation-name">{site.council}</h3>
              <p className="affiliation-reg-row">
                <span>Medical Reg. No.</span>
                <strong className="reg-num">{site.registration}</strong>
              </p>
              <span className="affiliation-meta">
                Verified registration with Delhi Medical Council · Reg. {site.registrationDate}
              </span>
            </article>
          </div>
        </div>
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
