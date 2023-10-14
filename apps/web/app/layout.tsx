import Navbar from "@web/components/navigation/Navbar";
import Footer from "@web/components/navigation/Footer";
import { Inter } from "next/font/google";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Toolzy | Free Online Tools for Developers, Designers and Entrepreneurs.",
  description:
    "We are a community of developers, designers, and product managers who are passionate about building products that people love.",
  themeColor: "#ff2148",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-dark-600 overflow-x-hidden text-white ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
