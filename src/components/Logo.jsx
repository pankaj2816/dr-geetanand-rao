export default function Logo({ compact = false }) {
  return (
    <span className={`logo ${compact ? 'is-compact' : ''}`}>
      <svg className="logo-mark" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <defs>
          {/* Gold Gradient for Dark Navbar */}
          <linearGradient id="nav-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff8eb" />
            <stop offset="40%" stopColor="#e8c78e" />
            <stop offset="100%" stopColor="#c19349" />
          </linearGradient>

          {/* Cancer Awareness Ribbon Rose Gradient */}
          <linearGradient id="nav-ribbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3a7b7" />
            <stop offset="50%" stopColor="#d8778d" />
            <stop offset="100%" stopColor="#a7445a" />
          </linearGradient>

          {/* Healing Sage Leaf Gradient */}
          <linearGradient id="nav-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8bd0bd" />
            <stop offset="100%" stopColor="#43937d" />
          </linearGradient>

          <linearGradient id="nav-petal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f6bac5" />
            <stop offset="100%" stopColor="#c77283" />
          </linearGradient>

          {/* Survivorship Figure Gradient */}
          <linearGradient id="nav-fig" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#df8196" />
            <stop offset="100%" stopColor="#b14f64" />
          </linearGradient>
        </defs>

        <g transform="translate(5, 5)">
          {/* Botanical Healing Leaves (Left) */}
          <path d="M18 68 C8 60, 2 46, 10 28 C20 30, 28 44, 18 68 Z" fill="url(#nav-leaf)" />
          <path d="M24 54 C18 42, 14 28, 22 16 C30 20, 34 34, 24 54 Z" fill="url(#nav-petal)" />
          {/* Stem sweep */}
          <path d="M18 68 C14 82, 24 94, 40 96 C60 98, 86 96, 108 90" stroke="url(#nav-gold)" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Survivorship Figure (Joyous human rising between G & R) */}
          <circle cx="58" cy="18" r="7.5" fill="url(#nav-fig)" />
          <path d="M44 32 C50 26, 56 23, 58 23 C60 23, 66 26, 72 32 C68 38, 62 46, 58 53 C54 46, 48 38, 44 32 Z" fill="url(#nav-fig)" />

          {/* The Letter G (Left) */}
          <text x="36" y="88" fontFamily="'Playfair Display', Georgia, serif" fontSize="82" fontWeight="700" fill="url(#nav-gold)" textAnchor="middle">
            G
          </text>

          {/* The Letter R (Right) */}
          <text x="82" y="88" fontFamily="'Playfair Display', Georgia, serif" fontSize="82" fontWeight="700" fill="url(#nav-gold)" textAnchor="middle">
            R
          </text>

          {/* Cancer Awareness Ribbon (Around R) */}
          <path d="M86 52 C77 42, 76 32, 85 25 C94 18, 103 25, 96 35 L80 64 C76 70, 75 78, 74 85" stroke="url(#nav-ribbon)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M94 33 L106 60 C110 68, 112 76, 113 83" stroke="url(#nav-ribbon)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        </g>
      </svg>
      <span className="logo-words">
        <strong>Geetanand Rao</strong>
        <small>Medical Oncologist</small>
      </span>
    </span>
  )
}
