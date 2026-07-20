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
    <footer className="relative overflow-visible bg-gradient-to-b from-[#7C9A5C] to-[#3B4A20] pb-10 pt-20 text-white">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2/3">
        <Image
          src="/logo-desa.png"
          alt="Logo Desa Plumbangan"
          width={150}
          height={150}
          className="h-auto w-[110px] sm:w-[140px]"
        />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-3 sm:px-12">
        <nav>
          <h3 className="mb-3 font-bold">Navigasi</h3>
          <ul className="space-y-2 text-sm text-white/90">
            {navigasiLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-center">
          <h2 className="text-lg font-bold sm:text-xl">
            Website Resmi
            <br />
            Desa Plumbangan
          </h2>
          <p className="mx-auto mt-3 max-w-[240px] text-xs leading-relaxed text-white/80">
            Jalan Raya Plumbangan, Dusun Plumbangan, Desa Plumbangan,
            Kecamatan Doko, Kabupaten Blitar, Jawa Timur, Kode Pos 66186.
          </p>
        </div>

        <div className="ml-40">
          <h3 className="mb-3 font-bold">Kontak Pelayanan</h3>
          <ul className="space-y-2 text-sm text-white/90">
            {kontakItems.map(({ icon: Icon, label }, index) => (
              <li key={index} className="flex items-center gap-2">
                <Icon size={16} className="shrink-0" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
