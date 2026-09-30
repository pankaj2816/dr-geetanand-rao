import PageHero from '../components/PageHero'
import { usePageTitle } from '../usePageTitle'
import { education, posts, memberships, site } from '../data'

export default function About() {
  usePageTitle('About')

  return (
    <>
      <PageHero
        kicker="About"
        title="Three trainings. One practice."
      />

      <section className="section">
        <div className="wrap about-layout">
          <img
            className="about-main"
            src={`${import.meta.env.BASE_URL}media/portrait-blue.jpg`}
            alt="Dr. Geetanand Rao"
          />
          <div className="about-copy">
            <div className="prose">
              <p>
                MBBS in Udaipur, MD Radiation Oncology in Rohtak, DrNB Medical Oncology at Apollo,
                New Delhi. Consults in English and Hindi.
              </p>
              <p>
                <a className="text-link" href={site.resume} download>
                  Resume
                </a>
              </p>
            </div>
            <img
              className="about-side"
              src={`${import.meta.env.BASE_URL}media/portrait-brown.jpg`}
              alt="A second portrait of Dr. Geetanand Rao"
            />
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
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker kicker-dark">Posts</p>
            <h2>The path.</h2>
          </div>
          <div className="post-grid">
            {posts.map((post) => (
              <article key={post.title}>
                <p className="when">{post.years}</p>
                <h3>{post.title}</h3>
                <p className="place">{post.place}</p>
                <ul>
                  {post.points.slice(0, 2).map((point) => (
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
            <h2>Licence.</h2>
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
