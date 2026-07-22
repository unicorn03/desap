import { config, fields, singleton, collection } from '@keystatic/core'

export default config({
  storage: process.env.NEXT_PUBLIC_REPO_OWNER
    ? {
        kind: 'github',
        repo: {
          owner: process.env.NEXT_PUBLIC_REPO_OWNER,
          name: process.env.NEXT_PUBLIC_REPO_NAME as string,
        },
      }
    : { kind: 'local' },

  ui: {
    brand: { name: 'Admin Desa Plumbangan' },
  },

  // ── SINGLETON: data tunggal (hanya ada 1) ────────────────────────────────
  singletons: {
    beranda: singleton({
      label: 'Beranda',
      path: 'content/beranda',
      schema: {
        judul: fields.text({ label: 'Judul Utama', defaultValue: 'Desa Plumbangan' }),
        tagline: fields.text({
          label: 'Tagline / Deskripsi Singkat',
          multiline: true,
          defaultValue: 'Selamat datang di website resmi Desa Plumbangan',
        }),
      },
    }),

    profil: singleton({
      label: 'Profil Desa',
      path: 'content/profil',
      schema: {
        nama_desa: fields.text({ label: 'Nama Desa', defaultValue: 'Desa Plumbangan' }),
        kecamatan: fields.text({ label: 'Kecamatan' }),
        kabupaten: fields.text({ label: 'Kabupaten' }),
        provinsi: fields.text({ label: 'Provinsi' }),
        luas_wilayah: fields.text({ label: 'Luas Wilayah (contoh: 5,2 km²)' }),
        jumlah_penduduk: fields.text({ label: 'Jumlah Penduduk (contoh: 3.450 jiwa)' }),
        visi: fields.text({ label: 'Visi Desa', multiline: true }),
        misi: fields.text({ label: 'Misi Desa (pisahkan tiap poin dengan baris baru)', multiline: true }),
        sejarah: fields.text({ label: 'Sejarah Singkat Desa', multiline: true }),
      },
    }),

    kepala_desa: singleton({
      label: 'Kepala Desa',
      path: 'content/kepala-desa',
      schema: {
        nama: fields.text({ label: 'Nama Kepala Desa' }),
        periode: fields.text({ label: 'Periode Jabatan (contoh: 2021 – 2027)' }),
        sambutan: fields.text({ label: 'Sambutan Kepala Desa', multiline: true }),
        foto: fields.image({
          label: 'Foto Kepala Desa',
          directory: 'public/images',
          publicPath: '/images/',
        }),
      },
    }),

    kontak: singleton({
      label: 'Kontak Desa',
      path: 'content/kontak',
      schema: {
        alamat: fields.text({ label: 'Alamat Kantor Desa', multiline: true }),
        telepon: fields.text({ label: 'Nomor Telepon / WhatsApp' }),
        email: fields.text({ label: 'Email' }),
        jam_buka: fields.text({
          label: 'Jam Operasional',
          defaultValue: 'Senin – Jumat, 08.00 – 15.00 WIB',
        }),
      },
    }),
  },

  // ── COLLECTION: data yang bisa banyak ────────────────────────────────────
  collections: {
    berita: collection({
      label: 'Berita & Pengumuman',
      slugField: 'judul',
      path: 'content/berita/*',
      schema: {
        judul: fields.slug({ name: { label: 'Judul' } }),
        tanggal: fields.date({ label: 'Tanggal Terbit' }),
        kategori: fields.select({
          label: 'Kategori',
          options: [
            { label: 'Berita', value: 'berita' },
            { label: 'Pengumuman', value: 'pengumuman' },
            { label: 'Kegiatan', value: 'kegiatan' },
          ],
          defaultValue: 'berita',
        }),
        ringkasan: fields.text({ label: 'Ringkasan (tampil di daftar berita)', multiline: true }),
        isi: fields.text({ label: 'Isi Lengkap Berita', multiline: true }),
      },
    }),

    umkm: collection({
      label: 'UMKM',
      slugField: 'nama',
      path: 'content/umkm/*',
      schema: {
        nama: fields.slug({ name: { label: 'Nama UMKM' } }),
        pemilik: fields.text({ label: 'Nama Pemilik' }),
        kategori: fields.text({ label: 'Kategori Produk / Usaha', defaultValue: 'Makanan' }),
        deskripsi: fields.text({ label: 'Deskripsi Produk / Usaha', multiline: true }),
        jam_operasional: fields.text({ label: 'Jam Operasional (contoh: Senin - Sabtu. Pukul 08.00 - 16.00 WIB)' }),
        lokasi: fields.text({ label: 'Alamat / Lokasi UMKM', multiline: true }),
        link_gmaps: fields.text({ label: 'Link Google Maps / Pinpoint (Opsional)' }),
        kontak_wa: fields.text({ label: 'Nomor WhatsApp (contoh: 08123456789 atau +628123456789)' }),
        link_facebook: fields.text({ label: 'Link Facebook (Opsional, contoh: https://facebook.com/namatoko)' }),
        link_tiktok: fields.text({ label: 'Link TikTok (Opsional, contoh: https://tiktok.com/@namatoko)' }),
        link_instagram: fields.text({ label: 'Link Instagram (Opsional, contoh: https://instagram.com/namatoko)' }),
        link_shopee: fields.text({ label: 'Link Shopee (Opsional, contoh: https://shopee.co.id/namatoko)' }),
        link_tokopedia: fields.text({ label: 'Link Tokopedia (Opsional, contoh: https://tokopedia.com/namatoko)' }),
        foto_utama: fields.image({
          label: 'Foto Utama UMKM',
          directory: 'public/images/umkm',
          publicPath: '/images/umkm/',
        }),
        foto_galeri_1: fields.image({
          label: 'Foto Galeri 1',
          directory: 'public/images/umkm',
          publicPath: '/images/umkm/',
        }),
        foto_galeri_2: fields.image({
          label: 'Foto Galeri 2',
          directory: 'public/images/umkm',
          publicPath: '/images/umkm/',
        }),
        foto_galeri_3: fields.image({
          label: 'Foto Galeri 3',
          directory: 'public/images/umkm',
          publicPath: '/images/umkm/',
        }),
      },
    }),
  },
})
