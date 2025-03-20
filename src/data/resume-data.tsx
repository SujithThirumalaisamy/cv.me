import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sujith Thirumalaisamy",
  initials: "ST",
  location: "Bangalore, Karnataka",
  locationLink: "https://maps.app.goo.gl/PPC3daTjnj5PVdbd8",
  about:
    "Full Stack Developer and DevOps Engineer focused on learning through experimentation and product development.",
  summary:
    "Passionate Software Developer with a strong foundation in full-stack development, cloud computing, and DevOps practices. Proven track record in designing and implementing scalable, resilient, and user-centric applications. Adept at leveraging modern technologies to solve complex problems and deliver impactful solutions.",
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
      company: "InterspectAI",
      link: "",
      badges: ["Remote"],
      title: "Full Stack Engineer",
      start: "Nov 2024",
      end: "Jan 2025",
      description:
        "Developed a real-time AI interview platform with live transcription, audio processing, and TTS.",
    },
    {
      company: "Team Tamizhan",
      link: "https://faq.itamizhan.com",
      badges: ["Remote"],
      title: "Full Stack/DevOps Engineer",
      start: "Dec 2022",
      end: "May 2024",
      description:
        "Cutting-edge tools using React JS for dynamic interfaces, seamlessly integrated with Gitlab for version control and CI/CD.",
    },
  ],
  skills: [
    "TypeScript",
    "GoLang",
    "Next.js",
    "Express/NestJS",
    "SQL/NoSQL/Prisma",
    "Helm",
    "DevOps/Cloud/Kubernetes",
    "CI/CD",
    "Touch Typing (130 WPM)",
    "Prometheus/Grafana",
    "Microservices",
    "Backend",
    "Networking/Infrastructure",
    "GitOps",
    "Shell Scripting",
  ],
  projects: [
    {
      title: "Remote Execution Engine",
      techStack: [
        "Language Runtimes",
        "Kubernetes",
        "Shell Scripting",
        "Microservices",
      ],
      description:
        "Developing a highly scalable remote code execution and testing engine with HA Kubernetes.",
      link: {
        label: "Repository",
        href: "https://github.com/SujithThirumalaisamy/remote-execution-engine",
      },
    },
    {
      title: "Centralised Server for College Lab",
      techStack: ["Docker", "Portainer", "OracleSQL/PostgreSQL"],
      description:
        "Deployed persistent Oracle/PostgresSQL Databases using Docker-Ubuntu-rack-server.",
    },
    {
      title: "Homelab",
      techStack: ["Kubernetes", "Remote Access", "DNS", "Terraform", "IAAC"],
      description:
        "Building my own homelab where I host and tinker with services like Databases, media servers and DNS.",
    },
  ],
  opensource: [
    {
      title: "Muzer",
      techStack: ["Next.js", "PostgreSQL", "Websockets"],
      description: "Collaborative web based youtube playlist.",
      link: {
        label: "muzer.100xdevs.com",
        href: "https://muzer.100xdevs.com",
      },
    },
    {
      title: "Twenty",
      techStack: ["twentyhq/twenty", "Next.js", "PostgreSQL", "Monorepo"],
      description:
        "The #1 Open-Source CRM Tool. OS platform to manage your customers",
      link: {
        label: "twenty.com",
        href: "https://twenty.com",
      },
    },
    {
      title: "app.100xdevs",
      techStack: ["Next.js", "PostgreSQL", "Monorepo/TurboRepo", "Prisma"],
      description: "A complete content manager system for course creator.",
      link: {
        label: "app.100xdevs.com",
        href: "https://app.100xdevs.com",
      },
    },
    {
      title: "projects.100xdevs",
      techStack: ["Next.js", "PostgreSQL", "TurboRepo", "Prisma", "Notion API"],
      description: "A complete notion based content/slides viewer.",
      link: {
        label: "projects.100xdevs.com",
        href: "https://projects.100xdevs.com",
      },
    },
    {
      title: "algo.100xdevs",
      techStack: ["Next.js", "PostgreSQL/Prisma", "TurboRepo", "Kubernetes"],
      description: "A complete code cramming platform.",
      link: {
        label: "algo.100xdevs.com",
        href: "https://algo.100xdevs.com",
      },
    },
    {
      title: "cv",
      techStack: ["BartoszJarocki/cv", "TypeScript", "Next.js"],
      description:
        "The project where you are. Fork of BartoszJarocki/cv in github.",
      link: {
        label: "cv.jarocki.me",
        href: "https://cv.jarocki.me",
      },
    },

    ,
  ],
} as const;
