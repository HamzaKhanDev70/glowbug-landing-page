"use client";
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import Button from "../ui/Button";
import { useState } from "react";
import Experience from './Experience';

const navItems = [
  { name: "WHAT IS?", href:"/"  },
  { name: "WHERE IS?", href:"/#where-is"  },
  { name: "WHAT WE OFFER?", href: "/#what-we-offer" },
  { name: "HOW IT WORKS?", href: "/#how-it-works" },
  { name: "WHY US?", href: "/#services" },
  { name: "KNOW US", href: "/#know-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
const router = useRouter();

  const handleNavClick = (href: string) => {
    const isSamePage = pathname === '/' && href.startsWith('/#');

    if (isSamePage) {
      const id = href.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(href);
    }
  };
  return (

    <nav className="bg-[hsl(0,24%,7%)] py-6 sm:py-8">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 md:hidden mt-4">
            <Link href="/" aria-label="Home">
              <Image
                src="/images/HeaderLogo.png"
                alt="Header Logo"
                width={60}
                height={20}
              />
            </Link>
          </div>
          <div className="hidden md:flex w-full relative items-center justify-between py-3 px-6 lg:px-0 xl:px-6">
            {/* Left Button (invisible but takes space for balance) */}
            {/* <div className="invisible ">
              <Link href="/contact-us" aria-label="Contact Us">
                <Button
                  variant="primary"
                  className="text-[1rem] sm:body-normal"
                >
                  GET IN TOUCH
                </Button>
              </Link>
            </div> */}

            {/* Center Nav and Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center space-x-8 lg:space-x-20 ">
              {/* Left Links */}
            <div className="flex items-center space-x-8 lg:space-x-12">
          {navItems.slice(0, 3).map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`body-normal transition-colors whitespace-nowrap bg-transparent ${
                pathname === item.href ? 'text-[#FFE300] font-semibold' : 'text-white hover:text-[#FDE200]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

              {/* Logo */}
              <div className="flex-shrink-0 ">
                <Link  href="https://dspk-sandbox.airfi.io/" aria-label="Home" className="flex flex-col items-center">
                  <Image
                    src="/images/HeaderLogo.png"
                    alt="Header Logo"
                    width={60}
                    height={30}
                    className="object-contain"
                  />
                 <button
            
              className={`body-normal transition-colors whitespace-nowrap bg-transparent 
                text-white hover:text-[#FFE300]
              `}
            >
            Experience
            </button>
                </Link>

              </div>

              {/* Right Links */}
          <div className="flex items-center space-x-8 lg:space-x-12">
          {navItems.slice(3).map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`body-normal transition-colors whitespace-nowrap bg-transparent ${
                pathname === item.href ? 'text-[#FFE300] font-semibold' : 'text-white hover:text-[#FDE200]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
            </div>

            {/* Right Button (visible and aligned to right) */}
            {/* <div className="hidden md:block ml-4 ">
              <Link href="/contact-us" aria-label="Contact Us">
                <Button variant="primary" className="body-normal p-0 hover:text-[#FDE200]">
                 FIND US
                </Button>
              </Link>
            </div> */}
          </div>
          <div className="md:hidden flex items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="relative z-51 inline-flex items-center justify-center p-2 rounded-md text-green-800 hover:text-white focus:outline-none"
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
        <div
          className="md:hidden  bg-transparent backdrop-blur-md backdrop-saturate-150"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? "text-white font-semibold"
                    : "text-green-800 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* <div className="pt-4">
              <Link href="/contact-us" aria-label="Contact Us">
                <Button variant="primary" className="md:text-xs lg:text-sm ">
                 FIND US
                </Button>
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
}
