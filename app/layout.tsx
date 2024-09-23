import type { Metadata } from "next";
import { Monomaniac_One } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navigation/navbar";

const font = Monomaniac_One({
  weight: '400', 
  subsets: ['latin'], 
});

export const metadata: Metadata = {
  title: "BSC",
  description: "BSC Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark ${font.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
