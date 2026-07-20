export default function PelayananView() {
  const layananList = [
    {
      judul: "Surat Keterangan Usaha (SKU)",
      deskripsi: "Pelayanan pembuatan surat keterangan usaha bagi warga desa yang memiliki UMKM.",
    },
    {
      judul: "Surat Pengantar KTP / KK",
      deskripsi: "Pengurusan surat pengantar untuk administrasi kependudukan.",
    },
    {
      judul: "Surat Keterangan Domisili",
      deskripsi: "Pelayanan penerbitan surat domisili tinggal atau usaha di wilayah Desa Plumbangan.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-36 pb-16 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#3F4E20] sm:text-5xl">
            Pelayanan Desa
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Layanan administrasi dan informasi masyarakat Desa Plumbangan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {layananList.map((item, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-6 shadow-md border border-slate-100">
              <h3 className="text-xl font-bold text-[#3F4E20]">{item.judul}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
