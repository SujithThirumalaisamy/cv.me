import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, Link, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import GitHubCalendar from "react-github-calendar";
import HeatMap from "@/components/heat-map";
//import { ResumeIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return (
    <main className="relative mx-auto w-full scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 dark:bg-gray-950">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6 dark:bg-gray-950">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">
              {RESUME_DATA.name}
              <a href="mailto:sujithmasi1267@gmail.com">
                <Badge className="m-2 cursor-pointer p-1 py-0">Hire Me!</Badge>
              </a>
            </h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
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
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
              {/* <Button */}
              {/*   className="size-8 p-1" */}
              {/*   variant="outline" */}
              {/*   size="icon" */}
              {/*   asChild */}
              {/* > */}
              {/*   <a href="https://cdn.isujith.dev/Sujith_Resume.pdf"> */}
              {/*     <ResumeIcon className="size-4" /> */}
              {/*   </a> */}
              {/* </Button> */}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <HeatMap />
        <Section>
          <h2 className="text-xl font-bold">About Me</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
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
        {/* <Section> */}
        {/*   <h2 className="text-xl font-bold">Education</h2> */}
        {/*   {RESUME_DATA.education.map((education) => { */}
        {/*     return ( */}
        {/*       <Card key={education.school}> */}
        {/*         <CardHeader> */}
        {/*           <div className="flex items-center justify-between gap-x-2 text-base"> */}
        {/*             <h3 className="font-semibold leading-none"> */}
        {/*               {education.school} */}
        {/*             </h3> */}
        {/*             <div className="text-sm tabular-nums text-gray-500"> */}
        {/*               {education.start} - {education.end} */}
        {/*             </div> */}
        {/*           </div> */}
        {/*         </CardHeader> */}
        {/*         <CardContent className="mt-2">{education.degree}</CardContent> */}
        {/*       </Card> */}
        {/*     ); */}
        {/*   })} */}
        {/* </Section> */}
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16 print:pt-6">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
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
            <h2 className="text-xl font-bold">Open Source Contributions</h2>
            <Link className="scale-75" />
          </a>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
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
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
