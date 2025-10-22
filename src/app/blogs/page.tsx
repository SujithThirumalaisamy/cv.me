import { getAllBlogs } from "@/app/actions/blogs";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/nav-bar";
import { formatDatetime } from "@/lib/utils";
import Link from "next/link";
import { CalendarIcon, TagIcon } from "lucide-react";

export const metadata = {
  title: "Blog | Sujith Thirumalaisamy",
  description:
    "Thoughts on DevOps, Software Engineering, and tech experiments from my homelab adventures.",
};

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <>
      <div className="mx-auto flex w-full max-w-6xl flex-col font-sans">
        <Navbar />
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 py-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-gray-100">
              My Writings
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Thoughts on DevOps, Software Engineering, and tech experiments
              from my homelab adventures.
            </p>
          </div>

          {/* Blog List */}
          <div className="w-full space-y-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              More posts coming soon! Follow me on{" "}
              <Link
                href="https://x.com/SujithThiru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                X
              </Link>{" "}
              for updates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

interface BlogCardProps {
  blog: {
    slug: string;
    title: string;
    description: string;
    datetime: string;
    tags: string[];
  };
}

function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <Link href={`/blogs/${blog.slug}`} className="block">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <Badge
              key={tag}
              className="flex-shrink-0 cursor-pointer rounded-2xl border border-gray-300 bg-white px-3 py-1 text-xs font-normal text-primary transition-colors duration-100 ease-out hover:bg-gray-100 dark:border-[#d18521] dark:bg-[#d18521] dark:hover:bg-[#c87e1f]"
            >
              <TagIcon className="mr-1 h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h2 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
          {blog.title}
        </h2>

        {/* Description */}
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {blog.description}
        </p>

        {/* Date */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <time dateTime={blog.datetime}>{formatDatetime(blog.datetime)}</time>
        </div>
      </Link>
    </article>
  );
}
