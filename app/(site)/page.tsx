import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import BerandaView from "@/components/beranda/BerandaView";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Home() {
  const beranda = await reader.singletons.beranda.read();

  const aboutParagraphs = [
    beranda?.about_deskripsi_1,
    beranda?.about_deskripsi_2,
  ].filter(Boolean) as string[];

  const aboutImages = [
    beranda?.foto_about_1 || undefined,
    beranda?.foto_about_2 || undefined,
    beranda?.foto_about_3 || undefined,
  ];

  return (
    <BerandaView
      judul={beranda?.judul ?? undefined}
      tagline={beranda?.tagline ?? undefined}
      videoUrl={beranda?.video_url ?? undefined}
      aboutHeading={beranda?.about_heading ?? undefined}
      aboutParagraphs={aboutParagraphs.length > 0 ? aboutParagraphs : undefined}
      aboutImages={aboutImages}
    />
  );
}
