import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import AboutSection from "@/app/Beranda/AboutSection";
import VideoProfilSection from "./Beranda/VideoProfilSection";
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
<<<<<<< HEAD
    <html lang="id">
      <body>{children}</body>
=======
    <html lang="en">
      <body className={outfit.className}>
        <Navbar/>
        {children}
        <AboutSection/>
        <VideoProfilSection/>
        <Footer/>
      </body>
>>>>>>> 6ce8e947c1ee73ca15a7e2ca5e52b9cd52d21df3
    </html>
  );
}
