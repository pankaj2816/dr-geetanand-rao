import { Link } from 'react-router-dom'
import { usePageTitle } from '../usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <header className="page-hero">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1>That page is not on this site.</h1>
        <p className="lede">The address may be mistyped. The practice pages are linked below.</p>
        <Link className="btn btn-brass" to="/">
          Back to the home page
        </Link>
      </div>
    </header>
  )
}
