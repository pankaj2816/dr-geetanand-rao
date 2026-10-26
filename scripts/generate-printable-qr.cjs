const fs = require('fs');
const path = require('path');

const qrPath = path.resolve(__dirname, '../public/review-qr.png');
const qrBase64 = fs.readFileSync(qrPath).toString('base64');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Dr. Geetanand Rao - Google Review Stand</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @page {
    size: A5 portrait;
    margin: 0;
  }

  body {
    width: 1400px;
    height: 1980px;
    background: #f0f4f2;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #0c2b23;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* Master Stand Plaque */
  .plaque {
    width: 1352px;
    height: 1932px;
    background: #ffffff;
    border-radius: 40px;
    border: 4px solid #0f483c;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 48px 56px 40px 56px;
    box-shadow: 0 20px 60px rgba(12, 43, 35, 0.12);
  }

  /* Double Luxury Inner Border */
  .plaque::before {
    content: '';
    position: absolute;
    inset: 14px;
    border: 2px solid #c88998;
    border-radius: 30px;
    pointer-events: none;
    opacity: 0.65;
  }
  .plaque::after {
    content: '';
    position: absolute;
    inset: 22px;
    border: 1.5px dashed #0f483c;
    border-radius: 22px;
    pointer-events: none;
    opacity: 0.25;
  }

  /* Corner Accents */
  .corner {
    position: absolute;
    width: 36px;
    height: 36px;
    border-color: #bd667a;
    border-style: solid;
    pointer-events: none;
  }
  .c-tl { top: 28px; left: 28px; border-width: 5px 0 0 5px; }
  .c-tr { top: 28px; right: 28px; border-width: 5px 5px 0 0; }
  .c-bl { bottom: 28px; left: 28px; border-width: 0 0 5px 5px; }
  .c-br { bottom: 28px; right: 28px; border-width: 0 5px 5px 0; }

  /* ================= 1. DOCTOR BRANDING HEADER ================= */
  .header-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo-svg {
    width: 310px;
    height: 120px;
    margin-bottom: 10px;
  }

  .doctor-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 78px;
    font-weight: 900;
    color: #0b362c;
    letter-spacing: 0.01em;
    line-height: 1.1;
    margin-bottom: 12px;
  }

  .specialty-badge {
    background: #fbf0f2;
    border: 2.5px solid #bd667a;
    color: #a43851;
    font-size: 32px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 10px 40px;
    border-radius: 999px;
    margin-bottom: 14px;
    box-shadow: 0 4px 12px rgba(189, 102, 122, 0.12);
  }

  .creds-text {
    font-size: 28px;
    font-weight: 700;
    color: #2a5246;
    letter-spacing: 0.02em;
    margin-bottom: 6px;
  }

  .hospital-text {
    font-size: 29px;
    font-weight: 800;
    color: #0f483c;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* Decorative Line Divider */
  .header-divider {
    width: 100%;
    max-width: 1100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #bd667a 20%, #0f483c 50%, #bd667a 80%, transparent);
    margin: 22px 0 20px 0;
    opacity: 0.7;
  }

  /* ================= 2. GOOGLE REVIEW MAIN SECTION ================= */
  .review-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .google-headline-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10px;
  }
  .google-icon {
    width: 72px;
    height: 72px;
  }
  .review-headline {
    font-size: 68px;
    font-weight: 900;
    color: #0b2f25;
    letter-spacing: -0.02em;
  }

  /* 5 Giant Bright Stars */
  .stars-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 14px;
  }
  .star-svg {
    width: 64px;
    height: 64px;
    fill: #fbbc04;
    filter: drop-shadow(0 4px 8px rgba(251, 188, 4, 0.6));
  }

  .review-tagline {
    font-size: 32px;
    font-weight: 700;
    color: #214d41;
    line-height: 1.35;
    max-width: 1120px;
    margin-bottom: 24px;
  }
  .review-tagline strong {
    color: #a43851;
  }

  /* Prominent QR Container */
  .qr-card {
    background: #ffffff;
    padding: 26px;
    border-radius: 36px;
    border: 4px solid #0f483c;
    box-shadow: 0 18px 45px rgba(15, 72, 60, 0.16);
    position: relative;
    margin-bottom: 22px;
  }

  .qr-corner {
    position: absolute;
    width: 36px;
    height: 36px;
    border-color: #bd667a;
    border-style: solid;
  }
  .qc-tl { top: 10px; left: 10px; border-width: 6px 0 0 6px; border-top-left-radius: 14px; }
  .qc-tr { top: 10px; right: 10px; border-width: 6px 6px 0 0; border-top-right-radius: 14px; }
  .qc-bl { bottom: 10px; left: 10px; border-width: 0 0 6px 6px; border-bottom-left-radius: 14px; }
  .qc-br { bottom: 10px; right: 10px; border-width: 0 6px 6px 0; border-bottom-right-radius: 14px; }

  .qr-img {
    width: 580px;
    height: 580px;
    display: block;
    image-rendering: pixelated;
  }

  /* High-Contrast Scan Action Banner */
  .scan-prompt-pill {
    background: #0f483c;
    color: #ffffff;
    font-size: 33px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 18px 60px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    gap: 18px;
    box-shadow: 0 10px 28px rgba(15, 72, 60, 0.35);
    border: 3px solid #84caa6;
    margin-bottom: 24px;
  }
  .scan-prompt-pill svg {
    width: 38px;
    height: 38px;
  }

  /* 3 Big Simple Steps */
  .steps-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
    width: 100%;
    max-width: 1200px;
  }
  .step-card {
    background: #f7faf8;
    border: 2.5px solid #d4e4dc;
    border-radius: 24px;
    padding: 18px 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    text-align: left;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  }
  .step-num-circle {
    background: #bd667a;
    color: #ffffff;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    font-size: 28px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 10px rgba(189, 102, 122, 0.4);
  }
  .step-desc {
    font-size: 26px;
    font-weight: 800;
    color: #0d382e;
    line-height: 1.25;
  }

  /* ================= 3. BOTTOM FOOTER SECTION ================= */
  .footer-container {
    width: 100%;
    max-width: 1220px;
    background: #f2f7f4;
    border: 2.5px solid #cfe0d8;
    border-radius: 26px;
    padding: 22px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .direct-url-wrap {
    text-align: left;
  }
  .direct-url-label {
    font-size: 22px;
    font-weight: 700;
    color: #4a6d61;
    margin-bottom: 4px;
  }
  .direct-url-link {
    font-size: 28px;
    font-weight: 900;
    color: #1a73e8;
    text-decoration: none;
    letter-spacing: 0.01em;
  }

  .footer-info-wrap {
    text-align: right;
  }
  .footer-website {
    font-size: 27px;
    font-weight: 900;
    color: #0b3b30;
    margin-bottom: 4px;
  }
  .footer-location {
    font-size: 23px;
    font-weight: 700;
    color: #3f685c;
  }
</style>
</head>
<body>

<div class="plaque">
  <!-- Corner Ornaments -->
  <div class="corner c-tl"></div>
  <div class="corner c-tr"></div>
  <div class="corner c-bl"></div>
  <div class="corner c-br"></div>

  <!-- 1. DOCTOR BRANDING HEADER -->
  <div class="header-section">
    <!-- Clean Medical Oncology Emblem (No snake, clean R) -->
    <svg class="logo-svg" viewBox="0 0 350 160" fill="none">
      <defs>
        <linearGradient id="pLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#5fa793" />
          <stop offset="100%" stop-color="#246a58" />
        </linearGradient>
        <linearGradient id="pPetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e89bad" />
          <stop offset="100%" stop-color="#bd667a" />
        </linearGradient>
        <linearGradient id="pFig" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#db7087" />
          <stop offset="100%" stop-color="#a83c53" />
        </linearGradient>
      </defs>

      <g transform="translate(10, 5)">
        <!-- Botanical Flora (Left) -->
        <path d="M46 114 C22 102, 8 76, 23 46 C42 50, 58 74, 46 114 Z" fill="url(#pLeaf)"/>
        <path d="M28 64 Q 36 82 46 114" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.6" fill="none"/>
        <path d="M58 90 C46 72, 40 48, 56 28 C70 34, 78 58, 58 90 Z" fill="url(#pPetal)"/>

        <!-- Flourish Stem curving under G only -->
        <path d="M46 114 C36 138, 56 160, 95 162 C135 164, 168 152, 178 136" 
              stroke="#0f483c" stroke-width="4.5" stroke-linecap="round" fill="none"/>

        <!-- Survivorship Figure (Joyous Human) -->
        <circle cx="218" cy="24" r="14" fill="url(#pFig)"/>
        <path d="M190 50 C202 40, 214 35, 218 35 C222 35, 234 40, 246 50 C238 60, 226 74, 218 86 C210 74, 198 60, 190 50 Z" 
              fill="url(#pFig)"/>

        <!-- Classical Letter G (Emerald) -->
        <text x="142" y="152" font-family="'Playfair Display', Georgia, serif" font-size="160" font-weight="800" fill="#0f483c" text-anchor="middle">
          G
        </text>

        <!-- Classical Letter R (Clean, Emerald, no snake, no pink line) -->
        <text x="288" y="152" font-family="'Playfair Display', Georgia, serif" font-size="160" font-weight="800" fill="#0f483c" text-anchor="middle">
          R
        </text>
      </g>
    </svg>

    <h1 class="doctor-title">Dr. Geetanand Rao</h1>
    
    <div class="specialty-badge">Senior Consultant · Medical Oncology</div>

    <div class="creds-text">MBBS &nbsp;•&nbsp; MD &nbsp;•&nbsp; DrNB (Medical Oncology) &nbsp;•&nbsp; DMC Reg. 105182</div>
    <div class="hospital-text">📍 Park Hospital · Sector 47, Gurugram</div>

    <div class="header-divider"></div>
  </div>

  <!-- 2. GOOGLE REVIEW MAIN HERO SECTION -->
  <div class="review-section">
    <div class="google-headline-row">
      <svg class="google-icon" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.26-2.09 3.675-5.17 3.675-9.15z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.27v3.13C3.26 21.31 7.34 24 12 24z" />
        <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.63H1.27C.46 8.24 0 10.06 0 12s.46 3.76 1.27 5.37l4-3.13z" />
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.69 1.27 6.63l4 3.13c.95-2.85 3.6-4.96 6.73-4.96z" />
      </svg>
      <h2 class="review-headline">Review Us on Google</h2>
    </div>

    <!-- 5 Big Golden Stars -->
    <div class="stars-row">
      <svg class="star-svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      <svg class="star-svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      <svg class="star-svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      <svg class="star-svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      <svg class="star-svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    </div>

    <p class="review-tagline">
      Your kind 5-star experience <strong>inspires hope</strong> and helps other patients find trusted cancer care.
    </p>

    <!-- Large QR Code Box with Viewfinder Corners -->
    <div class="qr-card">
      <div class="qr-corner qc-tl"></div>
      <div class="qr-corner qc-tr"></div>
      <div class="qr-corner qc-bl"></div>
      <div class="qr-corner qc-br"></div>
      <img class="qr-img" src="data:image/png;base64,${qrBase64}" alt="Dr Geetanand Rao Google Review QR Code" />
    </div>

    <!-- Scan Instruction Pill -->
    <div class="scan-prompt-pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
      Point Phone Camera to Scan
    </div>

    <!-- 3 Big Simple Steps -->
    <div class="steps-row">
      <div class="step-card">
        <div class="step-num-circle">1</div>
        <div class="step-desc">Open Phone<br>Camera</div>
      </div>
      <div class="step-card">
        <div class="step-num-circle">2</div>
        <div class="step-desc">Point at<br>QR Code</div>
      </div>
      <div class="step-card">
        <div class="step-num-circle">3</div>
        <div class="step-desc">Tap Link &amp; Share<br>5-Star Review ★</div>
      </div>
    </div>
  </div>

  <!-- 3. BOTTOM FOOTER SECTION -->
  <div class="footer-container">
    <div class="direct-url-wrap">
      <div class="direct-url-label">Direct Review Link:</div>
      <div class="direct-url-link">https://g.page/r/Cc60vggKZj3AEBM/review</div>
    </div>
    <div class="footer-info-wrap">
      <div class="footer-website">www.drgeetanandrao.com</div>
      <div class="footer-location">Park Hospital · Sector 47, Gurugram</div>
    </div>
  </div>
</div>

</body>
</html>
`;

const htmlFile = path.resolve(__dirname, 'printable-qr-stand.html');
fs.writeFileSync(htmlFile, htmlContent);
console.log('Clean White High-Legibility Stand HTML created successfully.');
