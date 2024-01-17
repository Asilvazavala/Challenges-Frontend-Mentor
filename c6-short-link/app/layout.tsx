import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "../fonts";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import { LinksProvider } from "@/context/LinksContext";

export const metadata: Metadata = {
  title: "Shorter URL | Antonio Silva",
  description: "Made with Next.js, TypeScript & TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} overflow-x-hidden flex flex-col justify-center 
      items-center w-full`}
      >
        <LinksProvider>
          <Navbar />
          {children}
          <Footer />
        </LinksProvider>
      </body>
    </html>
  );
}
