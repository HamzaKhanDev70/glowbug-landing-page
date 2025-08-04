'use client'
import { Inter } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import "../styles/globals.css";
import Footer from "@/components/sections/Footer";
import 'react-phone-input-2/lib/style.css';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from "react";
import RightSidebar from './../components/sections/Right-SideBar';
const inter = Inter({ subsets: ["latin"], weight: ["400", "800"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Give the page some time to render
      setTimeout(() => {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [pathname]);
  return (
    <html lang="en" className={` bg-dark-900 text-white`}>
      <body className="bg-black">
        <Navbar />
        <RightSidebar/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}