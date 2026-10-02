import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Lightbox from '../components/Lightbox'
import { usePageTitle } from '../usePageTitle'
import { projects, publications, conferences, certificates, site } from '../data'

const sections = [
  ['all', 'All Records'],
  ['publications', `Publications (${publications.length})`],
  ['certificates', `Certificates (${certificates.length})`],
  ['awards', 'Awards & Honours'],
  ['conferences', 'Conferences & Studies'],
]

export default function Credentials() {
  usePageTitle('Research & Credentials')
  const [activeSection, setActiveSection] = useState('all')
  const [certFilter, setCertFilter] = useState('all')
  const [lightboxItem, setLightboxItem] = useState(null)

  const visibleCerts =
    certFilter === 'all'
      ? certificates
      : certificates.filter((item) => item.kind === certFilter)

  // Map publication title keywords to certificate IDs
  const findCertForPaper = (paperTitle) => {
    const lower = paperTitle.toLowerCase()
    if (lower.includes('parotid')) return certificates.find((c) => c.id === 'parotid')
    if (lower.includes('urinary bladder')) return certificates.find((c) => c.id === 'bladder')
    if (lower.includes('neuroectodermal') || lower.includes('primitive')) {
      return certificates.find((c) => c.id === 'pnet')
    }
    return null
  }

  const showAll = activeSection === 'all'

  return (
    <>
      <PageHero
        kicker="Academic & Clinical Evidence"
        title="Research & Credentials"
        lede="Peer-reviewed publications, oncology conference studies, awards, and original verifiable credentials."
      >
        <Link className="btn btn-brass" to="/contact">
          Book a consult
        </Link>
      </PageHero>

      {/* Sticky Quick-Filter Nav Bar */}
      <section className="credentials-nav-wrap">
        <div className="wrap">
          <div className="credentials-filter-bar" role="tablist" aria-label="Browse research and credentials">
            {sections.map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={activeSection === id}
                className={`cred-tab ${activeSection === id ? 'is-active' : ''}`}
                onClick={() => setActiveSection(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      {(showAll || activeSection === 'awards') && (
        <section className="section" id="awards">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker kicker-dark">Academic Honours</p>
              <h2>Awards & Distinction.</h2>
            </div>
            <div className="award-row has-photo">
              <article>
                <p>University Distinction</p>
                <h3>First Class</h3>
                <span>
                  MBBS Phase II and Phase III Part II university examinations, RNT Medical College, Udaipur.
                </span>
              </article>
              <article>
                <p>Conference Award</p>
                <h3>2nd Prize, Best Poster</h3>
                <span>
                  32nd UPAROICON 2020, Agra. Comparative study of three chemotherapy schedules in head and neck carcinoma.
                </span>
                <button
                  type="button"
                  className="cert-inline-btn"
                  onClick={() => setLightboxItem(certificates.find((c) => c.id === 'uparoicon'))}
                >
                  Inspect award certificate ↗
                </button>
              </article>
              <figure>
                <img
                  src={`${import.meta.env.BASE_URL}media/still-desk.jpg`}
                  alt="A stethoscope on a quiet consultation table"
                />
              </figure>
            </div>
          </div>
        </section>
      )}

      {/* Peer-Reviewed Publications with Integrated Certificate Proofs */}
      {(showAll || activeSection === 'publications') && (
        <section className="section section-tight" id="publications">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker kicker-dark">Peer-Reviewed Papers</p>
              <h2>Bibliography & Published Research.</h2>
            </div>
            <ol className="bibliography credentials-bibliography">
              {publications.map((paper, index) => {
                const cert = findCertForPaper(paper.title)
                return (
                  <li key={paper.title} className="pub-item">
                    <span className="pub-number">{String(index + 1).padStart(2, '0')}</span>
                    <div className="pub-content">
                      <div className="pub-meta-top">
                        <span className="pub-journal-badge">{paper.journal}</span>
                        {cert && (
                          <button
                            type="button"
                            className="cert-badge-btn"
                            onClick={() => setLightboxItem(cert)}
                            title="Inspect official certificate of publication"
                          >
                            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            Author Certificate on File
                          </button>
                        )}
                      </div>
                      <h3>{paper.title}</h3>
                      <p className="cite">{paper.citation}</p>
                      <div className="pub-links">
                        {paper.href ? (
                          <a className="text-link" href={paper.href} target="_blank" rel="noreferrer">
                            View DOI: {paper.extra} ↗
                          </a>
                        ) : (
                          <span className="pub-extra">{paper.extra}</span>
                        )}
                        {cert && (
                          <button
                            type="button"
                            className="text-link cert-text-link"
                            onClick={() => setLightboxItem(cert)}
                          >
                            View original certificate document ↗
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>
      )}

      {/* Official Verifiable Certificates */}
      {(showAll || activeSection === 'certificates') && (
        <section className="section section-tight" id="certificates">
          <div className="wrap">
            <div className="split-head">
              <div>
                <p className="kicker kicker-dark">Official Documents</p>
                <h2>Verifiable Certificates.</h2>
                <p className="cert-subtitle">
                  Redrawn for clarity. Click any certificate to inspect the original unchanged photograph.
                </p>
              </div>

              <div className="filter-bar" role="tablist" aria-label="Certificate type">
                {[
                  ['all', 'All Documents'],
                  ['publication', 'Publications'],
                  ['award', 'Awards'],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={certFilter === id}
                    className={certFilter === id ? 'is-on' : ''}
                    onClick={() => setCertFilter(id)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="certificate-grid">
              {visibleCerts.map((item) => (
                <article key={item.id} className={`certificate ${item.kind === 'award' ? 'is-award' : ''}`}>
                  <div className="sheet">
                    <div className="sheet-rule" aria-hidden="true" />
                    <header className="sheet-top">
                      <span>Certificate</span>
                      <span>{item.kindLabel}</span>
                    </header>
                    {item.prize ? (
                      <p className="prize">
                        {item.prize}
                        <small>{item.prizeNote}</small>
                      </p>
                    ) : null}
                    <p className="presented">Presented to</p>
                    <h2>Dr. Geetanand Rao</h2>
                    <p className="for-line">{item.forLine}</p>
                    <blockquote>{item.title}</blockquote>
                    <p className="issuer">{item.issuer}</p>
                    <dl>
                      {item.facts.map(([label, value]) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="seal" aria-hidden="true">
                      <span>GR</span>
                      <small>{item.issuerShort}</small>
                    </div>
                  </div>

                  <div className="original-row">
                    <button type="button" onClick={() => setLightboxItem(item)}>
                      <img src={item.image} alt="" />
                      <span>
                        <strong>View original</strong>
                        <small>Unchanged photograph of physical certificate</small>
                      </span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Research Projects & Studies */}
      {(showAll || activeSection === 'conferences') && (
        <section className="section section-tight" id="projects">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker kicker-dark">Clinical Studies</p>
              <h2>Research Projects.</h2>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article key={project.title}>
                  <p>{project.kind}</p>
                  <h3>{project.title}</h3>
                  {project.note ? <span>{project.note}</span> : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Conference Presentations */}
      {(showAll || activeSection === 'conferences') && (
        <section className="section section-tight" id="conferences">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker kicker-dark">Scientific Meetings</p>
              <h2>Conferences & Presentations.</h2>
            </div>
            <ol className="timeline">
              {conferences.map((item) => (
                <li key={item.title}>
                  <p className="when">{item.when}</p>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Verification Banner */}
      <section className="section section-tight">
        <div className="wrap cred-footer-banner">
          <div>
            <p className="kicker kicker-dark">Medical Practice Standing</p>
            <h2>Verified Practitioner with {site.council}.</h2>
            <p>
              Registration No. {site.registration} · Registered {site.registrationDate}. Consultations at {site.clinic}, Gurugram.
            </p>
          </div>
          <div className="hero-actions">
            <Link className="btn btn-deep" to="/contact">
              Request a consultation
            </Link>
            <a className="btn btn-ghost-dark" href={site.googleBusinessUrl} target="_blank" rel="noreferrer">
              Google Profile ↗
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Certificate Lightbox */}
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  )
}
