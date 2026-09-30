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

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function submit(event) {
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
      next.message = 'Add a short note so the reply can be useful.'
    }
    setErrors(next)
    if (Object.keys(next).length) return

    const body = [
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim() || 'Not given'}`,
      `Regarding: ${values.reason}`,
      '',
      values.message.trim(),
    ].join('\n')

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Consultation enquiry from ${values.name.trim()}`,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <PageHero kicker="Contact" title="Call, or write." />

      <section className="section">
        <div className="wrap contact-grid">
          <aside className="contact-card">
            <p className="kicker kicker-dark">Direct</p>
            <a className="phone" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <a className="mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="text-link" href={site.whatsapp} target="_blank" rel="noreferrer">
              Message on WhatsApp
            </a>
            <img
              className="contact-photo"
              src={`${import.meta.env.BASE_URL}media/portrait-blue.jpg`}
              alt="Dr. Geetanand Rao"
            />
            <dl>
              <div>
                <dt>Registration</dt>
                <dd>
                  {site.council}, {site.registration}
                </dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>English and Hindi</dd>
              </div>
              <div>
                <dt>Timing</dt>
                <dd>By appointment. The clinic and slot are confirmed when you call or write.</dd>
              </div>
            </dl>
          </aside>

          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={update}
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
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? <p className="error">{errors.email}</p> : null}
              </div>
            </div>
            <div className="field">
              <label htmlFor="reason">This is about</label>
              <select id="reason" name="reason" value={values.reason} onChange={update}>
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
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message ? <p className="error">{errors.message}</p> : null}
            </div>
            <button className="btn btn-deep" type="submit">
              Open email to send
            </button>
            <p className="form-note">Opens your email to {site.email}. Nothing is stored here.</p>
          </form>
        </div>
      </section>
    </>
  )
}
