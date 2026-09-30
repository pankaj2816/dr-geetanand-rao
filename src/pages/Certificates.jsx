import { useState } from 'react'
import PageHero from '../components/PageHero'
import Lightbox from '../components/Lightbox'
import { usePageTitle } from '../usePageTitle'
import { certificates } from '../data'

const filters = [
  ['all', 'All'],
  ['publication', 'Publications'],
  ['award', 'Award'],
]

export default function Certificates() {
  usePageTitle('Certificates')
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)

  const visible = certificates.filter((item) => filter === 'all' || item.kind === filter)

  return (
    <>
      <PageHero kicker="Certificates" title="Redrawn. Originals kept." />

      <section className="section">
        <div className="wrap">
          <div className="filter-bar" role="tablist" aria-label="Certificate type">
            {filters.map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={filter === id}
                className={filter === id ? 'is-on' : ''}
                onClick={() => setFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="certificate-grid">
            {visible.map((item) => (
              <article key={item.id} className={`certificate ${item.kind === 'award' ? 'is-award' : ''}`}>
                <div className="sheet">
                  <div className="sheet-rule" aria-hidden="true" />
                  <header className="sheet-top">
                    <span>Certificate</span>
                    <span>{item.kindLabel}</span>
                  </header>
                  {item.prize ? (
                    <p className="prize">
                      {item.prize}
                      <small>{item.prizeNote}</small>
                    </p>
                  ) : null}
                  <p className="presented">Presented to</p>
                  <h2>Dr. Geetanand Rao</h2>
                  <p className="for-line">{item.forLine}</p>
                  <blockquote>{item.title}</blockquote>
                  <p className="issuer">{item.issuer}</p>
                  <dl>
                    {item.facts.map(([label, value]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="seal" aria-hidden="true">
                    <span>GR</span>
                    <small>{item.issuerShort}</small>
                  </div>
                </div>

                <div className="original-row">
                  <button type="button" onClick={() => setOpen(item)}>
                    <img src={item.image} alt="" />
                    <span>
                      <strong>View original</strong>
                    <small>Unchanged photograph of the certificate</small>
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Lightbox item={open} onClose={() => setOpen(null)} />
    </>
  )
}
