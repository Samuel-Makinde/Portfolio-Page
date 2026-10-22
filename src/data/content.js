import easeReadsImg from '../assets/easereads poster design.jpg';
import liightImg from '../assets/liight.png';

export const profile = {
  name: 'Samuel Tobi Makinde',
  shortName: 'Samuel Makinde',
  title: 'Software Engineer · Full-Stack, Backend, and Technical Leadership',
  location: 'Lagos, Nigeria',
  experienceLabel: '4+ years in software development',
  headline: 'I build software that turns complex problems into practical products.',
  intro:
    "I'm Samuel Tobi Makinde, a software engineer working across frontend, backend, and full-stack development. I build web applications, APIs, database-driven systems, and SaaS products, combining technical execution with product thinking and team leadership.",
  email: 'samuelmakinde19@gmail.com',
  phone: '+234 906 476 6113',
  phoneHref: 'tel:+2349064766113',
  portfolio: 'https://samuelpage.netlify.app/',
  linkedin: 'https://www.linkedin.com/in/samuel-tobi-makinde/',
  github: 'https://github.com/Samuel-Makinde/',
  about: [
    'I build and maintain software products that solve real operational and learning problems. My work spans frontend interfaces and backend systems: APIs, databases, payment integrations, and features that connect business context to OpenAI models for practical analytics.',
    'As a co-founder of EaseReads and a contributor to CoretaHub, I have owned product work from idea through delivery: requirements, implementation, integrations, and ongoing maintenance. At GFA Technologies I lead full-stack development and work with stakeholders to understand hospital workflows before turning them into software. I care about maintainable code, usability, and outcomes that matter to the people who use the product.',
  ],
};

/**
 * CV files. Paste each Google Drive share link into `href`.
 * Leave `href` as an empty string until the file exists. The menu
 * shows that option as unavailable instead of opening a broken link.
 */
export const cvDocuments = [
  {
    id: 'master',
    label: 'Full-Stack Developer CV',
    detail: 'Default for full-stack and general roles',
    href: 'https://drive.google.com/file/d/1Lx8tB8aFlDmIT4cxP_TyhzZHq-J_bAzT/view?usp=sharing',
  },
  {
    id: 'frontend',
    label: 'Frontend Engineer CV',
    detail: 'For frontend-focused roles',
    href: '',
  },
  {
    id: 'backend',
    label: 'Backend Engineer CV',
    detail: 'For backend-focused roles',
    href: 'https://drive.google.com/file/d/1m2iw7ww79ib955m2TZXQSFxZgvVHN_RK/view?usp=sharing',
  },
];

export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const heroHighlights = [
  { name: 'EaseReads', role: 'Co-founder & Software Engineer' },
  { name: 'CoretaHub', role: 'Co-founder / Development Contributor' },
  { name: 'GFA Health', role: 'Lead Software Engineer' },
  { name: 'Liight', role: 'Contract Frontend Developer' },
];

export const projects = [
  {
    id: 'easereads',
    name: 'EaseReads',
    role: 'Co-founder & Software Engineer',
    status: 'active',
    description:
      'An educational technology platform helping students prepare for examinations through computer-based tests, learning resources, past questions, and performance tracking.',
    highlights: [
      'Online examination preparation and computer-based testing',
      'Question banks, learning resources, and performance tracking',
      'Web and Android experiences with payment-backed premium access',
    ],
    tech: [
      'React',
      'Node.js',
      'TypeScript',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'Paystack',
      'React Native',
      'Expo',
    ],
    traction: [
      'Served over 5,000 students',
      'Reported JUPEB-related revenue exceeds ₦4 million',
    ],
    image: easeReadsImg,
    imageAlt: 'EaseReads educational platform marketing poster',
    links: [
      { label: 'Website', href: 'https://easereads.com/' },
      { label: 'Application', href: 'https://app.easereads.com/' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.easereads.app',
      },
    ],
  },
  {
    id: 'coretahub',
    name: 'CoretaHub',
    role: 'Co-founder / Software Development Contributor',
    status: 'active',
    description:
      'A SaaS platform helping schools and tutorial centres provide digital learning and manage student-facing operations.',
    highlights: [
      'CBT software and examination question banks',
      'Branded school websites and digital learning experiences',
      'Student access, attendance, fee management, and payment workflows',
    ],
    tech: [
      'React',
      'Node.js',
      'TypeScript',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'Paystack',
    ],
    traction: ['10 schools and tutorial centres onboarded'],
    image: null,
    imageAlt: null,
    links: [
      { label: 'Website', href: 'https://coretahub.com/' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.coretahub_myapp',
      },
    ],
  },
  {
    id: 'gfa-health',
    name: 'GFA Health',
    role: 'Lead Software Engineer / Full-Stack Developer',
    status: 'active',
    description:
      'A hospital management and digital operations platform designed to support clinical and non-clinical workflows.',
    highlights: [
      'Contributing to software product development for hospital operations',
      'Participating in hospital assessments to understand digitisation needs',
      'Connecting stakeholder requirements with technical implementation',
    ],
    tech: [
      'React',
      'Node.js',
      'TypeScript',
      'Express.js',
      'PostgreSQL',
      'REST APIs',
    ],
    traction: [],
    image: null,
    imageAlt: null,
    links: [{ label: 'Website', href: 'https://www.gfa-health.com/' }],
  },
  {
    id: 'liight',
    name: 'Liight',
    role: 'Contract Frontend Developer',
    status: 'active',
    description:
      'An electricity recharge platform with user-facing workflows for meter verification, electricity recharge, and payment-related processes.',
    highlights: [
      'Responsive React interfaces for meter and recharge flows',
      'State management with Redux Toolkit and Tailwind CSS styling',
      'Integration with backend APIs for payment-related workflows',
    ],
    tech: ['React', 'Redux Toolkit', 'Tailwind CSS', 'API integration'],
    traction: [],
    image: liightImg,
    imageAlt: 'Liight electricity recharge platform interface',
    links: [{ label: 'Website', href: 'https://liight.com.ng/' }],
  },
];

export const historicalNote = {
  name: 'Dimpified',
  summary:
    'Earlier contribution under GFA Technologies to a business-management SaaS product. Presented here as historical work, not a currently featured product.',
};

export const skillGroups = [
  {
    title: 'Backend engineering',
    items: [
      'Node.js',
      'Express.js',
      'TypeScript & JavaScript',
      'Python',
      'FastAPI',
      'REST API development',
      'Server-side business logic',
      'Third-party integrations',
      'OpenAI API integration',
    ],
  },
  {
    title: 'Databases and data',
    items: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Mongoose',
      'Relational and NoSQL modelling',
    ],
  },
  {
    title: 'Frontend engineering',
    items: [
      'React',
      'Next.js',
      'Redux Toolkit',
      'HTML & CSS',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Mobile development',
    items: ['React Native', 'Expo'],
  },
  {
    title: 'Payments and integrations',
    items: ['Paystack', 'Flutterwave', 'Stripe'],
  },
  {
    title: 'Cloud, deployment, and tools',
    items: [
      'Microsoft Azure',
      'AWS',
      'Render',
      'Heroku',
      'Namecheap',
      'Cloudflare',
      'Git & GitHub',
      'Postman',
      'MongoDB Compass',
    ],
  },
];

export const aiNote =
  'I have used Python and FastAPI to connect business details and context to OpenAI models for generating business analytics. I use AI-assisted development tools such as Cursor, Claude, and GitHub Copilot in day-to-day engineering work. I do not train models or build machine-learning infrastructure.';

export const capabilities = [
  {
    title: 'Backend Engineering',
    description:
      'Building APIs, server-side functionality, database-backed features, integrations, and business logic.',
  },
  {
    title: 'Frontend Engineering',
    description:
      'Building responsive, accessible, maintainable web interfaces that integrate cleanly with backend services.',
  },
  {
    title: 'Full-Stack Product Development',
    description:
      'Taking features from requirements through implementation across the frontend, backend, database, and integrations.',
  },
  {
    title: 'Technical Leadership and Product Collaboration',
    description:
      'Helping teams understand requirements, break down technical work, coordinate implementation, and turn business needs into deliverable software.',
  },
];

export const experience = [
  {
    company: 'GFA Technologies',
    role: 'Lead Software Engineer / Full-Stack Developer',
    period: 'February 2024 – Present',
    points: [
      'Lead software product development for GFA Health and related digital operations work.',
      'Collaborate with developers and stakeholders to translate hospital workflow requirements into technical solutions.',
      'Participate in hospital assessments to understand clinical and non-clinical digitisation needs.',
      'Earlier contribution to Dimpified, a business-management SaaS product, as historical work under GFA Technologies.',
    ],
  },
  {
    company: 'EaseReads Educational Services',
    role: 'Co-founder & Software Engineer',
    period: 'May 2022 – Present',
    points: [
      'Own product development across frontend, backend, integrations, and platform maintenance for EaseReads.',
      'Build examination preparation, CBT, learning resources, and payment-backed premium access.',
      'Contribute to CoretaHub as part of the same product ecosystem: SaaS for schools and tutorial centres.',
    ],
  },
  {
    company: 'Liight',
    role: 'Contract Frontend Developer',
    period: 'June 2023 – January 2024',
    points: [
      'Built responsive React interfaces for meter verification, electricity recharge, and payment-related flows.',
      'Worked with Redux Toolkit, Tailwind CSS, and backend API integrations.',
    ],
  },
];

export const leadership = {
  intro:
    'Engineering work depends on clear communication as much as code. I coordinate with frontend and backend developers on API contracts, data formats, validation, and error handling; gather requirements from technical and non-technical stakeholders; and keep delivery aligned with product outcomes.',
  strengths: [
    {
      title: 'Technical leadership',
      description:
        'Coordinating implementation, breaking down work, and keeping teams aligned on delivery.',
    },
    {
      title: 'Product thinking',
      description:
        'Translating business needs into software that people can use, maintain, and extend.',
    },
    {
      title: 'Stakeholder communication',
      description:
        'Explaining technical constraints and options clearly to founders, operators, and teammates.',
    },
    {
      title: 'Cross-functional collaboration',
      description:
        'Agreeing interfaces early so frontend, backend, and integrations move together.',
    },
  ],
  civic: {
    title: 'President, University of Lagos Political Science Students Association',
    period: 'December 2018 – November 2019',
    description:
      'Led student association work involving coordination, communication, and responsibility for shared goals.',
  },
};

export const education = [
  {
    title: 'ALX Africa — Software Engineering Programme',
    period: 'February 2021 – March 2022',
  },
  {
    title: 'IBM — Enterprise Design Thinking Practitioner',
    period: 'August 2020',
  },
  {
    title: 'IBM — Enterprise Design Thinking Co-Creator',
    period: 'September 2020',
  },
];

export const contactHeadline =
  'Have a problem worth solving? Let’s build something useful.';
