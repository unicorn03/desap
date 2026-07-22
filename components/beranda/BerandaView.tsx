import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import VideoProfilSection from "./VideoProfilSection";

type BerandaViewProps = {
  judul?: string;
  tagline?: string;
  videoUrl?: string;
  aboutHeading?: string;
  aboutParagraphs?: string[];
  aboutImages?: (string | undefined)[];
};

export default function BerandaView({
  judul,
  tagline,
  videoUrl,
  aboutHeading,
  aboutParagraphs,
  aboutImages,
}: BerandaViewProps) {
  return (
    <>
      <HeroSection judul={judul} tagline={tagline} />
      <AboutSection
        heading={aboutHeading}
        paragraphs={aboutParagraphs}
        images={aboutImages}
      />
      <VideoProfilSection videoUrl={videoUrl} />
    </>
  );
}
