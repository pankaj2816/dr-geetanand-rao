import { Link } from 'react-router-dom'
import { site } from '../data'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p className="footer-clinic-note">
            Oncologist at {site.clinic}, Gurugram
          </p>
          <a
            className="footer-google-link"
            href={site.googleBusinessUrl}
            target="_blank"
            rel="noreferrer"
          >
            Google Business Profile ↗
          </a>
        </div>
        <div>
          <p className="footer-label">Location</p>
          <p>
            <strong>{site.clinic}</strong>
            <br />
            {site.address}
            <br />
            <a className="footer-directions" href={site.googleMapsDirections} target="_blank" rel="noreferrer">
              Get Directions ↗
            </a>
          </p>
        </div>
        <div>
          <p className="footer-label">Registration</p>
          <p>
            {site.council}
            <br />
            Reg. no. {site.registration}
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
          </p>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>Information only. Not a substitute for a consultation.</p>
        <p>© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
