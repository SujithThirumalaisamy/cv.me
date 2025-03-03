"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogMatter {
  title: string;
  description: string;
  datetime: string;
  tags: string[];
}

export interface BlogMatterWithContent extends BlogMatter {
  content: string;
}

function parseMarkdown(fileContent: string): BlogMatterWithContent {
  const { data, content }: { data: BlogMatter; content: string } = matter(
    fileContent,
  ) as any;
  return { ...data, content };
}

const postsDirectory = path.join(process.cwd(), "src/app/blog/markdown");

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const matterResult = parseMarkdown(fileContent);

  return matterResult;
}
