type VideoProfilSectionProps = {
  videoUrl?: string;
  posterSrc?: string;
};

export default function VideoProfilSection({
  videoUrl = "https://youtu.be/L_y2Qi_p9jc?si=aOPb0SJqYPPAkLP2",
  posterSrc,
}: VideoProfilSectionProps) {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <section className="bg-[#CADBB7] px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl mb-10 rounded-[2rem] bg-[#3F4E20] px-6 py-10 sm:px-10 sm:py-14">
        <h2 className="mb-8 text-center font-display text-2xl font-bold text-white sm:text-3xl">
          Video Profil Desa
        </h2>

        <div className="overflow-hidden rounded-2xl border-4 border-white/90 bg-[#E1D6C1] shadow-lg">
          <div className="relative aspect-video w-full">
            {embedUrl ? (
              <iframe
                src={embedUrl}
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

/**
 * Converts common YouTube URL formats into an embeddable URL.
 * Supports:
 *  - https://youtu.be/VIDEO_ID
 *  - https://www.youtube.com/watch?v=VIDEO_ID
 *  - https://www.youtube.com/embed/VIDEO_ID (already correct)
 *  - https://www.youtube.com/shorts/VIDEO_ID
 */
function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    let videoId: string | null = null;

    if (parsed.hostname === "youtu.be") {
      videoId = parsed.pathname.slice(1);
    } else if (
      parsed.hostname.includes("youtube.com")
    ) {
      if (parsed.pathname === "/watch") {
        videoId = parsed.searchParams.get("v");
      } else if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/embed/")[1];
      } else if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.split("/shorts/")[1];
      }
    }

    if (!videoId) return null;

    // Strip any extra query params that may have tagged along on the ID
    videoId = videoId.split("?")[0].split("&")[0];

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return null;
  }
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