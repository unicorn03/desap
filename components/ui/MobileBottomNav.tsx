"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, FileText, Store, Image as ImageIcon } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "/", icon: Home },
  { label: "Tentang", href: "/tentang", icon: Info },
  { label: "Layanan", href: "/pelayanan", icon: FileText },
  { label: "UMKM", href: "/umkm", icon: Store },
  { label: "Galeri", href: "/galeri", icon: ImageIcon },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 px-2 py-1.5 backdrop-blur-md md:hidden shadow-lg">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "text-[#3F4E20] font-bold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <div
                className={`p-1 rounded-lg ${
                  isActive ? "bg-[#3F4E20]/10" : ""
                }`}
              >
                <Icon size={20} className="stroke-[2]" />
              </div>
              <span className="text-[11px] mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
