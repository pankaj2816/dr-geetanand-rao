# Dr. Geetanand Rao — Medical Oncology Portfolio & Practice Website

A modern, responsive, and editorial portfolio and clinical practice website for **Dr. Geetanand Rao**, a Medical Oncologist (MBBS, MD Radiation Oncology, DrNB Medical Oncology) trained at RNT Medical College Udaipur, PGIMS Rohtak, and Indraprastha Apollo Hospital New Delhi.

---

## 🌟 Features & Highlights

- **Editorial Medical Design**: Designed with classic editorial typography (*Cormorant Garamond* serif headings & *Outfit* sans-serif body), deep forest greens, warm paper tones, and refined brass accents.
- **Comprehensive Clinical Practice**: Dedicated pages detailing systemic therapies (chemotherapy, targeted therapy, immunotherapy, hormone therapy), procedural competencies (PICC lines, bone marrow biopsies, intrathecal injections, chemoports), and appointment preparation guides.
- **Academic & Research Showcase**: Full bibliography of published case reports and studies, conference presentations, and awards (including 2nd prize for best poster at 32nd UPAROICON).
- **Interactive Certificate Gallery**: Custom certificate redesigns with interactive full-resolution Lightbox inspection of the original physical certificates and publication credentials.
- **Direct Appointment Inquiry Flow**: Client-side validated consultation request form with mailto formulation and direct WhatsApp/Phone integrations, with zero invasive tracking or data retention.
- **Lightweight & High-Performance**: Built with React 19 and Vite 6, achieving sub-second build times and minimal bundle size (~92 kB gzipped JS).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool / Bundler**: [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/) (Browser routing with dynamic page titles)
- **Styling**: Pure semantic modern CSS (CSS Custom Properties, Flexbox, CSS Grid, full responsive breakpoints, mobile navigation drawer)
- **Assets**: Optimized media in `/public/media` (portraits, original certificates, curriculum vitae PDF)

---

## 📂 Project Structure

```text
dr_geetanand/
├── index.html              # HTML entry with SEO meta tags & Google Fonts
├── package.json            # Project dependencies and npm scripts
├── vite.config.js          # Vite configuration with React plugin
├── public/
│   ├── favicon.svg         # SVG favicon
│   └── media/              # High-res portraits, certificates & resume PDF
│       ├── cert-bladder.jpg
│       ├── cert-parotid.jpg
│       ├── cert-pnet.jpg
│       ├── cert-uparoicon.jpg
│       ├── Dr-Geetanand-Rao-Resume.pdf
│       ├── portrait-blue.jpg
│       ├── portrait-brown.jpg
│       └── portrait-front.jpg
└── src/
    ├── main.jsx            # Application entrypoint
    ├── App.jsx             # Route definitions and layout wrapper
    ├── data.js             # Centralized structured data (bio, pubs, certs, etc.)
    ├── styles.css          # Design system, tokens, typography, and responsive styles
    ├── usePageTitle.js     # Route title synchronization hook
    ├── components/
    │   ├── Layout.jsx      # Global layout wrapper with skip-link, Nav, and Footer
    │   ├── Nav.jsx         # Sticky navigation header with mobile drawer
    │   ├── Footer.jsx      # Practice credentials, contact, and legal disclaimer
    │   ├── PageHero.jsx    # Standardized section banner
    │   └── Lightbox.jsx    # Accessible modal viewer for original credentials
    └── pages/
        ├── Home.jsx        # Hero, credential strip, clinical focus, featured research
        ├── About.jsx       # Biography, education timeline, clinical posts, memberships
        ├── Practice.jsx    # Systemic therapies, disease groups, procedures, prep guide
        ├── Research.jsx    # Publications bibliography, research projects, conferences
        ├── Certificates.jsx# Redesigned certificate sheets with filter tabs & original lightbox
        ├── Contact.jsx     # Consultation request form, clinic details, direct links
        └── NotFound.jsx    # 404 error page
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0 or newer recommended)
- `npm` or `pnpm` or `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/pankaj2816/dr-geetanand-rao.git
cd dr-geetanand-rao

# Install dependencies
npm install
```

### Development

Run the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🩺 Medical Practitioner Information

- **Practitioner**: Dr. Geetanand Rao
- **Designation**: Medical Oncologist (MBBS, MD, DrNB)
- **Medical Registration**: Delhi Medical Council, Reg. No. 105182
- **Affiliated Societies**: AROI, ISMPO, ESMO

---

## 📄 License

This project is proprietary and maintained for Dr. Geetanand Rao. All rights reserved.
