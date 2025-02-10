"use client";
import GitHubCalendar from "react-github-calendar";
import { Section } from "./ui/section";
import { useTheme } from "next-themes";
import { useState } from "react";

const GitHubUsername = "sujiththirumalaisamy";

export default function HeatMap() {
  const { theme } = useTheme();
  const [totalCommits, setTotalCommits] = useState(0);
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
          setTotalCommits(data.reduce((acc, curr) => acc + curr.count, 0));
          return !isLeapYear ? data.slice(79, 366) : data.slice(78, 365);
        }}
        totalCount={totalCommits}
        // @ts-ignore
        weekStart={new Date().getDay() + 1}
      />
    </Section>
  );
}
