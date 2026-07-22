import Image from "next/image";
import HeroGaleri from "@/components/galeri/HeroGaleri";
import AsetDesa from "@/components/galeri/AsetDesa";
import KegiatanDesa from "@/components/galeri/KegiatanDesa";
import GaleriGrid from "@/components/galeri/GaleriGrid";
// Panggil MobileBottomNav eksis milikmu (sesuaikan path foldernya, misal di @/components/ui/)
import MobileBottomNav from "@/components/ui/MobileBottomNav"; 

export default function GaleriPage() {
  return (
    <main className="relative min-h-dvh w-full bg-white overflow-x-hidden">
      {/* Pattern Background Desa */}
      <div className="fixed inset-0 pointer-events-none opacity-80 z-0">
        <Image
          src="/backgrounddesa.webp"
          alt="Background Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Layout Flow (pb-24 diberikan agar konten paling bawah tidak tertutup BottomNav) */}
      <div className="relative z-10 space-y-4 md:space-y-8 pb-24 md:pb-16">
        <HeroGaleri bannerImage="/images/galeri/drone.webp" />
        <AsetDesa />
        <KegiatanDesa />
        <GaleriGrid />
      </div>

      {/* Mobile Bottom Navigation milikmu */}
      <MobileBottomNav />
    </main>
  );
}