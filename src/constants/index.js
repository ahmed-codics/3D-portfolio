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
    amr_img,
    farawla_img,
    rc_website_img,
    remote_robotics_img,
    robotalent_img,
    roboagent_img,
    ed_img,
    sparkx_img,
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
      title: "Autonomous Systems Specialist",
      icon: backend,
    },
    {
      title: "Lead Robotics Engineer",
      icon: web,
    },
    {
      title: "Full-Stack Systems Architect",
      icon: mobile,
    },
    {
      title: "Technical Innovation Lead",
      icon: creator,
    },
  ];

  const technologies = [
    {
      name: "ROS 2",
      icon: "ros2",
    },
    {
      name: "C++",
      icon: "cpp",
    },
    {
      name: "Python",
      icon: "python",
    },
    {
      name: "Embedded Linux",
      icon: "linux",
    },
    {
      name: "React JS",
      icon: "reactjs",
    },
    {
      name: "TypeScript",
      icon: "typescript",
    },
    {
      name: "Node JS",
      icon: "nodejs",
    },
    {
      name: "Docker",
      icon: "docker",
    },
    {
      name: "Kubernetes",
      icon: "kubernetes",
    },
    {
      name: "MongoDB",
      icon: "mongodb",
    },
    {
      name: "Tailwind CSS",
      icon: "tailwind",
    },
    {
      name: "WebSockets",
      icon: "websockets",
    },
    {
      name: "Three JS",
      icon: "threejs",
    },
    {
      name: "git",
      icon: "git",
    },
  ];

  const experiences = [

  {
    title: "Software & Robotics Engineer",
    company_name: "Robotics Corner",
    icon: backend,
    iconBg: "#383E56",
    date: "Jan 2026 - Present",
    points: [
      "Architect and build full-stack interfaces for remote robotics fleet management and cloud hardware bridging (RoboConnect Hub)",
      "Customize and stabilize open-source Electron-based VS Code fork (RoboAgent IDE), integrating local AI agents directly into the editor",
      "Productionize enterprise Employee Management Systems (RoboTalent) with integrated DeepSeek/OpenAI RAG agents for automated HR queries",
      "Deploy and maintain content management portals and secure blog frameworks using Laravel, PHP, and Tailwind CSS",
    ],
  },
  {
    title: "Autonomous Lead",
    company_name: "SparkX Racing Team",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Jan 2026 - Present",
    points: [
      "Direct the autonomous subsystems department, leading a team of 10+ engineers to deliver perception-planning-control stacks that improved dynamic lap times by 22%",
      "Architect full ROS2-based autonomous software stacks from scratch, integrating sensor fusion, GraphSLAM localization, and dynamic trajectory planning algorithms",
      "Implement modular ROS2 Humble/Jazzy nodes with real-time performance optimization, achieving 95% CPU efficiency on embedded hardware",
      "Integrate linear actuators, IMU, LiDAR, and camera systems into the racing vehicle through mechatronic hardware-in-the-loop (HIL) testing",
    ],
  },
  {
    title: "Senior Full-Stack Engineer",
    company_name: "Freelance",
    icon: memphis,
    iconBg: "#383E56",
    date: "2022 - 2026",
    points: [
      "Architect and deploy 5+ production full-stack applications serving 50,000+ monthly active users across healthcare, logistics, and fintech domains",
      "Led migration from monolithic to microservices architecture using Node.js, Docker, and Kubernetes, improving system scalability by 300%",
      "Implemented real-time WebSocket messaging platform handling 10,000+ concurrent connections with sub-50ms latency",
      "Designed and built custom appointment scheduling system for physiotherapy clinics, reducing no-show rates by 35%",
      "Managed end-to-end project lifecycle for enterprise clients including requirement gathering, architecture design, deployment, and maintenance",
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
      name: "SparkX Autonomy",
      description:
        "Architected and directed a Phase 0 autonomous racing vehicle software stack for a university racing team, leading a group of 10+ engineers. Implemented ROS2 Jazzy interfaces, simulation, and hardware bridging.",
      tags: [
        { name: "ros2" },
        { name: "c++" },
        { name: "ubuntu" }
      ],
      image: sparkx_img,
      source_code_link: "https://github.com/",
    },
    {
      name: "AMR Architecture",
      description:
        "Architected and developed from scratch a Phase 0 Autonomous Mobile Robot architecture. Bridged computation between Jetson devices and STM32 hardware via CAN, ensuring real-time reliability for localization, navigation, and control.",
      tags: [
        { name: "ros2" },
        { name: "c++" },
        { name: "docker" }
      ],
      image: amr_img,
      source_code_link: "https://github.com/",
    },
    {
      name: "ED - RAG Chatbot",
      description:
        "Architected and developed from scratch a multi-service Retrieval-Augmented Generation (RAG) architecture. Integrated a Node.js API gateway, Python FastAPI microservices, and LlamaIndex for document querying.",
      tags: [
        { name: "fastapi" },
        { name: "llamaindex" },
        { name: "react-pwa" }
      ],
      image: ed_img,
      source_code_link: "https://github.com/",
    },
    {
      name: "Farawla Smart POS",
      description:
        "Architected and built from scratch a comprehensive mobile-first business platform consisting of a customer app, master dashboard, and smart point-of-sale system.",
      tags: [
        { name: "react-native" },
        { name: "typescript" },
        { name: "supabase" }
      ],
      image: farawla_img,
      source_code_link: "https://github.com/",
    },
    {
      name: "RoboConnect Hub",
      description:
        "Developed the frontend and backend integration for a remote robotics hub, enabling seamless web-based connectivity to remote hardware.",
      tags: [
        { name: "react" },
        { name: "typescript" },
        { name: "supabase" }
      ],
      image: remote_robotics_img,
      source_code_link: "https://github.com/",
    },
    {
      name: "RoboAgent IDE",
      description:
        "Customized and stabilized an open-source Electron-based VS Code fork (code-oss-dev), integrating embedded AI agent capabilities directly into the development environment.",
      tags: [
        { name: "electron" },
        { name: "typescript" },
        { name: "playwright" }
      ],
      image: roboagent_img,
      source_code_link: "https://github.com/",
    },
    {
      name: "RoboTalent HR System",
      description:
        "Productionized an Employee Management System featuring an integrated AI chat assistant (DeepSeek/OpenAI) capable of answering complex natural language queries about HR data.",
      tags: [
        { name: "node.js" },
        { name: "react" },
        { name: "ai-integration" }
      ],
      image: robotalent_img,
      source_code_link: "https://github.com/",
    },
    {
      name: "Robotics Corner Portal",
      description:
        "Finalized development and deployment of the company's official landing page, integrating a built-in blog and content management system (CMS) with an admin portal.",
      tags: [
        { name: "laravel" },
        { name: "php" },
        { name: "tailwindcss" }
      ],
      image: rc_website_img,
      source_code_link: "https://github.com/",
    }
  ];

  export { services, technologies, experiences, testimonials, projects };