import { color } from "framer-motion";
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
    docker,
    meta,
    mcmaster,
    HOOPP,
    carrent,
    jobit,
    tripguide,
    threejs,
    fidelity,
    linkedin,
    github,
    resumelogo,
    testbank,
    website,
  } from "../assets";
  
  export const navLinks = [
    // {
    //   id: "about",
    //   title: "About",
    // },
    // {
    //   id: "work",
    //   title: "Experience",
    // },
    // {
    //   id: "contact",
    //   title: "Contact",
    // },
    // {
    //   id: "projects",
    //   title: "My Projects",
    // },
  ];
  
  const services = [
    {
      title: "Linkedin",
      icon: linkedin,
      source_code_link: "https://www.linkedin.com/in/salahsalah/"
    },
    {
      title: "Github",
      icon: github,
      source_code_link: "https://github.com/salahs2"
    },
    {
      title: "Resume",
      icon: resumelogo,
      source_code_link: "https://github.com/"
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
      title: "Research Assistant",
      company_name: "McMaster University",
      icon: mcmaster,
      iconBg: "#383E56",
      date: "May 2023 - Aug 2023",
      points: [
        "Conducted statistical analysis using R on student evaluation of physics courses analyzing grades, pass rates, establishing difficulty classification, and creating scenario analysis on new grading/marking schemes and expected results",
        "Created Levenshtein distance algorithm using python to reduce unique values of a dataset by ~50% from >16,000 unique values to ~8,000",
        "Developed Test Bank Database for Physics courses to organize previous tests and questions used in examination for data collection",
      ],
    },
    {
      title: "Private Equity Intern",
      company_name: "Healthcare of Ontario Pension Plan",
      icon: HOOPP,
      iconBg: "#E6DEDD",
      date: "May 2022 - Aug 2022",
      points: [
        "Evaluating minority investment in financial services company seeking to raise $100mm in preferred equity by assessing Y3 MOIC and IRR (withdrawn due to ESG Concerns) ",
        "Conducting diligence on sale of controlled portfolio company valued at ~$4B by evaluating strategic buyers and calculating potential sale multiple using comparable analysis & analyzing potential synergies with strategic buyers resulting in initiation of sale proces",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Risk Management Intern",
      company_name: "Fidelity",
      icon: fidelity,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Created a database for enterprise risk assessments monitoring risk classifications, and updating re-assessments resulting in efficient risk assessment and increased accuracy in enterprise risk monitoring",
        "Created Microsoft Power Automate system that screens relevant news articles that pose measured risk levels based on keywords generating a confidence interval of negative articles to screen for unpredicted developments relevant to vendor risk, reducing news monitoring time by >90%",
        "Assisted with Thesis publication on sector-specific technical indicators to assist Portfolio Managers decision-making process",
        "Developed dashboard for Portfolio Managers to identify quantitative indicators using Python Dash, Plotly and Pandas frameworks allowing Portfolio Managers to back test specific parameters without needing programming expertise",
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
      name: "Testbank Database",
      description:
        "Developed Test Bank Database for Universities Physics Department that allows users to authenticate users and store test & quiz banks for courses & track relevant data.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Electron.JS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "red-text-gradient"
        }
      ],
      image: testbank,
      source_code_link: "https://github.com/salahs2",
    },
    {
      name: "Website",
      description:
        "Developed a dynamic 3D portfolio website using React and Three.js, incorporating interactive 3D models and animations for an engaging user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: website,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };