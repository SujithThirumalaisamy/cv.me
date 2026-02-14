"use client";

import { JSX } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Badge } from "@/components/ui/badge";

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
  title: "Stay Curious, Keep Exploring!",
  description:
    "Thanks for stopping by! I share insights on DevOps, and Software Engineering, sprinkled with homelab adventures and tech experiments.",
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
  tagline: "Code. Automate. Optimize.",
};

export default function Blog({
  blog: { title, description, datetime, tags, content },
}: {
  blog: BlogMatterWithContent;
}) {
  return (
    <>
      <div className="mx-auto mt-16 flex w-full max-w-6xl flex-col font-sans">
        <Title title={title} />

        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-2 md:gap-6">
          <BlogHeader
            title={title}
            description={description}
            datetime={datetime}
            tags={tags}
          />
          <BlogDivider />
          <div className="prose prose-zinc w-full max-w-none dark:prose-invert">
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[
                rehypeSlug,
                [
                  rehypeAutolinkHeadings,
                  {
                    behavior: "wrap",
                    properties: {
                      className: ["no-underline hover:underline"],
                    },
                  },
                ],
              ]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="group relative scroll-mt-20" {...props}>
                    <span className="absolute -left-6 mr-2 hidden text-muted-foreground group-hover:block">
                      #
                    </span>
                    {props.children}
                  </h1>
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="group relative scroll-mt-20" {...props}>
                    <span className="absolute -left-6 mr-2 hidden text-muted-foreground group-hover:block">
                      #
                    </span>
                    {props.children}
                  </h2>
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="group relative scroll-mt-20" {...props}>
                    <span className="absolute -left-6 mr-2 hidden text-muted-foreground group-hover:block">
                      #
                    </span>
                    {props.children}
                  </h3>
                ),
              }}
            >
              {content}
            </Markdown>
          </div>
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
      <div className="flex flex-col items-center gap-2 text-[0.9rem]">
        {tags
          .reduce<JSX.Element[][]>((rows, tag, i) => {
            if (i % 4 === 0) rows.push([]);
            rows[rows.length - 1].push(
              <Badge
                key={tag}
                className="flex-shrink-0 cursor-pointer rounded-2xl border border-gray-300 bg-white px-3 py-1 text-xs font-normal text-primary transition-colors duration-100 ease-out hover:bg-gray-100 dark:border-[#d18521] dark:bg-[#d18521] dark:hover:bg-[#c87e1f]"
              >
                {tag}
              </Badge>,
            );
            return rows;
          }, [])
          .map((row, i) => (
            <div key={i} className="flex gap-2">
              {row}
            </div>
          ))}
      </div>

      <div className="px-4 text-center text-[2rem] font-extrabold tracking-tight text-gray-900 dark:text-gray-300 md:text-[3rem]">
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
      <p className="mt-2 text-center text-sm">{config.description}</p>
      <div className="mt-4 flex max-w-full flex-wrap justify-center gap-2">
        {config.links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            <Badge className="flex-shrink-0 cursor-pointer rounded-2xl border border-gray-300 bg-white px-3 py-1 text-xs font-normal text-primary transition-colors duration-100 ease-out hover:bg-gray-100 dark:border-[#d18521] dark:bg-[#d18521] dark:hover:bg-[#c87e1f]">
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
