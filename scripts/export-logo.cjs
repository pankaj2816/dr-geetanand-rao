const fs = require('fs');
const path = require('path');

// Standalone SVG of the Imperial Asclepius & Laurel Medallion Logo
const logoSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="1200" height="1200" fill="none">
  <defs>
    <linearGradient id="logo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffbf2" />
      <stop offset="25%" stop-color="#f2d7a6" />
      <stop offset="60%" stop-color="#ca9f55" />
      <stop offset="100%" stop-color="#8a5a1a" />
    </linearGradient>
    <linearGradient id="logo-sheen" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#ca9f55" />
      <stop offset="50%" stop-color="#fffbf2" />
      <stop offset="100%" stop-color="#ca9f55" />
    </linearGradient>
    <radialGradient id="logo-bg" cx="50%" cy="36%" r="68%">
      <stop offset="0%" stop-color="#184a3b" />
      <stop offset="60%" stop-color="#0c251e" />
      <stop offset="100%" stop-color="#040e0b" />
    </radialGradient>
    <filter id="logo-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#040e0b" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Base Signet Disc with 3D Bevel -->
  <circle cx="80" cy="80" r="74" fill="url(#logo-bg)" stroke="url(#logo-gold)" stroke-width="3" filter="url(#logo-shadow)"/>
  <circle cx="80" cy="80" r="66" stroke="url(#logo-gold)" stroke-width="1" stroke-dasharray="2.5 3.5" opacity="0.75"/>
  <circle cx="80" cy="80" r="62" stroke="url(#logo-gold)" stroke-width="0.6" opacity="0.45"/>

  <!-- Left Laurel Wreath -->
  <g fill="url(#logo-gold)">
    <path d="M48 114 C39 104, 34 90, 36 76 C37 63, 43 51, 52 42" stroke="url(#logo-gold)" stroke-width="1.6" fill="none"/>
    <path d="M48 114 C44 110, 39 113, 41 108 C44 104, 49 107, 48 114 Z"/>
    <path d="M41 105 C35 102, 33 107, 34 100 C36 94, 42 97, 41 105 Z"/>
    <path d="M37 92 C30 90, 29 95, 30 88 C32 82, 38 85, 37 92 Z"/>
    <path d="M36 78 C29 77, 28 82, 29 75 C31 69, 37 72, 36 78 Z"/>
    <path d="M38 64 C32 62, 32 67, 34 60 C37 54, 42 57, 38 64 Z"/>
    <path d="M43 51 C38 48, 39 53, 42 46 C45 40, 49 44, 43 51 Z"/>
    <path d="M51 42 C47 38, 49 43, 52 37 C57 32, 59 37, 51 42 Z"/>
  </g>

  <!-- Right Laurel Wreath -->
  <g fill="url(#logo-gold)">
    <path d="M112 114 C121 104, 126 90, 124 76 C123 63, 117 51, 108 42" stroke="url(#logo-gold)" stroke-width="1.6" fill="none"/>
    <path d="M112 114 C116 110, 121 113, 119 108 C116 104, 111 107, 112 114 Z"/>
    <path d="M119 105 C125 102, 127 107, 126 100 C124 94, 118 97, 119 105 Z"/>
    <path d="M123 92 C130 90, 131 95, 130 88 C128 82, 122 85, 123 92 Z"/>
    <path d="M124 78 C131 77, 132 82, 131 75 C129 69, 123 72, 124 78 Z"/>
    <path d="M122 64 C128 62, 128 67, 126 60 C123 54, 118 57, 122 64 Z"/>
    <path d="M117 51 C122 48, 121 53, 118 46 C115 40, 111 44, 117 51 Z"/>
    <path d="M109 42 C113 38, 111 43, 108 37 C103 32, 101 37, 109 42 Z"/>
  </g>

  <!-- Central Rod of Asclepius -->
  <line x1="80" y1="32" x2="80" y2="120" stroke="url(#logo-gold)" stroke-width="3.2" stroke-linecap="round"/>
  <circle cx="80" cy="31" r="4.2" fill="url(#logo-gold)"/>
  <circle cx="80" cy="121" r="2.6" fill="url(#logo-gold)"/>

  <!-- Asclepius Serpent -->
  <path d="M80 40 C 93 42, 93 54, 80 58 C 67 62, 67 74, 80 78 C 93 82, 93 94, 80 98 C 68 102, 70 110, 77 114" 
        stroke="url(#logo-sheen)" stroke-width="3.4" stroke-linecap="round" fill="none"/>

  <!-- Classical Sculpted Letter G -->
  <path d="M62 64 C62 55, 54 51, 46 56 C38 61, 38 75, 46 81 C54 86, 62 81, 62 72 H50" 
        stroke="url(#logo-gold)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="50" y1="72" x2="62" y2="72" stroke="url(#logo-gold)" stroke-width="3.4" stroke-linecap="round"/>

  <!-- Classical Sculpted Letter R -->
  <path d="M98 54 V84 M98 54 H109 C116 54, 120 58, 120 64 C120 70, 116 74, 109 74 H98 M108 74 L120 85" 
        stroke="url(#logo-gold)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Pinnacle 8-Point Healing Star -->
  <path d="M80 14 L81.8 19 L87 20.8 L81.8 22.6 L80 27.6 L78.2 22.6 L73 20.8 L78.2 19 Z" fill="url(#logo-gold)"/>
</svg>
`;

// Save SVG
const svgPath = path.resolve(__dirname, '../public/dr-geetanand-rao-logo.svg');
fs.writeFileSync(svgPath, logoSvg);
console.log('SVG written to', svgPath);

// Create an HTML page to render high-res PNG (1200x1200px)
const htmlWrapper = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 1200px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 1050px;
    height: 1050px;
  }
</style>
</head>
<body>
${logoSvg}
</body>
</html>
`;

const htmlPath = path.resolve(__dirname, 'render-logo.html');
fs.writeFileSync(htmlPath, htmlWrapper);
console.log('HTML written to', htmlPath);
