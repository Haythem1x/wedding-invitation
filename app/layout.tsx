import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Music from "../components/Music";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "دعوة زفاف",
  description: "دعوة زفاف رقمية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className + " bg-[#f7f3ee] text-gray-800"}>
        <Music />
        {children}
      </body>
    </html>
  );
}
