"use client"
import Markdown from "@uiw/react-md-editor"
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
    links: { label: string; url: string, icon: any }[];
    tagline: string;
  };
}

const config = {
  title: "🚀 Stay Curious, Keep Exploring!",
  description:
    "Thanks for stopping by! I share insights on DevOps, Software Engineering, and AI, sprinkled with homelab adventures and tech experiments.",
  links: [
    { label: "isujith.dev", url: "https://cv.isujith.dev", icon: <LayersIcon className="size-4" /> },
    { label: "SujithThirumalaisamy", url: "https://github.com/SujithThirumalaisamy", icon: <GithubIcon className="size-4" /> },
    { label: "SujithThiru", url: "https://x.com/SujithThiru", icon: <TwitterIcon className="size-4" /> },
    { label: "Gmail", url: "mailto:sujithmasi1267@gmail.com", icon: <MailIcon className="size-4" /> },
  ],
  tagline: "💡 Code. Automate. Optimize. 🚀",
};

export default function Blog({ blog: {
  title,
  description,
  datetime,
  tags,
  content,
} }: { blog: BlogMatterWithContent }) {
  return (
    <>
      <div className="font-sans flex flex-col w-full max-w-6xl mx-auto">
        <Title title={title} />
        <Navbar />
        <div className="w-full max-w-4xl flex flex-col items-center gap-2 md:gap-6 mx-auto">
          <BlogHeader title={title} description={description} datetime={datetime} tags={tags} />
          <BlogDivider />
          <Markdown.Markdown
            source={content}
            style={{
              whiteSpace: 'pre-wrap',
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              fontSize: '1.1rem',
              lineHeight: '1.8rem',
            }}
            className="px-[1rem] md:px-[5rem] pb-6 rounded-lg dark:border-gray-200 text-black dark:text-white w-full"
          />
        </div>
      </div>
      <BlogFooter config={config} />
    </>
  );
}

function Title({ title }: { title: string }) {
  return (
    <title>
      {title}
    </title>
  )
}

function BlogHeader({ title, description, datetime, tags }: { title: string, description: string, datetime: string, tags: string[] }) {
  return (
    <>
      <div className="flex gap-2 text-[0.9rem]">
        {tags.map((tag: string) => (
          <Badge
            key={tag}
            className="ease-out duration-100 transition-colors text-white font-normal text-xs py-1 px-3 bg-white border-gray-300 border rounded-2xl flex-shrink-0 hover:bg-[#d4994a] dark:bg-[#d18521] dark:border-[#d18521] cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <div className="px-4 text-[2rem] md:text-[3rem] font-extrabold text-center tracking-tight text-gray-900 dark:text-gray-300">
        {title}
      </div>
      <div className="italic text-sm text-[#B91C1B] dark:text-[#EDC38D] font-medium">
        Published on {formatDatetime(datetime)}
      </div>
      <div className="text-xl text-gray-600 text-center dark:text-gray-400 px-10">
        {description}
      </div>
    </>
  )
}


const BlogFooter = ({ config }: BlogFooterProps) => {
  return (
    <footer className="bg-gray-200 dark:bg-[#161B22] text-primary p-6 text-center">
      <h2 className="text-xl font-semibold">{config.title}</h2>
      <p className="text-sm mt-2">{config.description}</p>
      <div className="flex justify-center space-x-4 mt-4 max-w-full flex-wrap">
        {config.links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            <Badge
              className="my-1 gap-1 ease-out duration-100 transition-colors text-white font-normal text-xs py-1 px-3 bg-white border-gray-300 border rounded-2xl flex-shrink-0 hover:bg-[#d4994a] dark:bg-[#d18521] dark:border-[#d18521] cursor-pointer"
            >
              {link.icon}
              {link.label}
            </Badge>
          </Link>
        ))}
      </div>
      <h2 className="text-xl font-semibold mt-2">{config.tagline}</h2>
    </footer>
  );
};


function BlogDivider() {
  return (
    <div className="my-4 h-[0.5px] bg-gray-300 w-full max-w-[28rem]"></div>
  )
}
