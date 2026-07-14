import Image from "next/image";
import Link from "next/link";

type AboutSectionProps = {
  images?: [string, string, string]; // paths for the 3 staggered photos
};

export default function AboutSection({ images }: AboutSectionProps) {
  const [img1, img2, img3] = images ?? [];

  return (
    <section className="px-4 bg-[#CADBB7] pb-16 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#3F4E20] px-6 py-14 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 items-center gap-12 my-10 lg:grid-cols-[auto_1fr]">
          {/* Staggered photo cluster */}
          <div className="relative mx-auto w-[240px] shrink-0 sm:w-[260px]">
            <Photo
              src={img1}
              alt="Foto Desa Plumbangan 1"
              className="ml-auto mb-6 h-[180px] w-[190px] rounded-bl-[64px] rounded-tr-[64px]"
            />
            <Photo
              src={img2}
              alt="Foto Desa Plumbangan 2"
              className="h-[150px] w-[188px] rounded-br-[56px] rounded-tl-[56px]"
            />
            <Photo
              src={img3}
              alt="Foto Desa Plumbangan 3"
              className="ml-auto mt-6 h-[155px] w-[190px] rounded-bl-[56px] rounded-tr-[56px]"
            />
          </div>

          {/* Copy */}
          <div className="text-white">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Tentang
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/90 sm:text-base">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin id arcu aliquet, elementum nisi quis, varius nibh.
                Phasellus quis sodales sem.
              </p>
              <p>
                Ut convallis, lorem ut tincidunt sodales, eros leo sodales
                ex, nec accumsan nisl turpis sed sem. Vivamus sit amet
                tellus tincidunt, elementum elit non, porta magna.
              </p>
              <p>
                Curabitur vel leo id massa dictum efficitur. Mauris
                elementum, ante interdum varius interdum, sem odio
                volutpat magna, vel iaculis erat urna sit amet turpis.
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
