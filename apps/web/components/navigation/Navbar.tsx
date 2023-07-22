"use client";

import SearchInput from "@web/components/navigation/SearchInput";
import Link from "@web/components/ui/Link";
import Button from "@web/components/ui/Button";
import { FileText, Heart, Home, LifeBuoy, Tool } from "react-feather";
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
  {
    name: "Support",
    href: "/support",
    icon: LifeBuoy,
  },
];

// TODO: Make the navbar responsive

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-dark-500 sticky left-0 top-0 z-50 mx-auto flex h-16 w-full max-w-[1800px] items-center justify-between px-8">
      <div className="flex items-center">
        <p className="mr-8 text-3xl font-bold text-white">Toolzy</p>
        <ul className="flex gap-2">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                className={`${pathname === item.href ? "text-primary-500" : ""}`}
                variant="text-icon"
                icon={<item.icon size={16} />}
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-end gap-2">
        <SearchInput />
        <Button theme="secondary" size="small">
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
