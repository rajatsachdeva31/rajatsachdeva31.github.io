import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

type ProjectLink = {
  icon: React.ReactNode;
  type: string;
  href: string;
};

type HackathonLink = {
  icon: React.ReactNode;
  title: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  href: string;
  dates: string;
  technologies: string[];
  image?: string;
  video?: string;
  links?: ProjectLink[];
};

export type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  links?: HackathonLink[];
  win?: string;
  mlh?: string;
};

export const DATA = {
  name: "Rajat Sachdeva",
  initials: "RS",
  url: "https://rajat.ca",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Research Associate | Full Stack Software Engineer | AWS & Azure Certified | React.js | Next.js | Node.js | Python | Frontend Specialist",
  summary:
    "As a detail-oriented and passionate Full Stack Software Engineer with over 2 years of hands-on experience in the IT industry, I specialize in frontend development and creating user-centric, responsive web applications. My experience spans across multiple frameworks and languages, including JavaScript, React.js, Angular, Node.js, Python, AWS, and SQL, enabling me to deliver scalable solutions for business needs. I aspire to build a career in IT, and eventually create innovative SaaS businesses.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Java",
    "Postgres",
    "Docker",
    "Git",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "r.sachdeva3105@gmail.com",
    tel: "+14376607347",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/r-sachdeva3105/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/r-sachdeva3105/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/r_sachdeva3105/",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Humber Polytechnic",
      href: "https://humber.ca/",
      badges: [],
      location: "Etobicoke, ON",
      title: "Research Associate",
      logoUrl: "/humber.png",
      start: "Nov 2024",
      end: "Present",
      description:
        "Built a comprehensive resource library by collecting and verifying video resources, literature, and website articles to bridge theoretical knowledge with practical applications. Developed a specialized library of resources focused on Advanced Java, C#, data structures, and design patterns, supporting students and educators in mastering these critical technical topics.",
    },
    {
      company: "Coforge",
      badges: [],
      href: "https://www.coforge.com/",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/coforge.png",
      start: "January 2021",
      end: "April 2021",
      description:
        "Built and optimized dynamic email templates for marketing campaigns using HTML, CSS, and JavaScript. Collaborated with UI/UX designers to ensure email templates aligned with brand guidelines and accessibility standards. Built an application for employees from scratch to manage customer data, policies, claims, and renewals, streamlining insurance operations and improving data accuracy. Optimized application performance using MaterialUI, Angular, Typescript, reducing page load times by 25%. Streamlined deployment through CI/CD pipelines in GitLab, reducing production deployment times by 40% and ensuring a 100% on-time release rate.",
    },
  ],
  education: [
    {
      school: "Humber Polytechnic",
      href: "https://humber.ca/",
      degree: "Graduate Certificate in Information Technology",
      logoUrl: "/humber.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Guru Gobind Singh Indraprastha University",
      href: "https://www.ipu.ac.in/",
      degree: "Bachelor's of Technology in Information Technology",
      logoUrl: "/ipu.png",
      start: "2016",
      end: "2021",
    },
  ],
  projects: [] as Project[],
  hackathons: [] as Hackathon[],
} as const;
