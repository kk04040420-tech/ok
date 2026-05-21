export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "infra" | "etc";
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  roles: string[];
  email: string;
  githubUrl: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  profileImageUrl?: string;
}
