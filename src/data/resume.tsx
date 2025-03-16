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
  url: "https://rajatsachdeva.me",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Full Stack Software Engineer | AWS & Azure Certified | React.js | Next.js | Node.js | Python | Frontend Specialist",
  summary:
    "A Full Stack Software Engineer based in Canada with 2+ years of experience crafting clean, responsive, and user-friendly web applications. 🚀 I specialize in frontend magic with frameworks like React, Next, Angular and love building seamless, scalable solutions using JavaScript, Typescript, Node, AWS, and SQL. 💻 Let's connect and create something awesome! ✨",
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
        url: "https://github.com/rajatsachdeva31/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajatsachdeva31/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rajatsachdeva31/",
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
      company: "Credwise",
      href: "https://credwise.ca/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/credwise.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Built a web app, ImmigrateX, using the MERN stack to help immigrants access housing, car rentals, and essential resources for transitioning to Canada. Designed and developed client onboarding features for realtors and car dealerships, including document uploads, soft credit checks, and service listings.",
    },
    {
      company: "Humber Polytechnic",
      href: "https://humber.ca/",
      badges: [],
      location: "Etobicoke, ON",
      title: "Research Associate",
      logoUrl: "/humber.png",
      start: "Nov 2024",
      end: "Dec 2024",
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
      start: "May 2021",
      end: "Aug 2023",
      description:
        "Developed responsive web interfaces for the Lifewriter project, enhancing UI/UX for a leading US insurance company. Optimized application functionality by implementing React, Typescript, Spring Boot and SQL technologies, which decreased page load times by 20%. Enhanced team efficiency by actively participating in Agile ceremonies, collaborating with cross-functional teams and UI/UX designers to ensure brand consistency and accessibility.",
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
  projects: [
    {
      title: "Cryptex",
      description:
        "A real-time crypto trading simulator built with Next.js, TailwindCSS, and Prisma, allowing users to track live cryptocurrency prices, manage virtual portfolios, and execute simulated trades without financial risk. It features real-time price updates, trade history tracking, and portfolio performance insights to help users understand market trends in a risk-free environment.",
      href: "https://trycryptex.vercel.app",
      dates: "Jan 2025 - Mar 2025",
      technologies: [
        "Next.js",
        "TypeScript",
        "PrismaORM",
        "PostgreSQL",
        "Clerk",
        "Vercel",
        "Charts",
        "Shadcn",
        "TailwindCSS",
      ],
      image: "/cryptex.png",
      links: [
        {
          type: "Website",
          href: "https://trycryptex.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rajatsachdeva31/cryptex",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "FormFlow",
      description:
        "A customizable drag-and-drop form builder designed to simplify form creation and data collection. Built with Next.js, Dnd-kit, and Prisma, it enables users to create interactive forms, share them in real time, and track responses efficiently. With features like real-time collaboration, analytics, and seamless UI, FormFlow makes form-building intuitive and hassle-free.",
      href: "https://tryformflow.vercel.app",
      dates: "Nov 2024 - Dec 2024",
      technologies: [
        "Next.js",
        "TypeScript",
        "PrismaORM",
        "PostgreSQL",
        "Clerk",
        "Vercel",
        "Dnd-kit",
        "Shadcn",
        "TailwindCSS",
      ],
      image: "/formflow.png",
      links: [
        {
          type: "Website",
          href: "https://tryformflow.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rajatsachdeva31/FormFlow",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
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
