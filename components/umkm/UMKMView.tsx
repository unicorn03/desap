import CardUMKM from "./CardUMKM";

const dummyUMKM = [
  {
    id: 1,
    nama: "Kerajinan Bambu Plumbangan",
    kategori: "Kerajinan",
    deskripsi: "Produk kerajinan tangan berbahan dasar bambu lokal berkualitas tinggi, mencakup anyaman, perabotan, dan hiasan rumah.",
    kontak: "0812-3456-7890",
  },
  {
    id: 2,
    nama: "Kripik Tempe Khas Desa",
    kategori: "Kuliner",
    deskripsi: "Kripik tempe renyah dengan resep tradisional dan rempah pilihan asli Desa Plumbangan.",
    kontak: "0857-9988-7766",
  },
  {
    id: 3,
    nama: "Kopi Olahan Lokal",
    kategori: "Minuman",
    deskripsi: "Kopi petik merah hasil perkebunan warga dengan cita rasa khas dan aroma yang melegenda.",
    kontak: "0821-1122-3344",
  },
];

export default function UMKMView() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-36 pb-16 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#3F4E20] sm:text-5xl">
            UMKM Desa Plumbangan
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Mendukung potensi dan kreativitas ekonomi lokal warga Desa Plumbangan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dummyUMKM.map((item) => (
            <CardUMKM key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
