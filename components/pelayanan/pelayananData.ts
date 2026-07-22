export type PersyaratanKategori = {
  judul: string;
  deskripsi: string;
};

export type PelayananItem = {
  id: string;
  judulCard: string;
  judulModal: string;
  imagePath: string;
  kategoriPersyaratan?: PersyaratanKategori[];
  dokumen?: string[];
  fotocopy?: string[];
  fotoUkuran?: string[];
  detailTambahan?: string[];
  lainnya?: string[];
};

export const DATA_PELAYANAN: PelayananItem[] = [
  {
    id: "ektp",
    judulCard: "Persyaratan Kartu Tanda Penduduk (eKTP)",
    judulModal: "Persyaratan Pembuatan KTP",
    imagePath: "/ktp.webp",
    kategoriPersyaratan: [
      {
        judul: "KTP Pemula",
        deskripsi:
          "Sudah berusia 17 tahun, membawa fotokopi KK sebanyak 2 lembar, ambil formulir pendaftaran di desa, perekaman di kantor kecamatan.",
      },
      {
        judul: "KTP Hilang",
        deskripsi:
          "Membawa Surat Kehilangan dari kantor kepolisian terdekat dan fotokopi KK.",
      },
      {
        judul: "KTP Rusak",
        deskripsi:
          "Membawa fisik KTP lama yang rusak (jika masih ada) dan fotokopi KK.",
      },
      {
        judul: "Perubahan Data (misalnya ganti alamat atau status)",
        deskripsi:
          "Membawa KTP lama, fotokopi KK, dan bukti pendukung perubahan data (seperti Buku Nikah atau Surat Keterangan Pindah).",
      },
    ],
  },
  {
    id: "skck",
    judulCard: "Persyaratan Pembuatan Surat Keterangan Catatan Kepolisian (SKCK)",
    judulModal: "Detail Persyaratan SKCK",
    imagePath: "/skck.webp",
    dokumen: ["Pengantar RT"],
    fotocopy: ["Kartu Keluarga", "KTP", "Akta Kelahiran", "BPJS"],
    fotoUkuran: ["3 × 4 = 2 lembar", "4 × 6 = 4 lembar"],
    lainnya: ["Map kertas", "Nomor HP"],
  },
  {
    id: "usaha_kredit",
    judulCard: "Persyaratan Pembuatan Surat Keterangan Usaha/Kredit",
    judulModal: "Detail Persyaratan Surat Keterangan Usaha/Kredit",
    imagePath: "/izinusaha.webp",
    dokumen: ["Pengantar RT"],
    fotocopy: ["Kartu Keluarga", "KTP"],
    detailTambahan: ["Jenis usaha", "Kredit di bank"],
    lainnya: ["Map kertas", "Nomor HP"],
  },
  {
    id: "kehilangan",
    judulCard: "Persyaratan Pembuatan Surat Keterangan Kehilangan",
    judulModal: "Detail Persyaratan Surat Keterangan Kehilangan",
    imagePath: "/suratkehilangan.webp",
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
    imagePath: "/sktm.webp",
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
    imagePath: "/skkepergian.webp",
    dokumen: ["Pengantar RT"],
    fotocopy: ["Kartu Keluarga", "KTP Suami Istri"],
    detailTambahan: ["Tujuan surat"],
    lainnya: ["Map kertas", "Nomor HP"],
  },
  {
    id: "nikah",
    judulCard: "Persyaratan Pembuatan Surat Keterangan Nikah",
    judulModal: "Detail Persyaratan Surat Keterangan Nikah",
    imagePath: "/sknikah.webp",
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
