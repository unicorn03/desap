"use client";

import { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          hidden
          md:flex
          fixed
          top-8
          left-20
          right-20
          z-50
          h-20
          items-center
          justify-between
          rounded-full
          bg-gradient-to-r
          from-[#2E4A2B]
          via-[#4F6F3A]
          to-[#6E8F47]
          border
          border-white/20
          shadow-2xl
          px-6
          py-2.5
          text-white
          transition-transform
          duration-300
          ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-32"}
        `}
      >
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

        <ul className="flex items-center space-x-2">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

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
    </>
  );
}