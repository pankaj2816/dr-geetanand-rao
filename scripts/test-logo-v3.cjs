const fs = require('fs');
const path = require('path');

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&display=swap');
  body {
    background: #091310;
    color: #fff;
    font-family: 'Cinzel', serif;
    display: flex;
    gap: 40px;
    padding: 60px;
    justify-content: center;
    align-items: center;
  }
  .box {
    text-align: center;
    background: #10211c;
    padding: 30px;
    border-radius: 24px;
    border: 1px solid #1f3d34;
    width: 340px;
  }
  h3 {
    font-size: 15px;
    letter-spacing: 0.1em;
    color: #e5c386;
    margin-bottom: 20px;
  }
  svg {
    width: 230px;
    height: 230px;
  }
</style>
</head>
<body>

<!-- Option 1: Golden Laurel Wreath & Asclepius Rod (Royal Medical Hallmark) -->
<div class="box">
  <h3>Option 1: The Imperial Asclepius & Laurel</h3>
  <svg viewBox="0 0 140 140" fill="none">
    <defs>
      <linearGradient id="gld1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff8ea" />
        <stop offset="30%" stop-color="#e8c78d" />
        <stop offset="70%" stop-color="#be9145" />
        <stop offset="100%" stop-color="#805417" />
      </linearGradient>
      <radialGradient id="bg1" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stop-color="#153e31" />
        <stop offset="75%" stop-color="#0a1d17" />
        <stop offset="100%" stop-color="#040e0b" />
      </radialGradient>
      <filter id="drp1" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#000" flood-opacity="0.6"/>
      </filter>
    </defs>

    <!-- Outer Rim -->
    <circle cx="70" cy="70" r="65" fill="url(#bg1)" stroke="url(#gld1)" stroke-width="2.5" filter="url(#drp1)"/>
    <circle cx="70" cy="70" r="58" stroke="url(#gld1)" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.6"/>

    <!-- Left Laurel Wreath -->
    <g fill="url(#gld1)">
      <!-- Leaf pairs curving up -->
      <path d="M42 98 C35 90, 31 78, 32 66 C32 55, 37 45, 45 37" stroke="url(#gld1)" stroke-width="1.2" fill="none"/>
      <!-- Leaves -->
      <path d="M42 98 C38 95, 34 98, 36 94 C38 90, 42 92, 42 98 Z"/>
      <path d="M36 91 C30 89, 29 93, 30 87 C31 82, 36 85, 36 91 Z"/>
      <path d="M33 80 C27 79, 26 83, 27 77 C28 72, 33 75, 33 80 Z"/>
      <path d="M32 68 C26 67, 25 71, 26 65 C27 60, 32 63, 32 68 Z"/>
      <path d="M33 56 C28 54, 28 58, 29 52 C31 47, 35 50, 33 56 Z"/>
      <path d="M37 45 C32 42, 33 46, 35 40 C38 35, 41 39, 37 45 Z"/>
      <path d="M44 37 C40 33, 42 37, 44 32 C48 28, 50 32, 44 37 Z"/>
    </g>

    <!-- Right Laurel Wreath (Mirrored) -->
    <g fill="url(#gld1)">
      <path d="M98 98 C105 90, 109 78, 108 66 C108 55, 103 45, 95 37" stroke="url(#gld1)" stroke-width="1.2" fill="none"/>
      <path d="M98 98 C102 95, 106 98, 104 94 C102 90, 98 92, 98 98 Z"/>
      <path d="M104 91 C110 89, 111 93, 110 87 C109 82, 104 85, 104 91 Z"/>
      <path d="M107 80 C113 79, 114 83, 113 77 C112 72, 107 75, 107 80 Z"/>
      <path d="M108 68 C114 67, 115 71, 114 65 C113 60, 108 63, 108 68 Z"/>
      <path d="M107 56 C112 54, 112 58, 111 52 C109 47, 105 50, 107 56 Z"/>
      <path d="M103 45 C108 42, 107 46, 105 40 C102 35, 99 39, 103 45 Z"/>
      <path d="M96 37 C100 33, 98 37, 96 32 C92 28, 90 32, 96 37 Z"/>
    </g>

    <!-- Central Staff of Asclepius -->
    <line x1="70" y1="28" x2="70" y2="104" stroke="url(#gld1)" stroke-width="2.8" stroke-linecap="round"/>
    <circle cx="70" cy="27" r="3.6" fill="url(#gld1)"/>
    <circle cx="70" cy="105" r="2.2" fill="url(#gld1)"/>

    <!-- Sacred Serpent -->
    <path d="M70 36 C 81 38, 81 48, 70 52 C 59 56, 59 66, 70 70 C 81 74, 81 84, 70 88 C 60 92, 62 98, 68 100" 
          stroke="url(#gld1)" stroke-width="2.8" stroke-linecap="round" fill="none"/>

    <!-- Classical Letters G and R -->
    <!-- G: Left -->
    <path d="M52 57 C52 51, 46 47, 40 51 C34 55, 34 67, 40 72 C46 76, 52 72, 52 65 H42" 
          stroke="url(#gld1)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <!-- R: Right -->
    <path d="M88 49 V74 M88 49 H97 C103 49, 106 52.5, 106 57.5 C106 62.5, 103 66, 97 66 H88 M96 66 L106 75" 
          stroke="url(#gld1)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <!-- Crown Star -->
    <path d="M70 14 L71.5 18 L75.5 19.5 L71.5 21 L70 25 L68.5 21 L64.5 19.5 L68.5 18 Z" fill="url(#gld1)"/>
  </svg>
</div>

<!-- Option 2: The Precision Cross & Intersecting Monogram (Architectural & Smart) -->
<div class="box">
  <h3>Option 2: Precision Cross & Diamond Monogram</h3>
  <svg viewBox="0 0 140 140" fill="none">
    <defs>
      <linearGradient id="gld2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff6e5" />
        <stop offset="35%" stop-color="#e5c58a" />
        <stop offset="70%" stop-color="#bf9145" />
        <stop offset="100%" stop-color="#7a4e14" />
      </linearGradient>
      <radialGradient id="bg2" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stop-color="#153e31" />
        <stop offset="75%" stop-color="#0a1d17" />
        <stop offset="100%" stop-color="#040e0b" />
      </radialGradient>
      <filter id="drp2" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#000" flood-opacity="0.6"/>
      </filter>
    </defs>
    <circle cx="70" cy="70" r="65" fill="url(#bg2)" stroke="url(#gld2)" stroke-width="2.5" filter="url(#drp2)"/>
    <circle cx="70" cy="70" r="58" stroke="url(#gld2)" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.6"/>

    <!-- Subtle Golden Medical Cross -->
    <path d="M66 22 H74 V46 H98 V54 H74 V78 H66 V54 H42 V46 H66 Z" fill="url(#gld2)" opacity="0.16"/>

    <!-- Architectural Diamond Monogram -->
    <!-- Circular protective G -->
    <circle cx="60" cy="70" r="26" stroke="url(#gld2)" stroke-width="3.6" stroke-dasharray="130 40" stroke-linecap="round"/>
    <line x1="60" y1="70" x2="80" y2="70" stroke="url(#gld2)" stroke-width="3.6" stroke-linecap="round"/>

    <!-- Regal R passing through -->
    <line x1="72" y1="46" x2="72" y2="94" stroke="url(#gld2)" stroke-width="3.6" stroke-linecap="round"/>
    <path d="M72 46 H86 C94 46, 99 50, 99 58 C99 66, 94 70, 86 70 H72" stroke="url(#gld2)" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <line x1="85" y1="70" x2="99" y2="94" stroke="url(#gld2)" stroke-width="3.8" stroke-linecap="round"/>

    <!-- 4 Cardinal Compass Diamonds -->
    <polygon points="70,9 72.5,12 70,15 67.5,12" fill="url(#gld2)"/>
    <polygon points="70,125 72.5,128 70,131 67.5,128" fill="url(#gld2)"/>
    <polygon points="9,70 12,72.5 15,70 12,67.5" fill="url(#gld2)"/>
    <polygon points="125,70 128,72.5 131,70 128,67.5" fill="url(#gld2)"/>
  </svg>
</div>

<!-- Option 3: Classical Oncology Ribbon & Seal of Excellence -->
<div class="box">
  <h3>Option 3: Oncology Ribbon & Star Emblem</h3>
  <svg viewBox="0 0 140 140" fill="none">
    <defs>
      <linearGradient id="gld3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff8eb" />
        <stop offset="35%" stop-color="#ebd09d" />
        <stop offset="70%" stop-color="#c69a4e" />
        <stop offset="100%" stop-color="#805417" />
      </linearGradient>
      <radialGradient id="bg3" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stop-color="#153e31" />
        <stop offset="75%" stop-color="#0a1d17" />
        <stop offset="100%" stop-color="#040e0b" />
      </radialGradient>
      <filter id="drp3" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#000" flood-opacity="0.6"/>
      </filter>
    </defs>
    <circle cx="70" cy="70" r="65" fill="url(#bg3)" stroke="url(#gld3)" stroke-width="2.5" filter="url(#drp3)"/>
    <circle cx="70" cy="70" r="59" stroke="url(#gld3)" stroke-width="0.8" opacity="0.7"/>

    <!-- Central Cancer Care Ribbon (Loop at top, crossing in center, tails at bottom) -->
    <path d="M57 95 L57 80 C57 65, 48 56, 48 44 C48 31, 58 24, 70 24 C82 24, 92 31, 92 44 C92 56, 83 65, 83 80 L83 95" 
          stroke="url(#gld3)" stroke-width="4.2" stroke-linecap="round" fill="none"/>
    <path d="M55 68 L85 96" stroke="url(#gld3)" stroke-width="4.2" stroke-linecap="round"/>
    <path d="M85 68 L55 96" stroke="url(#gld3)" stroke-width="4.2" stroke-linecap="round"/>

    <!-- Precision Star at Heart of Ribbon -->
    <path d="M70 38 L72 43 L77 44.5 L72 46 L70 51 L68 46 L63 44.5 L68 43 Z" fill="url(#gld3)"/>

    <!-- Monogram GR below/embracing the ribbon -->
    <circle cx="70" cy="70" r="48" stroke="url(#gld3)" stroke-width="0.5" stroke-dasharray="1 3" opacity="0.5"/>
    <circle cx="70" cy="118" r="2" fill="url(#gld3)"/>
    <circle cx="70" cy="12" r="2" fill="url(#gld3)"/>
  </svg>
</div>

</body>
</html>
`;

fs.writeFileSync(path.resolve(__dirname, 'test-logo-v3.html'), html);
