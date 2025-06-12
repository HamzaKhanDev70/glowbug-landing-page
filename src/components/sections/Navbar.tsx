import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

const navItems = [
  { name: "HOW IT WORKS", href: "#how-it-works" },
  { name: "SERVICES", href: "#services" },
  { name: "WHO IT'S FOR", href: "#who-its-for" },
  { name: "ABOUT US", href: "#about-us" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-800">
      <div className="w-20xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="ml-60 flex items-center justify-between h-16">
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-16">
              {navItems.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <Link
                    href={item.href}
                    className="text-green-800 hover:text-white px-13 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>

                  {index === 1 && (
                    <Image
                      src="/images/HeaderLogo.png"
                      alt="Header Logo"
                      width={70}
                      height={30}
                      className="mx-10 mt-6"
                    />
                  )}
                </div>
              ))}
              <Button variant="primary" className="ml-4">
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
