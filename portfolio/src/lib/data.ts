export const personalInfo = {
  name: "Anand P",
  firstName: "Anand",
  lastName: "P",
  role: "Computer Science Student",
  tagline: "A passionate developer from Kerala, India — building full-stack web applications and interested in solving real-world problems through technology. Focused on creating efficient, user-friendly solutions while continuously learning and improving development skills.",
  bio: "CSE student passionate about building scalable, high-performance web applications. I transform complex problems into elegant solutions using modern technologies.",
  email: "anandp8678@email.com",
  phone: "+91 8590659313",
  location: "Ernakulam, Kerala, India",
  availability: "Open to Internships & Full-Time Opportunities",
  github: "https://github.com/anandp8678",
  linkedin: "https://www.linkedin.com/in/anand-p8678/",
  resumeUrl: "/Anand_P_Resume.pdf",
};

export const typingRoles = [
  "Computer Science Student",
];

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    color: "blue",
    skills: [
      { name: "HTML", level: 82, icon: "⚛️" },
      { name: "CSS", level: 80, icon: "▲" },
      { name: "React", level: 50, icon: "🎨" },
      { name: "Angular", level: 45, icon: "TS" },
      { name: "JavaScript", level: 40, icon: "🖼️" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Databases",
    color: "purple",
    skills: [
      { name: "Django", level: 80, icon: "🐍" },
      { name: "MySQL", level: 75, icon: "🗄️" },
      { name: "MongoDB", level: 65, icon: "🍃" },
      { name: "Node.js", level: 26, icon: "🟢" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    color: "cyan",
    skills: [
      { name: "Python", level: 92, icon: "🐍" },
      { name: "C", level: 88, icon: "⚙️" },
      { name: "Java", level: 70, icon: "☕" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    color: "orange",
    skills: [
      { name: "Git & GitHub", level: 93, icon: "🐙" },
      { name: "Figma", level: 80, icon: "🎨" },
      { name: "VS Code", level: 96, icon: "💻" },
      { name: "Linux", level: 65, icon: "🐧" },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    type: "internship",
    title: "Front-End Developer Intern",
    company: "NeST Digital, Kochi",
    duration: "Mar 2025 – Mar 2025",
    description:
      "Developed responsive user interfaces for eKart and Jewls web applications using Angular and integrated REST APIs to fetch and display dynamic content including products and recipes. Designed responsive UI components, implemented routing, and optimized navigation using modular Angular structures. Completed the Industry Immersion Program on Frontend Application Development using Angular, earning a certification from NeST Digital.",
    tags: ["Angular", "HTML", "CSS", "REST APIs","Bootstrap"],
    color: "blue",
  },
  {
    id: 2,
    type: "internship",
    title: "Full Stack Web Development Using Python Intern (Online)",
    company: "STEM ROBOTICS",
    duration: "May2023",
    description:
      "Completed a 7-day online internship focused on Full Stack Web Development using Python, gaining foundational exposure to web development concepts, tools, and collaborative workflows in a virtual learning environment.",
    tags: ["Python", "Django", "React"],
    color: "blue",
  },
];

export const projects = [
  {
    id: 1,
    title: "CuraZone – Smart Healthcare E-Mart",
    description:
      "CuraZone is a smart healthcare web application developed to simplify medicine purchasing and prescription management. The system allows users to upload prescriptions, extract medicine details using OCR technology, and automatically generate medicine lists for easier ordering. It also provides features such as medicine reminders, chatbot assistance, and nearby healthcare center discovery to improve user convenience and accessibility. The project was developed using modern web technologies with an interactive and user-friendly interface",
    image: "/images/curazone.jpg",
    tags: ["HTML", "CSS", "Django", "MySQL", "JavaScript"],
    github: "https://github.com/anandp8678/CuraZone",
    live: "",
    featured: true,
    color: "blue",
  },
  {
     id: 2,
    title: "Hostel Management System",
    description:
      "Developed a web-based Hostel Management System using Django and SQLite to simplify hostel operations and improve communication between students, wardens, and parents. The system includes modules for attendance tracking, complaint management, room allocation, fee monitoring, and notice management with secure role-based access. Designed a responsive and user-friendly interface to enhance efficiency, transparency, and overall hostel administration.",
    image: "/images/hostel.jpg",
    tags: ["HTML", "CSS", "Django", "SQLite", "JavaScript"],
    github: "https://github.com/anandp8678/Hostel-Management-System",
    live: "",
    color: "blue",
  },
  {
    id: 3,
    title: "EduSync – AI Powered Chatbot Web Application",
    description:
      "EduSync is a full-stack AI chatbot web application developed using React.js and Django REST Framework, integrated with the Google Gemini API to generate intelligent real-time responses. The application features a modern and responsive chat interface with functionalities such as persistent chat history, typing indicators, auto-scrolling conversations, and multi-page navigation. The project demonstrates frontend-backend integration, RESTful API development, AI API integration, and responsive UI design to deliver a smooth and interactive user experience.",
    image: "/images/edusync.jpg",
    tags: ["React.js", "Django REST Framework", "Google Gemini API", "JavaScript", "Python", "CSS", "React Router", "REST API"],
    github: "",
    live: "",
    color: "purple",
  },

];

export type EducationEntry = {
  id: number;
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
  scoreLabel?: string;
  description?: string;
  achievements?: string[];
};

export const education: EducationEntry[] = [
  {
    id: 1,
    degree: "B.Tech in Computer Science Engineering",
    institution: "Ilahia College of Engineering and Technology",
    period: "2022 – 2026",
    cgpa: "7.6 / 10",
    description:
      "Completed B.Tech in Computer Science Engineering, developing strong programming, problem-solving, and technical skills through academic coursework and practical learning experiences.",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate",
    institution: "SNVHSS, N.R City, Idukki",
    period: "2020 – 2022",
    cgpa: "90%",
    scoreLabel: "Percentage",
    description:
      "Completed Higher Secondary education in Biology Science with a focus on Mathematics, Physics, and Chemistry.",
  },
  {
    id: 3,
    degree: "Secondary School Leaving Certificate",
    institution: "SNVHSS, N.R City, Idukki",
    period: "2018 – 2020",
    cgpa: "98%",
    scoreLabel: "Percentage",
    description:
      "Completed secondary education with strong performance in core subjects and extracurricular activities.",
  },
];

