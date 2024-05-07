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
    id: "https://drive.google.com/drive/folders/1uB_mHzVQc6uKNIYZVA_GZze1a8oEU2u2?usp=sharing",
    title: "Resume",
    target: '_blank',
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Enthusiast",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    date: "January 2023 - November 2023",
    points: [
      "Developed a backend system for a real-time environmental sensing system, handling high-volume sensor data efficiently.",
      "Created REST API endpoints for robust data retrieval from sensor networks",
      "Designed a data-driven website for visualizing sensor data, enhancing user interaction and data comprehension.",
      "Spearheaded the design and development of the project’s product website, focusing on responsive design.",
      // "Techstack: JavaScript, React, MongoDB, Tailwind CSS, FastAPI, Python, Mosquito Broker",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Microbiome Informatics Lab IIIT Delhi",
    icon: microbiome,
    iconBg: "#ffffff",
    date: "January 2023 - November 2023",
    points: [
      "Led the development of a special website for the Lab, showcasing research areas, publications, and team",
      "Created efficient REST API endpoints for retrieving and processing complex Meta genome data.",
      "Developed a web interface for meta-genome data search and download, enhancing accessibility for researchers.",
      // "Tech Stack: JavaScript, React, Tailwind CSS, FastAPI, Python",
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
