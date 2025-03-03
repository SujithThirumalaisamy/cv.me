import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function formatDatetime(dtStr: string): string {
  const date = new Date(dtStr);
  return date.toLocaleString("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
