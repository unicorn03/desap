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
        video_url: fields.text({
          label: 'Link Video Profil Desa (YouTube)',
          defaultValue: 'https://youtu.be/L_y2Qi_p9jc?si=aOPb0SJqYPPAkLP2',
          description: 'Masukkan URL video YouTube',
        }),
        about_heading: fields.text({ label: 'Judul Sekilas Tentang', defaultValue: 'Tentang' }),
        about_deskripsi_1: fields.text({
          label: 'Deskripsi Tentang Baris 1',
          multiline: true,
          defaultValue: 'Desa Plumbangan sudah ada pada masa Pemerintahan Kerajaan Kediri di bawah Raja Jaya Baya, yang terus berlangsung hingga Pemerintahan Majapahit, hingga masa keruntuhannya. Berdasarkan data yang kami dapat bahwa Pemerintah Desa Plumbangan yang pertama baru dimulai Tahun 1895 Masehi.',
        }),
        about_deskripsi_2: fields.text({
          label: 'Deskripsi Tentang Baris 2',
          multiline: true,
          defaultValue: 'Terdiri dari 4 Dusun yang ditandai dengan petilasan ( punden ) dan setiap dusun mengadakan acara ritual sendiri ( Bersih Dusun ) di bulan Jawa Selo.',
        }),
        foto_about_1: fields.image({
          label: 'Foto Tentang 1 (Disarankan format WebP, Maks 2MB)',
          directory: 'public/images/beranda',
          publicPath: '/images/beranda/',
        }),
        foto_about_2: fields.image({
          label: 'Foto Tentang 2 (Disarankan format WebP, Maks 2MB)',
          directory: 'public/images/beranda',
          publicPath: '/images/beranda/',
        }),
        foto_about_3: fields.image({
          label: 'Foto Tentang 3 (Disarankan format WebP, Maks 2MB)',
          directory: 'public/images/beranda',
          publicPath: '/images/beranda/',
        }),
      },
    }),

    tentang: singleton({
      label: 'Halaman Tentang',
      path: 'content/tentang',
      schema: {
        judul_tentang: fields.text({ label: 'Nama Desa / Judul Utama', defaultValue: 'Plumbangan' }),
        heading_sejarah: fields.text({ label: 'Sub-Judul Sejarah', defaultValue: 'Sejarah Desa' }),
        deskripsi_sejarah: fields.text({
          label: 'Deskripsi Sejarah Desa',
          multiline: true,
          defaultValue: 'Desa Plumbangan sudah ada pada masa Pemerintahan Kerajaan Kediri di bawah Raja Jaya Baya, yang terus berlangsung hingga Pemerintahan Majapahit, hingga masa keruntuhannya. Berdasarkan data yang kami dapat bahwa Pemerintah Desa Plumbangan yang pertama baru dimulai Tahun 1895 Masehi.',
        }),
        foto_sejarah: fields.image({
          label: 'Foto Utama Tentang Desa (Disarankan format WebP, Maks 2MB)',
          directory: 'public/images/tentang',
          publicPath: '/images/tentang/',
        }),
        jumlah_penduduk: fields.text({ label: 'Jumlah Penduduk (contoh: 2.300)', defaultValue: '2.300' }),
        detail_kependudukan: fields.array(
          fields.text({ label: 'Detail Fasilitas / Dusun' }),
          {
            label: 'Detail Kependudukan (Dusun/Sekolah/Candi)',
            itemLabel: (props) => props.value || 'Item Detail',
          }
        ),
      },
    }),

    struktur: singleton({
      label: 'Struktur Organisasi',
      path: 'content/struktur',
      schema: {
        kepala_desa: fields.object({
          nama: fields.text({ label: 'Nama Kepala Desa' }),
          role: fields.text({ label: 'Jabatan', defaultValue: 'Kepala Desa' }),
          note: fields.text({ label: 'Catatan / NIP (Opsional)' }),
          foto: fields.image({
            label: 'Foto Kepala Desa (Disarankan WebP, Maks 2MB)',
            directory: 'public/images/struktur',
            publicPath: '/images/struktur/',
          }),
        }),
        sekretaris_desa: fields.object({
          nama: fields.text({ label: 'Nama Sekretaris Desa' }),
          role: fields.text({ label: 'Jabatan', defaultValue: 'Sekretaris Desa' }),
          foto: fields.image({
            label: 'Foto Sekretaris Desa (Disarankan WebP, Maks 2MB)',
            directory: 'public/images/struktur',
            publicPath: '/images/struktur/',
          }),
        }),
        kasi_list: fields.array(
          fields.object({
            nama: fields.text({ label: 'Nama' }),
            role: fields.text({ label: 'Jabatan (contoh: Kasi Pelayanan)' }),
            foto: fields.image({
              label: 'Foto (Disarankan WebP, Maks 2MB)',
              directory: 'public/images/struktur',
              publicPath: '/images/struktur/',
            }),
          }),
          {
            label: 'Daftar Kasi',
            itemLabel: (props) => `${props.fields.role.value}: ${props.fields.nama.value}` || 'Kasi',
          }
        ),
        kaur_list: fields.array(
          fields.object({
            nama: fields.text({ label: 'Nama' }),
            role: fields.text({ label: 'Jabatan (contoh: Kaur Keuangan)' }),
            foto: fields.image({
              label: 'Foto (Disarankan WebP, Maks 2MB)',
              directory: 'public/images/struktur',
              publicPath: '/images/struktur/',
            }),
          }),
          {
            label: 'Daftar Kaur',
            itemLabel: (props) => `${props.fields.role.value}: ${props.fields.nama.value}` || 'Kaur',
          }
        ),
        kamituwo_list: fields.array(
          fields.object({
            nama: fields.text({ label: 'Nama' }),
            role: fields.text({ label: 'Jabatan (contoh: Kamituwo Plumbangan)' }),
            foto: fields.image({
              label: 'Foto (Disarankan WebP, Maks 2MB)',
              directory: 'public/images/struktur',
              publicPath: '/images/struktur/',
            }),
          }),
          {
            label: 'Daftar Kamituwo',
            itemLabel: (props) => `${props.fields.role.value}: ${props.fields.nama.value}` || 'Kamituwo',
          }
        ),
        karyawan_list: fields.array(
          fields.object({
            nama: fields.text({ label: 'Nama' }),
            role: fields.text({ label: 'Jabatan (contoh: Karyawan Desa)' }),
            foto: fields.image({
              label: 'Foto (Disarankan WebP, Maks 2MB)',
              directory: 'public/images/struktur',
              publicPath: '/images/struktur/',
            }),
          }),
          {
            label: 'Daftar Karyawan Desa',
            itemLabel: (props) => `${props.fields.role.value}: ${props.fields.nama.value}` || 'Karyawan',
          }
        ),
      },
    }),

    galeri: singleton({
      label: 'Halaman Galeri',
      path: 'content/galeri',
      schema: {
        hero_image: fields.image({
          label: 'Foto Hero Banner Galeri (Disarankan WebP, Maks 2MB)',
          directory: 'public/images/galeri',
          publicPath: '/images/galeri/',
        }),
        aset_desa: fields.array(
          fields.object({
            nama: fields.text({ label: 'Nama / Keterangan Aset' }),
            foto: fields.image({
              label: 'Foto Aset (Disarankan WebP, Maks 2MB)',
              directory: 'public/images/galeri',
              publicPath: '/images/galeri/',
            }),
          }),
          {
            label: 'Daftar Aset Desa',
            itemLabel: (props) => props.fields.nama.value || 'Foto Aset Desa',
          }
        ),
        kegiatan_desa: fields.array(
          fields.object({
            deskripsi: fields.text({ label: 'Deskripsi Kegiatan', multiline: true }),
            foto: fields.image({
              label: 'Foto Kegiatan (Disarankan WebP, Maks 2MB)',
              directory: 'public/images/galeri',
              publicPath: '/images/galeri/',
            }),
          }),
          {
            label: 'Daftar Kegiatan Desa',
            itemLabel: (props) => props.fields.deskripsi.value?.slice(0, 30) || 'Kegiatan Desa',
          }
        ),
        foto_highlight: fields.image({
          label: 'Foto Highlight Utama Galeri Grid (Disarankan WebP, Maks 2MB)',
          directory: 'public/images/galeri',
          publicPath: '/images/galeri/',
        }),
        galeri_grid: fields.array(
          fields.object({
            foto: fields.image({
              label: 'Foto Galeri Grid (Disarankan WebP, Maks 2MB)',
              directory: 'public/images/galeri',
              publicPath: '/images/galeri/',
            }),
          }),
          {
            label: 'Foto Tambahan Galeri Grid',
            itemLabel: () => 'Foto Grid',
          }
        ),
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
