export type UMKMItem = {
  id: string;
  nama: string;
  kategori: string;
  pemilik?: string;
  deskripsi: string;
  jamOperasional?: string;
  lokasi?: string;
  narahubung?: string;
  mediaSosial?: string;
  gambarUtama?: string;
  galeri?: string[];
};

export const DATA_UMKM: UMKMItem[] = [
  {
    id: "umkm-1",
    nama: "UMKM 1",
    kategori: "Makanan",
    pemilik: "Ibu A",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, varius nibh. Phasellus quis sodales sem. Ut convallis, lorem ut tincidunt sodales, eros leo sodales ex, nec accumsan nisl turpis sed sem. Vivamus sit amet tellus tincidunt, elementum elit non, porta magna. Curabitur vel leo id massa dictum efficitur. Mauris elementum, ante interdum varius interdum, sem odio volutpat magna, vel iaculis erat urna sit amet turpis.",
    jamOperasional: "Senin - Sabtu. Pukul 08.00 - 16.00 WIB",
    lokasi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    narahubung: "081234567890",
    mediaSosial: "@instagram123",
  },
  {
    id: "umkm-2",
    nama: "UMKM 2",
    kategori: "Kerajinan",
    pemilik: "Bapak B",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, varius nibh. Phasellus quis sodales sem. Ut convallis, lorem ut tincidunt sodales, eros leo sodales ex, nec accumsan nisl turpis sed sem. Vivamus sit amet tellus tincidunt, elementum elit non, porta magna. Curabitur vel leo id massa dictum efficitur. Mauris elementum, ante interdum varius interdum, sem odio volutpat magna, vel iaculis erat urna sit amet turpis.",
    jamOperasional: "Senin - Minggu. Pukul 09.00 - 17.00 WIB",
    lokasi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    narahubung: "085712345678",
    mediaSosial: "@umkm2_plumbangan",
  },
  {
    id: "umkm-3",
    nama: "UMKM 3",
    kategori: "Olahan Pertanian",
    pemilik: "Ibu C",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, varius nibh. Phasellus quis sodales sem. Ut convallis, lorem ut tincidunt sodales, eros leo sodales ex, nec accumsan nisl turpis sed sem. Vivamus sit amet tellus tincidunt, elementum elit non, porta magna. Curabitur vel leo id massa dictum efficitur. Mauris elementum, ante interdum varius interdum, sem odio volutpat magna, vel iaculis erat urna sit amet turpis.",
    jamOperasional: "Setiap Hari. Pukul 07.00 - 15.00 WIB",
    lokasi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    narahubung: "081398765432",
    mediaSosial: "@umkm3_official",
  },
];
