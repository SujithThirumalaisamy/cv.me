"use client";
import Markdown from "@uiw/react-md-editor";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/nav-bar";
import { formatDatetime } from "@/lib/utils";
import { BlogMatterWithContent } from "@/app/actions/blogs";
import Link from "next/link";
import { GithubIcon, LayersIcon, MailIcon, TwitterIcon } from "lucide-react";

interface BlogFooterProps {
  config: {
    title: string;
    description: string;
    links: { label: string; url: string; icon: any }[];
    tagline: string;
  };
}

const config = {
  title: "🚀 Stay Curious, Keep Exploring!",
  description:
    "Thanks for stopping by! I share insights on DevOps, Software Engineering, and AI, sprinkled with homelab adventures and tech experiments.",
  links: [
    {
      label: "isujith.dev",
      url: "https://cv.isujith.dev",
      icon: <LayersIcon className="size-4" />,
    },
    {
      label: "SujithThirumalaisamy",
      url: "https://github.com/SujithThirumalaisamy",
      icon: <GithubIcon className="size-4" />,
    },
    {
      label: "SujithThiru",
      url: "https://x.com/SujithThiru",
      icon: <TwitterIcon className="size-4" />,
    },
    {
      label: "Gmail",
      url: "mailto:sujithmasi1267@gmail.com",
      icon: <MailIcon className="size-4" />,
    },
  ],
  tagline: "💡 Code. Automate. Optimize. 🚀",
};

export default function Blog({
  blog: { title, description, datetime, tags, content },
}: {
  blog: BlogMatterWithContent;
}) {
  return (
    <>
      <div className="mx-auto flex w-full max-w-6xl flex-col font-sans">
        <Title title={title} />
        <Navbar />
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-2 md:gap-6">
          <BlogHeader
            title={title}
            description={description}
            datetime={datetime}
            tags={tags}
          />
          <BlogDivider />
          <Markdown.Markdown
            source={content}
            style={{
              whiteSpace: "pre-wrap",
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              fontSize: "1.1rem",
              lineHeight: "1.8rem",
            }}
            className="w-full rounded-lg px-[1rem] pb-6 text-black md:px-[5rem] dark:border-gray-200 dark:text-white"
          />
        </div>
      </div>
      <BlogFooter config={config} />
    </>
  );
}

function Title({ title }: { title: string }) {
  return <title>{title}</title>;
}

function BlogHeader({
  title,
  description,
  datetime,
  tags,
}: {
  title: string;
  description: string;
  datetime: string;
  tags: string[];
}) {
  return (
    <>
      <div className="flex gap-2 text-[0.9rem]">
        {tags.map((tag: string) => (
          <Badge
            key={tag}
            className="flex-shrink-0 cursor-pointer rounded-2xl border border-gray-300 bg-white px-3 py-1 text-xs font-normal text-white transition-colors duration-100 ease-out hover:bg-[#d4994a] dark:border-[#d18521] dark:bg-[#d18521]"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <div className="px-4 text-center text-[2rem] font-extrabold tracking-tight text-gray-900 md:text-[3rem] dark:text-gray-300">
        {title}
      </div>
      <div className="text-sm font-medium italic text-[#B91C1B] dark:text-[#EDC38D]">
        Published on {formatDatetime(datetime)}
      </div>
      <div className="px-10 text-center text-xl text-gray-600 dark:text-gray-400">
        {description}
      </div>
    </>
  );
}

const BlogFooter = ({ config }: BlogFooterProps) => {
  return (
    <footer className="bg-gray-200 p-6 text-center text-primary dark:bg-[#161B22]">
      <h2 className="text-xl font-semibold">{config.title}</h2>
      <p className="mt-2 text-sm">{config.description}</p>
      <div className="mt-4 flex max-w-full flex-wrap justify-center space-x-4">
        {config.links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            <Badge className="my-1 flex-shrink-0 cursor-pointer gap-1 rounded-2xl border border-gray-300 bg-white px-3 py-1 text-xs font-normal text-white transition-colors duration-100 ease-out hover:bg-[#d4994a] dark:border-[#d18521] dark:bg-[#d18521]">
              {link.icon}
              {link.label}
            </Badge>
          </Link>
        ))}
      </div>
      <h2 className="mt-2 text-xl font-semibold">{config.tagline}</h2>
    </footer>
  );
};

function BlogDivider() {
  return (
    <div className="my-4 h-[0.5px] w-full max-w-[28rem] bg-gray-300"></div>
  );
}
