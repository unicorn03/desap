type VideoProfilSectionProps = {
  videoUrl?: string;
  posterSrc?: string;
};

export default function VideoProfilSection({
  videoUrl,
  posterSrc,
}: VideoProfilSectionProps) {
  return (
    <section className="bg-[#CADBB7] px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl mb-10 rounded-[2rem] bg-[#3F4E20] px-6 py-10 sm:px-10 sm:py-14">
        <h2 className="mb-8 text-center font-display text-2xl font-bold text-white sm:text-3xl">
          Video Profil Desa
        </h2>

        <div className="overflow-hidden rounded-2xl border-4 border-white/90 bg-[#E1D6C1] shadow-lg">
          <div className="relative aspect-video w-full">
            {videoUrl ? (
              <iframe
                src={videoUrl}
                title="Video Profil Desa Plumbangan"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : posterSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={posterSrc}
                alt="Video Profil Desa Plumbangan"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              // Placeholder until a video/thumbnail is provided
              <div
                className="absolute inset-0 flex items-center justify-center text-[#3F4E20]/40"
                aria-hidden="true"
              >
                <PlayIcon />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="currentColor" />
    </svg>
  );
}
