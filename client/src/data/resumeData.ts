import type { ResumeData } from "@shared/schema";

export const resumeData: ResumeData = {
  contact: {
    name: "Veeresh R",
    email: "veereshr87@gmail.com",
    phone: "+91 886 779 7481",
    linkedin: "veeresh-r-b59b68151",
    location: "Bangalore, India"
  },
  objective: "To build a successful career through continuous learning and dedicated effort with hard work. This will enable me to provide the best of my technical, analytical and professional skills.",
  professionalSummary: [
    "4.5+ years of experience in software development with expertise in Java technologies",
    "Currently working on Cimplyfive for ClearTax (1+ year)",
    "1.4 years of experience on OLA Insurance for OLA client",
    "Proficient in Java, Spring Boot, Spring MVC, Hibernate",
    "Strong experience with MySQL, MongoDB databases",
    "Hands-on experience with Angular for frontend development"
  ],
  experience: [
    {
      id: "exp1",
      company: "Tarento Technology",
      role: "Software Developer",
      period: "June 2021 - Present",
      description: "Working on enterprise applications and compliance solutions",
      isInternship: false
    },
    {
      id: "exp2",
      company: "Parinitha Music Service Pvt Ltd (Jookebox)",
      role: "Software Developer",
      period: "June 2019 - October 2020",
      description: "Developed and maintained music streaming application features",
      isInternship: false
    },
    {
      id: "exp3",
      company: "Entomo",
      role: "Software Development Intern",
      period: "3 months",
      description: "Worked on EPMS (Employee Performance Management System)",
      isInternship: true
    },
    {
      id: "exp4",
      company: "Parinitha Music Service Pvt Ltd (Jookebox)",
      role: "Software Development Intern",
      period: "4 months",
      description: "Internship focused on music application development",
      isInternship: true
    }
  ],
  technicalSkills: [
    {
      category: "Programming Languages",
      skills: ["Java", "SQL"]
    },
    {
      category: "Frameworks & Technologies",
      skills: ["Spring Boot", "Spring MVC", "Hibernate", "Angular"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"]
    },
    {
      category: "Version Control",
      skills: ["Git"]
    },
    {
      category: "Tools & IDEs",
      skills: ["IntelliJ IDEA", "Eclipse", "Visual Studio"]
    },
    {
      category: "Project Management",
      skills: ["Jira", "Zoho"]
    },
    {
      category: "Automation & DevOps",
      skills: ["Jenkins", "Orchestrator"]
    },
    {
      category: "Operating Systems",
      skills: ["Linux", "Windows"]
    }
  ],
  professionalSkills: [
    "Strong analytical and logical thinking abilities",
    "Quick learner with commitment to mastering new technologies",
    "Excellent problem-solving skills",
    "Team collaboration and communication"
  ],
  education: [
    {
      id: "edu1",
      degree: "Master of Computer Application (MCA)",
      institution: "Dr. Ambedkar Institute of Technology",
      location: "Bengaluru",
      year: "2019"
    },
    {
      id: "edu2",
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Vidyavahini First Grade College",
      location: "Tumkur",
      year: "2017"
    }
  ],
  projects: [
    {
      id: "proj1",
      name: "Cimplyfive",
      technologies: ["Angular", "Java", "Spring MVC"],
      database: "MongoDB",
      client: "ClearTax",
      description: "CimplyFive blends domain knowledge and technology to provide automation solutions for compliance risk management, which is the foundation for good corporate governance. The platform serves the needs of corporate groups and professional services firms by meeting the requirements of different types of companies in India."
    },
    {
      id: "proj2",
      name: "OLA Finance System - Insurance",
      technologies: ["Java", "Spring Boot"],
      client: "OLA",
      description: "Developed and maintained insurance management system for OLA's finance operations, handling policy management, claims processing, and financial transactions."
    },
    {
      id: "proj3",
      name: "EPMS (Employee Performance Management System)",
      technologies: ["Java", "Spring MVC"],
      client: "Entomo",
      description: "Employee performance tracking and management system for evaluating and monitoring employee productivity and performance metrics."
    },
    {
      id: "proj4",
      name: "Jookebox Music Application",
      technologies: ["Java", "Spring Boot"],
      description: "Music streaming application with features for playlist management, user preferences, and content delivery."
    }
  ]
};
