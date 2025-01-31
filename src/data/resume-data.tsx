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
      company: "2ndSight.ai",
      link: "https://www.2ndsight.ai/",
      badges: ["Remote-Freelancer"],
      title: "Full Stack Engineer",
      start: "Oct 2024",
      end: "Present",
      description:
        "Developed a real-time AI interview platform with live transcription, audio processing, and TTS, leveraging AWS (S3 File Gateway, Lambda, EventBridge, CloudWatch, DynamoDB) for scalability and reliability.",
    },
    {
      company: "Team Tamizhan",
      link: "https://faq.itamizhan.com",
      badges: ["Remote"],
      title: "Full Stack Developer → DevOps Engineer",
      start: "Dec 2022",
      end: "May 2024",
      description:
        "Engineered cutting-edge tools using React JS for dynamic interfaces, seamlessly integrated with Gitlab for version control. Automation is key — I implemented Gitlab webhooks and Shell Scripting for effortless deployment. And for reliability, I've optimized hosting with Ubuntu, nginx, pm2, and Docker, ensuring top-notch performance.",
    },
    {
      company: "Team Tamizhan",
      link: "https://faq.itamizhan.com",
      badges: ["Remote"],
      title: "Tech Consultant",
      start: "Dec 2022",
      end: "Dec 2023",
      description:
        "Provided expert support in computer diagnostics and troubleshooting, along with networking solutions and virtual assistance. My proactive approach to resolving complex issues and dedication to continuous learning ensure effective problem-solving for clients.",
    },
  ],
  skills: [
    "TypeScript",
    "GoLang",
    "Next.js",
    "Express/NestJS",
    "SQL/NoSQL/Prisma",
    "Networking/Infrastructure",
    "DevOps/Cloud/Kubernetes",
    "CI/CD",
    "Touch Typing (130 WPM)",
    "Prometheus/Grafana",
    "Microservices"
  ],
  projects: [
    {
      title: "Remote Execution Engine",
      techStack: [
        "Project",
        "Language Runtimes",
        "Kubernetes",
        "SQL/NoSQL",
        "System Design",
        "Shell Scripting",
        "NodeJS",
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
      techStack: [
        "Side Project",
        "Docker",
        "Portainer",
        "OracleSQL/PostgreSQL",
      ],
      description:
        "Refurbished/Deployed persistent Oracle/PostgresSQL Databases using Docker-Ubuntu-rack-server.",
    },
    {
      title: "Homelab",
      techStack: [
        "Networking",
        "Kubernetes",
        "Remote Access",
        "DNS",
        "Terraform",
      ],
      description:
        "Building my own homelab with 1Gbps networking and hosting services like Databases and media servers.",
    },
  ],
  opensource: [
    {
      title: "Muzer",
      techStack: ["Next.js", "PostgreSQL", "Websockets"],
      description:
        "Collaborative web based youtube playlist. Useful for music lovers in workspaces.",
      link: {
        label: "muzer.100xdevs.com",
        href: "https://muzer.100xdevs.com",
      },
    },
    {
      title: "Twenty",
      techStack: ["twentyhq/twenty", "Next.js", "PostgreSQL", "Monorepo"],
      description:
        "The #1 Open-Source CRM Tool. Actively contributing to the issues raised in GH.",
      link: {
        label: "twenty.com",
        href: "https://twenty.com",
      },
    },
    {
      title: "app.100xdevs",
      techStack: ["Next.js", "PostgreSQL", "Monorepo/TurboRepo", "Prisma"],
      description:
        "Course Platform of Harkirat Singh. Started actively participating in discussions in issues of the GH.",
      link: {
        label: "app.100xdevs.com",
        href: "https://app.100xdevs.com",
      },
    },
    {
      title: "projects.100xdevs",
      techStack: ["Next.js", "PostgreSQL", "TurboRepo", "Prisma", "Notion API"],
      description:
        "Slides app of Harkirat Singh. Started actively participating in discussions in issues of the GH.",
      link: {
        label: "projects.100xdevs.com",
        href: "https://projects.100xdevs.com",
      },
    },
    {
      title: "algo.100xdevs",
      techStack: ["Next.js", "PostgreSQL/Prisma", "TurboRepo", "Kubernetes"],
      description:
        "Leetcode of Harkirat Singh. Started actively participating in discussions in issues of the GH.",
      link: {
        label: "algo.100xdevs.com",
        href: "https://algo.100xdevs.com",
      },
    },
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

    ,
  ],
} as const;
