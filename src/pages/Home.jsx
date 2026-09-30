import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { usePageTitle } from '../usePageTitle'
import { site, focus, education, publications, memberships, highlights } from '../data'

function CountUp({ value, suffix = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setShown(value)
      return undefined
    }

    let frame = 0
    let started = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        const start = performance.now()
        const duration = 1200
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / duration)
          const eased = 1 - (1 - progress) ** 3
          setShown(Math.round(eased * value))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <strong ref={ref}>
      {shown}
      {suffix}
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
              <CountUp value={item.value} suffix={item.suffix} />
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
