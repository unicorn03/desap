"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, User, Clock, MapPin, Phone } from "lucide-react";
import { UMKMItem } from "./umkmData";

type UMKMModalProps = {
  item: UMKMItem | null;
  onClose: () => void;
};

export default function UMKMModal({ item, onClose }: UMKMModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (!item) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      {/* Backdrop click listener */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Tutup modal"
      />

      {/* Modal Container Card */}
      <div className="relative z-10 w-full max-w-lg md:max-w-4xl max-h-[85dvh] md:max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-800 transition-all duration-300">
        {/* Subtle Batik Background Layer with opacity-10 matching PelayananModal */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none z-0"
          style={{
            backgroundImage: "url('/backgrounddesa.webp')",
          }}
        />

        <div className="relative z-10">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 sm:top-2 sm:right-2 rounded-full bg-[#3F4E20]/10 p-2 text-[#3F4E20] hover:bg-[#3F4E20] hover:text-white transition-colors duration-200 focus:outline-none"
            aria-label="Tutup modal"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Modal Header Title */}
          <div className="text-center mb-6 sm:mb-8 pr-8 pl-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3F4E20] tracking-tight">
              {item.nama}
            </h2>
          </div>

          {/* Content Layout */}
          {/* Desktop: 2 Columns (Left: Images, Right: Information) */}
          {/* Mobile: 1 Column stacked (Top: Information, Bottom: Images) as in Mobile design */}
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Images Section */}
            <div className="w-full space-y-3 sm:space-y-4">
              {/* Main Image Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#3F4E20] shadow-inner">
                {item.gambarUtama ? (
                  <Image
                    src={item.gambarUtama}
                    alt={item.nama}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-white/30 font-medium text-sm">
                    Placeholder Foto Utama
                  </div>
                )}
              </div>

              {/* 3 Thumbnail Images Box */}
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((idx) => {
                  const thumbSrc = item.galeri?.[idx];
                  return (
                    <div
                      key={idx}
                      className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#3F4E20] shadow-sm"
                    >
                      {thumbSrc ? (
                        <Image
                          src={thumbSrc}
                          alt={`${item.nama} thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-white/20 text-xs">
                          Foto {idx + 1}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Details & Information Section */}
            <div className="w-full space-y-4 text-[#3F4E20]">
              {/* Kategori Produk */}
              <div>
                <h4 className="text-sm font-bold tracking-wide text-[#3F4E20]">
                  Kategori Produk
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-[#3F4E20]/80 mt-0.5">
                  {item.kategori}
                </p>
              </div>

              {/* Pemilik */}
              {item.pemilik && (
                <div>
                  <h4 className="text-sm font-bold tracking-wide text-[#3F4E20]">
                    Pemilik
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5 text-xs sm:text-sm font-medium text-[#3F4E20]/90">
                    <User className="h-4 w-4 shrink-0 text-[#3F4E20]" />
                    <span>{item.pemilik}</span>
                  </div>
                </div>
              )}

              {/* Deskripsi Produk */}
              <div>
                <h4 className="text-sm font-bold tracking-wide text-[#3F4E20]">
                  Deskripsi Produk
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#3F4E20]/90 mt-1">
                  {item.deskripsi}
                </p>
              </div>

              {/* Jam Operasional */}
              {item.jamOperasional && (
                <div>
                  <h4 className="text-sm font-bold tracking-wide text-[#3F4E20]">
                    Jam Operasional
                  </h4>
                  <div className="flex items-start gap-2 mt-1 text-xs sm:text-sm text-[#3F4E20]/90">
                    <Clock className="h-4 w-4 shrink-0 mt-0.5 text-[#3F4E20]" />
                    <span>{item.jamOperasional}</span>
                  </div>
                </div>
              )}

              {/* Lokasi */}
              {item.lokasi && (
                <div>
                  <h4 className="text-sm font-bold tracking-wide text-[#3F4E20]">
                    Lokasi
                  </h4>
                  <div className="flex items-start gap-2 mt-1 text-xs sm:text-sm text-[#3F4E20]/90">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[#3F4E20]" />
                    <span>{item.lokasi}</span>
                  </div>
                </div>
              )}

              {/* Narahubung */}
              {item.narahubung && (
                <div>
                  <h4 className="text-sm font-bold tracking-wide text-[#3F4E20]">
                    Narahubung
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm text-[#3F4E20]/90">
                    <Phone className="h-4 w-4 shrink-0 text-[#3F4E20]" />
                    <a
                      href={`https://wa.me/${item.narahubung.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-medium"
                    >
                      {item.narahubung}
                    </a>
                  </div>
                </div>
              )}

              {/* Media Sosial */}
              {item.mediaSosial && (
                <div>
                  <h4 className="text-sm font-bold tracking-wide text-[#3F4E20]">
                    Media Sosial
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm text-[#3F4E20]/90">
                    <svg
                      className="h-4 w-4 shrink-0 text-[#3F4E20]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <span className="font-medium">{item.mediaSosial}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
