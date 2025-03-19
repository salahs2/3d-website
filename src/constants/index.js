import { color } from "framer-motion";
import {
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
    mcmaster,
    HOOPP,
    threejs,
    fidelity,
    linkedin,
    github,
    resumelogo,
    testbank,
    website,
    nba
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
      title: "Statistical Research Assistant",
      company_name: "McMaster University Hospital - Health Research, Evidence, and Impact",
      icon: mcmaster,
      iconBg: "#383E56",
      date: "Jun 2023 - Dec 2023",
      points: [
        "Analyzed health data with over 100,000 columns to assess occupational health risks in specific demographic groups",
        "Deployed a match-back algorithm in R using ISCO2008 job code classification, automating the manual data cleaning and categorization process, and achieving a 70% accuracy in matching job roles to standardized codes",
        "Implemented a Levenshtein distance algorithm using Python & PostgreSQL to optimize data duplication, reducing unique columns by 50%, from over 16,000 to 8,000, significantly streamlining the dataset for analysis",
      ],
    },
    {
      title: "Software Engineering Co-op",
      company_name: "McMaster University",
      icon: mcmaster,
      iconBg: "#383E56",
      date: "May 2023 - Aug 2023",
      points: [
        "Created Front End UI of Test Database software using TypeScript to create React Components",
        "Deployed early version of the product as a desktop application using Electron.js managing user accessibility interactions & authentication using Google Cloud’s Firebase",
        "Conducted statistical analyses in R on student evaluations, assessing course difficulty. Scenario analysis of grading  schemes led to a 3–4% average grade improvement, from 69% to 73% in the following term",
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
        "Utilized Bloomberg API with Python to retrieve and analyze private equity fund performance data, conducting advanced screens to benchmark portfolio returns against average market performance",
      ],
    },
    {
      title: "Quantitative Risk Engineer Intern",
      company_name: "Fidelity",
      icon: fidelity,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Engineered system using Microsoft Power Automate SaaS Platform, Python, and HTTPX to scrape news articles for risk-related keywords, reducing monitoring time and enhancing risk detection for global events.",
        "Created Microsoft Power Automate system that screens relevant news articles that pose measured risk levels based on keywords generating a confidence interval of negative articles to screen for unpredicted developments relevant to vendor risk, reducing news monitoring time by >90%",
        "Assisted with Thesis publication on sector-specific technical indicators to assist Portfolio Managers decision-making process",
        "Built a Python-based dashboard using Dash, NumPy, Matplotlib, Plotly, and Pandas displaying statistical information on proprietary models including indexing, normalization, optimization & significance results",
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
      source_code_link: "https://salahs2.github.io/Test-Database/",
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
    {
      name: "NBA ROTY Dashboard",
      description:
        "Developed an interactive data visualization dashboard using Streamlit to visualize NBA rookie statistics for every season to predict the future rookie of the year.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
        {
          name: "Beautiful Soup",
          color: "red-text-gradient"
        }
      ],
      image: nba,
      source_code_link: "https://github.com/salahs2/NBA-RoTY-Dashboard",
    }
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