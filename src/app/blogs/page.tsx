import { getAllBlogs } from "@/app/actions/blogs";
import { Badge } from "@/components/ui/badge";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { formatDatetime } from "@/lib/utils";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | Sujith Thirumalaisamy",
  description:
    "Thoughts on DevOps, Software Engineering, and tech experiments from my homelab adventures.",
};

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <>
      <div className="mx-auto flex w-full max-w-6xl flex-col font-sans">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 py-8">
          <div className="text-center">
            <p className="-ml-4 mt-8 text-lg text-gray-600 dark:text-gray-400">
              Thoughts on DevOps, Software Engineering, and tech experiments
              from my homelab adventures.
            </p>
          </div>

          <div className="flex w-full flex-col space-y-4">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
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
    image?: string;
  };
}

function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="group flex h-full flex-col overflow-hidden border transition-all hover:border-zinc-400 hover:shadow-md dark:hover:border-zinc-600 md:flex-row">
        {blog.image && (
          <div className="relative aspect-video h-[20em] shrink-0 overflow-hidden md:aspect-auto md:h-[10em] md:w-72 lg:h-[11em]">
            <Image
              fill
              src={blog.image}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col justify-center p-4">
          <CardHeader>
            <div className="flex flex-col gap-2">
              <CardTitle className="text-xl font-bold transition-colors group-hover:text-primary">
                {blog.title}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-grow pt-2">
            {blog.description}
          </CardContent>
          <CardFooter className="mt-4 flex w-full items-center justify-between pt-0">
            <div className="flex flex-wrap gap-2">
              {blog.tags.slice(0, 4).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-2 py-0.5 text-xs font-normal"
                >
                  {tag}
                </Badge>
              ))}
              {blog.tags.length > 4 && (
                <Badge
                  key="more"
                  variant="secondary"
                  className="px-2 py-0.5 text-xs font-normal"
                >
                  + {blog.tags.length - 4}
                </Badge>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
              <CalendarIcon className="h-3 w-3" />
              <time dateTime={blog.datetime}>
                {formatDatetime(blog.datetime)}
              </time>
            </div>
          </CardFooter>
        </div>
      </div>
    </Link>
  );
}
