import MisiDesaSection from "@/components/tentang/MisiDesaSection";
import VisiDesaSection from "@/components/tentang/VisiDesaSection";

export default function Tentang() {
  return (
  <main>
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/backgrounddesa.webp')",
      }}
    >
      <h1 className="mb-4 bg-gradient-to-r from-[#2E4A2B] via-[#5A7A3D] to-[#A3C65D] bg-clip-text text-center text-7xl font-black text-transparent">
        Tentang
        <br />
        Desa Plumbangan
      </h1>

      <p className="mt-2 text-slate-400">
        anjay lorem ipsumm
      </p>
    </div>
    <VisiDesaSection/>
    <MisiDesaSection/>
  </main>
  );
}