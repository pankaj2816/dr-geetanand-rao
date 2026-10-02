const fs = require('fs');
const path = require('path');

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');
  body {
    background: #091310;
    color: #fff;
    font-family: 'Cinzel', serif;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 50px;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-size: 26px;
    color: #dfbe8b;
    letter-spacing: 0.12em;
    text-align: center;
  }
  .row {
    display: flex;
    gap: 40px;
    justify-content: center;
  }
  .box {
    text-align: center;
    background: #10211c;
    padding: 35px 30px;
    border-radius: 28px;
    border: 1px solid #1f3d34;
    width: 380px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  }
  h3 {
    font-size: 17px;
    letter-spacing: 0.1em;
    color: #f7e2c0;
    margin-bottom: 8px;
  }
  p {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 14px;
    color: #8da49c;
    margin-bottom: 24px;
    line-height: 1.4;
  }
  svg {
    width: 250px;
    height: 250px;
  }
</style>
</head>
<body>

<div class="title">REFINED LUXURY LOGO DESIGNS FOR DR. GEETANAND RAO</div>

<div class="row">

<!-- Option A: The Royal Medical Insignia (Asclepius Rod & Golden Laurel Wreath) -->
<div class="box">
  <h3>Option A: The Imperial Asclepius & Laurel</h3>
  <p>Classical medical authority, golden laurel wreath of excellence, rod of Asclepius, and balanced G–R initials.</p>
  <svg viewBox="0 0 160 160" fill="none">
    <defs>
      <linearGradient id="goldA" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff9ed" />
        <stop offset="25%" stop-color="#f0d39e" />
        <stop offset="60%" stop-color="#c89d52" />
        <stop offset="100%" stop-color="#8a5a1a" />
      </linearGradient>
      <linearGradient id="goldSheen" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#c89d52" />
        <stop offset="50%" stop-color="#fff8eb" />
        <stop offset="100%" stop-color="#c89d52" />
      </linearGradient>
      <radialGradient id="bgA" cx="50%" cy="36%" r="68%">
        <stop offset="0%" stop-color="#18483a" />
        <stop offset="60%" stop-color="#0c251e" />
        <stop offset="100%" stop-color="#040e0b" />
      </radialGradient>
      <filter id="shadowA" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.6"/>
      </filter>
    </defs>

    <!-- Base Signet Disc -->
    <circle cx="80" cy="80" r="74" fill="url(#bgA)" stroke="url(#goldA)" stroke-width="3" filter="url(#shadowA)"/>
    <circle cx="80" cy="80" r="66" stroke="url(#goldA)" stroke-width="1" stroke-dasharray="2.5 3.5" opacity="0.65"/>
    <circle cx="80" cy="80" r="62" stroke="url(#goldA)" stroke-width="0.5" opacity="0.4"/>

    <!-- Left Laurel Branch -->
    <g fill="url(#goldA)">
      <path d="M48 114 C39 104, 34 90, 36 76 C37 63, 43 51, 52 42" stroke="url(#goldA)" stroke-width="1.6" fill="none"/>
      <!-- Sculpted Olive Leaves -->
      <path d="M48 114 C44 110, 39 113, 41 108 C44 104, 49 107, 48 114 Z"/>
      <path d="M41 105 C35 102, 33 107, 34 100 C36 94, 42 97, 41 105 Z"/>
      <path d="M37 92 C30 90, 29 95, 30 88 C32 82, 38 85, 37 92 Z"/>
      <path d="M36 78 C29 77, 28 82, 29 75 C31 69, 37 72, 36 78 Z"/>
      <path d="M38 64 C32 62, 32 67, 34 60 C37 54, 42 57, 38 64 Z"/>
      <path d="M43 51 C38 48, 39 53, 42 46 C45 40, 49 44, 43 51 Z"/>
      <path d="M51 42 C47 38, 49 43, 52 37 C57 32, 59 37, 51 42 Z"/>
    </g>

    <!-- Right Laurel Branch (Mirrored) -->
    <g fill="url(#goldA)">
      <path d="M112 114 C121 104, 126 90, 124 76 C123 63, 117 51, 108 42" stroke="url(#goldA)" stroke-width="1.6" fill="none"/>
      <path d="M112 114 C116 110, 121 113, 119 108 C116 104, 111 107, 112 114 Z"/>
      <path d="M119 105 C125 102, 127 107, 126 100 C124 94, 118 97, 119 105 Z"/>
      <path d="M123 92 C130 90, 131 95, 130 88 C128 82, 122 85, 123 92 Z"/>
      <path d="M124 78 C131 77, 132 82, 131 75 C129 69, 123 72, 124 78 Z"/>
      <path d="M122 64 C128 62, 128 67, 126 60 C123 54, 118 57, 122 64 Z"/>
      <path d="M117 51 C122 48, 121 53, 118 46 C115 40, 111 44, 117 51 Z"/>
      <path d="M109 42 C113 38, 111 43, 108 37 C103 32, 101 37, 109 42 Z"/>
    </g>

    <!-- Central Rod of Asclepius -->
    <line x1="80" y1="32" x2="80" y2="120" stroke="url(#goldA)" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="80" cy="31" r="4.2" fill="url(#goldA)"/>
    <circle cx="80" cy="121" r="2.6" fill="url(#goldA)"/>

    <!-- Asclepius Serpent -->
    <path d="M80 40 C 93 42, 93 54, 80 58 C 67 62, 67 74, 80 78 C 93 82, 93 94, 80 98 C 68 102, 70 110, 77 114" 
          stroke="url(#goldSheen)" stroke-width="3.4" stroke-linecap="round" fill="none"/>

    <!-- Classical Sculpted Letter G -->
    <!-- Serif Head, Graceful Bowl, Inward Crossbar -->
    <path d="M62 64 C62 55, 54 51, 46 56 C38 61, 38 75, 46 81 C54 86, 62 81, 62 72 H50" 
          stroke="url(#goldA)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <line x1="50" y1="72" x2="62" y2="72" stroke="url(#goldA)" stroke-width="3.4" stroke-linecap="round"/>

    <!-- Classical Sculpted Letter R -->
    <path d="M98 54 V84 M98 54 H109 C116 54, 120 58, 120 64 C120 70, 116 74, 109 74 H98 M108 74 L120 85" 
          stroke="url(#goldA)" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <!-- Pinnacle 8-Point Healing Star -->
    <path d="M80 14 L81.8 19 L87 20.8 L81.8 22.6 L80 27.6 L78.2 22.6 L73 20.8 L78.2 19 Z" fill="url(#goldA)"/>
  </svg>
</div>

<!-- Option B: The Precision Oncology Ribbon Crest (Modern & Smart) -->
<div class="box">
  <h3>Option B: Precision Oncology Ribbon Crest</h3>
  <p>Modern precision oncology awareness ribbon flowing seamlessly through a golden cross shield and star.</p>
  <svg viewBox="0 0 160 160" fill="none">
    <defs>
      <linearGradient id="goldB" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff9ed" />
        <stop offset="25%" stop-color="#f0d39e" />
        <stop offset="60%" stop-color="#c89d52" />
        <stop offset="100%" stop-color="#8a5a1a" />
      </linearGradient>
      <radialGradient id="bgB" cx="50%" cy="36%" r="68%">
        <stop offset="0%" stop-color="#18483a" />
        <stop offset="60%" stop-color="#0c251e" />
        <stop offset="100%" stop-color="#040e0b" />
      </radialGradient>
      <filter id="shadowB" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity="0.6"/>
      </filter>
    </defs>

    <circle cx="80" cy="80" r="74" fill="url(#bgB)" stroke="url(#goldB)" stroke-width="3" filter="url(#shadowB)"/>
    <circle cx="80" cy="80" r="66" stroke="url(#goldB)" stroke-width="1" stroke-dasharray="2.5 3.5" opacity="0.65"/>
    <circle cx="80" cy="80" r="62" stroke="url(#goldB)" stroke-width="0.5" opacity="0.4"/>

    <!-- Subtle Golden Precision Cross in Shield -->
    <path d="M75 26 H85 V52 H111 V62 H85 V88 H75 V62 H49 V52 H75 Z" fill="url(#goldB)" opacity="0.16"/>

    <!-- Majestic Oncology Ribbon Loop -->
    <path d="M64 116 L64 96 C64 78, 52 68, 52 52 C52 36, 64 28, 80 28 C96 28, 108 36, 108 52 C108 68, 96 78, 96 96 L96 116" 
          stroke="url(#goldB)" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M61 82 L99 118" stroke="url(#goldB)" stroke-width="5" stroke-linecap="round"/>
    <path d="M99 82 L61 118" stroke="url(#goldB)" stroke-width="5" stroke-linecap="round"/>

    <!-- Inner Healing Diamond Star -->
    <path d="M80 44 L82.5 50.5 L89 53 L82.5 55.5 L80 62 L77.5 55.5 L71 53 L77.5 50.5 Z" fill="url(#goldB)"/>

    <!-- G and R flanking the ribbon wings -->
    <path d="M42 76 C42 69, 36 66, 30 70 C24 74, 24 85, 30 90 C36 94, 42 90, 42 84 H33" 
          stroke="url(#goldB)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <path d="M118 70 V92 M118 70 H126 C131 70, 134 73, 134 77.5 C134 82, 131 85, 126 85 H118 M125 85 L134 93" 
          stroke="url(#goldB)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <!-- Compass Accents -->
    <circle cx="80" cy="136" r="2.5" fill="url(#goldB)"/>
  </svg>
</div>

</div>

</body>
</html>
`;

fs.writeFileSync(path.resolve(__dirname, 'test-logo-v4.html'), html);
