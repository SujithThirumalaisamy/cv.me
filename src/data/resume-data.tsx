import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sujith Thirumalaisamy",
  initials: "ST",
  location: "Coimbatore, Tamil Nadu",
  locationLink: "https://maps.app.goo.gl/PPC3daTjnj5PVdbd8",
  about: "Software Engineer @ CrackedDevs",
  summary:
    "I am a hobbyist software engineer and an tinkerer. For a brief period, I focused on formal Computer Science education, where I built a strong foundation in systems, networking, and computing. Most of my real learning, however, has come from building, breaking, rebuilding, and running things in production and in my homelab. Over the years, I have gravitated toward DevOps and infrastructure engineering, working on automation, cloud native systems, and reliability focused tooling. I enjoy unconventional setups, practical problem solving, and building systems that are simple, scalable, and resilient.",
  avatarUrl: "https://cdn.isujith.dev/profile.jpg",
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
      company: "CrackedDevs",
      link: "https://crackeddevs.com",
      badges: ["US Remote"],
      title: "Software Engineer",
      start: "May 2025",
      end: "Present",
      description:
        "Bulding a application to the folks who love to customize thier subliminals.",
    },
    {
      company: "InterspectAI",
      link: "",
      badges: ["Contract"],
      title: "Jr. Software Engineer",
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
      title: "Kubecorner",
      techStack: ["ArgoCD", "Kubernetes", "DevOps", "Monitoring"],
      description:
        "Kubernetes Manifest repository for all of my projects which is connected to ArgoCD for CI/CD.",
      link: {
        label: "Repository",
        href: "https://github.com/SujithThirumalaisamy/kubecorner",
      },
    },
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
      title: "Homelab",
      techStack: ["Kubernetes", "Remote Access", "DNS", "Terraform", "IAAC"],
      description:
        "Building my own homelab where I host and tinker with services like Databases, media servers and DNS.",
    },
  ],
  opensource: [
    {
      title: "Twenty",
      techStack: ["twentyhq/twenty", "Next.js", "PostgreSQL", "Monorepo"],
      description:
        "The #1 Open-Source CRM Tool. OS platform to manage your customers",
      link: {
        label: "twenty.com",
        href: "https://twenty.com/contributors/SujithThirumalaisamy",
      },
    },
    {
      title: "app.100xdevs",
      techStack: ["Next.js", "PostgreSQL", "Monorepo/TurboRepo", "Prisma"],
      description: "A complete content manager system for course creator.",
      link: {
        label: "app.100xdevs.com",
        href: "https://github.com/code100x/cms/pulls?q=is%3Apr+author%3Asujiththirumalaisamy+is%3Aclosed",
      },
    },
    {
      title: "algo.100xdevs",
      techStack: ["Next.js", "PostgreSQL/Prisma", "TurboRepo", "Kubernetes"],
      description: "A complete code cramming platform.",
      link: {
        label: "algo.100xdevs.com",
        href: "https://github.com/code100x/algorithmic-arena/pulls?q=is%3Apr+author%3Asujiththirumalaisamy+is%3Aclosed",
      },
    },
  ],
} as const;
