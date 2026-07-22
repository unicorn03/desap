"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, User, Clock, MapPin, Phone, ExternalLink } from "lucide-react";
import { FaFacebook, FaTiktok, FaInstagram, FaWhatsapp, FaStore, FaBagShopping } from "react-icons/fa6";
import { SiShopee } from "react-icons/si";
import { UMKMItem, getWaUrl, getCleanSocialLabel } from "./umkmData";

function TokopediaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.78 7.51l-2.4-1.39-1.28-2.22A1.47 1.47 0 0014.83 3h-5.66a1.47 1.47 0 00-1.27.89L6.62 6.12 4.22 7.51a1.5 1.5 0 00-.72 1.28v8.42c0 .54.29 1.04.75 1.31l7 4.04c.46.27 1.04.27 1.5 0l7-4.04c.46-.27.75-.77.75-1.31V8.79c0-.54-.29-1.04-.72-1.28zM12 6.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 13.5l-5-2.89v-4.88c.8.49 1.83.77 2.92.77h4.16c1.09 0 2.12-.28 2.92-.77v4.88l-5 2.89z" />
    </svg>
  );
}

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

  const waUrl = getWaUrl(item.narahubung);
  const gmapsUrl = item.linkGmaps && item.linkGmaps.trim() !== "" ? item.linkGmaps : null;

  const activeSocials = [
    { key: "instagram", name: "Instagram", url: item.instagram, Icon: FaInstagram, bg: "bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-600 hover:text-white" },
    { key: "tiktok", name: "TikTok", url: item.tiktok, Icon: FaTiktok, bg: "bg-slate-100 text-slate-800 border-slate-300 hover:bg-black hover:text-white" },
    { key: "facebook", name: "Facebook", url: item.facebook, Icon: FaFacebook, bg: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-600 hover:text-white" },
    { key: "shopee", name: "Shopee", url: item.shopee, Icon: SiShopee, bg: "bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-500 hover:text-white" },
    { key: "tokopedia", name: "Tokopedia", url: item.tokopedia, Icon: TokopediaIcon, bg: "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-600 hover:text-white" },
  ].filter((s) => s.url && s.url.trim() !== "");

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
        {/* Subtle Batik Background Layer */}
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
                    Foto Utama UMKM
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
                    Alamat / Lokasi
                  </h4>
                  <div className="flex items-start gap-2 mt-1 text-xs sm:text-sm text-[#3F4E20]/90">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[#3F4E20]" />
                    {gmapsUrl ? (
                      <a
                        href={gmapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 font-semibold text-[#3F4E20] hover:underline"
                      >
                        <span>{item.lokasi}</span>
                        <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 shrink-0" />
                      </a>
                    ) : (
                      <span>{item.lokasi}</span>
                    )}
                  </div>
                </div>
              )}

              {/* Narahubung / WhatsApp */}
              {item.narahubung && (
                <div>
                  <h4 className="text-sm font-bold tracking-wide text-[#3F4E20]">
                    Narahubung (WhatsApp)
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm text-[#3F4E20]/90">
                    <FaWhatsapp className="h-4 w-4 shrink-0 text-emerald-600" />
                    {waUrl ? (
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                      >
                        <span>{item.narahubung}</span>
                        <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold text-emerald-800">
                          Chat WA
                        </span>
                      </a>
                    ) : (
                      <span>{item.narahubung}</span>
                    )}
                  </div>
                </div>
              )}

              {/* Media Sosial & Marketplace */}
              {(activeSocials.length > 0 || item.mediaSosial) && (
                <div>
                  <h4 className="text-sm font-bold tracking-wide text-[#3F4E20] mb-2">
                    Media Sosial & E-Commerce
                  </h4>

                  {/* List Ikon Medsos & Marketplace */}
                  {activeSocials.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {activeSocials.map(({ key, name, url, Icon, bg }) => {
                        const formattedUrl = url!.startsWith("http://") || url!.startsWith("https://") ? url! : `https://${url!}`;
                        const displayLabel = getCleanSocialLabel(url, name);

                        return (
                          <a
                            key={key}
                            href={formattedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold shadow-sm transition-all duration-200 ${bg}`}
                          >
                            <Icon className="h-3.5 w-3.5 shrink-0" />
                            <span>{displayLabel}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}

                  {/* Teks catatan medsos opsional */}
                  {item.mediaSosial && (
                    <p className="text-xs text-[#3F4E20]/80 font-medium italic mt-1">
                      {item.mediaSosial}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
