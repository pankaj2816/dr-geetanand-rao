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

  <svg viewBox="0 0 800 480" width="800" height="480" fill="none">
    <defs>
      <!-- Deep Medical Emerald Gradient -->
      <linearGradient id="emGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#12594a" />
        <stop offset="60%" stop-color="#0a3d32" />
        <stop offset="100%" stop-color="#04221b" />
      </linearGradient>

      <!-- Hope Cancer Awareness Ribbon Gradient -->
      <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e08da0" />
        <stop offset="45%" stop-color="#c16a7f" />
        <stop offset="100%" stop-color="#8f364a" />
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
        <stop offset="0%" stop-color="#cf788b" />
        <stop offset="100%" stop-color="#9a4356" />
      </linearGradient>

      <!-- Gold Accent -->
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fdf3e0" />
        <stop offset="50%" stop-color="#d6af68" />
        <stop offset="100%" stop-color="#9c6f28" />
      </linearGradient>
    </defs>

    <!-- ====== MONOGRAM EMBLEM ====== -->
    <g transform="translate(180, 25)">

      <!-- Botanical Flora (Left) -->
      <!-- Main Green Leaf -->
      <path d="M48 112 C24 100, 10 74, 25 45 C44 48, 60 72, 48 112 Z" fill="url(#leafGrad)"/>
      <path d="M30 62 Q 38 80 48 112" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" opacity="0.45" fill="none"/>

      <!-- Rose Petal Leaf -->
      <path d="M60 88 C48 70, 42 46, 58 26 C72 32, 80 56, 60 88 Z" fill="url(#petalGrad)"/>

      <!-- Base Organic Flourish Stem curving into G -->
      <path d="M48 112 C40 136, 60 156, 92 160 C130 165, 200 162, 280 150" 
            stroke="url(#emGrad)" stroke-width="3.5" stroke-linecap="round" fill="none"/>

      <!-- Survivorship Figure (Joyous human rising with outstretched arms - Victory Over Cancer) -->
      <circle cx="218" cy="28" r="13" fill="url(#figGrad)"/>
      <path d="M192 52 C204 42, 214 38, 218 38 C222 38, 232 42, 244 52 C236 62, 225 76, 218 88 C211 76, 200 62, 192 52 Z" 
            fill="url(#figGrad)"/>

      <!-- The Letter G (Left, Classical Serif) -->
      <text x="145" y="150" 
            font-family="'Playfair Display', Georgia, serif" 
            font-size="155" 
            font-weight="700" 
            fill="url(#emGrad)" 
            text-anchor="middle">
        G
      </text>

      <!-- The Letter R (Right, Interlocking Serif) -->
      <text x="285" y="150" 
            font-family="'Playfair Display', Georgia, serif" 
            font-size="155" 
            font-weight="700" 
            fill="url(#emGrad)" 
            text-anchor="middle">
        R
      </text>

      <!-- Cancer Awareness Ribbon (Woven beautifully around the R on the right) -->
      <!-- Top Loop -->
      <path d="M298 90 C282 72, 280 54, 296 42 C312 30, 328 42, 316 60 L286 112 C280 122, 278 136, 276 148" 
            stroke="url(#ribbonGrad)" stroke-width="8" stroke-linecap="round" fill="none"/>
      <!-- Crossing Front Tail -->
      <path d="M312 56 L334 104 C342 120, 346 134, 348 146" 
            stroke="url(#ribbonGrad)" stroke-width="8" stroke-linecap="round" fill="none"/>

      <!-- Small Hope Diamond Spark -->
      <circle cx="297" cy="88" r="3.5" fill="url(#goldGrad)"/>
    </g>

    <!-- ====== TYPOGRAPHY ====== -->
    <!-- Doctor Name -->
    <text x="400" y="275" 
          font-family="'Playfair Display', Georgia, serif" 
          font-size="52" 
          font-weight="700" 
          fill="#0a362d" 
          text-anchor="middle"
          letter-spacing="0.01em">
      Dr. Geetanand Rao
    </text>

    <!-- Subtitle: MEDICAL ONCOLOGIST with elegant hairline rules -->
    <g transform="translate(400, 320)">
      <line x1="-310" y1="0" x2="-180" y2="0" stroke="url(#ribbonGrad)" stroke-width="2" stroke-linecap="round" opacity="0.85"/>
      <text x="0" y="7" 
            font-family="'Plus Jakarta Sans', sans-serif" 
            font-size="22" 
            font-weight="700" 
            fill="#b85f73" 
            text-anchor="middle" 
            letter-spacing="0.22em">
        MEDICAL ONCOLOGIST
      </text>
      <line x1="180" y1="0" x2="310" y2="0" stroke="url(#ribbonGrad)" stroke-width="2" stroke-linecap="round" opacity="0.85"/>
    </g>

    <!-- Tagline: Compassion · Expertise · Hope -->
    <text x="400" y="375" 
          font-family="'Plus Jakarta Sans', sans-serif" 
          font-size="18" 
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

fs.writeFileSync(path.resolve(__dirname, 'test-janki-v3.html'), html);
console.log('HTML written');
