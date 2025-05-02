export type SocialMediaTypes = {
  gitHub: string;
  linkedIn: string;
  email: string;
};
export type SocialMediaKey = keyof SocialMediaTypes;

export type JobExperience = {
  title: string;
  company: string;
  companyUrl?: string;
  dates: {
    start: { year: number; month: number };
    end?: { year: number; month: number };
  };
  tasks: React.ReactNode[];
};
