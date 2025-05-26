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
  artisight,
  hcd,
  stealth,
  sr,
  jsm
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
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [

  {
    title: "Software Engineer",
    company_name: "Lumiq",
    icon: lumiq,
    iconBg: "#ffffff",
    date: "Jun 2024 -Present",
    points: [
      "Developed a deduplication engine for processing insurance data, reducing duplicate records by 40% and improving data accuracy, leading to enhanced operational efficiency for multiple insurance company clients",
      "Built an internal project management and resource allocation platform, increasing team productivity by 30% by streamlining project tracking and optimizing resource utilization.",
      "Developed an AI-powered virtual sales agent integrating the deduplication engine backend, enabling automated demos and real-time insights, resulting in a 25% increase in client product engagement.",
      "Engineered a data correction script for a major insurance client, removing over 350,000 duplicate financial exposure records, significantly enhancing data reliability and financial reporting accuracy.",
    ],
  },
  {
    title: "Product Engineer",
    company_name: "Stealth Startup",
    icon: stealth,
    iconBg: "#ffffff",
    date: "Feb 2025 - May 2025",
    points: [
      "Collaborated closely with the co-founder as part of a 2-member founding team, contributing to all stages of early product development in a high-ownership environment.",
      "Conducted in-depth user research, defined and refined the problem statement, and performed competitive landscape analysis to identify product gaps and differentiation opportunities.",
      "Designed the product's information architecture and created low-, mid-, and high-fidelity prototypes using Figma to iterate rapidly and align on user experience",
      "Developed the MVP frontend using React Native and backend using Python and FastAPI, establishing a scalable foundation for future product features and enabling internal testing and investor demos.",
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
    company_name: "Department of Human Centered Design",
    icon: hcd,
    iconBg: "#ffffff",
    date: "August 2022 - November 2022",
    points: [
      "Conceptualized, designed, and developed the official website for the IIIT Delhi 11th Convocation 2022.",
      "Tech Stack: HTML, CSS, SCSS, Javascript, Bootstrap, Adobe Suite,",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Technology",
    company_name: "IIIT Delhi",
    icon: iiitd,
    iconBg: "#ffffff",
    date: "2020 - 2024",
    points: [
      "Branch: Computer Science and Design",
      "Department: Human Centered Design",
      "CGPA: 6.95",
      "Won 1st Place in SMAI Hackathon conducted by Micron Technology India",
    ],
  },
  {
    title: "Intermediate Education",
    company_name: "SR Edu-Center, Warangal",
    icon: sr,
    iconBg: "#ffffff",
    date: "2018 - 2020",
    points: [
      "Branch: MPC",
      "Marks: 971/1000",
      "JEE Mains January 2020 Percentile: 99.2303444",
      "JEE Mains September 2020 Percentile: 98.782147",
      "JEE Mains All India Rank: 8694",
      "JEE Mains OBC Category Rank: 1629",
      "JEE Advanced 2020 Score: 122",
      "JEE Advanced 2020 All India Rank: 9110",
      "JEE Advanced 2020 OBC Category Rank: 1700",
    ],
  },
  {
    title: "Secondary Education",
    company_name: "JSM High School, Warangal",
    icon: jsm,
    iconBg: "#ffffff",
    date: "2016 - 2018",
    points: [
      "CGPA: 10/10",
    ],
  }
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

export { services, technologies, experiences, testimonials, projects, education };
