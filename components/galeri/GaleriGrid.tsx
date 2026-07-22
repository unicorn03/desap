"use client";

import { useState } from "react";
import Image from "next/image";

const extraGallery = [
  { id: 1, src: "/images/galeri/IMG_6544.webp" },
  { id: 2, src: "/images/galeri/IMG_6545.webp" },
  { id: 3, src: "/images/galeri/IMG_6555.webp" },
  { id: 4, src: "/images/galeri/IMG_6435.webp" },
  { id: 5, src: "/images/galeri/IMG_6563.webp" },
  { id: 6, src: "/images/galeri/IMG_6506.webp" },
];

export default function GaleriGrid() {
  const [highlightError, setHighlightError] = useState(false);

  return (
    <section className="w-full py-6 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col gap-6">
      {/* Gambar Highlight Besar */}
      <div className="w-full h-[240px] sm:h-[420px] md:h-[550px] relative rounded-[28px] md:rounded-[35px] bg-[#3d4e2a] overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1">
        {!highlightError ? (
          <Image
            src="/images/galeri/IMG_6534.webp"
            alt="Galeri Highlight"
            fill
            className="object-cover"
            onError={() => setHighlightError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white/40 font-semibold text-sm">
            Foto Galeri Plumbangan
          </div>
        )}
      </div>

      {/* Grid 6 Card Tambahan */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
        {extraGallery.map((item) => (
          <GaleriCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function GaleriCard({ item }: { item: (typeof extraGallery)[0] }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-full h-36 sm:h-48 md:h-72 relative rounded-2xl md:rounded-xl bg-[#3d4e2a] overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1">
      {!hasError ? (
        <Image
          src={item.src}
          alt={`Galeri ${item.id}`}
          fill
          className="object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-white/30 text-xs">
          Foto Galeri {item.id}
        </div>
      )}
    </div>
  );
}