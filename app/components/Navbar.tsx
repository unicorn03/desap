"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

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
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Image
          src="/logo-desa.png"
          alt="Logo Desa Plumbangan"
          width={40}
          height={40}
          className={styles.logo}
        />
        <span className={styles.brandText}>
          Desa
          <br />
          Plumbangan
        </span>
      </div>

      <ul className={styles.menu}>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.menuItem} ${
                  isActive ? styles.active : ""
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
