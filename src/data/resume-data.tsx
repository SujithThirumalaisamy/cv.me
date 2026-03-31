import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sujith Thirumalaisamy",
  initials: "ST",
  location: "Coimbatore, Tamil Nadu",
  locationLink: "https://maps.app.goo.gl/PPC3daTjnj5PVdbd8",
  about: "Software Engineer @ CrackedDevs",
  summary:
    "I am a backend and infrastructure focused software engineer who designs, builds, and operates production systems end to end. I have a strong foundation in computer science, systems, networking, and computing, and I apply it daily while shipping backend features, building APIs and services, automating infrastructure, and keeping systems reliable. A lot of my judgment comes from running real workloads in both production and my homelab, where I experiment with cloud native stacks, Kubernetes, and reliability-focused tooling. I enjoy practical problem solving and building systems that are simple, scalable, cost efficient, and resilient.",
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
    },
  ],
  work: [
    {
      company: "Typewise",
      link: "https://typewise.app",
      badges: ["YC S22", "Remote"],
      title: "MLOps Engineer",
      start: "Mar 2026",
      end: "Present",
      description:
        "Working on MLOps and DevOps, improving monitoring and observability infrastructure, and optimizing cloud costs to enhance system reliability and operational efficiency for AI-powered communication products.",
    },
    {
      company: "CrackedDevs",
      link: "https://crackeddevs.com",
      badges: ["US Remote"],
      title: "Software Engineer",
      start: "May 2025",
      end: "Feb 2026",
      description:
        "Designed and built a customizable subliminal application using TypeScript/Next.js, Kubernetes, and cloud native tooling to let users create, schedule, and personalize tracks, scaling the underlying infrastructure and optimizing costs to improve reliability and performance.",
    },
    {
      company: "InterspectAI",
      link: "",
      badges: ["Contract"],
      title: "Jr. Software Engineer",
      start: "Nov 2024",
      end: "Jan 2025",
      description:
        "Built a complex real time AI interview platform in Go using WebRTC, on-the-fly audio processing pipelines with tools like FFmpeg, streaming transcription, and TTS to make candidates feel like they are talking to an AI in real time and dramatically reduce manual review effort for recruiters.",
    },
    {
      company: "Team Tamizhan",
      link: "https://faq.itamizhan.com",
      badges: ["Remote"],
      title: "Full Stack/DevOps Engineer",
      start: "Dec 2022",
      end: "May 2024",
      description:
        "Built SaaS products and public-facing sites with React and modern frontend tooling, improving developer experience by integrating GitLab-based CI/CD pipelines to ship features quickly and reliably for community campaigns.",
    },
  ],
  skills: [
    // Languages & Backend
    "GoLang",
    "TypeScript",
    "Express/NestJS",
    "SQL/NoSQL/Prisma",
    "Microservices",
    // DevOps, Cloud & Infra
    "DevOps/Cloud/Kubernetes",
    "Helm",
    "GitOps",
    "CI/CD",
    "Prometheus/Grafana",
    "Networking/Infrastructure",
    "Shell Scripting",
    // Other
    "Touch Typing (130 WPM)",
  ],
  projects: [
    {
      title: "Kubecorner",
      techStack: ["ArgoCD", "Kubernetes", "DevOps", "Monitoring"],
      description:
        "Centralized K8s manifest repo for my services, wired into ArgoCD to continuously sync clusters, standardize configurations, and make rolling outs a breeze.",
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
        "Building a highly scalable remote code execution engine on top of HA Kubernetes, with lang specific runtimes to run untrusted code safely and elastically on isolated environments.",
      link: {
        label: "Repository",
        href: "https://github.com/SujithThirumalaisamy/remote-execution-engine",
      },
    },
    {
      title: "Homelab",
      techStack: ["Kubernetes", "Remote Access", "DNS", "Terraform", "IAAC"],
      description:
        "Running a production like homelab with Kubernetes, DNS, and remote access, using Terraform and IaC to provision services like databases and servers.",
      link: {
        label: "isujith.dev",
        href: "https://isujith.dev",
      },
    },
  ],
  opensource: [
    {
      title: "Twenty",
      techStack: ["twentyhq/twenty", "Next.js", "PostgreSQL", "Monorepo"],
      description:
        "The #1 Open-Source CRM Tool. Contributed for UI/UX improvements to frontend, helping improve the product experience.",
      link: {
        label: "twenty.com",
        href: "https://twenty.com/contributors/SujithThirumalaisamy",
      },
    },
    {
      title: "app.100xdevs",
      techStack: ["Next.js", "PostgreSQL", "Monorepo/TurboRepo", "Prisma"],
      description:
        "A complete content manager system for course creator. Implemented a Notion scraping tool and backend to make importing and managing course content smoother.",
      link: {
        label: "app.100xdevs.com",
        href: "https://github.com/code100x/cms/pulls?q=is%3Apr+author%3Asujiththirumalaisamy+is%3Aclosed",
      },
    },
    {
      title: "algo.100xdevs",
      techStack: ["Next.js", "PostgreSQL/Prisma", "TurboRepo", "Kubernetes"],
      description:
        "A complete code cramming platform. Contributed to the code execution pipeline, modifying how the code execution engine runs tests so evaluation is more reliable.",
      link: {
        label: "algo.100xdevs.com",
        href: "https://github.com/code100x/algorithmic-arena/pulls?q=is%3Apr+author%3Asujiththirumalaisamy+is%3Aclosed",
      },
    },
  ],
} as const;
