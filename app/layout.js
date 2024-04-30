import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OMILIA VISUALS",
  description: "Photography and Videography Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#373633]`}>{children}</body>
    </html>
  );
}
