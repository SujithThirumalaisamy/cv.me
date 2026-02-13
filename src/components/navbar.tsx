"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links: { title: string; url: string; isExternal?: boolean }[] = [
    { title: "Home", url: "/" },
    { title: "Blogs", url: "/blogs" },
    { title: "Resume", url: "/resume" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-center border-b border-gray-200 bg-white font-mono text-sm text-gray-600 transition-colors dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400 print:hidden">
      <div className="flex items-center gap-2">
        {links.map((link) => {
          const isActive =
            !link.isExternal &&
            (link.url === "/"
              ? pathname === "/"
              : pathname?.startsWith(link.url));

          return (
            <div key={link.url} className="group relative">
              {isActive && (
                <div className="absolute inset-0 border border-gray-300 bg-gray-100 opacity-100 dark:border-gray-700 dark:bg-gray-900" />
              )}
              <span className="relative z-10 block px-4 py-2">
                {link.isExternal ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "transition-colors hover:text-black dark:hover:text-gray-100",
                      isActive
                        ? "text-black dark:text-gray-100"
                        : "text-gray-600 dark:text-gray-400",
                    )}
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    href={link.url}
                    className={cn(
                      "transition-colors hover:text-black dark:hover:text-gray-100",
                      isActive
                        ? "text-black dark:text-gray-100"
                        : "text-gray-600 dark:text-gray-400",
                    )}
                  >
                    {link.title}
                  </Link>
                )}
              </span>
            </div>
          );
        })}
        <div className="mx-2 h-4 w-px bg-gray-200 dark:bg-gray-800" />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="size-8 text-gray-600 hover:bg-gray-100 hover:text-black dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100"
        >
          {mounted ? (
            theme === "dark" ? (
              <SunIcon className="size-4" />
            ) : (
              <MoonIcon className="size-4" />
            )
          ) : (
            <span className="size-4" /> // Placeholder to prevent layout shift
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </nav>
  );
};
