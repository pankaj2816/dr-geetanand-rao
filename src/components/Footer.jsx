import { Link } from 'react-router-dom'
import { site } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="monogram footer-mark" aria-hidden="true">
            GR
          </p>
          <p className="footer-name">{site.name}</p>
          <p className="footer-role">{site.role}</p>
          <p className="footer-line">{site.line}</p>
        </div>
        <div>
          <p className="footer-label">Registration</p>
          <p>
            {site.council}
            <br />
            Reg. no. {site.registration}
            <br />
            {site.registrationDate}
          </p>
          <p className="footer-label">Languages</p>
          <p>English and Hindi</p>
        </div>
        <div>
          <p className="footer-label">Appointments</p>
          <p>
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            <Link to="/contact">Request a consultation</Link>
            <br />
            <a href={site.resume} download>
              Download resume
            </a>
          </p>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>
          This website describes Dr. Rao’s qualifications and training. It is not a substitute for a
          medical consultation, diagnosis, or emergency care.
        </p>
        <p>© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
