import { Link } from 'react-router-dom'
import { usePageTitle } from '../usePageTitle'
import { site, focus, education, publications, memberships } from '../data'

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
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}media/still-light.jpg`}
                alt="Soft light across a pale wall"
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
