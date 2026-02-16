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
      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col px-4 font-sans sm:px-6 md:mt-16">
        <Title title={title} />

        <div className="mx-auto flex w-full min-w-0 max-w-4xl flex-col items-center gap-2 md:gap-6">
          <BlogHeader
            title={title}
            description={description}
            datetime={datetime}
            tags={tags}
          />
          <BlogDivider />
          <div className="prose prose-zinc w-full max-w-none overflow-x-auto break-words dark:prose-invert [&_pre]:max-w-full [&_pre]:overflow-x-auto">
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
                p: ({ node, ...props }) => (
                  <p className="mx-0 my-3 px-4 leading-7" {...props} />
                ),
                h1: ({ node, ...props }) => (
                  <h1
                    className="group relative scroll-mt-20 pl-0 md:pl-6"
                    {...props}
                  >
                    <span className="absolute -left-6 mr-2 hidden text-muted-foreground group-hover:block md:inline">
                      #
                    </span>
                    {props.children}
                  </h1>
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="group relative scroll-mt-20 pl-0 md:pl-6"
                    {...props}
                  >
                    <span className="absolute -left-6 mr-2 hidden text-muted-foreground group-hover:block md:inline">
                      #
                    </span>
                    {props.children}
                  </h2>
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="group relative scroll-mt-20 pl-0 md:pl-6"
                    {...props}
                  >
                    <span className="absolute -left-6 mr-2 hidden text-muted-foreground group-hover:block md:inline">
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
      <div className="flex w-full max-w-full flex-col items-center justify-center gap-1.5 py-1 text-xs sm:gap-2 sm:text-[0.9rem]">
        {tags
          .reduce<JSX.Element[][]>((rows, tag, i) => {
            if (i % 4 === 0) rows.push([]);
            rows[rows.length - 1].push(
              <Badge
                key={tag}
                className="cursor-pointer rounded-md px-2 py-0.5 text-xs"
              >
                {tag}
              </Badge>,
            );
            return rows;
          }, [])
          .map((row, i) => (
            <div
              key={i}
              className="flex flex-wrap justify-center gap-1.5 sm:gap-2"
            >
              {row}
            </div>
          ))}
      </div>

      <div className="px-1 text-center text-lg font-extrabold leading-snug tracking-tight text-gray-900 dark:text-gray-300 sm:px-2 sm:text-xl md:px-4 md:text-2xl lg:text-[2.5rem]">
        {title}
      </div>
      <div className="text-xs font-medium italic text-[#B91C1B] dark:text-[#EDC38D] sm:text-sm">
        Published on {formatDatetime(datetime)}
      </div>
      <div className="px-3 text-center text-sm leading-snug text-gray-600 dark:text-gray-400 sm:px-6 sm:text-base md:px-10 md:text-lg lg:text-xl">
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
    <div className="flex w-full flex-col items-center px-4 py-12">
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
