import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  BookOpenIcon,
  UserIcon,
  CodeIcon,
  BriefcaseIcon,
  FolderIcon,
  LinkIcon,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { GitHubIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: `Resume | ${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
};

export default function ResumePage() {
  return (
    <main className="relative mx-auto w-full scroll-my-12 overflow-auto p-4 pt-16 dark:bg-gray-950 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-3xl space-y-8 bg-white dark:bg-gray-950 print:space-y-6">
        <Section>
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <UserIcon className="h-5 w-5" />
            About Me
          </h2>
          <p className="text-pretty pl-0 font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <BriefcaseIcon className="h-5 w-5" />
            Work Experience
          </h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card
                key={work.company}
                className="group transform cursor-pointer border-2 bg-gradient-to-br from-white to-gray-50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg dark:from-gray-800 dark:to-gray-900"
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a
                        className="transition-colors hover:underline group-hover:text-primary"
                        href={work.link}
                      >
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs transition-colors hover:bg-primary/20"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
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

        <Section className="print-force-new-page scroll-mb-16 print:pt-6">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <FolderIcon className="h-5 w-5" />
            Projects
          </h2>
          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16 print:pt-6">
          <a
            href="https://tangible-sled-e9d.notion.site/Open-Source-Contributions-45fc829ac5354e48b4e691277b61b59d"
            className="flex items-center gap-2"
          >
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <GitHubIcon className="h-5 w-5" />
              Opensource Contributions
            </h2>
            <LinkIcon className="scale-75" />
          </a>
          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {RESUME_DATA.opensource.map((opensource) => {
              return (
                <ProjectCard
                  key={opensource?.title}
                  title={opensource?.title || ""}
                  description={opensource?.description || ""}
                  tags={opensource?.techStack || []}
                  link={opensource?.link?.href || ""}
                />
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <BookOpenIcon className="h-5 w-5" />
            Education
          </h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card
                key={`${education.school} ${education.degree}`}
                className="group transform cursor-pointer border-2 bg-gradient-to-br from-white to-gray-50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg dark:from-gray-800 dark:to-gray-900"
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {education.degree}
                  </h4>
                </CardHeader>
              </Card>
            );
          })}
        </Section>
      </section>

      <CommandMenu
        links={[
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
