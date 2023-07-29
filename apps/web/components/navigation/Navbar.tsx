"use client";

import { useState, useEffect } from "react";
import Link from "@web/components/ui/Link";
import { usePathname } from "next/navigation";
import { Home, FileText, Tool, Share, Heart } from "react-feather";
import Button from "../ui/Button";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: <Home size={16} />,
  },
  {
    name: "Tools",
    href: "/tools",
    icon: <Tool size={16} />,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: <FileText size={16} />,
  },
  {
    name: "Contribute",
    href: "/contribute",
    icon: <Heart size={16} />,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`bg-dark-700 z-50 flex h-16 flex-col items-center justify-between px-8 lg:flex-row`}>
      {/** Logo & Hamburger */}
      <div className="z-50 flex h-full w-full items-center justify-between">
        <Link href="/">
          <span className=":text-white text-2xl font-extrabold lg:text-3xl">
            <span className="text-primary-500">T</span>
            oolzy
          </span>
        </Link>

        <Button
          theme="outline"
          size={"small"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex aspect-square flex-col border-0 justify-center gap-1 border duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <span className="transform-origin-center h-[2px] w-6 bg-white"></span>
          <span
            className={`transform-origin-center duration-350 h-[2px] w-6 bg-white transition-all duration-500 ease-in-out ${
              isMenuOpen ? "scale-x-0" : "scale-x-100"
            }`}
          ></span>
          <span className="transform-origin-center h-[2px] w-6 bg-white"></span>
        </Button>
      </div>

      {/** Desktop Links */}
      <ul className="hidden w-full items-center justify-center gap-2 lg:flex">
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link
              className={`${pathname === link.href ? "text-primary-500" : ""}`}
              variant="text-icon"
              href={link.href}
              icon={link.icon}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/** Dekstop Login/Register + Theme Switcher */}
      <div className="hidden w-full items-center justify-end gap-2 lg:flex">
        <Button className="w-24" theme="primary" size="small">
          Sign In
        </Button>
        <Button className="w-24" theme="secondary" size="small">
          Register
        </Button>
      </div>

      {/** All Mobile Links */}
      <div
        className={`bg-dark-600 fixed left-0 top-[66px] z-40 flex h-[calc(100vh-66px)] w-full flex-col items-center gap-2 overflow-auto px-4 py-8 transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "left-0" : "left-full"
        }`}
      >
        {/** Mobile Links */}
        <ul className="flex w-full flex-col gap-2">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link
                className={`justify-center ${pathname === link.href ? "text-primary-500" : ""}`}
                variant="text-icon"
                size="large"
                href={link.href}
                icon={link.icon}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="bg-dark-400/70 my-4 block h-px w-full">&nbsp;</div>

        {/** Mobile Login/Register */}
        <ul className="flex w-full gap-2">
          <li className="flex-1">
              <Button className="w-full" theme="primary" size="large">
                Sign In
              </Button>
          </li>
          <li className="flex-1">
              <Button className="w-full" theme="secondary" size="large">
                Register
              </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
