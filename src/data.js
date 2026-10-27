export const EMAIL = 'ahmedismansour000@gmail.com'

export const LINKS = {
  github: 'https://github.com/ahmed-codics',
  linkedin: 'https://linkedin.com/in/ahmed-mansour-430ab2341',
  cv: '/Ahmed-Mansour-CV.pdf',
}

export const ROTATING = [
  'full-stack apps',
  'AI pipelines',
  'payment systems',
  'robot dashboards',
  'things people pay for',
]

export const STATS = [
  { value: 4, suffix: '+', label: 'years shipping full-stack' },
  { value: 458, suffix: '', label: 'Kavvi sign-ups in 5 weeks' },
  { value: 8, suffix: '+', label: 'paying subscribers' },
  { value: 6, suffix: '', label: 'products shipped at Robotics Corner' },
]

export const STACK = [
  'React', 'Next.js', 'Node.js', 'NestJS', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB',
  'Redis / Valkey', 'Docker', 'Linux', 'Nginx', 'LLM APIs', 'RAG', 'Supabase', 'Playwright',
]

export const PROJECTS = [
  {
    key: 'connectedlabs',
    name: 'ConnectedLabs',
    tag: 'Robotics · Built end to end',
    text: 'Book hourly access to real robots and code them from the browser. Secure SSH provisioning, live telemetry and systemd services, deployed with Docker, Nginx and Jenkins.',
    img: '/shots/connectedlabs.png',
    href: 'https://www.roboticscorner.tech/connectedlabs',
    stack: ['SSH', 'Docker', 'Jenkins', 'ROS 2'],
  },
  {
    key: 'bahrawy',
    name: 'El-Bahrawy Academy',
    tag: 'Freelance · Live with students',
    text: 'A bilingual English-learning platform for a teacher. Lessons by grade, videos, quizzes, PDFs, progress tracking and student accounts. Built alone, end to end.',
    img: '/shots/bahrawy.png',
    href: 'https://el-bahrawy.com',
    stack: ['Next.js', 'NestJS', 'PostgreSQL'],
  },
  {
    key: 'robotics',
    name: 'Robotics Corner',
    tag: 'Company site · In production',
    text: 'The company website used in marketing, linked by single sign-on to the HR/CRM system, the marketplace and the IDE, all on one shared database.',
    img: '/shots/robotics.png',
    href: 'https://www.roboticscorner.tech',
    stack: ['React', 'SSO', 'Node.js'],
  },
]

export const JOBS = [
  {
    role: 'Founder & Full-Stack Engineer',
    org: 'Kavvi',
    when: 'Oct 2025 — Present',
    points: [
      'Designed, built and launched solo a bilingual (Arabic/English, RTL) AI learning platform.',
      'Every answer is solved twice independently and re-checked by a stronger model when they disagree.',
      'Routes across several LLM providers by quality and price: about 4.5 EGP (~$0.09) of AI cost per learner.',
      'Built billing, fraud checks, plan limits and usage metering. Runs production alone on a Linux VPS.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Robotics Corner',
    when: 'Jan 2026 — Sep 2026',
    points: [
      'Took six half-built products to working software, four production-ready, on one shared database with single sign-on.',
      'Rebuilt the non-functional HR/CRM system. The whole company used it daily.',
      'Shipped the company website and ConnectedLabs end to end.',
      'Finished RoboConnect, a robotics freelance marketplace with Paymob escrow, and helped build RoboAgent, an agentic coding IDE.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    org: 'Freelance',
    when: 'Oct 2022 — Dec 2024',
    points: [
      'Built El-Bahrawy Academy alone, end to end: a live bilingual English-learning platform with lessons by grade, quizzes, progress tracking and student accounts.',
      'Built and deployed Abnaa Hamdallah, a live management system for a sanitary-ware store.',
    ],
  },
  {
    role: 'Web Developer',
    org: 'Memphis Express',
    when: 'May 2022 — Oct 2023',
    points: [
      'Built the customer-facing site where users booked international shipments online. It ran with real users.',
      'Built the internal CRM system used by the office team.',
    ],
  },
]

export const NAV = [
  ['top', 'Home'],
  ['kavvi', 'Kavvi'],
  ['work', 'Work'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
]

export const KAVVI_STATS = [
  { value: 458, suffix: '', label: 'sign-ups since launch' },
  { value: 8, suffix: '+', label: 'paying subscribers' },
  { value: 4168, suffix: '', label: 'messages across 922 conversations' },
  { value: 8318, suffix: '', label: 'AI runs served' },
  { value: 4913, suffix: '', label: 'concepts generated' },
  { value: 9889, suffix: '', label: 'visuals rendered' },
]

export const KAVVI_PIPE = [
  ['Upload', 'PDF, slides, photos, links, or just a question.'],
  ['Retrieve', 'A Python RAG service finds what matters and cites the page.'],
  ['Plan', 'One lecture becomes lessons of at most seven concepts.'],
  ['Teach', 'Explanations with diagrams and math, checks, flashcards, an exam.'],
  ['Verify', 'Answers are solved twice and re-checked by a stronger model.'],
]

export const KAVVI_SUBJECTS = [
  ['Lecture to lesson', 'Upload a lecture PDF and it becomes a lesson, broken into short concepts.'],
  ['Live voice-over, synced PDF', 'Each concept is taught with a live voice-over while the PDF turns to the exact page being explained.'],
  ['Ask as you learn', 'A chat beside every concept answers follow-up questions from your own material.'],
  ['Quiz, explain, retry', 'After each concept comes a 3-question quiz. Every wrong answer is explained again, then you try again.'],
  ['Mistake bank & flashcards', 'Every mistake is saved, so Kavvi knows your weak points. Flashcards and exams come from your own material, with answers solved twice and cross-checked.'],
  ['Smart schedule', 'Add your lecture times and how much you can study, and when. Kavvi builds a plan with review sessions and reminders.'],
]

export const KAVVI_COURSES = [
  ['Any goal, in seconds', 'Type "Python from zero" or "German for my job" and get a personal course with a map of the whole journey.'],
  ['Story-style episodes', 'About 10 minutes a day, with recurring characters, cliffhangers and a bit of humor. A "straight to the point" switch for less story.'],
  ['Learn by doing', 'Answer questions, write real code, work in live spreadsheets and speak out loud. Every answer is checked as you go.'],
  ['Remembers your weak spots', 'It brings back what you struggle with at the right time.'],
  ['Real work you keep', 'What you learn turns into real pieces of work you can keep.'],
  ['English or Egyptian Arabic', 'Full right-to-left support, built for Egyptian learners first.'],
]

export const KAVVI_ENGINEERING = [
  ['Quality gates', 'Overlap checks, independent re-solving on exams, and validators that reject scratch-work in questions.'],
  ['Failures are visible', 'I removed silent fallbacks that hid bad output. An Errors page in the admin console shows what failed.'],
  ['Cost control', 'Model routing by quality and price, per-plan AI budgets and a daily spend cap. About $0.09 of AI per learner.'],
  ['Business layer', 'InstaPay, wallet and card payments, receipt review with fraud flags, plan limits and usage metering.'],
  ['Operations', 'Web, API, worker, RAG, runner and PDF services behind Caddy on one VPS, with one-command rollbacks and Playwright tests.'],
  ['Admin console', 'Learners, spend, trials, plan locks, regional prices and a launch report, all in one place.'],
]
