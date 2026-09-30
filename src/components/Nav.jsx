import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/practice', 'Practice'],
  ['/research', 'Research'],
  ['/certificates', 'Certificates'],
  ['/contact', 'Contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="nav-inner">
        <NavLink to="/" className="brand" end>
          <span className="monogram" aria-hidden="true">
            GR
          </span>
          <span className="brand-text">
            <strong>Dr. Geetanand Rao</strong>
            <small>Medical Oncologist</small>
          </span>
        </NavLink>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span />
          <span />
        </button>

        <nav id="site-menu" className={open ? 'is-open' : ''} aria-label="Primary">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>
              {label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-cta">
            Book a consult
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
