import { Link } from 'react-router-dom'
import { usePageTitle } from '../usePageTitle'
import { site, focus, education, publications, certificates } from '../data'

export default function Home() {
  usePageTitle('')

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker">Medical oncologist</p>
            <h1>
              Dr. Geetanand
              <span>Rao</span>
            </h1>
            <p className="hero-line">{site.line}</p>
            <p className="hero-text">
              MBBS, MD in Radiation Oncology, and DrNB in Medical Oncology. Trained at RNT Medical
              College, PGIMS Rohtak, and Indraprastha Apollo Hospital, New Delhi.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-brass" to="/contact">
                Request a consultation
              </Link>
              <Link className="btn btn-ghost" to="/certificates">
                View certificates
              </Link>
            </div>
            <p className="hero-reg">
              {site.council} · Reg. {site.registration}
            </p>
          </div>
          <figure className="hero-portrait">
            <img
              src="/media/portrait-front.jpg"
              alt="Portrait of Dr. Geetanand Rao, medical oncologist"
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
              <span>{item.place}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker kicker-dark">Clinical focus</p>
            <h2>Training that covers the whole course of cancer care.</h2>
          </div>
          <div className="focus-grid">
            {focus.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="wrap quote-grid">
          <figure>
            <img
              src="/media/portrait-brown.jpg"
              alt="Dr. Geetanand Rao in a studio portrait"
            />
          </figure>
          <blockquote>
            <p>{site.line}</p>
            <footer>
              Member of the Association of Radiation Oncologists of India, the Indian Society of
              Medical and Paediatric Oncology, and the European Society for Medical Oncology.
            </footer>
            <Link to="/about">Read the full profile</Link>
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="wrap split-head">
          <div>
            <p className="kicker kicker-dark">Selected publications</p>
            <h2>Case reports and reviews from clinical work.</h2>
          </div>
          <Link className="text-link" to="/research">
            All research
          </Link>
        </div>
        <div className="wrap pub-list">
          {publications.slice(0, 3).map((paper) => (
            <article key={paper.title}>
              <h3>{paper.title}</h3>
              <p>{paper.journal}</p>
              <span>{paper.citation}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap award-panel">
          <div>
            <p className="kicker kicker-dark">Recognition</p>
            <h2>2nd prize, best poster</h2>
            <p>
              32nd UPAROICON 2020, Agra. A comparative study of three chemotherapy schedules in
              residual, recurrent, and metastatic head and neck carcinoma.
            </p>
            <Link className="text-link" to="/certificates">
              Open the certificate
            </Link>
          </div>
          <Link className="award-thumb" to="/certificates">
            <img
              src={certificates.find((item) => item.id === 'uparoicon').image}
              alt="Thumbnail of the UPAROICON certificate"
            />
            <span>Original certificate</span>
          </Link>
        </div>
      </section>

      <section className="close-band">
        <div className="wrap">
          <p className="kicker">Appointments</p>
          <h2>A consultation begins with a clear conversation.</h2>
          <p>Call, write, or send a short note. Clinic timing is confirmed personally.</p>
          <div className="hero-actions">
            <a className="btn btn-brass" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <Link className="btn btn-ghost" to="/contact">
              Write a message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
