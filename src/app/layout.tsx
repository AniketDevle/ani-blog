import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anikets Blog",
  description: "Personal blog where I share thoughts, experiences, and insights about technology, life, and everything in between.",
  keywords: ["blog", "technology", "personal", "insights", "experiences"],
  authors: [{ name: "Aniket" }],
  openGraph: {
    title: "Anikets Blog",
    description: "Personal blog where I share thoughts, experiences, and insights about technology, life, and everything in between.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  );
}
