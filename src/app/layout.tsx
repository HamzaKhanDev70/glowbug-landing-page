import { Inter } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import "../styles/globals.css";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["400", "800"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} bg-dark-900 text-white`}>
      <body className="bg-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}