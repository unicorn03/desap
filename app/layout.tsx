import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Desa Plumbangan",
};

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
