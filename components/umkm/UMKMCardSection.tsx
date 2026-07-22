"use client";

import Image from "next/image";
import { UMKMItem } from "./umkmData";

type UMKMCardSectionProps = {
  item: UMKMItem;
  index: number;
  onSelect: (item: UMKMItem) => void;
};

export default function UMKMCardSection({
  item,
  index,
  onSelect,
}: UMKMCardSectionProps) {
  // Odd sections (0, 2, 4...) have dark green background
  // Even sections (1, 3, 5...) have pure batik /backgrounddesa.webp background
  const isDark = index % 2 === 0;

  return (
    <div
      className={`relative w-full py-12 sm:py-16 transition-colors duration-300 bg-cover bg-center bg-no-repeat ${
        isDark ? "bg-[#3F4E20] text-white" : "bg-white text-[#3F4E20]"
      }`}
      style={{
        backgroundImage: !isDark ? "url('/backgrounddesa.webp')" : undefined,
      }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div
          className={`flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
            !isDark ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Text Content Column */}
          <div
            className={`space-y-4 sm:space-y-6 ${
              !isDark ? "lg:col-start-2" : ""
            }`}
          >
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight">
              {item.nama}
            </h3>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? "text-white/90" : "text-[#3F4E20]/90 font-medium"
              }`}
            >
              {item.deskripsi}
            </p>

            {/* Ringkasan Kontak / Medsos di Card
            {(item.lokasi || item.narahubung || item.instagram || item.shopee || item.tokopedia || item.tiktok || item.facebook) && (
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                {item.lokasi && item.linkGmaps && item.linkGmaps.trim() !== "" && (
                  <a
                    href={item.linkGmaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 font-semibold underline underline-offset-2 ${
                      isDark ? "text-emerald-300 hover:text-white" : "text-[#3F4E20] hover:text-emerald-800"
                    }`}
                  >
                    📍 Pinpoint Maps
                  </a>
                )}
              </div>
            )} */}

            <div className="pt-2">
              <button
                onClick={() => onSelect(item)}
                className={`inline-block rounded-xl px-6 py-3 text-sm sm:text-base font-bold shadow-md transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 ${
                  isDark
                    ? "bg-white text-[#3F4E20] hover:bg-slate-100 focus:ring-white/50"
                    : "bg-[#3F4E20] text-white hover:bg-[#2E3B18] focus:ring-[#3F4E20]/50"
                }`}
              >
                Lihat Selengkapnya
              </button>
            </div>
          </div>

          {/* Staggered Placeholder / Image Cards Column */}
          <div
            className={`w-full ${
              !isDark ? "lg:col-start-1" : ""
            }`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none flex flex-col gap-4 sm:gap-6">
              {/* Top Staggered Card */}
              <div
                className={`relative aspect-[16/9] w-[85%] rounded-2xl overflow-hidden shadow-lg border ${
                  isDark
                    ? "bg-white border-slate-200 ml-auto"
                    : "bg-[#3F4E20] border-[#3F4E20]/20 mr-auto"
                }`}
              >
                {item.gambarUtama ? (
                  <Image
                    src={item.gambarUtama}
                    alt={item.nama}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className={`flex h-full w-full items-center justify-center font-semibold text-xs sm:text-sm ${
                      isDark ? "text-[#3F4E20]/40" : "text-white/30"
                    }`}
                  >
                    Placeholder Foto UMKM
                  </div>
                )}
              </div>

              {/* Bottom Staggered Card */}
              <div
                className={`relative aspect-[16/9] w-[85%] rounded-2xl overflow-hidden shadow-lg border ${
                  isDark
                    ? "bg-white border-slate-200 mr-auto -mt-6 sm:-mt-8"
                    : "bg-[#3F4E20] border-[#3F4E20]/20 ml-auto -mt-6 sm:-mt-8"
                }`}
              >
                {item.galeri?.[0] ? (
                  <Image
                    src={item.galeri[0]}
                    alt={`${item.nama} foto 2`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className={`flex h-full w-full items-center justify-center font-semibold text-xs sm:text-sm ${
                      isDark ? "text-[#3F4E20]/40" : "text-white/30"
                    }`}
                  >
                    Placeholder Foto Produk
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
