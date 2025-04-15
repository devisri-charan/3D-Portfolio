import {
  mobile,
  backend,
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
  iiitd,
  midas,
  microbiome,
  lumiq,
  icon,
  aws,
  python,
  java,
  alpha,
  wasto,
  artisight
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "/resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
  {
    title: "AWS Data Engineer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
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
    name: "java",
    icon: java,
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  }
  // {
  //   name: "figma",
  //   icon: figma,
  // }
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Lumiq",
    icon: lumiq,
    iconBg: "#ffffff",
    date: "Jun 2024 -Present",
    points: [
      "Developed a deduplication engine for processing insurance data, reducing duplicate records by 40% and improving data accuracy, leading to enhanced operational efficiency for multiple insurance company clients.",
      "Built an internal project management and resource allocation platform, increasing team productivity by 30% by streamlining project tracking and optimizing resource utilization.",
      "Developed a Claims Management System, which reduced claim processing time by 25%. Implemented monitoring, automation testing, and Docker containerization, leading to a 30% reduction in deployment failures.",
      "Built a stateful application using Strapi for dynamic content management, integrating a custom frontend with robust API validations and PDF export functionality. Successfully deployed the platform using Docker, improving content management efficiency by 35%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Microbiome Informatics Lab IIIT Delhi",
    icon: microbiome,
    iconBg: "#ffffff",
    date: "January 2023 - November 2023",
    points: [
      "Led the development of a portfolio website for the Lab, which increased the online visibility of research areas and publications by 60%",
      "Created efficient REST API endpoints that improved retrieval and processing time of complex Meta genome data by 45%",
      "Developed a web interface for meta-genome data search and download, boosting accessibility for researchers by 50%.",
      // "Tech Stack: JavaScript, React, Tailwind CSS, FastAPI, Python",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Midas Lab IIIT Delhi",
    icon: midas,
    iconBg: "#ffffff",
    date: "January 2023 - November 2023",
    points: [
      "Developed a backend system for a real-time environmental sensing system, efficiently handling over 1 Lakh data points per day, reducing data processing time by 30%.",
      "Created robust REST API endpoints that improved data retrieval speed by 40% for high-volume sensor networks. ",
      "Developed a data-driven website for visualizing sensor data, increasing user interaction and data comprehension by 50%.",
      "Designed and Developed the product website for marketing purposes, focusing on responsive design.",
      // "Techstack: JavaScript, React, MongoDB, Tailwind CSS, FastAPI, Python, Mosquito Broker",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "IIIT Delhi",
    icon: iiitd,
    iconBg: "#ffffff",
    date: "August 2022 - November 2022",
    points: [
      "Conceptualized, designed, and developed the official website for the IIIT Delhi 11th Convocation 2022.",
      "Tech Stack: HTML, CSS, SCSS, Javascript, Bootstrap, Adobe Suite,",
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
    name: "ArtiSight",
    description:
      "An AI Photo Critique Assistant utilizing LLMs to analyze and critique photos by providing actionable insights and personalized learning recommendations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "LLMs",
        color: "blue-text-gradient",
      },
    ],
    image: artisight,
    source_code_link: "https://github.com/devisri-charan/ArtiSight",
  },
  {
    name: "Alpha Messenger",
    description:
      "A full-stack messaging website with real-time chat functionality and a dynamic user interface for efficient communication and data storage.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
    ],
    image: alpha,
    source_code_link: "https://github.com/devisri-charan/Alpha-Messenger",
  },
  {
    name: "Icon",
    description:
      "A full-stack fashion e-commerce platform incorporating seamless user experiences, secure payment processing, and dynamic product management.",
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
        name: "nodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "expressJS",
        color: "blue-text-gradient",
      },
    ],
    image: icon,
    source_code_link: "https://github.com/devisri-charan/icon",
  },
  {
    name: " Wasto",
    description:
      "An ML model to automate most parts of a waste management cycle from source to recycling unit with proper trackage of the waste..",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: wasto,
    source_code_link: "https://github.com/devisri-charan/wasto",
  },
];

export { services, technologies, experiences, testimonials, projects };
