import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { usePageTitle } from '../usePageTitle'
import { therapies, groups, procedures, visitPrep } from '../data'

export default function Practice() {
  usePageTitle('Practice')

  return (
    <>
      <PageHero kicker="Practice" title="Treatment, in plain terms." />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker kicker-dark">Drugs</p>
            <h2>Four kinds.</h2>
          </div>
          <img
            className="media-band"
            src={`${import.meta.env.BASE_URL}media/still-practice.jpg`}
            alt="A stethoscope on a closed folder"
          />
          <div className="card-grid">
            {therapies.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker kicker-dark">Who</p>
            <h2>The range.</h2>
          </div>
          <div className="card-grid three">
            {groups.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap procedure-layout">
          <div>
            <p className="kicker kicker-dark">Hands</p>
            <h2>Procedures.</h2>
          </div>
          <ol className="procedure-list">
            {procedures.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap visit-panel">
          <div>
            <p className="kicker kicker-dark">Bring</p>
            <h2>For the first visit.</h2>
            <Link className="btn btn-deep" to="/contact">
              Request a consultation
            </Link>
          </div>
          <ul>
            {visitPrep.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
