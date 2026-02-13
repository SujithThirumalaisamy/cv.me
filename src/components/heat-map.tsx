import Calendar, { type ThemeInput } from "react-activity-calendar";
import { ApiResponse, Contribution } from "./types";
import { Section } from "./ui/section";

const GITHUB_USERNAME = "sujiththirumalaisamy";

const fetchGitHubData = async (): Promise<ApiResponse> => {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
  );
  return response.json();
};

export default async function HeatMap() {
  const data = await fetchGitHubData();
  const { totalCommits, filteredData } = transformData(data.contributions);

  return (
    <Section className="rounded-[0.5rem] border-2 border-secondary p-2 text-sm">
      <Calendar
        weekStart={0}
        labels={defaultLabels}
        data={filteredData}
        hideMonthLabels
        totalCount={totalCommits}
        theme={gitHubTheme}
        colorScheme="dark"
        maxLevel={4}
      />
    </Section>
  );
}

const defaultLabels = {
  totalCount: `{{count}} contributions in the last year`,
};

const gitHubTheme: ThemeInput = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const DAYS_IN_WEEKS = 7;
const WEEKS = 47;

const today = new Date();
const dayOfWeek = today.getUTCDay();

const totalDays = WEEKS * DAYS_IN_WEEKS - (6 - dayOfWeek);

const transformData = (data: Contribution[]) => {
  const today = new Date();

  const filteredData = data
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .filter((a) => new Date(a.date) < today)
    .reverse()
    .slice(0, totalDays)
    .reverse();

  const totalCommits = data.reduce((sum, item) => sum + item.count, 0);

  return { filteredData, totalCommits };
};
