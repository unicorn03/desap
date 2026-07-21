"use client";

import Image from "next/image";

const extraGallery = [
  { id: 1, src: "/backgrounddesa.webp" },
  { id: 2, src: "/backgrounddesa.webp" },
  { id: 3, src: "/backgrounddesa.webp" },
  { id: 4, src: "/backgrounddesa.webp" },
  { id: 5, src: "/backgrounddesa.webp" },
  { id: 6, src: "/backgrounddesa.webp" },
];

export default function GaleriGrid() {
  return (
    <section className="w-full py-6 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col gap-6">
      {/* Gambar Highlight Besar */}
      <div className="w-full h-[240px] sm:h-[420px] md:h-[550px] relative rounded-[28px] md:rounded-[35px] bg-[#3d4e2a] overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1">
        <Image
          src="/backgrounddesa.webp"
          alt="Galeri Highlight"
          fill
          className="object-cover"
        />
      </div>

      {/* Grid 6 Card Tambahan (2 Kolom di Mobile, 3 Kolom di Desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
        {extraGallery.map((item) => (
          <div
            key={item.id}
            className="w-full h-36 sm:h-48 md:h-72 relative rounded-2xl md:rounded-xl bg-[#3d4e2a] overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={item.src}
              alt={`Galeri ${item.id}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}