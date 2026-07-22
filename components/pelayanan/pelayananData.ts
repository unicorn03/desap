export type PelayananItem = {
  id: string;
  judulCard: string;
  judulModal: string;
  imagePath: string;
  dokumen?: string[];
  fotocopy?: string[];
  fotoUkuran?: string[];
  detailTambahan?: string[];
  lainnya?: string[];
};

export const DATA_PELAYANAN: PelayananItem[] = [
  {
    id: "ektp",
    judulCard: "Persyaratan Tentang Kartu Tanda Penduduk (eKTP)",
    judulModal: "Detail Persyaratan eKTP",
    imagePath: "/images/pelayanan/ektp.png",
    dokumen: ["Pengantar RT"],
    fotocopy: ["Kartu Keluarga"],
    fotoUkuran: ["Pas Foto 3 × 4 = 2 lembar"],
    lainnya: ["Map kertas", "Nomor HP"],
  },
  {
    id: "skck",
    judulCard: "Persyaratan Pembuatan Surat Keterangan Catatan Kepolisian (SKCK)",
    judulModal: "Detail Persyaratan SKCK",
    imagePath: "/images/pelayanan/skck.png",
    dokumen: ["Pengantar RT"],
    fotocopy: ["Kartu Keluarga", "KTP", "Akta Kelahiran", "BPJS"],
    fotoUkuran: ["3 × 4 = 2 lembar", "4 × 6 = 4 lembar"],
    lainnya: ["Map kertas", "Nomor HP"],
  },
  {
    id: "usaha_kredit",
    judulCard: "Persyaratan Pembuatan Surat Keterangan Usaha/Kredit",
    judulModal: "Detail Persyaratan Surat Keterangan Usaha/Kredit",
    imagePath: "/images/pelayanan/usaha_kredit.png",
    dokumen: ["Pengantar RT"],
    fotocopy: ["Kartu Keluarga", "KTP"],
    detailTambahan: ["Jenis usaha", "Kredit di bank"],
    lainnya: ["Map kertas", "Nomor HP"],
  },
  {
    id: "kehilangan",
    judulCard: "Persyaratan Pembuatan Surat Keterangan Kehilangan",
    judulModal: "Detail Persyaratan Surat Keterangan Kehilangan",
    imagePath: "/images/pelayanan/kehilangan.png",
    dokumen: ["Pengantar RT"],
    fotocopy: ["Kartu Keluarga", "KTP"],
    detailTambahan: [
      "Data barang yg hilang (contoh: STNK, BPKB, buku tabungan dll)",
    ],
    lainnya: ["Map kertas", "Nomor HP"],
  },
  {
    id: "sktm",
    judulCard: "Persyaratan Pembuatan Surat Keterangan Tidak Mampu (SKTM)",
    judulModal: "Detail Persyaratan SKTM",
    imagePath: "/images/pelayanan/sktm.png",
    dokumen: ["Pengantar RT"],
    fotocopy: ["Kartu Keluarga", "KTP orang tua", "Data anak / Ijazah"],
    detailTambahan: [
      "Nama sekolah",
      "Kelas / Jurusan / Fakultas / Universitas",
    ],
    lainnya: ["Map kertas", "Nomor HP"],
  },
  {
    id: "kepergian",
    judulCard: "Persyaratan Pembuatan Surat Keterangan Kepergian",
    judulModal: "Detail Persyaratan Surat Keterangan Kepergian",
    imagePath: "/images/pelayanan/kepergian.png",
    dokumen: ["Pengantar RT"],
    fotocopy: ["Kartu Keluarga", "KTP Suami Istri"],
    detailTambahan: ["Tujuan surat"],
    lainnya: ["Map kertas", "Nomor HP"],
  },
  {
    id: "nikah",
    judulCard: "Persyaratan Pembuatan Surat Keterangan Nikah",
    judulModal: "Detail Persyaratan Surat Keterangan Nikah",
    imagePath: "/images/pelayanan/nikah.png",
    dokumen: ["Pengantar RT"],
    fotocopy: ["Kartu Keluarga", "KTP", "Akta Kelahiran", "Ijazah Sekolah"],
    fotoUkuran: [
      "2 × 3 = 4 lembar",
      "3 × 4 = 4 lembar",
      "4 × 6 = 4 lembar",
    ],
    detailTambahan: [
      "KK, KTP calon pasangan",
      "Akta Perceraian (Apabila status perkawinan Cerai Hidup)",
      "Akta Kematian (Apabila status perkawinan Cerai Mati)",
    ],
    lainnya: ["Map kertas", "Nomor HP"],
  },
];
