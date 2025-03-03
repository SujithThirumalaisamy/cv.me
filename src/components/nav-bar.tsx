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
    <div className="flex justify-between items-center py-6 px-4 w-full">
      <div className={"left"}>
        <h2 className="text-xl md:text-3xl font-semibold">
          Sujith Thirumalaisamy
        </h2>
      </div>
      <div className="flex gap-4 right items-center">
        <ThemeToggle />
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="relative p-1 overflow-x-hidden block tracking-widest font-medium text-base md:text-lg after:absolute after:w-full after:h-1 after:inset-x-0 after:bottom-0 after:transition after:duration-300 after:transform after:ease-in-out hover:after:bg-gray-400 after:-translate-x-full hover:after:translate-x-0">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

