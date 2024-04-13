import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sujith Thirumalaisamy",
  initials: "ST",
  location: "Bangalore, Karnataka",
  locationLink: "https://www.google.com/maps/place/Udumalaipettai",
  about:
    "Jr. Full Stack Engineer focused on learning by experimenting and building products.",
  summary:
    "Results-driven Freelance/Intern Developer specializing in designing and developing Scalable and Robust Software/Web Applications. Proven expertise in Gitlab/Github version control, auto deployment with webhooks, and hosting. Adept troubleshooter with excellent tech support skills, offering a strong blend of technical proficiency and effective communication.",
  avatarUrl: "https://avatars.githubusercontent.com/u/108384868?v=4",
  personalWebsiteUrl: "https://isujith.dev",
  contact: {
    email: "sujithmasi1267@gmail.com",
    tel: "+91 7530097787",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/SujithThirumalaisamy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sujith-thiru/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/SujithThiru",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Nallamuthu Gounder Mahalingam College",
      degree: "Bachelor of Science in Information Technology",
      start: "2022",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Team Tamizhan",
      link: "https://faq.itamizhan.com",
      badges: ["Remote Intern"],
      title: "Full Stack Developer → DevOps Engineer",
      start: "Dec 2022",
      end: "Present",
      description:
        "Engineered cutting-edge tools using React JS for dynamic interfaces, seamlessly integrated with Gitlab for version control. Automation is key—I've implemented Gitlab webhooks and Shell Scripting for effortless deployment. And for reliability, I've optimized hosting with Ubuntu, nginx, pm2, and Docker, ensuring top-notch performance.",
    },
    {
      company: "Team Tamizhan",
      link: "https://faq.itamizhan.com",
      badges: ["Remote Intern"],
      title: "Tech Consultant",
      start: "Dec 2022",
      end: "Dec 2023",
      description:
        "Provided expert support in computer diagnostics and troubleshooting, along with networking solutions and virtual assistance. My proactive approach to resolving complex issues and dedication to continuous learning ensures effective problem-solving for clients.",
    },
  ],
  skills: [
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Java with REST",
    "SQL/NoSQL",
    "MERN Stack",
    "DSA",
    "Networking",
    "Infrastructure",
    "Cloud → AWS/Linode",
    "Touch Typing → 100wpm",
  ],
  projects: [
    {
      title: "Collaborative Web based IDE / Compiler",
      techStack: ["Side Project", "TypeScript", "React.js", "Kubernetes"],
      description:
        "Development of a Web IDE enabled with JudgeO/Kubernetes, for students to access powerful remote development environment",
      link: {
        label: "compile-now.isujith.dev",
        href: "https://compile-not.isujith.dev",
      },
    },
    {
      title: "Centralised Server for College Lab",
      techStack: [
        "Side Project",
        "Docker",
        "Portainer",
        "OracleSQL/PostgreSQL",
      ],
      description:
        "Refurbished and Deployed persistent Oracle and Postgres SQL Databases using Docker in Ubuntu server running in a old rack server.",
    },
    {
      title: "True NAS Storage Infra",
      techStack: [
        "Side Project",
        "True NAS",
        "Proxmox",
        "Stograge Raid",
        "Subnetting",
      ],
      description:
        "Built, Configured and Deployed a Raid-1(Mirror) NAS with True NAS. Configured the firewall of the college infrastructure",
    },
    {
      title: "Homelab",
      techStack: [
        "Side Project",
        "Networking",
        "Kubernetes",
        "SQL/NoSQL",
        "DDNS/WOL",
        "Safe Remote Access",
        "PiHole DNS",
      ],
      description:
        "Building my own homelab with 1Gbps networking and hosting services like Databases and media servers.",
    },
  ],
  opensource: [
    {
      title: "cv",
      techStack: ["BartoszJarocki/cv", "TypeScript", "Next.js"],
      description:
        "This Project is a fork of BartoszJarocki/cv in github. Actively contributing to the issues raised in GH.",
      link: {
        label: "cv.jarocki.me",
        href: "https://cv.jarocki.me",
      },
    },
    {
      title: "Twenty",
      techStack: [
        "twentyhq/twenty",
        "Next.js",
        "PostgreSQL",
        "Monorepo",
        "2 Merges",
      ],
      description:
        "The #1 Open-Source CRM Tool. Actively contributing to the issues raised in GH.",
      link: {
        label: "twenty.com",
        href: "https://twenty.com",
      },
    },
    {
      title: "app.100xdevs",
      techStack: [
        "code100x/cms",
        "Next.js",
        "PostgreSQL",
        "Monorepo",
        "Prisma",
      ],
      description:
        "Course Platform of Harkirat Singh. Started actively participating in discussions in issues of the GH.",
      link: {
        label: "app.100xdevs.com",
        href: "https://app.100xdevs.com",
      },
    },
    {
      title: "projects.100xdevs",
      techStack: [
        "code100x/daily-code",
        "Next.js",
        "PostgreSQL/Firebase",
        "TurboRepo",
        "Prisma",
        "Notion API",
      ],
      description:
        "Slides app of Harkirat Singh. Started actively participating in discussions in issues of the GH.",
      link: {
        label: "projects.100xdevs.com",
        href: "https://projects.100xdevs.com",
      },
    },
  ],
} as const;
