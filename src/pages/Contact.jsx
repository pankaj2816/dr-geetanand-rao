import { useState } from 'react'
import PageHero from '../components/PageHero'
import { usePageTitle } from '../usePageTitle'
import { site } from '../data'

const reasons = ['New consultation', 'Second opinion', 'Follow-up discussion', 'Other']

const empty = {
  name: '',
  phone: '',
  email: '',
  reason: reasons[0],
  message: '',
}

export default function Contact() {
  usePageTitle('Contact')
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'activation' | 'error'
  const [errorMessage, setErrorMessage] = useState('')
  const [submittedData, setSubmittedData] = useState(null)

  function handleCopyNumber() {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(site.phoneDisplay)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  async function submit(event) {
    event.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!/^[0-9+\s()-]{8,}$/.test(values.phone.trim())) {
      next.phone = 'Please enter a phone number we can call.'
    }
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = 'That email address does not look complete.'
    }
    if (values.message.trim().length < 12) {
      next.message = 'Add a short note so the reply can be useful (minimum 12 characters).'
    }
    setErrors(next)
    if (Object.keys(next).length) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const payload = {
        'Patient Name': values.name.trim(),
        'Phone Number': values.phone.trim(),
        'Email Address': values.email.trim() || 'Not provided',
        'Consultation Type': values.reason,
        'Message': values.message.trim(),
        '_subject': `Consultation Request: ${values.name.trim()} (${values.reason})`,
        '_template': 'table',
        '_captcha': 'false',
      }

      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (data.success === 'true' || data.success === true) {
        setSubmittedData({ ...values })
        setStatus('success')
        setValues(empty)
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        setSubmittedData({ ...values })
        setStatus('activation')
        setValues(empty)
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Unable to deliver message right now.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network connection error. Please check your connection or contact directly via phone/WhatsApp.')
    }
  }

  return (
    <>
      <PageHero kicker="Contact" title="Call, or write." />

      <section className="section">
        <div className="wrap contact-grid">
          <aside className="contact-card">
            <div className="contact-card-header">
              <p className="kicker kicker-dark">Direct Consultation</p>
              <span className="contact-status-pill">
                <span className="status-dot" aria-hidden="true" />
                By Appointment
              </span>
            </div>

            <div className="contact-direct-box">
              <span className="contact-channel-label">Mobile & WhatsApp</span>
              <div className="contact-phone-row">
                <a className="contact-phone-number" href={`tel:${site.phoneTel}`}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{site.phoneDisplay}</span>
                </a>
                <button
                  type="button"
                  className={`contact-copy-btn ${copied ? 'is-copied' : ''}`}
                  onClick={handleCopyNumber}
                  title="Copy telephone number"
                  aria-label="Copy telephone number"
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>

              <div className="contact-action-pills">
                <a className="contact-pill-btn btn-call" href={`tel:${site.phoneTel}`}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call Now
                </a>
                <a className="contact-pill-btn btn-wa" href={site.whatsapp} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.18c-.24.68-1.2 1.26-1.66 1.34-.43.08-.99.12-2.88-.66-2.42-.99-3.97-3.47-4.09-3.63-.12-.16-.99-1.32-.99-2.52 0-1.2.62-1.79.84-2.03.22-.24.48-.3.64-.3.16 0 .32.01.46.01.15 0 .35-.06.55.42.2.48.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.63 1.04 1.35 1.68.93.83 1.71 1.09 1.95 1.21.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.18 1.26z" />
                  </svg>
                  WhatsApp ↗
                </a>
              </div>
            </div>

            <div className="contact-email-box">
              <span className="contact-channel-label">Direct Email</span>
              <a className="contact-email-link" href={`mailto:${site.email}`}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>{site.email}</span>
              </a>
            </div>

            <img
              className="contact-photo"
              src={`${import.meta.env.BASE_URL}media/portrait-blue.jpg`}
              alt="Dr. Geetanand Rao"
            />

            <dl className="contact-details-dl">
              <div>
                <dt>Clinic Location</dt>
                <dd>
                  <strong>{site.clinic}</strong>
                  <br />
                  <span className="address-line">{site.address}</span>
                  <div className="contact-links-row">
                    <a className="text-link" href={site.googleMapsDirections} target="_blank" rel="noreferrer">
                      Get Directions ↗
                    </a>
                    <a className="text-link" href={site.googleBusinessUrl} target="_blank" rel="noreferrer">
                      Google Profile ↗
                    </a>
                  </div>
                </dd>
              </div>
              <div>
                <dt>Registration</dt>
                <dd>
                  <span>{site.council}</span> · <strong className="reg-num">Reg. {site.registration}</strong>
                </dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>English and Hindi</dd>
              </div>
              <div>
                <dt>Timing</dt>
                <dd>By appointment. OPD consultations at Park Hospital, Gurugram.</dd>
              </div>
            </dl>
          </aside>

          {status === 'success' || status === 'activation' ? (
            <div className="contact-success-card" role="status" aria-live="polite">
              <div className="contact-success-header">
                <div className="contact-success-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="contact-success-title">
                    {status === 'success' ? 'Consultation Request Sent' : 'Consultation Request Dispatched'}
                  </h3>
                  <p className="contact-success-subtitle">
                    {status === 'success'
                      ? "Thank you. Your enquiry has been delivered directly to Dr. Geetanand Rao's clinic."
                      : "Your enquiry was submitted. (A one-time verification is being finalized with Dr. Rao's inbox)."}
                  </p>
                </div>
              </div>

              <div className="contact-summary-box">
                <div className="contact-summary-row">
                  <span className="contact-summary-label">Patient Name</span>
                  <span className="contact-summary-val">{submittedData?.name}</span>
                </div>
                <div className="contact-summary-row">
                  <span className="contact-summary-label">Contact Number</span>
                  <span className="contact-summary-val num-font">{submittedData?.phone}</span>
                </div>
                {submittedData?.email ? (
                  <div className="contact-summary-row">
                    <span className="contact-summary-label">Email</span>
                    <span className="contact-summary-val">{submittedData.email}</span>
                  </div>
                ) : null}
                <div className="contact-summary-row">
                  <span className="contact-summary-label">Reason</span>
                  <span className="contact-summary-val">{submittedData?.reason}</span>
                </div>
              </div>

              <div className="contact-next-steps">
                <p>
                  <strong>What happens next?</strong> Dr. Rao’s team reviews enquiries individually and will get back to you shortly. For immediate assistance or urgent clinical queries, you can also connect directly via phone or WhatsApp.
                </p>
              </div>

              <div className="contact-success-actions">
                <button
                  type="button"
                  className="btn btn-deep"
                  onClick={() => {
                    setStatus('idle')
                    setSubmittedData(null)
                  }}
                >
                  Send Another Enquiry
                </button>
                <a className="contact-pill-btn btn-wa" href={site.whatsapp} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.18c-.24.68-1.2 1.26-1.66 1.34-.43.08-.99.12-2.88-.66-2.42-.99-3.97-3.47-4.09-3.63-.12-.16-.99-1.32-.99-2.52 0-1.2.62-1.79.84-2.03.22-.24.48-.3.64-.3.16 0 .32.01.46.01.15 0 .35-.06.55.42.2.48.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.63 1.04 1.35 1.68.93.83 1.71 1.09 1.95 1.21.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.18 1.26z" />
                  </svg>
                  WhatsApp Direct ↗
                </a>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit} noValidate>
              {status === 'error' && (
                <div className="contact-error-banner" role="alert">
                  <div className="contact-error-header">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <strong>Message delivery notice</strong>
                  </div>
                  <p>{errorMessage}</p>
                  <div className="contact-fallback-row">
                    <a
                      className="contact-fallback-link"
                      href={`mailto:${site.email}?subject=${encodeURIComponent(`Consultation enquiry from ${values.name.trim() || 'Patient'}`)}&body=${encodeURIComponent(`Name: ${values.name.trim()}\nPhone: ${values.phone.trim()}\nReason: ${values.reason}\n\n${values.message.trim()}`)}`}
                    >
                      Send via Email App ↗
                    </a>
                    <a className="contact-fallback-link" href={site.whatsapp} target="_blank" rel="noreferrer">
                      Send via WhatsApp ↗
                    </a>
                  </div>
                </div>
              )}

              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={update}
                  disabled={status === 'submitting'}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? <p className="error">{errors.name}</p> : null}
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={update}
                    disabled={status === 'submitting'}
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone ? <p className="error">{errors.phone}</p> : null}
                </div>
                <div className="field">
                  <label htmlFor="email">Email, if you have one</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update}
                    disabled={status === 'submitting'}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? <p className="error">{errors.email}</p> : null}
                </div>
              </div>
              <div className="field">
                <label htmlFor="reason">This is about</label>
                <select id="reason" name="reason" value={values.reason} onChange={update} disabled={status === 'submitting'}>
                  {reasons.map((reason) => (
                    <option key={reason}>{reason}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={values.message}
                  onChange={update}
                  disabled={status === 'submitting'}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? <p className="error">{errors.message}</p> : null}
              </div>
              <button
                className={`btn btn-deep contact-submit-btn ${status === 'submitting' ? 'is-loading' : ''}`}
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <span className="contact-spinner" aria-hidden="true" />
                    <span>Sending Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Consultation Request</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
              <p className="form-note form-security-note">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Direct & confidential transmission to Dr. Geetanand Rao.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
