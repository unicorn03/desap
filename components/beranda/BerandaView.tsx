import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import VideoProfilSection from "./VideoProfilSection";

type BerandaViewProps = {
  judul?: string;
  tagline?: string;
};

export default function BerandaView({ judul, tagline }: BerandaViewProps) {
  return (
    <>
      <HeroSection judul={judul} tagline={tagline} />
      <AboutSection />
      <VideoProfilSection />
    </>
  );
}
