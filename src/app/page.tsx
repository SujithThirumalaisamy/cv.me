import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import {
  GlobeIcon,
  MailIcon,
  PhoneIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CodeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import HeatMap from "@/components/heat-map";
import { getAllBlogs } from "@/app/actions/blogs";
import { BlogCard } from "@/components/blog-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function Page() {
  const blogs = await getAllBlogs();

  const links = [
    RESUME_DATA.contact.email && {
      key: "email",
      href: `mailto:${RESUME_DATA.contact.email}`,
      icon: MailIcon,
      label: RESUME_DATA.contact.email,
    },
    RESUME_DATA.contact.tel && {
      key: "tel",
      href: `tel:${RESUME_DATA.contact.tel}`,
      icon: PhoneIcon,
      label: RESUME_DATA.contact.tel,
    },
    ...RESUME_DATA.contact.social.map((social) => ({
      key: social.name,
      href: social.url,
      icon: social.icon,
      label: social.name,
    })),
  ].filter(Boolean);

  return (
    <>
      <main className="relative mx-auto w-full scroll-my-12 overflow-auto p-4 pt-16 dark:bg-gray-950 md:p-16 print:p-12">
        <section className="mx-auto w-full max-w-3xl space-y-8 bg-white dark:bg-gray-950 print:space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-2">
              <h1 className="flex flex-wrap items-center items-center gap-2 text-2xl font-bold">
                {RESUME_DATA.name}

                <a href="https://cdn.isujith.dev/Sujith_Resume.pdf">
                  <Badge className="px-1 py-0 text-[10px] transition-colors hover:bg-primary/60">
                    Get My Resume!
                  </Badge>
                </a>
              </h1>

              <p className="max-w-md text-pretty pl-0 font-mono text-sm text-muted-foreground">
                {RESUME_DATA.about}
              </p>
              <p className="max-w-md items-center text-pretty pl-0 font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {links.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Button
                      key={item.key}
                      className="size-8"
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a href={item.href}>
                        <Icon className="size-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            <Avatar className="size-28">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
          <Section className="print:hidden">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <BookOpenIcon className="h-5 w-5" />
                Latest Writings
              </h2>
              <a
                href="/blogs"
                className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                View all posts
                <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="relative -mx-4 px-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs &&
                  blogs.map((blog) => (
                    <BlogCard
                      key={blog.slug}
                      slug={blog.slug}
                      title={blog.title}
                      datetime={blog.datetime}
                      image={blog.image}
                    />
                  ))}
              </div>
            </div>
          </Section>
          <Section className="print:hidden">
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <CodeIcon className="h-5 w-5" />
              Building in Public
            </h2>
            <HeatMap />
          </Section>

          <Section>
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <CodeIcon className="h-5 w-5" />
              Skills
            </h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.skills.map((skill) => {
                return (
                  <Badge
                    key={skill}
                    className="cursor-default transition-colors hover:bg-primary/60"
                  >
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </Section>
        </section>
      </main>
    </>
  );
}
