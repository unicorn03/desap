import DataKependudukanSection from "@/components/tentang/DataKependudukanSection";
import MisiDesaSection from "@/components/tentang/MisiDesaSection";
import StrukturDesaSection from "@/components/tentang/StrukturDesaSection";
import TentangDesaSection from "@/components/tentang/TentangDesaSection";
import VisiDesaSection from "@/components/tentang/VisiDesaSection";
import Image from "next/image";

export default function Tentang() {
  return (
  <main>
    <TentangDesaSection/>
    <VisiDesaSection/>
    <MisiDesaSection/>
    <DataKependudukanSection
      icon={
        <Image
          src="/penduduk.webp"
          alt="Ikon jumlah penduduk"
          width={100}
          height={100}
        />
      }
      jumlahPenduduk="2.300"
      dusunList={["4 Dusun", "4 Sekolah", "1 Candi"]}
    />
    <StrukturDesaSection/>
  </main>
  );
}