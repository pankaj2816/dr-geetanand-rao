const fs = require('fs');
const path = require('path');

const qrPath = path.resolve(__dirname, '../public/review-qr.png');
const qrBase64 = fs.readFileSync(qrPath).toString('base64');

// The Imperial Asclepius & Laurel Wreath Medallion SVG
const imperialMedallionSvg = `
<svg viewBox="0 0 160 160" fill="none" width="100%" height="100%">
  <defs>
    <linearGradient id="medallion-gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffbf2" />
      <stop offset="25%" stop-color="#f2d7a6" />
      <stop offset="60%" stop-color="#ca9f55" />
      <stop offset="100%" stop-color="#8a5a1a" />
    </linearGradient>
    <linearGradient id="medallion-sheen" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#ca9f55" />
      <stop offset="50%" stop-color="#fffbf2" />
      <stop offset="100%" stop-color="#ca9f55" />
    </linearGradient>
    <radialGradient id="medallion-bg" cx="50%" cy="36%" r="68%">
      <stop offset="0%" stop-color="#184a3b" />
      <stop offset="60%" stop-color="#0c251e" />
      <stop offset="100%" stop-color="#040e0b" />
    </radialGradient>
    <filter id="medallion-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#0c251e" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Base Signet Disc with 3D Bevel -->
  <circle cx="80" cy="80" r="74" fill="url(#medallion-bg)" stroke="url(#medallion-gold)" stroke-width="3" filter="url(#medallion-shadow)"/>
  <circle cx="80" cy="80" r="66" stroke="url(#medallion-gold)" stroke-width="1" stroke-dasharray="2.5 3.5" opacity="0.75"/>
  <circle cx="80" cy="80" r="62" stroke="url(#medallion-gold)" stroke-width="0.6" opacity="0.45"/>

  <!-- Left Laurel Wreath -->
  <g fill="url(#medallion-gold)">
    <path d="M48 114 C39 104, 34 90, 36 76 C37 63, 43 51, 52 42" stroke="url(#medallion-gold)" stroke-width="1.6" fill="none"/>
    <path d="M48 114 C44 110, 39 113, 41 108 C44 104, 49 107, 48 114 Z"/>
    <path d="M41 105 C35 102, 33 107, 34 100 C36 94, 42 97, 41 105 Z"/>
    <path d="M37 92 C30 90, 29 95, 30 88 C32 82, 38 85, 37 92 Z"/>
    <path d="M36 78 C29 77, 28 82, 29 75 C31 69, 37 72, 36 78 Z"/>
    <path d="M38 64 C32 62, 32 67, 34 60 C37 54, 42 57, 38 64 Z"/>
    <path d="M43 51 C38 48, 39 53, 42 46 C45 40, 49 44, 43 51 Z"/>
    <path d="M51 42 C47 38, 49 43, 52 37 C57 32, 59 37, 51 42 Z"/>
  </g>

  <!-- Right Laurel Wreath -->
  <g fill="url(#medallion-gold)">
    <path d="M112 114 C121 104, 126 90, 124 76 C123 63, 117 51, 108 42" stroke="url(#medallion-gold)" stroke-width="1.6" fill="none"/>
    <path d="M112 114 C116 110, 121 113, 119 108 C116 104, 111 107, 112 114 Z"/>
    <path d="M119 105 C125 102, 127 107, 126 100 C124 94, 118 97, 119 105 Z"/>
    <path d="M123 92 C130 90, 131 95, 130 88 C128 82, 122 85, 123 92 Z"/>
    <path d="M124 78 C131 77, 132 82, 131 75 C129 69, 123 72, 124 78 Z"/>
    <path d="M122 64 C128 62, 128 67, 126 60 C123 54, 118 57, 122 64 Z"/>
    <path d="M117 51 C122 48, 121 53, 118 46 C115 40, 111 44, 117 51 Z"/>
    <path d="M109 42 C113 38, 111 43, 108 37 C103 32, 101 37, 109 42 Z"/>
  </g>

  <!-- Central Rod of Asclepius -->
  <line x1="80" y1="32" x2="80" y2="120" stroke="url(#medallion-gold)" stroke-width="3.2" stroke-linecap="round"/>
  <circle cx="80" cy="31" r="4.2" fill="url(#medallion-gold)"/>
  <circle cx="80" cy="121" r="2.6" fill="url(#medallion-gold)"/>

  <!-- Asclepius Serpent -->
  <path d="M80 40 C 93 42, 93 54, 80 58 C 67 62, 67 74, 80 78 C 93 82, 93 94, 80 98 C 68 102, 70 110, 77 114" 
        stroke="url(#medallion-sheen)" stroke-width="3.4" stroke-linecap="round" fill="none"/>

  <!-- Classical Sculpted Letter G -->
  <path d="M62 64 C62 55, 54 51, 46 56 C38 61, 38 75, 46 81 C54 86, 62 81, 62 72 H50" 
        stroke="url(#medallion-gold)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="50" y1="72" x2="62" y2="72" stroke="url(#medallion-gold)" stroke-width="3.4" stroke-linecap="round"/>

  <!-- Classical Sculpted Letter R -->
  <path d="M98 54 V84 M98 54 H109 C116 54, 120 58, 120 64 C120 70, 116 74, 109 74 H98 M108 74 L120 85" 
        stroke="url(#medallion-gold)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Pinnacle 8-Point Healing Star -->
  <path d="M80 14 L81.8 19 L87 20.8 L81.8 22.6 L80 27.6 L78.2 22.6 L73 20.8 L78.2 19 Z" fill="url(#medallion-gold)"/>
</svg>
`;

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 1200px;
    height: 1800px;
    background: #ffffff;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #11231f;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* Full Bleed Card Container */
  .card {
    width: 1200px;
    height: 1800px;
    background: #ffffff;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 70px 75px;
  }

  /* Outer Border */
  .card-border-outer {
    position: absolute;
    top: 36px;
    left: 36px;
    right: 36px;
    bottom: 36px;
    border: 2px solid #e2d7c5;
    border-radius: 32px;
    pointer-events: none;
  }

  /* Inner Fine Gold Border */
  .card-border-inner {
    position: absolute;
    top: 48px;
    left: 48px;
    right: 48px;
    bottom: 48px;
    border: 1.5px solid #d4b57e;
    border-radius: 24px;
    pointer-events: none;
    opacity: 0.75;
  }

  /* Corner Ornaments */
  .corner-decor {
    position: absolute;
    width: 36px;
    height: 36px;
    border-color: #b89758;
    border-style: solid;
    pointer-events: none;
  }
  .tl { top: 62px; left: 62px; border-width: 3px 0 0 3px; }
  .tr { top: 62px; right: 62px; border-width: 3px 3px 0 0; }
  .bl { bottom: 62px; left: 62px; border-width: 0 0 3px 3px; }
  .br { bottom: 62px; right: 62px; border-width: 0 3px 3px 0; }

  /* Monogram Logo */
  .logo-wrap {
    width: 135px;
    height: 135px;
    margin-bottom: 22px;
  }

  .doctor-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 56px;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: #0c251e;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .doctor-spec {
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #9a6f33;
    margin-bottom: 12px;
  }

  .doctor-sub {
    font-size: 21px;
    font-weight: 500;
    color: #435951;
    letter-spacing: 0.02em;
    margin-bottom: 8px;
  }

  .clinic-name {
    font-size: 22px;
    font-weight: 600;
    color: #17382f;
  }

  /* Divider */
  .divider {
    width: 320px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #c5a367, transparent);
    margin: 26px 0 28px 0;
    position: relative;
  }
  .divider::after {
    content: '◆';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: #bfa168;
    background: #ffffff;
    padding: 0 12px;
  }

  /* Review Box / Hero */
  .review-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 14px;
  }

  .google-g {
    width: 48px;
    height: 48px;
  }

  .review-heading {
    font-size: 40px;
    font-weight: 800;
    color: #0b221b;
    letter-spacing: -0.01em;
  }

  /* 5 Stars */
  .stars-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 16px;
  }

  .star {
    width: 44px;
    height: 44px;
    fill: #fbbc04;
    filter: drop-shadow(0 2px 5px rgba(251, 188, 4, 0.45));
  }

  .review-desc {
    font-size: 22px;
    line-height: 1.45;
    color: #384f47;
    max-width: 820px;
    margin-bottom: 30px;
    font-weight: 500;
  }

  /* QR Frame */
  .qr-frame {
    background: #ffffff;
    padding: 24px;
    border-radius: 36px;
    box-shadow: 0 22px 55px rgba(13, 40, 32, 0.12), 0 0 0 2px #e3dacd;
    margin-bottom: 26px;
    position: relative;
  }

  .qr-frame::before {
    content: '';
    position: absolute;
    inset: 10px;
    border: 1px dashed #cfba96;
    border-radius: 28px;
    pointer-events: none;
  }

  .qr-image {
    width: 440px;
    height: 440px;
    display: block;
    image-rendering: pixelated;
  }

  /* Scan instruction badge */
  .scan-badge {
    background: #0d2a21;
    color: #fcebd2;
    font-size: 21px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 15px 42px;
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
    gap: 14px;
    box-shadow: 0 8px 24px rgba(13, 42, 33, 0.28);
    margin-bottom: 26px;
  }

  .scan-badge svg {
    width: 24px;
    height: 24px;
  }

  /* Direct Link & Footer */
  .link-text {
    font-size: 19px;
    font-weight: 600;
    color: #3b5049;
    margin-bottom: 6px;
  }

  .link-url {
    font-size: 22px;
    font-weight: 700;
    color: #1a73e8;
    text-decoration: none;
    letter-spacing: 0.01em;
    margin-bottom: 20px;
    display: inline-block;
  }

  .footer-sub {
    font-size: 19px;
    font-weight: 600;
    color: #556961;
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #bfa168;
    display: inline-block;
  }
</style>
</head>
<body>

<div class="card">
  <div class="card-border-outer"></div>
  <div class="card-border-inner"></div>
  <div class="corner-decor tl"></div>
  <div class="corner-decor tr"></div>
  <div class="corner-decor bl"></div>
  <div class="corner-decor br"></div>

  <!-- Refined Logo -->
  <div class="logo-wrap">
    ${imperialMedallionSvg}
  </div>

  <!-- Doctor Identification -->
  <h1 class="doctor-title">Dr. Geetanand Rao</h1>
  <div class="doctor-spec">Medical Oncologist</div>
  <div class="doctor-sub">MBBS · MD · DrNB Medical Oncology · DMC Reg. 105182</div>
  <div class="clinic-name">Park Hospital · Sector 47, Gurugram</div>

  <div class="divider"></div>

  <!-- Review Callout -->
  <div class="review-header">
    <svg class="google-g" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.26-2.09 3.675-5.17 3.675-9.15z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.27v3.13C3.26 21.31 7.34 24 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.63H1.27C.46 8.24 0 10.06 0 12s.46 3.76 1.27 5.37l4-3.13z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.69 1.27 6.63l4 3.13c.95-2.85 3.6-4.96 6.73-4.96z" />
    </svg>
    <div class="review-heading">Review Us on Google</div>
  </div>

  <div class="stars-row">
    <svg class="star" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    <svg class="star" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    <svg class="star" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    <svg class="star" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    <svg class="star" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
  </div>

  <p class="review-desc">
    Your kind feedback helps other patients and families find trusted, evidence-based cancer care.
  </p>

  <!-- QR Frame -->
  <div class="qr-frame">
    <img class="qr-image" src="data:image/png;base64,${qrBase64}" alt="Scan to Review on Google" />
  </div>

  <div class="scan-badge">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
    Point Camera to Scan & Review
  </div>

  <!-- Direct Link & Footer -->
  <div class="link-text">Or visit directly on your phone:</div>
  <div class="link-url">https://g.page/r/Cc60vggKZj3AEBM/review</div>

  <div class="footer-sub">
    <span>🌐 drgeetanandrao.com</span>
    <span class="dot"></span>
    <span>Park Hospital OPD, Sector 47, Gurugram</span>
  </div>
</div>

</body>
</html>
`;

fs.writeFileSync(path.resolve(__dirname, 'review-card.html'), htmlContent);
