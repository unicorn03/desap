"use client";

import { useState } from "react";
import Image from "next/image";
import { Smartphone } from "lucide-react";

export default function ESiapBanner() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="mx-auto max-w-6xl mt-16 rounded-3xl bg-[#CADBB7] p-6 sm:p-10 md:p-12 shadow-xl border border-white/60">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Side Image / Graphic Box */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl bg-white p-3 shadow-lg border border-white">
            {!imageError ? (
              <Image
                src="/esiap.webp"
                alt="Aplikasi E-Siap Kabupaten Blitar"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                quality={90}
                className="object-contain p-2"
                onError={() => setImageError(true)}
              />
            ) : (
              /* High quality graphic placeholder when image asset is added by user later */
              <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#FCE7F3] via-white to-[#FBCFE8] p-6 text-center shadow-inner">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EC4899] text-white shadow-md mb-3">
                  <Smartphone size={32} />
                </div>
                <h4 className="font-black text-[#831843] text-lg">
                  e-Siap Online
                </h4>
                <p className="text-xs text-[#9D174D] mt-1 font-medium">
                  Kabupaten Blitar
                </p>
                <div className="mt-3 rounded-full bg-[#EC4899] text-white text-[10px] px-3 py-1 font-bold">
                  Google Play & Web
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side Info & Action */}
        <div className="md:col-span-7 flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#3F4E20] leading-tight">
            Aplikasi E-Siap
            <br className="hidden md:inline" /> Kabupaten Blitar
          </h2>

          <p className="mt-4 text-xs md:text-sm text-[#3F4E20]/90 leading-relaxed max-w-xl font-medium">
            Aplikasi E-SIAP (Elektronik Sistem Aplikasi Pendaftaran Online)
            adalah layanan berbasis online dari Pemerintah Kabupaten Blitar.
            Sistem ini dibuat khusus untuk mempermudah masyarakat mengurus
            Administrasi Kependudukan (Adminduk) dari rumah tanpa harus datang dan
            mengantre di kantor Dispendukcapil.
          </p>

          <a
            href="https://siak.blitarkab.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#3F4E20] px-6 py-3 text-xs md:text-sm font-bold text-white shadow-lg transition duration-200 hover:bg-[#2E3B18] hover:shadow-xl active:scale-95"
          >
            https://siak.blitarkab.go.id/
          </a>
        </div>
      </div>
    </div>
  );
}
