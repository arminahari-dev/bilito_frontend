import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/NavBar";
import Footer from "@/layouts/Footer";

const vazirmatn = Vazirmatn({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "بلیتو",
  description: "پلتفرم فروش بلیت آنلاین بلیط هواپیما",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} mx-4! xl:mx-[120px]!`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
