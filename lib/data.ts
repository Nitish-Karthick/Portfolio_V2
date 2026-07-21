export const projects = [
  {
    id: 4,
    title: "蓮 Project Ren",
    imageSrc: "/photos/working on.jpg",
    badge: "Working On",
    projectType: "Local Desktop App",
    liveStatus: "In Development",
    date: "May 2026",
    description: "A locally hosted, completely private AI entity built with Tauri and Rust. Features a strict privacy architecture where no data leaves the machine, a RAG pipeline memory, voice interface via Whisper, and intelligent system observation."
  },
  {
    id: 3,
    title: "Innovascope - Tech Dashboard",
    imageSrc: "/photos/innovascope.png",
    badge: "React, FastAPI, Groq",
    projectType: "Web App",
    liveStatus: "Local",
    date: "April 2026",
    description: "A web-based automated technology intelligence platform. It ingests datasets of technologies and enriches them by combining real-time news scraping with AI-powered sentiment analysis using Llama-3. Features a dual-engine architecture and dynamic visualizations."
  },
  {
    id: 1,
    title: "ChemFlux",
    imageSrc: "/photos/ChemFlux.png",
    badge: "Django, React, PyQt5",
    projectType: "Hybrid Web + Desktop",
    liveStatus: "Live Hosted",
    liveLink: "https://chemflux.netlify.app/",
    apiLink: "https://chemflux.onrender.com/api/ping/",
    credentials: { username: "admin", password: "Chemflux@12345" },
    date: "Nov 2025",
    description: "A hybrid Chemical Equipment Parameter Visualizer that runs as both a Web application (React + Chart.js) and a Desktop client (PyQt5 + Matplotlib), unified by a common Django REST API. It allows researchers to upload complex CSV datasets to generate statistical summaries, interactive data visualizations, historical tracking, and exportable PDF reports."
  },
  {
    id: 2,
    title: "Study Mate (Hackathon Prototype)",
    imageSrc: "/photos/studymate pic.png",
    badge: "Python, Gemini API",
    projectType: "Prototype",
    liveStatus: "Local",
    date: "Aug 2025",
    description: "An AI-powered study assistant built during a 24-hour hackathon. Utilizes the Gemini API to generate personalized study plans, quizzes, and summaries from uploaded course materials."
  }
];

export const experiences = [
  {
    id: 1,
    company: "FOSSEE",
    companyLink: "https://fossee.in/winter-internship/2025",
    reportLink: "https://static.fossee.in/fossee/reports-2025/Reports-Winter2025/Web%20Based%20Application/NitishKarthick_FOSSEE_Winter_Internship_Report_2025.pdf",
    period: "Dec 2025 - Feb 2026",
    role: "Software Engineering Intern (Desktop Team)",
    keyProjects: "Chemical PFD, Smart Connection Engine",
    scope: "Frontend Architecture, Routing Algorithms, UI Stability",
    description: "Engineered the frontend architecture for the Chemical PFD open-source desktop tool using PyQt. Architected a Smart Connection Engine to automatically route connections between nodes without intersection, enhancing UI stability and user experience.",
    colSpan: 2
  }
];

export const faqs = [
  {
    id: 1,
    category: "Experience",
    categoryColorClass: "bg-primary-container text-on-primary-container",
    question: "What was your role at FOSSEE?",
    answer: "I worked as a Software Engineering Intern on the Desktop Team. I engineered the frontend architecture for the Chemical PFD open-source desktop tool using PyQt and architected a Smart Connection Engine."
  },
  {
    id: 2,
    category: "Projects",
    categoryColorClass: "bg-secondary-container text-on-secondary-container",
    question: "What is Innovascope?",
    answer: "Innovascope is a web-based automated technology intelligence platform that enriches datasets by combining real-time news scraping with AI-powered sentiment analysis using Llama-3."
  },
  {
    id: 3,
    category: "Skills",
    categoryColorClass: "bg-primary-container text-on-primary-container",
    question: "What technologies do you specialize in?",
    answer: "I specialize in Python, C++, Java, and JavaScript/TypeScript. I frequently build projects using React.js, Django, Node.js, and PyQt5."
  },
  {
    id: 4,
    category: "Achievements",
    categoryColorClass: "bg-secondary-container text-on-secondary-container",
    question: "What are your notable achievements?",
    answer: "I have solved over 500+ problems on LeetCode and SkillRack, and have completed a Full-Stack Web Development Bootcamp on Udemy."
  }
];

export const skills = {
  languages: "Python, C++, Java, SQL, JavaScript, TypeScript",
  frameworks: "PyQt5, React.js, Django, Node.js, Google Gemini API",
  tools: "Git, GitHub, Linux, MongoDB, VS Code, Android Studio",
  spoken: "English (Fluent), Japanese, Tamil (Native)"
};
