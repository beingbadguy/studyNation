import { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { Geist_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

const geist = Geist_Mono({
  variable: "--font-geist-mono", // optional if you want to use as CSS var
  subsets: ["latin"],
});

export default function dashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased `}>
        <main>{children}</main>
      </body>
    </html>
  );
}
