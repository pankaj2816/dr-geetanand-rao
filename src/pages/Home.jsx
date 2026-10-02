import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { usePageTitle } from '../usePageTitle'
import { site, focus, education, publications, memberships, highlights } from '../data'
import ReviewsSection from '../components/ReviewsSection'
import GoogleIcon from '../components/GoogleIcon'

function DigitReel({ digit, started, delay }) {
  const target = parseInt(digit, 10)
  const isNumber = !Number.isNaN(target)

  if (!isNumber) {
    return <span className="digit-char">{digit}</span>
  }

  // Prepend a cycle so even single digits (3, 5, 6, 7) glide with realistic momentum
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].slice(0, 10 + target + 1)
  const targetIndex = items.length - 1
  const transform = started ? `translateY(-${targetIndex * 1.08}em)` : 'translateY(0em)'

  return (
    <span className="digit-window" aria-hidden="true">
      <span
        className="digit-track"
        style={{
          transform,
          transitionDelay: `${delay}ms`,
        }}
      >
        {items.map((num, i) => (
          <span key={i} className="digit-cell">
            {num}
          </span>
        ))}
      </span>
    </span>
  )
}

function SmoothCounter({ value, suffix = '', delay = 0 }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const digits = String(value).split('')

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setStarted(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <strong
      ref={ref}
      className={`smooth-stat ${started ? 'is-active' : ''}`}
      aria-label={`${value}${suffix}`}
    >
      <span className="digit-group" aria-hidden="true">
        {digits.map((d, i) => (
          <DigitReel key={i} digit={d} started={started} delay={delay + i * 90} />
        ))}
      </span>
      {suffix ? (
        <span
          className="stat-suffix"
          style={{ transitionDelay: `${delay + 1150}ms` }}
          aria-hidden="true"
        >
          {suffix}
        </span>
      ) : null}
    </strong>
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
              <Link className="btn btn-ghost" to="/certificates">
                Certificates
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

      <section className="cred-strip" aria-label="Qualifications">
        <div className="wrap stat-grid">
          {highlights.map((item, index) => (
            <article key={item.label} style={{ animationDelay: `${0.08 + index * 0.1}s` }}>
              <SmoothCounter value={item.value} suffix={item.suffix} delay={index * 130} />
              <span>{item.label}</span>
            </article>
          ))}
        </div>
        <div className="wrap cred-grid">
          {education.map((item) => (
            <article key={item.degree}>
              <p>{item.years}</p>
              <h2>{item.degree}</h2>
              <span>{item.city}</span>
            </article>
          ))}
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
          <Link className="text-link" to="/research">
            All research
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

      <section className="section section-tight">
        <Link className="wrap award-banner" to="/certificates">
          <strong>2nd</strong>
          <span>
            Best poster
            <small>UPAROICON 2020 · Agra</small>
          </span>
          <em>View certificate</em>
        </Link>
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
