"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "UMKM", href: "/umkm" },
  { label: "Pelayanan", href: "/pelayanan" },
  { label: "Galeri", href: "/galeri" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-4 right-4 md:left-[80px] md:right-[80px] flex justify-between items-center h-20 py-[10px] px-6 bg-[#3e4d2b] rounded-[40px] text-white z-[1000]">
      <div className="flex items-center gap-[10px]">
        <Image
          src="/logo-desa.png"
          alt="Logo Desa Plumbangan"
          width={40}
          height={40}
          className="rounded-full bg-white"
        />
        <span className="font-bold text-[14px] leading-[1.2]">
          Desa
          <br />
          Plumbangan
        </span>
      </div>

      <ul className="flex items-center gap-6 list-none m-0 p-0">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-white no-underline font-semibold text-[14px] px-4 py-2 rounded-full transition-all duration-200 ease-in-out hover:bg-white/15 ${
                  isActive ? "bg-white !text-[#3e4d2b]" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
