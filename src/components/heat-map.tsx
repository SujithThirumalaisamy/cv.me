"use client";
import GitHubCalendar from "react-github-calendar";
import { Section } from "./ui/section";
import { useTheme } from "next-themes";

const GitHubUsername = "sujiththirumalaisamy";

export default function HeatMap() {
  const { theme } = useTheme();
  const isLeapYear =
    new Date().getFullYear() % 4 === 0 &&
    (new Date().getFullYear() % 100 !== 0 ||
      new Date().getFullYear() % 400 === 0);
  return (
    <Section className="mt-8 rounded-[0.5rem] border-2 border-secondary p-2 text-sm">
      <GitHubCalendar
        username={GitHubUsername}
        hideMonthLabels
        colorScheme={theme && theme === "dark" ? "dark" : "light"}
        transformData={(data) => {
          return isLeapYear ? data.slice(79, 366) : data.slice(78, 365);
        }}
        weekStart={1}
      />
    </Section>
  );
}
