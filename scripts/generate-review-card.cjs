const fs = require('fs');
const path = require('path');

const qrPath = path.resolve(__dirname, '../public/review-qr.png');
const qrBase64 = fs.readFileSync(qrPath).toString('base64');

// Dr. Janki Choudhary Inspired Oncology Ribbon & Flora Emblem
const oncologyEmblemSvg = `
<svg viewBox="0 0 450 200" fill="none" width="300" height="135">
  <defs>
    <linearGradient id="cEm" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#145a4c" />
      <stop offset="60%" stop-color="#0c3d32" />
      <stop offset="100%" stop-color="#04221b" />
    </linearGradient>
    <linearGradient id="cRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#df8a9d" />
      <stop offset="45%" stop-color="#bd667a" />
      <stop offset="100%" stop-color="#883145" />
    </linearGradient>
    <linearGradient id="cLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#72b09d" />
      <stop offset="100%" stop-color="#2d6f5c" />
    </linearGradient>
    <linearGradient id="cPetal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e5a4b1" />
      <stop offset="100%" stop-color="#b8697a" />
    </linearGradient>
    <linearGradient id="cFig" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#cc7588" />
      <stop offset="100%" stop-color="#963f52" />
    </linearGradient>
    <linearGradient id="cGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdf3e0" />
      <stop offset="50%" stop-color="#d6af68" />
      <stop offset="100%" stop-color="#9c6f28" />
    </linearGradient>
  </defs>

  <g transform="translate(15, 10)">
    <!-- Botanical Flora (Left) -->
    <path d="M46 114 C22 102, 8 76, 23 46 C42 50, 58 74, 46 114 Z" fill="url(#cLeaf)"/>
    <path d="M28 64 Q 36 82 46 114" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" opacity="0.45" fill="none"/>
    <path d="M58 90 C46 72, 40 48, 56 28 C70 34, 78 58, 58 90 Z" fill="url(#cPetal)"/>
    <path d="M46 114 C36 138, 56 160, 95 162 C135 164, 168 152, 178 136" 
          stroke="url(#cEm)" stroke-width="3.5" stroke-linecap="round" fill="none"/>

    <!-- Survivorship Figure -->
    <circle cx="218" cy="24" r="14" fill="url(#cFig)"/>
    <path d="M190 50 C202 40, 214 35, 218 35 C222 35, 234 40, 246 50 C238 60, 226 74, 218 86 C210 74, 198 60, 190 50 Z" 
          fill="url(#cFig)"/>

    <!-- Letter G -->
    <text x="142" y="152" 
          font-family="'Playfair Display', Georgia, serif" 
          font-size="160" 
          font-weight="700" 
          fill="url(#cEm)" 
          text-anchor="middle">
      G
    </text>

    <!-- Letter R (100% Clean) -->
    <text x="288" y="152" 
          font-family="'Playfair Display', Georgia, serif" 
          font-size="160" 
          font-weight="700" 
          fill="url(#cEm)" 
          text-anchor="middle">
      R
    </text>
  </g>
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
    padding: 60px 75px;
  }

  /* Outer Border */
  .card-border-outer {
    position: absolute;
    top: 36px;
    left: 36px;
    right: 36px;
    bottom: 36px;
    border: 2px solid #e5ded2;
    border-radius: 32px;
    pointer-events: none;
  }

  /* Inner Fine Border */
  .card-border-inner {
    position: absolute;
    top: 48px;
    left: 48px;
    right: 48px;
    bottom: 48px;
    border: 1.5px solid #bd667a;
    border-radius: 24px;
    pointer-events: none;
    opacity: 0.35;
  }

  /* Corner Ornaments */
  .corner-decor {
    position: absolute;
    width: 36px;
    height: 36px;
    border-color: #bd667a;
    border-style: solid;
    pointer-events: none;
    opacity: 0.6;
  }
  .tl { top: 62px; left: 62px; border-width: 3px 0 0 3px; }
  .tr { top: 62px; right: 62px; border-width: 3px 3px 0 0; }
  .bl { bottom: 62px; left: 62px; border-width: 0 0 3px 3px; }
  .br { bottom: 62px; right: 62px; border-width: 0 3px 3px 0; }

  /* Monogram Logo */
  .logo-wrap {
    margin-bottom: 12px;
  }

  .doctor-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 54px;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: #0c2e26;
    margin-bottom: 8px;
  }

  .doctor-spec {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #b85f73;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .doctor-spec::before, .doctor-spec::after {
    content: '';
    width: 60px;
    height: 1.5px;
    background: #bd667a;
    opacity: 0.7;
  }

  .doctor-sub {
    font-size: 20px;
    font-weight: 500;
    color: #435951;
    letter-spacing: 0.02em;
    margin-bottom: 6px;
  }

  .clinic-name {
    font-size: 21px;
    font-weight: 600;
    color: #17382f;
  }

  /* Divider */
  .divider {
    width: 280px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #bd667a, transparent);
    margin: 22px 0 24px 0;
    position: relative;
    opacity: 0.7;
  }
  .divider::after {
    content: '🌸';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    background: #ffffff;
    padding: 0 8px;
  }

  /* Review Box / Hero */
  .review-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 12px;
  }

  .google-g {
    width: 46px;
    height: 46px;
  }

  .review-heading {
    font-size: 38px;
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
    margin-bottom: 14px;
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
    margin-bottom: 26px;
    font-weight: 500;
  }

  /* QR Frame */
  .qr-frame {
    background: #ffffff;
    padding: 24px;
    border-radius: 36px;
    box-shadow: 0 20px 50px rgba(13, 40, 32, 0.10), 0 0 0 2px #e3dacd;
    margin-bottom: 24px;
    position: relative;
  }

  .qr-frame::before {
    content: '';
    position: absolute;
    inset: 10px;
    border: 1px dashed #c99ba6;
    border-radius: 28px;
    pointer-events: none;
    opacity: 0.7;
  }

  .qr-image {
    width: 430px;
    height: 430px;
    display: block;
    image-rendering: pixelated;
  }

  /* Scan instruction badge */
  .scan-badge {
    background: #0d2e26;
    color: #fcebd2;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 14px 40px;
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
    gap: 14px;
    box-shadow: 0 8px 24px rgba(13, 42, 33, 0.28);
    margin-bottom: 24px;
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
    margin-bottom: 18px;
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
    background: #bd667a;
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

  <!-- Oncology Flora & Ribbon Emblem -->
  <div class="logo-wrap">
    ${oncologyEmblemSvg}
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
