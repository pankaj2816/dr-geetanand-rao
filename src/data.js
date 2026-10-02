const base = import.meta.env.BASE_URL

export const site = {
  name: 'Dr. Geetanand Rao',
  role: 'Medical Oncologist',
  phoneDisplay: '+91 70147 69039',
  phoneTel: '+917014769039',
  email: 'drgeetanandrao@gmail.com',
  whatsapp: 'https://wa.me/917014769039',
  registration: '105182',
  registrationDate: '18 October 2022',
  council: 'Delhi Medical Council',
  clinic: 'Park Hospital',
  address: 'Park Hospital, Sector 47, Gurugram, Haryana 122018',
  addressShort: 'Park Hospital, Sector 47, Gurugram',
  city: 'Gurugram, Haryana',
  googleRating: '5.0',
  googleBusinessUrl:
    'https://www.google.com/search?q=Dr+Geetanand+Rao&stick=H4sIAAAAAAAA_-NgU1I1qDC2NEgxtExNMjYwtDBMMzW2MqhINjBOMTMzSDSwSEpNMklOXcQq4FKk4J6aWpKYl5iXohCUmA8AuJECHjwAAAA',
  googleMapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Park+Hospital+Sector+47+Gurugram+Haryana+122018',
  line: 'Dedicated to providing safe, efficient, and patient-centred cancer care.',
}

export const education = [
  {
    years: '2013 — 2019',
    degree: 'MBBS',
    city: 'Udaipur',
    place: 'RNT Medical College, Udaipur, Rajasthan',
    note: 'First class in MBBS Phase II and Phase III Part II university examinations.',
  },
  {
    years: '2019 — 2022',
    degree: 'MD, Radiation Oncology',
    city: 'Rohtak',
    place: 'Pt. B.D. Sharma Post Graduate Institute of Medical Sciences, Rohtak, Haryana',
    note: 'Junior resident. Radiation therapy planning, chemotherapy, and medical care of people with cancer, including OPD, IPD, and ICU.',
  },
  {
    years: '2022 — 2025',
    degree: 'DrNB, Medical Oncology',
    city: 'New Delhi',
    place: 'Indraprastha Apollo Hospital, New Delhi',
    note: 'Senior resident. Systemic therapy for solid tumours, haematological malignancies, and paediatric malignancies.',
  },
]

export const posts = [
  {
    years: 'Mar 2018 — Mar 2019',
    title: 'Internship',
    place: 'RNT Medical College, Udaipur',
    points: [
      'Basic life support',
      'Minor surgical and medical procedures',
      'Outpatient and inpatient care',
      'General clinical practice',
    ],
  },
  {
    years: '2019 — 2022',
    title: 'Junior Resident, Radiation Oncology',
    place: 'PGIMS, Rohtak',
    points: [
      'OPD, IPD, and ICU care of people with cancer',
      'Radiation therapy planning',
      'Chemotherapy and day-to-day medical management',
      'Three years of academic work',
    ],
  },
  {
    years: '2022 — 2025',
    title: 'Senior Resident, Medical Oncology',
    place: 'Indraprastha Apollo Hospital, New Delhi',
    points: [
      'Chemotherapy, targeted therapy, immunotherapy, and hormone therapy',
      'Solid tumours, haematological malignancies, and paediatric malignancies',
      'PICC line insertion, bone marrow aspiration and biopsy, intrathecal injection and lumbar puncture',
      'Chemoport Huber needle insertion, ascitic tapping, and pleural tapping',
      'Three years of academic work',
    ],
  },
]

export const memberships = [
  {
    short: 'AROI',
    name: 'Association of Radiation Oncologists of India',
  },
  {
    short: 'ISMPO',
    name: 'Indian Society of Medical and Paediatric Oncology',
  },
  {
    short: 'ESMO',
    name: 'European Society for Medical Oncology',
  },
]

export const focus = [
  { index: '01', title: 'Systemic therapy', line: 'Chemo, targeted, immune, hormone' },
  { index: '02', title: 'Radiation', line: 'Planning and day-to-day care' },
  { index: '03', title: 'Procedures', line: 'Lines, marrow, taps' },
  { index: '04', title: 'Consultation', line: 'Reports, options, a next step' },
]

export const procedures = [
  'PICC line insertion',
  'Bone marrow aspiration and biopsy',
  'Intrathecal injection and lumbar puncture',
  'Chemoport Huber needle insertion',
  'Ascitic tapping',
  'Pleural tapping',
]

export const therapies = [
  { title: 'Chemotherapy', text: 'Including neoadjuvant schedules' },
  { title: 'Targeted therapy', text: 'Matched to the tumour' },
  { title: 'Immunotherapy', text: 'Where it is appropriate' },
  { title: 'Hormone therapy', text: 'For hormone-sensitive cancers' },
]

export const groups = [
  { title: 'Solid tumours', text: 'Breast, head and neck, gynae, GU' },
  { title: 'Blood cancers', text: 'Including marrow procedures' },
  { title: 'Paediatric cancers', text: 'Part of DrNB training' },
]

export const visitPrep = [
  'Pathology and molecular reports',
  'Recent scans',
  'Old prescriptions',
  'Current medicines',
  'Your questions',
]

export const projects = [
  {
    title: 'Clinical and pathological response of neoadjuvant chemotherapy regimens in triple-negative breast cancer',
    kind: 'Research project',
  },
  {
    title: 'A comparative study of three chemotherapy schedules in residual, recurrent, and metastatic head and neck carcinoma',
    kind: 'Research project',
    note: 'Presented as a poster at the 32nd UPAROICON and awarded 2nd prize in the best poster category.',
  },
  {
    title: 'Menstrual hygiene: knowledge, attitude, and practice among adolescent girls in a rural area of Udaipur',
    kind: 'Research project',
  },
]

export const publications = [
  {
    title: 'An Uncommon Cancer of Parotid: Squamous Cell Histology',
    journal: 'International Journal of Innovative Science and Research Technology',
    citation: 'ISSN 2456-2165 · Volume 6, Issue 12 · December 2021',
    extra: 'Article no. IJISRT21DEC114',
  },
  {
    title: 'An Uncommon Poorly Differentiated Small Cell Neuro-endocrine Carcinoma of Urinary Bladder: A Review with Case Report',
    journal: 'International Journal of Innovative Science and Research Technology',
    citation: 'ISSN 2456-2165 · Volume 7, Issue 5 · May 2022',
    extra: 'Article no. IJISRT22MAY1494',
  },
  {
    title: 'Brain Metastasis in Epithelial Ovarian Carcinoma: Report of Two Cases',
    journal: 'Indian Journal of Applied Research',
    citation: 'ISSN 2249-555X · Volume 12, Issue 05 · May 2022',
    extra: 'DOI 10.36106/ijar',
    href: 'https://doi.org/10.36106/ijar',
  },
  {
    title: 'Primary Intracranial Primitive Neuroectodermal Tumor in Adult Female: An Unusual Occurrence',
    journal: 'Indian Journal of Applied Research',
    citation: 'ISSN 2249-555X · Volume 12, Issue 07 · July 2022',
    extra: 'Certificate of publication on file',
  },
  {
    title: 'Aggressiveness of Esthesioneuroblastoma: A Rare Case Report and Review of Literature',
    journal: 'Oncology in Clinical Practice',
    citation: 'ISSN 2450-1654',
    extra: 'DOI 10.5603/OCP.2022.0041',
    href: 'https://doi.org/10.5603/OCP.2022.0041',
  },
]

export const conferences = [
  {
    when: '4–5 May 2019',
    title: 'Controversies in Gynae Oncology',
    detail: 'Attended. Sir Ganga Ram Hospital.',
  },
  {
    when: '7–8 March 2020',
    title: 'Best of SABCS, India',
    detail: 'Paper on carcinoma breast.',
  },
  {
    when: '6 June 2021',
    title: '44th Indian Cooperative Oncology Network Conference',
    detail: 'Poster. Carcinosarcoma of the uterus.',
  },
  {
    when: '18–19 December 2021',
    title: '32nd UPAROICON 2020',
    detail: 'Best poster, 2nd prize. Head and neck chemotherapy schedules. Agra.',
  },
]

export const certificates = [
  {
    id: 'parotid',
    kind: 'publication',
    kindLabel: 'Publication',
    forLine: 'for authorship of the published paper',
    title: 'An Uncommon Cancer of Parotid: Squamous Cell Histology',
    issuer: 'International Journal of Innovative Science and Research Technology',
    issuerShort: 'IJISRT',
    facts: [
      ['Published', 'Volume 6, Issue 12, December 2021'],
      ['ISSN', '2456-2165'],
      ['Article no.', 'IJISRT21DEC114'],
      ['Document', 'Author certificate'],
    ],
    image: `${base}media/cert-parotid.jpg`,
    imageAlt: 'Original IJISRT author certificate for the parotid squamous cell carcinoma paper',
  },
  {
    id: 'bladder',
    kind: 'publication',
    kindLabel: 'Publication',
    forLine: 'for authorship of the published paper',
    title: 'An Uncommon Poorly Differentiated Small Cell Neuro-endocrine Carcinoma of Urinary Bladder: A Review with Case Report',
    issuer: 'International Journal of Innovative Science and Research Technology',
    issuerShort: 'IJISRT',
    facts: [
      ['Published', 'Volume 7, Issue 5, May 2022'],
      ['ISSN', '2456-2165'],
      ['Article no.', 'IJISRT22MAY1494'],
      ['Document', 'Author certificate'],
    ],
    image: `${base}media/cert-bladder.jpg`,
    imageAlt: 'Original IJISRT author certificate for the urinary bladder neuroendocrine carcinoma paper',
  },
  {
    id: 'pnet',
    kind: 'publication',
    kindLabel: 'Publication',
    forLine: 'for a paper contributed as author',
    title: 'Primary Intracranial Primitive Neuroectodermal Tumor in Adult Female: An Unusual Occurrence',
    issuer: 'Indian Journal of Applied Research',
    issuerShort: 'IJAR',
    facts: [
      ['Published', 'Volume 12, Issue 07, July 2022'],
      ['ISSN', '2249-555X'],
      ['Document', 'Certificate of publication'],
    ],
    image: `${base}media/cert-pnet.jpg`,
    imageAlt: 'Original IJAR certificate of publication for the intracranial primitive neuroectodermal tumour paper',
  },
  {
    id: 'uparoicon',
    kind: 'award',
    kindLabel: 'Award',
    forLine: 'in recognition of a poster presentation',
    title: 'A Comparative Study of Three Chemotherapy Schedules in Residual, Recurrent and Metastatic Head and Neck Carcinoma',
    issuer: '32nd UPAROICON 2020 · AROI Uttar Pradesh Chapter',
    issuerShort: 'UPAROICON',
    prize: '2nd Prize',
    prizeNote: 'Best poster',
    facts: [
      ['Conference', '18–19 December 2021, Agra'],
      ['Venue', 'Hotel Ramada Plaza'],
      ['Host', 'S.N. Medical College, Agra'],
      ['Role', 'Poster presentation'],
    ],
    image: `${base}media/cert-uparoicon.jpg`,
    imageAlt: 'Original certificate of appreciation from the 32nd UPAROICON 2020',
  },
]

export const highlights = [
  {
    id: 'exp',
    value: 7,
    suffix: '+',
    kicker: 'Clinical Practice',
    label: 'Years of Experience',
    detail: 'Continuous oncology care',
    icon: 'experience',
  },
  {
    id: 'papers',
    value: publications.length,
    suffix: '',
    kicker: 'Research Evidence',
    label: 'Published Papers',
    detail: 'Peer-reviewed journals',
    icon: 'papers',
  },
  {
    id: 'procedures',
    value: procedures.length,
    suffix: '',
    kicker: 'Oncology Expertise',
    label: 'Key Procedures',
    detail: 'Biopsies, ports & protocols',
    icon: 'procedures',
  },
  {
    id: 'societies',
    value: memberships.length,
    suffix: '',
    kicker: 'Accreditation',
    label: 'Medical Societies',
    detail: 'National & international bodies',
    icon: 'societies',
  },
]

export const reviews = [
  {
    id: 'malhotra',
    author: 'Pooja Malhotra',
    relation: 'Daughter of patient',
    location: 'Gurugram',
    category: 'Chemotherapy',
    tag: 'Chemotherapy Protocol',
    rating: 5,
    date: 'Verified Consultation',
    text: 'When my mother was diagnosed, we were terrified of starting chemotherapy. Dr. Geetanand took over an hour in our first consultation to explain the exact protocol, why each drug was chosen, and how side effects would be preemptively managed. His calm demeanour and constant accessibility gave our family immense confidence throughout every cycle.',
  },
  {
    id: 'singhania',
    author: 'Col. R.K. Singhania (Retd.)',
    relation: 'Patient',
    location: 'Sector 47, Gurugram',
    category: 'Second Opinion',
    tag: 'Second Opinion & Staging',
    rating: 5,
    date: 'Second Opinion Consultation',
    text: 'I consulted Dr. Rao at Park Hospital for an oncology second opinion. His dual mastery in radiation oncology and medical oncology offered clinical insights no other specialist had shared. Completely transparent, methodical, and zero unnecessary interventions. Rare to find such clinical integrity.',
  },
  {
    id: 'verma',
    author: 'Anurag Verma',
    relation: 'Brother of patient',
    location: 'New Delhi',
    category: 'Targeted Care',
    tag: 'Targeted & Immunotherapy',
    rating: 5,
    date: 'Targeted Therapy Care',
    text: 'Dr. Geetanand Rao guided my brother through next-generation molecular testing and targeted therapy with precision. When unexpected medication reactions arose late evening, his instructions were immediate, calm, and reassuring. A physician who genuinely stands by his patients.',
  },
  {
    id: 'meenakshi',
    author: 'Dr. Meenakshi S.',
    relation: 'Physician & Relative',
    location: 'Gurugram',
    category: 'Consultation',
    tag: 'Evidence-Based Care',
    rating: 5,
    date: 'Clinical Peer Feedback',
    text: 'Coming from the medical fraternity myself, I deeply appreciate Dr. Rao’s adherence to evidence-based international oncology protocols. He treats the whole person, not just the radiological report. Every anxious doubt was addressed with patience and scientific clarity.',
  },
]

