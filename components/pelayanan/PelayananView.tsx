"use client";

import { useState } from "react";
import { DATA_PELAYANAN, PelayananItem } from "./pelayananData";
import PelayananCard from "./PelayananCard";
import PelayananModal from "./PelayananModal";
import ESiapBanner from "./ESiapBanner";

export default function PelayananView() {
  const [selectedItem, setSelectedItem] = useState<PelayananItem | null>(null);

  return (
    <div className="w-full bg-[#F8F9FA]">
      {/* Hero Header Section with Dynamic Viewport Height */}
      <section
        className="flex min-h-[100dvh] flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 text-center text-white"
        style={{
          backgroundImage: "url('/backgrounddesa.webp')",
        }}
      >
        <h1 className="mb-4 bg-gradient-to-r from-[#2E4A2B] via-[#5A7A3D] to-[#A3C65D] bg-clip-text text-center text-5xl font-black leading-tight pb-2 text-transparent sm:text-6xl md:text-7xl">
          Pelayanan
          <br />
          Desa Plumbangan
        </h1>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#CADBB7]/30 pb-20 pt-12 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Subheading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#3F4E20] tracking-tight">
              Persyaratan Surat Menyurat
            </h2>
          </div>

          {/* 7 Cards Grid (2-columns on mobile, 3-columns on desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {DATA_PELAYANAN.map((item) => (
              <PelayananCard
                key={item.id}
                item={item}
                onOpenModal={(selected) => setSelectedItem(selected)}
              />
            ))}
          </div>

          {/* E-Siap Banner Section */}
          <ESiapBanner />
        </div>
      </section>

      {/* Modal Popup */}
      <PelayananModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
