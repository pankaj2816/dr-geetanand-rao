import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { usePageTitle } from '../usePageTitle'
import { therapies, groups, procedures, visitPrep } from '../data'

export default function Practice() {
  usePageTitle('Practice')

  return (
    <>
      <PageHero
        kicker="Practice"
        title="Systemic treatment, planned with care and explained plainly."
        lede="The clinical focus follows his MD in radiation oncology and his DrNB in medical oncology. Appointments are arranged directly."
      />

      <section className="section">
        <div className="wrap practice-intro">
          <figure>
            <img
              src="/media/portrait-brown.jpg"
              alt="Dr. Geetanand Rao in a brown shirt with a stethoscope"
            />
          </figure>
          <div className="prose">
            <p>
              People come with a diagnosis already in hand, or with reports that still need to be
              read together. The consultation is for understanding the disease, the treatments that
              are appropriate, and what the next step actually involves.
            </p>
            <p>
              During senior residency he was trained in chemotherapy, targeted therapy,
              immunotherapy, and hormone therapy for solid tumours, haematological malignancies,
              and paediatric malignancies, and in the medical management of people living with
              cancer.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker kicker-dark">Systemic therapy</p>
            <h2>Four strands of drug treatment</h2>
          </div>
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
            <p className="kicker kicker-dark">Disease groups</p>
            <h2>The breadth of the DrNB</h2>
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
            <p className="kicker kicker-dark">Procedures</p>
            <h2>Hands-on training from senior residency</h2>
            <p className="narrow">
              Alongside radiation therapy planning from the MD years, the procedural work below is
              part of the medical oncology training at Indraprastha Apollo Hospital.
            </p>
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
            <p className="kicker kicker-dark">Before you come</p>
            <h2>What helps the first conversation</h2>
            <p>
              Bring what you already have. If something is missing, say so. The aim is a complete
              picture, not a perfect file.
            </p>
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
