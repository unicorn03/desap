"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const kontakItems = [
  { icon: FaInstagram, label: "Lorem ipsum dolor" },
  { icon: FaFacebook, label: "Lorem ipsum dolor" },
  { icon: Mail, label: "Lorem ipsum dolor" },
  { icon: Phone, label: "Lorem ipsum dolor" },
];

const navigasiLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "UMKM", href: "/umkm" },
  { label: "Galeri", href: "/galeri" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-visible bg-gradient-to-b from-[#7C9A5C] to-[#3B4A20] pt-16 text-white">
      {/* Logo Desa Floating di Atas Center */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          src="/logo-plumbangan.png"
          alt="Logo Desa Plumbangan"
          width={140}
          height={140}
          className="h-auto w-[110px] md:w-[130px] drop-shadow-md"
          priority
        />
      </div>

      {/* ==================== 1. LAYOUT MOBILE (< 768px) ==================== */}
      <div className="md:hidden mx-auto px-6 pt-6 pb-10">
        {/* Alamat Desa (Center di Bawah Logo) */}
        <div className="text-center mb-8">
          <p className="mx-auto max-w-md text-xs font-semibold leading-relaxed text-white/95">
            Jalan Raya Plumbangan, Dusun Plumbangan, Desa Plumbangan,
            Kecamatan Doko, Kabupaten Blitar, Jawa Timur, Kode Pos 66186.
          </p>
        </div>

        {/* 2 Kolom Mobile: Diberi max-width & mx-auto agar ditarik ke tengah */}
        <div className="grid grid-cols-[1fr_1.3fr] gap-4 max-w-[340px] mx-auto pl-3">
          {/* Navigasi */}
          <nav>
            <h3 className="mb-3 text-base font-bold">Navigasi</h3>
            <ul className="space-y-1.5 text-xs text-white/90 font-medium">
              {navigasiLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak Pelayanan */}
          <div>
            <h3 className="mb-3 text-base font-bold">Kontak Pelayanan</h3>
            <ul className="space-y-2 text-xs text-white/90 font-medium">
              {kontakItems.map(({ icon: Icon, label }, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Icon size={16} className="shrink-0" />
                  <span className="truncate">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ==================== 2. LAYOUT DESKTOP (>= 768px) ==================== */}
      <div className="hidden md:grid mx-auto max-w-6xl grid-cols-3 gap-8 px-12 pt-8 pb-12 items-start">
        {/* Kolom Kiri: Navigasi */}
        <nav className="justify-self-center">
          <h3 className="mb-3 text-lg font-bold">Navigasi</h3>
          <ul className="space-y-2 text-sm text-white/90 font-medium">
            {navigasiLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kolom Tengah: Title & Alamat */}
        <div className="text-center">
          <h2 className="text-xl font-bold">
            Website Resmi
            <br />
            Desa Plumbangan
          </h2>
          <p className="mx-auto mt-3 max-w-[280px] text-xs leading-relaxed text-white/80 font-medium">
            Jalan Raya Plumbangan, Dusun Plumbangan, Desa Plumbangan,
            Kecamatan Doko, Kabupaten Blitar, Jawa Timur, Kode Pos 66186.
          </p>
        </div>

        {/* Kolom Kanan: Kontak Pelayanan */}
        <div className="justify-self-center">
          <h3 className="mb-3 text-lg font-bold">Kontak Pelayanan</h3>
          <ul className="space-y-2 text-sm text-white/90 font-medium">
            {kontakItems.map(({ icon: Icon, label }, index) => (
              <li key={index} className="flex items-center gap-2">
                <Icon size={16} className="shrink-0" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ==================== 3. BOTTOM BAR CREDIT ==================== */}
      <div className="w-full bg-white py-3 text-center px-4">
        <p className="text-xs sm:text-sm font-bold text-[#3B4A20]">
          Dibuat oleh MMD FILKOM 2026 Kelompok 56
        </p>
      </div>
    </footer>
  );
}