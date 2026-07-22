"use client";

import Image from "next/image";

interface HeroGaleriProps {
  bannerImage?: string;
}

export default function HeroGaleri({ bannerImage = "/images/galeri/IMG_6563.webp" }: HeroGaleriProps) {
  return (
    <section className="relative w-full pt-20 md:pt-36 pb-8 overflow-hidden">
      <div className="w-full flex flex-row items-center justify-between min-h-[220px] sm:min-h-[300px] md:min-h-[480px]">
        
        {/* Text Left */}
        <div className="w-1/2 px-4 sm:px-8 md:px-16 flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#3a5323] leading-tight drop-shadow-sm">
            <span>Galeri</span>
            <br />
            <span className="text-xl sm:text-2xl md:text-5xl">Desa Plumbangan</span>
          </h1>
        </div>

        {/* Capsule Banner Right */}
        <div className="w-[48%] h-[200px] sm:h-[280px] md:h-[480px] relative rounded-l-full bg-[#3d4e2a] overflow-hidden shadow-lg border-l-2 md:border-l-4 border-y border-white/20 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2">
          {bannerImage && (
            <Image
              src={bannerImage}
              alt="Banner Utama Galeri"
              fill
              className="object-cover rounded-l-full opacity-90"
              priority
            />
          )}
        </div>

      </div>
    </section>
  );
}