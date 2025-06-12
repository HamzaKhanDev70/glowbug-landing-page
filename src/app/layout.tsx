import { Inter } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-dark-900 text-white`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}