"use client";

import Image from "next/image";

const kegiatanList = [
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, varius nibh.",
    image: "/images/galeri/Methik Pagak 2.JPG",
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, varius nibh.",
    image: "/images/galeri/baritan suro.jpeg",
  },
  {
    id: 3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, varius nibh.",
    image: "/images/galeri/Piodalan Hindu 2.JPG",
  },
  {
    id: 4,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, varius nibh.",
    image: "/images/galeri/Gondang Pagak 2.JPG",
  },
  {
    id: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, varius nibh.",
    image: "/images/galeri/Punden Mbah Galiyem Sumberkodok 1.JPG",
  },
  {
    id: 6,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, varius nibh.",
    image: "/images/galeri/IMG_3713.JPG",
  },
];

export default function KegiatanDesa() {
  return (
    <section className="w-full py-8 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-[#3a5323] mb-8 text-center">
        Kegiatan Desa
      </h2>

      {/* Grid: 2 Kolom di Mobile, 3 Kolom di Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {kegiatanList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-[#3d4e2a] rounded-2xl md:rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2"
          >
            {/* Header Gambar Card */}
            <div className="relative w-full h-28 sm:h-36 md:h-44 bg-[#8fb3de]">
              <Image
                src={item.image}
                alt="Foto Kegiatan"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Body Deskripsi Card */}
            <div className="p-2 sm:p-4 text-white text-[9px] sm:text-xs leading-tight sm:leading-relaxed text-center flex-1 flex items-center justify-center">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}