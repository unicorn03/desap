import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import AboutSection from "../../Beranda/AboutSection";
import VideoProfilSection from "../../Beranda/VideoProfilSection";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Beranda() {
  const beranda = await reader.singletons.beranda.read();

  return (
    <>
      <div
        className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/backgrounddesa.webp')",
        }}
      >
        <h1 className="text-7xl text-center font-black text-[#3e4d2b] mb-4">
          {beranda?.judul ?? "Desa Plumbangan"}
        </h1>

        <p className="mt-2 text-slate-400 text-center max-w-xl px-4">
          {beranda?.tagline ?? "Selamat datang di website resmi Desa Plumbangan"}
        </p>
      </div>
      <AboutSection />
      <VideoProfilSection />
    </>
  );
}
