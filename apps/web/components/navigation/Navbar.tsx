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
    <nav
      className="bg-dark-700 z-50 mx-auto flex h-16 w-full max-w-[1800px] items-center justify-between px-8"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="flex items-center">
        <Link href="/" itemProp="url">
          <p className="text-3xl font-bold text-white" itemProp="name">
            Toolzy
          </p>
        </Link>
      </div>
      <ul className="flex gap-2">
        {navItems.map((item, i) => (
          <li key={i} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link
              className={`${pathname === item.href ? "text-primary-500" : ""}`}
              variant="text-icon"
              icon={<item.icon size={16} />}
              href={item.href}
              itemProp="item"
              itemScope
              itemType="https://schema.org/Thing"
            >
              <span itemProp="name">{item.name}</span>
              <meta itemProp="position" content={`${i + 1}`} />
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
