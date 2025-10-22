import Blog from "@/components/blog";
import { getPostData } from "@/app/actions/blogs";
import path from "path";
import fs from "fs/promises";

export async function generateStaticParams() {
  const markdownFiles = await fs.readdir(
    path.join(process.cwd(), "src/app/blogs/markdown"),
  );
  const blogs = markdownFiles.map((fileName) => {
    const id = fileName.replace(".md", "");
    return { id };
  });

  return blogs.map((blog) => ({
    blogId: blog.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const blog = await getPostData(blogId);
  return <Blog blog={blog} />;
}
