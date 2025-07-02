"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { useState } from "react";

const navItems = [
  { name: "HOW IT WORKS", href: "#how-it-works" },
  { name: "SERVICES", href: "#services" },
  { name: "WHO IT'S FOR", href: "#who-its-for" },
  { name: "ABOUT US", href: "#about-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-800">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 md:hidden">
            <Link href="/" aria-label="Home">
              <Image
                src="/images/HeaderLogo.png"
                alt="Header Logo"
                width={70}
                height={30}
              />
            </Link>
          </div>

          <div className="hidden md:flex flex-grow items-center justify-center">
            <div className="flex items-center space-x-8">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-green-800 hover:text-white px-3 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex-shrink-0">
                <Link href="/" aria-label="Home">
                  <Image
                    src="/images/HeaderLogo.png"
                    alt="Header Logo"
                    width={70}
                    height={30}
                  />
                </Link>
              </div>
              {navItems.slice(2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-green-800 hover:text-white px-3 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button variant="primary">GET IN TOUCH</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-green-800 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-green-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="primary" className="w-1/2 mx-auto">
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
