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
};

export const DATA = {
  name: "Rajat Sachdeva",
  initials: "RS",
  url: "https://rajat.ca",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Full Stack Software Engineer | AWS & Azure Certified | React.js | Next.js | Node.js | Python | Frontend Specialist",
  summary:
    "As a detail-oriented and passionate Full Stack Software Engineer with over 2 years of hands-on experience in the IT industry, I specialize in frontend development and creating user-centric, responsive web applications. My experience spans across multiple frameworks and languages, including JavaScript, React.js, Angular, Node.js, Python, AWS, and SQL, enabling me to deliver scalable solutions for business needs. I aspire to build a career in IT, and eventually create innovative SaaS businesses.",
  avatarUrl: "/me.png",
  skills: [
    "React.js",
    "Next.js",
    "Node.js",
    "Javascript",
    "Typescript",
    "Python",
    "Java",
    "MySQL",
    "Oracle SQL",
    "Postgres",
    "Docker",
    "Git",
    "Github",
    "AWS",
    "Postman",
    "Vercel",
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
      start: "Jan 2021",
      end: "Apr 2021",
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
      school: "Indraprastha University",
      href: "https://www.ipu.ac.in/",
      degree: "Bachelor's of Technology in Information Technology",
      logoUrl: "/ipu.png",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [] as Project[],
  hackathons: [
    {
      title: "TBC & Matera Fintech Weekend",
      dates: "November 8th - 10th, 2024",
      location: "North York, Ontario",
      description:
        "Developed AI-powered fraud detection and middleware to detect fake QR codes, displaying risk scores to users and notifying merchants. Secured a spot in the top 6 finalists for innovative payment security solutions.",
      image: "/matera.png",
      links: [],
    },
    {
      title: "AWS DeepRacer Competition 2024",
      dates: "April 23th - 24th, 2024",
      location: "Etobicoke, Ontario",
      description:
        "Led a team of four in the AWS DeepRacer competition at Humber College, designing and implementing a deep learning model for autonomous racing. Secured 3rd place by optimizing reinforcement learning algorithms to detect and navigate the track effectively.",
      image: "/deepracer.png",
      links: [],
    },
    {
      title: "Bell Geekfest Hackathon 2023",
      dates: "September 22nd - 24th, 2023",
      location: "Mississauga, Ontario",
      description:
        "Developed an application to detect malicious URLs, focusing on Online Privacy and Security. Collaborated with a team to design and present the solution, leveraging industry mentorship and pitching to a panel of judges.",
      icon: "public",
      image: "/geekfest.png",
      links: [],
    },
  ],
} as const;
