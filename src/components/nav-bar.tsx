import Link from "next/link";
import { ThemeToggle } from "./toggle-theme";

export default function Navbar() {
  const links = [
    {
      name: "Portfolio",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  return (
    <div className="mb-4 flex w-full items-center justify-between px-4 py-6">
      <div className={"left"}>
        <h2 className="text-xl font-semibold md:text-3xl">
          Sujith Thirumalaisamy
        </h2>
      </div>
      <div className="right flex items-center gap-4">
        <ThemeToggle />
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative block overflow-x-hidden p-1 text-base font-medium tracking-widest after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:w-full after:-translate-x-full after:transform after:transition after:duration-300 after:ease-in-out hover:after:translate-x-0 hover:after:bg-gray-400 md:text-lg"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
