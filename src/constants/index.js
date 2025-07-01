import {
  mobile,
  backend,
  creator,
  mobile,
  mobile,
  web,
  // Icons
  github,
  menu,
  close,
  // Technology icons
  java,
  python,
  // Icons
  github,
  menu,
  close,
  // Technology icons
  java,
  python,
  javascript,
  mongodb,
  nodejs,
  mongodb,
  nodejs,
  reactjs,
  redux,
  next,
  postgresql,
  postgresql,
  tailwind,
  nestjs,
  typescript,
  aws,
  typescript,
  aws,
  docker,
  // Company logos
  // Company logos
  midas,
  microbiome,
  lumiq,
  hcd,
  stealth,
  // Education images
  iiitd,
  // Education images
  iiitd,
  sr,
  jsm,
  // Project images
  wasto,
  artisight,
  securepass,
  // Testimonials
  // Project images
  wasto,
  artisight,
  securepass,
  // Testimonials
  binu,
  tarini,
  ganesh  
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#experience",
    title: "Experience",
  },
  {
    id: "#education",
    title: "Education",
  },
  {
    id: "#technologies",
    title: "Technologies",
    id: "#technologies",
    title: "Technologies",
  },
  {
    id: "#projects",
    title: "Projects",
  },
  {
    id: "#testimonials",
    title: "Testimonials",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "resume",
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
    {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  ,
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Nest JS",
    icon: nestjs,
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
    name: "Docker",
    icon: docker,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "TypeScript",
    icon: typescript,
  }
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Lumiq | Noida",
    icon: lumiq,
    iconBg: "#ffffff",
    date: "Jun 2024 - Present",
    points: [
      "Designed and implemented a high-performance deduplication engine using Python and AWS ETL pipelines, reducing duplicate insurance data records by 40% and improving data quality for multiple enterprise clients.",
      "Built a scalable internal project management and resource allocation platform using React, NestJS, and PostgreSQL, boosting team productivity by 30% through streamlined tracking and efficient resource utilization.",
      "Developed a stateful CMS-based application using Strapi (backend) and React (frontend) with robust API validations and PDF export functionality; deployed via Docker, improving content management workflows by 35%.",
      "Created an AI-powered virtual sales agent using LangChain, LangGraph, and LLMs, with a Next.js frontend using SSR and SSG; enabled real-time demos, increasing client engagement by 25%.",
      "Wrote a robust Bash data correction script that removed over 350,000 duplicate financial exposure records for a key insurance client, significantly enhancing data reliability and financial reporting accuracy."
    ],
  },
  {
    title: "Product Engineer",
    company_name: "Stealth Startup (Social Media Platform) | Remote",
    icon: stealth,
    iconBg: "#ffffff",
    date: "Feb 2025 - May 2025",
    points: [
      "Worked directly with the co-founder in a 3-member founding team, taking full ownership across all phases of early-stage product development in a fast-paced startup environment.",
      "Led user research efforts to validate core assumptions, shaped the problem statement, and performed detailed competitive analysis to identify key differentiators in the social media space.",
      "Designed scalable information architecture and built iterative low-, mid-, and high-fidelity prototypes using Figma to refine user flows and engagement strategies.",
      "Engineered the MVP frontend using React Native and built the backend APIs with Python (FastAPI), laying the technical foundation for rapid iteration, internal testing, and investor demonstrations.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Microbiome Informatics Lab | IIIT Delhi",
    icon: microbiome,
    iconBg: "#ffffff",
    date: "January 2023 - November 2023",
    points: [
      "Led the end-to-end development of a dedicated research portal, enhancing the Lab's online presence and increasing visibility of research areas and publications by 60%.",
      "Designed and implemented scalable RESTful API endpoints using Flask, optimising retrieval and processing of complex metagenomic data, resulting in a 45% improvement in response time.",
      "Built a web application with React and TailwindCSS, enabling advanced search and download functionality for metagenome datasets and improving researcher accessibility by 50%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Midas Lab | IIIT Delhi",
    icon: midas,
    iconBg: "#ffffff",
    date: "January 2023 - November 2023",
    points: [
      "Designed and implemented a scalable Flask-based backend system for a real-time environmental sensing platform, efficiently processing over 100,000+ data points per day and reducing data handling latency by 30%.",
      "Built optimized RESTful API endpoints to support high-throughput sensor networks, enhancing data retrieval speed by 40%.",
      "Developed a dynamic, data-driven frontend using React and TailwindCSS to visualize real-time sensor data, improving user interaction and data interpretation by 50%.",
      "Designed and deployed a fully responsive marketing website to showcase the project, focusing on UX/UI best practices and mobile-first design."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Department of Human Centered Design | IIIT Delhi",
    icon: hcd,
    iconBg: "#ffffff",
    date: "August 2022 - November 2022",
    points: [
      "Conceptualized, designed, and developed the official website for the IIIT Delhi 11th Convocation 2022.",
      "Tech Stack: HTML, CSS, SCSS, Javascript, Bootstrap, Adobe Suite",
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
      "Group: MPC",
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
    testimonial: "Charan delivered a beautifully designed, user-friendly convocation website with exceptional attention to detail and professionalism. Highly reliable and collaborative throughout.",
    name: "Binu Ann Joseph",
    designation: "Junior Administrative Officer",
    company: "Department of Human Centered Design, IIIT Delhi",
    image: binu,
  },
  {
    testimonial:
      "Charan demonstrated exceptional full stack skills, delivering a robust, user-friendly platform that significantly improved our lab's data accessibility, visibility, and overall digital presence.",
    name: "Dr. Tarini Shankar Ghosh",
    designation: "Head",
    company: "Microbiome Informatics Lab, IIIT Delhi",
    image: tarini,
  },
  {
    testimonial:
      "Charan brought exceptional initiative and versatility, driving product development from idea to MVP. A true builder with strong design, research, and engineering instincts. Invaluable early teammate.",
    name: "Ganesh Potala",
    designation: "Founder",
    company: "Stealth Startup (Social Media Platform)",
    image: ganesh,
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
    source_code_link: "https://github.com/vdevisricharan/ArtiSight",
  },
  // {
  //   name: "Alpha Messenger",
  //   description:
  //     "A full-stack messaging website with real-time chat functionality and a dynamic user interface for efficient communication and data storage.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "PHP",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "SQL",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: alpha,
  //   source_code_link: "https://github.com/devisri-charan/Alpha-Messenger",
  // },
  // {
  //   name: "Icon",
  //   description:
  //     "A full-stack fashion e-commerce platform incorporating seamless user experiences, secure payment processing, and dynamic product management.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "nodeJS",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "expressJS",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: icon,
  //   source_code_link: "https://github.com/devisri-charan/icon",
  // },
  {
    name: " Wasto",
    description:
      "A ML algorithm to detect and segregate the waste according to organic, Non-Biodegradable, and recycling products at the recycling unit.",
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
    source_code_link: "https://github.com/vdevisricharan/wasto",
  },
  {
    name: "SecurePass",
    description:
      "A Browser extension that provides an additional layer of security for your saved passwords, with adjustable protection levels & session management",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Crypto JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: securepass,
    source_code_link: "https://github.com/vdevisricharan/securepass",
  },
];

export { services, technologies, experiences, testimonials, projects, education };
