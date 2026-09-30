import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import { site, memberships } from '../data'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: site.name,
  medicalSpecialty: 'Oncologic',
  telephone: site.phoneTel,
  email: site.email,
  knowsLanguage: ['English', 'Hindi'],
  memberOf: memberships.map((item) => ({
    '@type': 'Organization',
    name: item.name,
  })),
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ScrollToTop />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
