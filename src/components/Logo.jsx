export default function Logo({ compact = false }) {
  return (
    <span className={`logo ${compact ? 'is-compact' : ''}`}>
      <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.15" />
        <circle cx="32" cy="32" r="25.6" fill="none" stroke="currentColor" strokeWidth="0.45" opacity="0.55" />
        <path d="M32 9.2v4.2M29.8 11.3h4.4" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        <path
          d="M42.2 24.2a11.2 11.2 0 1 0 0 17.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.15"
          strokeLinecap="round"
        />
        <path d="M31.5 32.8H44.6" fill="none" stroke="currentColor" strokeWidth="2.15" strokeLinecap="round" />
      </svg>
      <span className="logo-words">
        <strong>Geetanand Rao</strong>
        <small>Medical Oncologist</small>
      </span>
    </span>
  )
}
