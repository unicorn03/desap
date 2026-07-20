import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import BerandaView from "@/components/beranda/BerandaView";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Home() {
  const beranda = await reader.singletons.beranda.read();

  return (
    <BerandaView
      judul={beranda?.judul ?? undefined}
      tagline={beranda?.tagline ?? undefined}
    />
  );
}
