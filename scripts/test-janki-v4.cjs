const fs = require('fs');
const path = require('path');

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');
  
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  body {
    background: #ffffff;
    font-family: 'Plus Jakarta Sans', sans-serif;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
</head>
<body>

  <svg viewBox="0 0 900 500" width="900" height="500" fill="none">
    <defs>
      <!-- Deep Medical Emerald Gradient -->
      <linearGradient id="emGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#14594b" />
        <stop offset="60%" stop-color="#0b3d32" />
        <stop offset="100%" stop-color="#04221b" />
      </linearGradient>

      <!-- Hope Cancer Awareness Ribbon Gradient -->
      <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#de8b9e" />
        <stop offset="45%" stop-color="#bd667a" />
        <stop offset="100%" stop-color="#883145" />
      </linearGradient>

      <!-- Healing Sage Leaf -->
      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#72b09d" />
        <stop offset="100%" stop-color="#2d6f5c" />
      </linearGradient>

      <!-- Soft Rose Petal -->
      <linearGradient id="petalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e5a4b1" />
        <stop offset="100%" stop-color="#b8697a" />
      </linearGradient>

      <!-- Survivorship Figure Rose Gradient -->
      <linearGradient id="figGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#cc7588" />
        <stop offset="100%" stop-color="#963f52" />
      </linearGradient>

      <!-- Gold Accent -->
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fdf3e0" />
        <stop offset="50%" stop-color="#d6af68" />
        <stop offset="100%" stop-color="#9c6f28" />
      </linearGradient>
    </defs>

    <!-- ====== MONOGRAM EMBLEM ====== -->
    <g transform="translate(230, 20)">

      <!-- Botanical Flora (Left) -->
      <!-- Main Green Leaf -->
      <path d="M46 114 C22 102, 8 76, 23 46 C42 50, 58 74, 46 114 Z" fill="url(#leafGrad)"/>
      <path d="M28 64 Q 36 82 46 114" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" opacity="0.45" fill="none"/>

      <!-- Rose Petal Leaf -->
      <path d="M58 90 C46 72, 40 48, 56 28 C70 34, 78 58, 58 90 Z" fill="url(#petalGrad)"/>

      <!-- Base Organic Flourish Stem curving under G and R -->
      <path d="M46 114 C38 138, 58 158, 90 162 C135 167, 210 164, 305 152" 
            stroke="url(#emGrad)" stroke-width="3.5" stroke-linecap="round" fill="none"/>

      <!-- Survivorship Figure (Joyous human rising with outstretched arms - Victory Over Cancer) -->
      <circle cx="218" cy="28" r="14" fill="url(#figGrad)"/>
      <path d="M190 54 C202 44, 214 39, 218 39 C222 39, 234 44, 246 54 C238 64, 226 78, 218 90 C210 78, 198 64, 190 54 Z" 
            fill="url(#figGrad)"/>

      <!-- The Letter G (Left, Classical Serif) -->
      <text x="142" y="152" 
            font-family="'Playfair Display', Georgia, serif" 
            font-size="160" 
            font-weight="700" 
            fill="url(#emGrad)" 
            text-anchor="middle">
        G
      </text>

      <!-- The Letter R (Right, Interlocking Serif) -->
      <text x="288" y="152" 
            font-family="'Playfair Display', Georgia, serif" 
            font-size="160" 
            font-weight="700" 
            fill="url(#emGrad)" 
            text-anchor="middle">
        R
      </text>

      <!-- Cancer Awareness Ribbon (Woven beautifully around the R on the right) -->
      <path d="M298 90 C282 72, 280 54, 296 42 C312 30, 328 42, 316 60 L286 112 C280 122, 278 136, 276 148" 
            stroke="url(#ribbonGrad)" stroke-width="8.5" stroke-linecap="round" fill="none"/>
      <path d="M312 56 L334 104 C342 120, 346 134, 348 146" 
            stroke="url(#ribbonGrad)" stroke-width="8.5" stroke-linecap="round" fill="none"/>

      <!-- Small Hope Diamond Spark -->
      <circle cx="297" cy="88" r="3.5" fill="url(#goldGrad)"/>
    </g>

    <!-- ====== TYPOGRAPHY ====== -->
    <!-- Doctor Name -->
    <text x="450" y="285" 
          font-family="'Playfair Display', Georgia, serif" 
          font-size="54" 
          font-weight="700" 
          fill="#0a362d" 
          text-anchor="middle"
          letter-spacing="0.01em">
      Dr. Geetanand Rao
    </text>

    <!-- Subtitle: MEDICAL ONCOLOGIST with flanking lines -->
    <line x1="120" y1="332" x2="250" y2="332" stroke="url(#ribbonGrad)" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
    <text x="450" y="340" 
          font-family="'Plus Jakarta Sans', sans-serif" 
          font-size="22" 
          font-weight="700" 
          fill="#b85f73" 
          text-anchor="middle" 
          letter-spacing="0.22em">
      MEDICAL ONCOLOGIST
    </text>
    <line x1="650" y1="332" x2="780" y2="332" stroke="url(#ribbonGrad)" stroke-width="2" stroke-linecap="round" opacity="0.8"/>

    <!-- Tagline: Compassion · Expertise · Hope -->
    <text x="450" y="395" 
          font-family="'Plus Jakarta Sans', sans-serif" 
          font-size="19" 
          font-weight="500" 
          fill="#3b5e54" 
          text-anchor="middle" 
          letter-spacing="0.14em">
      Compassion &nbsp;•&nbsp; Expertise &nbsp;•&nbsp; Hope & Healing
    </text>
  </svg>

</body>
</html>
`;

fs.writeFileSync(path.resolve(__dirname, 'test-janki-v4.html'), html);
