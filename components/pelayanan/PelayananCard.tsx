"use client";

import { useState } from "react";
import Image from "next/image";
import { PelayananItem } from "./pelayananData";
import { FileText } from "lucide-react";

type PelayananCardProps = {
  item: PelayananItem;
  onOpenModal: (item: PelayananItem) => void;
};

export default function PelayananCard({
  item,
  onOpenModal,
}: PelayananCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl md:rounded-3xl bg-[#CADBB7] p-2.5 md:p-3.5 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/40 hover:-translate-y-1">
      {/* Top Image Preview Box */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center p-2">
        {!imageError ? (
          <Image
            src={item.imagePath}
            alt={item.judulCard}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
            quality={90}
            className="object-contain p-2 md:p-3 transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          /* Placeholder visual if custom image asset is not uploaded yet */
          <div className="flex flex-col items-center justify-center text-[#3F4E20]/60 p-4 text-center">
            <FileText className="h-10 w-10 md:h-12 md:w-12 mb-2 stroke-[1.5]" />
            <span className="text-[11px] md:text-xs font-semibold text-slate-500">
              Dokumen Resmi
            </span>
          </div>
        )}
      </div>

      {/* Bottom Content Card */}
      <div className="mt-2.5 flex flex-1 flex-col items-center justify-between rounded-xl md:rounded-2xl bg-[#3F4E20] p-4 text-center text-white shadow-md">
        <h3 className="text-xs md:text-sm font-bold leading-snug line-clamp-3 min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center">
          {item.judulCard}
        </h3>

        <button
          onClick={() => onOpenModal(item)}
          className="mt-3 inline-flex items-center justify-center rounded-lg bg-white px-4 py-1.5 text-[11px] md:text-xs font-bold text-[#3F4E20] shadow-sm transition hover:bg-slate-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/80"
        >
          Lihat Selengkapnya
        </button>
      </div>
    </div>
  );
}
