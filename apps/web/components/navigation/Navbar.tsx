"use client";

import { useState, useEffect } from "react";
import Link from "@web/components/ui/Link";
import { usePathname } from "next/navigation";
import { Home, FileText, Tool, Heart } from "react-feather";
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
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen === true) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Check if the code is running in a browser environment
    if (typeof window !== "undefined") {
      // Add a scroll event listener to control the navbar
      window.addEventListener("scroll", handleScroll);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (isMenuOpen && window.innerWidth > 1024) setIsMenuOpen(false);
      if (window.scrollY < 60) return;

      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  return (
    <nav
      className={`bg-dark-700 sticky z-50 flex h-16 w-full flex-col items-center justify-between px-3 transition-all duration-300 ease-in-out lg:flex-row lg:px-8 ${
        show || isMenuOpen ? "top-0" : "-top-16"
      }`}
    >
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
          className={`flex aspect-square flex-col justify-center gap-1.5 border-0 duration-300 ease-in-out lg:hidden ${
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
        className={`bg-dark-600 fixed left-0 top-16 z-40 flex h-[calc(100dvh-64px)] w-full flex-col items-center justify-between gap-2 overflow-auto px-4 py-8 transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "left-0" : "left-full"
        }`}
      >
        {/** Mobile Links */}
        <ul className="flex max-h-[60dvh] w-full flex-col gap-2 overflow-auto">
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

        {/** Mobile Login/Register */}
        <ul className="border-dark-400/70 flex w-full gap-2 border-t pt-8">
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
