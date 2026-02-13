import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogMatter {
  title: string;
  description: string;
  datetime: string;
  tags: string[];
  image?: string;
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

const postsDirectory = path.join(process.cwd(), "src/app/blogs/markdown");

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const matterResult = parseMarkdown(fileContent);

  return matterResult;
}

export async function getAllBlogs() {
  const markdownFiles = await fs.promises.readdir(postsDirectory);

  const blogs = await Promise.all(
    markdownFiles.map(async (fileName) => {
      const slug = fileName.replace(".md", "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContent = await fs.promises.readFile(fullPath, "utf8");
      const matterResult = parseMarkdown(fileContent);

      return {
        slug,
        ...matterResult,
      };
    }),
  );

  // Sort by date (newest first)
  return blogs.sort(
    (a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime(),
  );
}
