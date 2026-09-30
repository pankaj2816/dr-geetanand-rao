import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { usePageTitle } from '../usePageTitle'
import { projects, publications, conferences } from '../data'

export default function Research() {
  usePageTitle('Research')

  return (
    <>
      <PageHero kicker="Research" title="Papers and posters.">
        <Link className="btn btn-brass" to="/certificates">
          Certificates
        </Link>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker kicker-dark">Awards</p>
            <h2>Record.</h2>
          </div>
          <div className="award-row has-photo">
            <article>
              <p>University</p>
              <h3>First class</h3>
              <span>MBBS, RNT Medical College.</span>
            </article>
            <article>
              <p>Conference</p>
              <h3>2nd prize, best poster</h3>
              <span>UPAROICON 2020. Head and neck chemotherapy.</span>
            </article>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}media/still-desk.jpg`}
                alt="A stethoscope on a quiet table"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker kicker-dark">Publications</p>
            <h2>Bibliography</h2>
          </div>
          <ol className="bibliography">
            {publications.map((paper, index) => (
              <li key={paper.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{paper.title}</h3>
                  <p>{paper.journal}</p>
                  <p className="cite">{paper.citation}</p>
                  {paper.href ? (
                    <a href={paper.href} target="_blank" rel="noreferrer">
                      {paper.extra}
                    </a>
                  ) : (
                    <em>{paper.extra}</em>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker kicker-dark">Projects</p>
            <h2>Research work</h2>
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

      <section className="section section-tight">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker kicker-dark">Meetings</p>
            <h2>Conferences</h2>
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
    </>
  )
}
