import Navbar from "@web/components/navigation/Navbar";
import { Inter } from "next/font/google";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Toolzy",
  description: "Free Online Tools for Developers, Designers and Entrepreneurs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-dark-600 overflow-x-hidden text-white ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
