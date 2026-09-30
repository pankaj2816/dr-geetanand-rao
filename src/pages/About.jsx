import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { usePageTitle } from '../usePageTitle'
import { education, posts, memberships, site } from '../data'

export default function About() {
  usePageTitle('About')

  return (
    <>
      <PageHero
        kicker="About"
        title="A medical oncologist shaped by three stages of training."
        lede="From undergraduate medicine in Udaipur to radiation oncology in Rohtak and DrNB medical oncology in New Delhi."
      />

      <section className="section">
        <div className="wrap about-grid">
          <figure className="about-portrait">
            <img
              src="/media/portrait-blue.jpg"
              alt="Dr. Geetanand Rao, arms crossed, wearing a stethoscope"
            />
          </figure>
          <div className="prose">
            <p>
              Dr. Geetanand Rao is a medical oncologist. He completed his MBBS at RNT Medical
              College, Udaipur, his MD in Radiation Oncology at Pt. B.D. Sharma PGIMS, Rohtak, and
              his DrNB in Medical Oncology at Indraprastha Apollo Hospital, New Delhi.
            </p>
            <p>
              The work sits at the meeting point of systemic therapy and radiation oncology:
              chemotherapy, targeted therapy, immunotherapy, hormone therapy, and the procedures
              that make treatment possible.
            </p>
            <p>
              He is registered with the {site.council} (registration no. {site.registration},{' '}
              {site.registrationDate}) and consults in English and Hindi.
            </p>
            <p>
              <a className="text-link" href={site.resume} download>
                Download the resume
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker kicker-dark">Education</p>
            <h2>Degrees</h2>
          </div>
          <ol className="timeline">
            {education.map((item) => (
              <li key={item.degree}>
                <p className="when">{item.years}</p>
                <div>
                  <h3>{item.degree}</h3>
                  <p className="place">{item.place}</p>
                  <p>{item.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker kicker-dark">Clinical posts</p>
            <h2>Where the training was done</h2>
          </div>
          <div className="post-grid">
            {posts.map((post) => (
              <article key={post.title}>
                <p className="when">{post.years}</p>
                <h3>{post.title}</h3>
                <p className="place">{post.place}</p>
                <ul>
                  {post.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap membership-panel">
          <div>
            <p className="kicker kicker-dark">Standing</p>
            <h2>Licence and societies</h2>
            <p>
              Registered medical practitioner under the {site.council}. Memberships are listed as
              given on the curriculum vitae.
            </p>
            <Link className="text-link" to="/practice">
              See the clinical practice
            </Link>
          </div>
          <ul className="society-list">
            <li>
              <strong>{site.council}</strong>
              <span>
                Reg. {site.registration} · {site.registrationDate}
              </span>
            </li>
            {memberships.map((item) => (
              <li key={item.short}>
                <strong>{item.short}</strong>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
