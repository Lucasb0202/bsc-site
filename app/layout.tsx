import type { Metadata } from "next";
import { Monomaniac_One } from "@next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navigation/navbar";
import { Bebas_Neue } from '@next/font/google'
import Footer from "@/components/footer";

const font = Bebas_Neue({
  weight: '400', 
  subsets: ['latin'], 
});

export const metadata: Metadata = {
  title: "BSC",
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
        <Footer />
      </body>
    </html>
  );
}
