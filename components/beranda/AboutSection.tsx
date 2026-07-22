import Image from "next/image";
import Link from "next/link";

// 1. Perbaiki tipe props agar fleksibel menerima array 3 string
type AboutSectionProps = {
  images?: [string, string, string] | string[];
};

// Default fallback images jika props tidak dikirim
const DEFAULT_IMAGES: [string, string, string] = [
  "/images/galeri/candi-plumbangan06.webp",
  "/images/galeri/candi-plumbangan06.webp", // Ganti sesuai path gambar defaultmu
  "/images/galeri/candi-plumbangan06.webp", // Ganti sesuai path gambar defaultmu
];

export default function AboutSection({ images = DEFAULT_IMAGES }: AboutSectionProps) {
  // 2. Destructure dengan aman
  const [img1, img2, img3] = images;

  return (
    <section className="px-4 bg-[#CADBB7] pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#3F4E20] px-5 py-10 sm:px-10 sm:py-14 md:px-16">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12 lg:my-10">
          {/* Photo cluster */}
          <div className="grid grid-cols-3 gap-3 lg:relative lg:mx-auto lg:block lg:w-[260px] lg:shrink-0 lg:gap-0">
            <Photo
              src={img1}
              alt="Foto Desa Plumbangan 1"
              className="aspect-square w-full rounded-br-[32px] rounded-tl-[32px] lg:ml-auto lg:mb-6 lg:aspect-auto lg:h-[180px] lg:w-[190px] lg:rounded-bl-[64px] lg:rounded-tr-[64px] lg:rounded-br-none"
            />
            <Photo
              src={img2}
              alt="Foto Desa Plumbangan 2"
              className="aspect-square w-full rounded-br-[32px] rounded-tl-[32px] lg:aspect-auto lg:h-[150px] lg:w-[188px] lg:rounded-br-[56px] lg:rounded-tl-[56px]"
            />
            <Photo
              src={img3}
              alt="Foto Desa Plumbangan 3"
              className="aspect-square w-full rounded-br-[32px] rounded-tl-[32px] lg:ml-auto lg:mt-6 lg:aspect-auto lg:h-[155px] lg:w-[190px] lg:rounded-bl-[56px] lg:rounded-tr-[56px] lg:rounded-br-none"
            />
          </div>

          {/* Copy */}
          <div className="text-right text-white lg:text-left">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Tentang
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/90 sm:text-base">
              <p>
                Desa Plumbangan sudah ada pada masa Pemerintahan Kerajaan Kediri di bawah Raja Jaya Baya, yang terus berlangsung hingga Pemerintahan Majapahit, hingga masa keruntuhannya.
                Berdasarkan data yang kami dapat bahwa Pemerintah Desa Plumbangan yang pertama baru dimulai Tahun 1895 Masehi. 
              </p>
              <p>
                Terdiri dari 4 Dusun yang ditandai dengan petilasan ( punden ) dan setiap dusun mengadakan acara ritual sendiri ( Bersih Dusun ) di bulan Jawa Selo
              </p>
            </div>
            <Link
              href="/tentang"
              className="mt-8 inline-block rounded-lg bg-[#F4F1E6] px-6 py-3 text-sm font-semibold text-[#3F4E20] shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:text-base"
            >
              Lihat Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Photo({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className: string;
}) {
  if (!src) {
    return <div className={`bg-white ${className}`} aria-hidden="true" />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}