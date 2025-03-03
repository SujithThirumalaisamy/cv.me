import Blog from "@/components/blog";
import { getPostData } from "@/app/actions/blogs";

export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const blog = await getPostData(blogId);
  return <Blog blog={blog} />;
}
