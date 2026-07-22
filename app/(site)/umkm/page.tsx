import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import UMKMView from "@/components/umkm/UMKMView";
import { UMKMItem } from "@/components/umkm/umkmData";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function UMKMPage() {
  let umkmList: UMKMItem[] = [];

  try {
    const rawUmkm = await reader.collections.umkm.all();
    umkmList = rawUmkm.map((entry) => {
      const item = entry.entry;
      const galeri: string[] = [];
      if (item.foto_galeri_1) galeri.push(item.foto_galeri_1);
      if (item.foto_galeri_2) galeri.push(item.foto_galeri_2);
      if (item.foto_galeri_3) galeri.push(item.foto_galeri_3);

      return {
        id: entry.slug,
        nama: item.nama,
        pemilik: item.pemilik || undefined,
        kategori: item.kategori || "UMKM",
        deskripsi: item.deskripsi,
        jamOperasional: item.jam_operasional || undefined,
        lokasi: item.lokasi || undefined,
        linkGmaps: item.link_gmaps || undefined,
        narahubung: item.kontak_wa || undefined,
        mediaSosial: undefined,
        facebook: item.link_facebook || undefined,
        tiktok: item.link_tiktok || undefined,
        instagram: item.link_instagram || undefined,
        shopee: item.link_shopee || undefined,
        tokopedia: item.link_tokopedia || undefined,
        gambarUtama: item.foto_utama || undefined,
        galeri: galeri.length > 0 ? galeri : undefined,
      };
    });
  } catch {
    // If error reading Keystatic collection, fallback to default static DATA_UMKM
    umkmList = [];
  }

  return <UMKMView umkmList={umkmList} />;
}
