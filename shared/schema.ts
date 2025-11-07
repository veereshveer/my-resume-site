import { z } from "zod";

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  location?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description?: string;
  isInternship?: boolean;
}

export interface Project {
  id: string;
  name: string;
  technologies: string[];
  database?: string;
  client?: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface TechnicalSkills {
  category: string;
  skills: string[];
}

export interface ResumeData {
  contact: ContactInfo;
  objective: string;
  professionalSummary: string[];
  experience: Experience[];
  technicalSkills: TechnicalSkills[];
  professionalSkills: string[];
  education: Education[];
  projects: Project[];
}
