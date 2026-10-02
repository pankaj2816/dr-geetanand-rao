export default function Logo({ compact = false }) {
  return (
    <span className={`logo ${compact ? 'is-compact' : ''}`}>
      <svg className="logo-mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="logo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbf3e4" />
            <stop offset="45%" stopColor="#dfbe8b" />
            <stop offset="100%" stopColor="#a4773c" />
          </linearGradient>
          <linearGradient id="logo-accent" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f7e7ce" />
            <stop offset="100%" stopColor="#cf9e57" />
          </linearGradient>
        </defs>

        {/* Outer Precision Ring */}
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="url(#logo-gold)"
          strokeWidth="1.25"
        />

        {/* Inner Fine Concentric Bezel */}
        <circle
          cx="32"
          cy="32"
          r="26.5"
          stroke="url(#logo-gold)"
          strokeWidth="0.5"
          strokeDasharray="1.5 2.5"
          opacity="0.55"
        />

        {/* Top Clinical Precision Cross */}
        <path
          d="M32 8.5v5M29.5 11h5"
          stroke="url(#logo-gold)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />

        {/* Bottom Cardinal Diamond Accent */}
        <polygon
          points="32,50.8 33.6,52.4 32,54 30.4,52.4"
          fill="url(#logo-gold)"
        />

        {/* Left & Right Micro Ticks */}
        <circle cx="9.5" cy="32" r="0.9" fill="url(#logo-gold)" opacity="0.75" />
        <circle cx="54.5" cy="32" r="0.9" fill="url(#logo-gold)" opacity="0.75" />

        {/* The 'G' Curve: sweeping protective arc */}
        <path
          d="M40 21.5 C 27 19.5, 18 24.5, 18 32.5 C 18 41, 25 45.5, 34 45.5 C 41.5 45.5, 46 41.5, 46.5 35.5 H 28.5"
          stroke="url(#logo-gold)"
          strokeWidth="2.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* The 'R' Stem & Loop & Leg */}
        <path
          d="M28.5 21.5 V 45.5"
          stroke="url(#logo-accent)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M28.5 21.5 H 36 C 40.5 21.5, 43.5 24, 43.5 28 C 43.5 32, 40.5 34.5, 36 34.5 H 28.5"
          stroke="url(#logo-accent)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 34.5 L 43.5 45.5"
          stroke="url(#logo-accent)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Central Core Healing Node */}
        <circle cx="28.5" cy="34.5" r="1.6" fill="url(#logo-gold)" />
      </svg>
      <span className="logo-words">
        <strong>Geetanand Rao</strong>
        <small>Medical Oncologist</small>
      </span>
    </span>
  )
}
