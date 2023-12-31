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
  icon,
  threejs,
  python,
  java,
  alpha,
  wasto
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
  {
    id: "",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "API Developer",
    icon: backend,
  },
  {
    title: "AI Trainer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "java",
    icon: java,
  },
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
  }
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "IIIT Delhi",
    icon: iiitd,
    iconBg: "#ffffff",
    date: "August 2022 - November 2022",
    points: [
      "Designed and Developed 11th Convocation Website",
      "Tech Stack: HTML, CSS, SCSS, Javascript, Bootstrap, Adobe Animate, Adobe Illustrator,",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Midas Lab IIIT Delhi",
    icon: midas,
    iconBg: "#ffffff",
    date: "January 2023 - Present",
    points: [
      "Developed Backend for storing real-time data of environment monitoring system, using NTP Server",
      "Created Rest API endpoints to retrieve the data collected from the sensors",
      "Designed and Developed website for visualizing the sensor’s data, based on user location",
      "Designed and Developed Product website for the project",
      "Techstack: JavaScript, React, MongoDB, Tailwind CSS, FastAPI, Python, Mosquito Broker",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Microbiome Informatics Lab IIIT Delhi",
    icon: microbiome,
    iconBg: "#ffffff",
    date: "January 2023 - Present",
    points: [
      "Designed and Developed a website for the new Microbiome Informatics Lab at IIIT Delhi",
      "Created REST API endpoints to fetch the Meta genome data",
      "Developed a Website to search and download the Meta genome data",
      "Tech Stack: JavaScript, React, Tailwind CSS, FastAPI, Python",
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
        name: "nodejs",
        color: "pink-text-gradient",
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
