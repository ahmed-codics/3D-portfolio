import {
    mobile,
    backend,
    memphis,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    freelance,
    jobit,
    tripguide,
    threejs,
    walaa,
    food,
    chats,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [

  {
    title: "Full Stack Developer",
    company_name: "Memphis Express",
    icon: memphis, // (use a logo if you have one or a placeholder)
    iconBg: "#383E56",
    date: "June 2021 - 2023", // or whatever the real date is
    points: [
      "Built and maintained internal tools for shipping and order tracking using React.js, Node.js, and MongoDB.",
      "Created responsive admin panels and real-time features like chat and status updates.",
      "Integrated third-party APIs and ensured high performance across all devices.",
      "Worked directly with operations teams to automate manual workflows and improve efficiency.",
    ],
  },

  {
    title: "Freelance Full Stack Developer",
    company_name: "Self-employed",
    icon: freelance, // any icon or placeholder
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Developed custom websites and systems for small businesses in Egypt.",
      "Handled entire project lifecycle from client communication to deployment.",
      "Used React.js, Node.js, Express, and MongoDB to deliver modern, scalable web apps.",
      "Offered services with a ‘build first, pay after approval’ model to build trust and portfolio.",
    ],
  },
];

  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Dr. Walaa Gad",
      description:
        "A web-based platform for a physiotherapy clinic that allows patients to view services, book appointments, and manage their visits with ease.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: walaa,
      source_code_link: "https://github.com/ahmed-codics/walaa",
    },
    {
      name: "Tomato",
      description:
        "An online food ordering system designed for restaurants to reach customers, manage orders, and offer efficient delivery services.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: food,
      source_code_link: "https://github.com/",
    },
    {
      name: "Takalam",
      description:
        "A web-based messaging platform that enables users to engage in real-time conversations, share images, and track message status in an intuitive chat interface.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: chats,
      source_code_link: "https://github.com/ahmed-codics/Takalam",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };