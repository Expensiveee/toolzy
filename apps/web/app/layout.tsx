import Navbar from "@web/components/navigation/Navbar";
import "../styles/global.css";

export const metadata = {
  title: "Toolzy",
  description: "Free Online Tools for Developers, Designers and Entrepreneurs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark-600 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
