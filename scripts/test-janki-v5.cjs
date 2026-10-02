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
    background: #181b1a;
    font-family: 'Plus Jakarta Sans', sans-serif;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  .preview-box {
    background: #ffffff;
    padding: 40px 60px;
    border-radius: 20px;
  }
  .dark-preview-box {
    background: #111e1b;
    padding: 40px 60px;
    border-radius: 20px;
    border: 1px solid #233b35;
  }
</style>
</head>
<body>

<!-- White Background Version -->
<div class="preview-box">
  <svg viewBox="0 0 850 440" width="800" height="414" fill="none">
    <defs>
      <!-- Deep Medical Emerald Gradient -->
      <linearGradient id="emGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#145a4c" />
        <stop offset="60%" stop-color="#0c3d32" />
        <stop offset="100%" stop-color="#04221b" />
      </linearGradient>

      <!-- Hope Cancer Awareness Ribbon Gradient -->
      <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#df8a9d" />
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
    </defs>

    <!-- ====== MONOGRAM EMBLEM ====== -->
    <g transform="translate(205, 10)">

      <!-- Botanical Flora (Left) -->
      <!-- Main Green Leaf -->
      <path d="M46 114 C22 102, 8 76, 23 46 C42 50, 58 74, 46 114 Z" fill="url(#leafGrad)"/>
      <path d="M28 64 Q 36 82 46 114" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" opacity="0.45" fill="none"/>

      <!-- Rose Petal Leaf -->
      <path d="M58 90 C46 72, 40 48, 56 28 C70 34, 78 58, 58 90 Z" fill="url(#petalGrad)"/>

      <!-- Clean Flourish Stem: Curves gently under G ONLY, gracefully curling up into G, NEVER crossing into R! -->
      <path d="M46 114 C36 138, 56 160, 95 162 C135 164, 168 152, 178 136" 
            stroke="url(#emGrad)" stroke-width="3.5" stroke-linecap="round" fill="none"/>

      <!-- Survivorship Figure (Joyous human rising between G & R - Triumph Over Cancer) -->
      <circle cx="218" cy="24" r="14" fill="url(#figGrad)"/>
      <path d="M190 50 C202 40, 214 35, 218 35 C222 35, 234 40, 246 50 C238 60, 226 74, 218 86 C210 74, 198 60, 190 50 Z" 
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

      <!-- The Letter R (Right, Completely Clean, No misaligned crossing lines!) -->
      <text x="288" y="152" 
            font-family="'Playfair Display', Georgia, serif" 
            font-size="160" 
            font-weight="700" 
            fill="url(#emGrad)" 
            text-anchor="middle">
        R
      </text>

      <!-- Cancer Awareness Ribbon (Clean, refined ribbon elegantly framing R) -->
      <!-- Smooth upper loop of the ribbon -->
      <path d="M305 82 C292 64, 290 46, 305 34 C320 22, 335 34, 324 54 L295 106 C290 115, 287 130, 285 142" 
            stroke="url(#ribbonGrad)" stroke-width="7.5" stroke-linecap="round" fill="none"/>
      <!-- Smooth crossing tail of the ribbon -->
      <path d="M318 48 L342 98 C348 112, 352 128, 354 142" 
            stroke="url(#ribbonGrad)" stroke-width="7.5" stroke-linecap="round" fill="none"/>
    </g>

    <!-- ====== TYPOGRAPHY ====== -->
    <!-- Doctor Name -->
    <text x="425" y="270" 
          font-family="'Playfair Display', Georgia, serif" 
          font-size="52" 
          font-weight="700" 
          fill="#0a362d" 
          text-anchor="middle"
          letter-spacing="0.01em">
      Dr. Geetanand Rao
    </text>

    <!-- Subtitle: MEDICAL ONCOLOGIST with flanking rules -->
    <line x1="120" y1="316" x2="245" y2="316" stroke="#bd667a" stroke-width="1.8" stroke-linecap="round" opacity="0.85"/>
    <text x="425" y="322" 
          font-family="'Plus Jakarta Sans', sans-serif" 
          font-size="21" 
          font-weight="700" 
          fill="#b85f73" 
          text-anchor="middle" 
          letter-spacing="0.22em">
      MEDICAL ONCOLOGIST
    </text>
    <line x1="605" y1="316" x2="730" y2="316" stroke="#bd667a" stroke-width="1.8" stroke-linecap="round" opacity="0.85"/>

    <!-- Tagline: Compassion · Expertise · Hope -->
    <text x="425" y="375" 
          font-family="'Plus Jakarta Sans', sans-serif" 
          font-size="18" 
          font-weight="500" 
          fill="#3b5e54" 
          text-anchor="middle" 
          letter-spacing="0.14em">
      Compassion &nbsp;•&nbsp; Expertise &nbsp;•&nbsp; Hope & Healing
    </text>
  </svg>
</div>

</body>
</html>
`;

fs.writeFileSync(path.resolve(__dirname, 'test-janki-v5.html'), html);
console.log('HTML written');
