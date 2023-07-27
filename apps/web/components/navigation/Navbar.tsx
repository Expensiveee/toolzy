"use client";

import React from "react";
import Link from "@web/components/ui/Link";
import Button from "@web/components/ui/Button";
import { FileText, Heart, Home, Tool } from "react-feather";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Tools",
    href: "/tools",
    icon: Tool,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: FileText,
  },
  {
    name: "Contribute",
    href: "/contribute",
    icon: Heart,
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-dark-700 hidden z-50 mx-auto lg:flex h-16 w-full max-w-[1800px] items-center justify-between px-8">
      <div className="flex items-center">
        <p className="text-3xl font-bold text-white">Toolzy</p>
      </div>
      <ul className="flex gap-2">
        {navItems.map((item, i) => (
          <li key={i} itemScope itemType="https://schema.org/SiteNavigationElement">
            <Link
              className={`${pathname === item.href ? "text-primary-500" : ""}`}
              variant="text-icon"
              icon={<item.icon size={16} />}
              href={item.href}
              itemProp="url"
            >
              <span itemProp="name">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-end gap-2">
        <Button theme="primary" size={"medium"}>
          Login
        </Button>
        <Button theme="secondary" size={"medium"}>
          Register
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
