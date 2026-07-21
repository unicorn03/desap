"use client";

import Image from "next/image";

interface AsetDesaProps {
  imageSrc?: string;
}

export default function AsetDesa({ imageSrc = "/backgrounddesa.webp" }: AsetDesaProps) {
  return (
    <section className="w-full py-6 flex flex-col items-center px-4 sm:px-6">
      <h2 className="text-2xl md:text-4xl font-bold text-[#3a5323] mb-6 text-center drop-shadow-sm">
        Aset Desa
      </h2>

      <div className="w-full max-w-4xl flex flex-col gap-6">
        {/* Main Display Image */}
        <div className="w-full h-[260px] sm:h-[450px] md:h-[620px] relative rounded-[28px] md:rounded-[35px] bg-[#3d4e2a] overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2">
          <Image
            src={imageSrc}
            alt="Display Aset Desa Utama"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Secondary Display Image (Berdasarkan Gambar 1 Mobile) */}
        <div className="w-full h-[220px] sm:h-[350px] md:hidden relative rounded-[28px] bg-[#3d4e2a] overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1">
          <Image
            src={imageSrc}
            alt="Display Aset Desa Kedua"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}