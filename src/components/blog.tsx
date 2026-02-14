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
      <MinimalBlogFooter />
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
              <Badge key={tag} className="cursor-pointer rounded-md px-2 py-0">
                Get My Resume!
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

function BlogDivider() {
  return (
    <div className="my-4 h-[0.5px] w-full max-w-[28rem] bg-gray-300"></div>
  );
}

const MinimalBlogFooter = () => {
  return (
    <div className="flex w-full flex-col items-center py-12">
      <div className="my-8 h-[1px] w-full max-w-2xl bg-neutral-200 dark:bg-neutral-800" />
      <div className="flex gap-4 text-sm text-neutral-500">
        <Link
          href="/blogs"
          className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-300"
        >
          All Posts
        </Link>
        <span>•</span>
        <Link
          href="/"
          className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-300"
        >
          Home
        </Link>
      </div>
    </div>
  );
};
