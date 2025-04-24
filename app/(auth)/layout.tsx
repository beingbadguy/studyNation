import { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

// app/layout.js
export const metadata: Metadata = {
  title: "My LMS App",
  description: "A modern learning platform",
};

const geist = Geist_Mono({
  variable: "--font-geist-mono", // optional if you want to use as CSS var
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased min-h-screen`}>
        <main className="p-2 md:p-4">{children}</main>
      </body>
    </html>
  );
}
