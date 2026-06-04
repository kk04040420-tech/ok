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

export interface Education {
  id: string;
  school: string;
  major: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  techStack?: string[];
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

// JSearch Job API 타입
export interface Job {
  job_id: string;
  employer_name: string;
  employer_logo: string | null;
  employer_website: string | null;
  employer_company_type: string | null;
  job_publisher: string;
  job_employment_type: "FULLTIME" | "PARTTIME" | "CONTRACTOR" | "INTERN";
  job_title: string;
  job_apply_link: string;
  job_apply_is_direct: boolean;
  job_apply_quality_score: number;
  job_description: string;
  job_is_remote: boolean;
  job_posted_at_datetime_utc: string;
  job_city: string | null;
  job_state: string | null;
  job_country: string;
  job_latitude: number | null;
  job_longitude: number | null;
  job_benefits: string[] | null;
  job_google_link: string;
  job_offer_expiration_datetime_utc: string | null;
  job_required_experience: {
    no_experience_required: boolean;
    required_experience_in_months: number | null;
    experience_mentioned: boolean;
    experience_preferred: boolean;
  };
  job_required_skills: string[] | null;
  job_required_education: {
    postgraduate_degree: boolean;
    professional_certification: boolean;
    high_school: boolean;
    associates_degree: boolean;
    bachelors_degree: boolean;
    degree_mentioned: boolean;
    degree_preferred: boolean;
    professional_certification_mentioned: boolean;
  };
  job_experience_in_place_of_education: boolean;
  job_min_salary: number | null;
  job_max_salary: number | null;
  job_salary_currency: string | null;
  job_salary_period: "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | null;
  job_highlights: {
    Qualifications?: string[];
    Responsibilities?: string[];
    Benefits?: string[];
  };
  job_job_title: string | null;
  job_posting_language: string;
  job_onet_soc: string;
  job_onet_job_zone: string;
}

export interface JobSearchResponse {
  status: string;
  request_id: string;
  parameters: {
    query: string;
    date_posted: string;
    country: string;
    language: string;
  };
  data: {
    jobs: Job[];
    cursor: string | null;
  };
}

export interface JobSearchParams {
  query: string;
  country?: string;
  date_posted?: "all" | "today" | "3days" | "week" | "month";
  num_pages?: number;
}
