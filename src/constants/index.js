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
      title: "Autonomous Systems Lead",
      icon: web,
    },
    {
      title: "Full-Stack Developer",
      icon: mobile,
    },
    {
      title: "Robotics Researcher",
      icon: backend,
    },
    {
      title: "Technical Mentor",
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
    title: "Freelance Full-Stack Engineer",
    company_name: "Freelance",
    icon: memphis,
    iconBg: "#383E56",
    date: "2022 - 2025",
    points: [
      "Takalam: A real-time chatting platform utilizing WebSockets and modern UI/UX principles.",
      "Tomato: A full-featured food ordering and tracking system.",
      "Medical Booking: Developed a custom appointment system for a physiotherapy clinic.",
      "Client Management: Managed the full project lifecycle for various shipping offices, from requirement gathering to final deployment and maintenance.",
    ],
  },

  {
    title: "Autonomous Subsystem Director",
    company_name: "SparkX Racing Team",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Jan 2026 - Present",
    points: [
      "Leadership & Mentorship: Directing a team of 10+ junior engineers, designing technical roadmaps, and conducting training on ROS2, Linux, and Python OOP.",
      "System Architecture: Designing the full autonomous software stack from scratch, including perception, localization (GraphSLAM), and path planning.",
      "Technical Implementation: Developing modular ROS2 nodes (Humble/Jazzy), URDF vehicle modeling, and Gazebo simulations for Shell Eco-Marathon and Formula Student.",
      "Cross-Functional Integration: Collaborating with Mechanical and Electrical directors to integrate linear actuators, sensors, and braking systems into the vehicle chassis.",
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