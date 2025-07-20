"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

const navItems = [
  {
    href: "#hero",
    title: "Home",
    active: true,
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

export const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleActive = (title: string) => {
    setActiveItem(title);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item) => (
          <a
            href={item.href}
            key={item.title}
            className={twMerge(
              "nav-item",
              activeItem === item.title
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : "undefined"
            )}
            onClick={() => handleActive(item.title)}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
};
