type HeroSectionProps = {
  judul?: string;
  tagline?: string;
};

export default function HeroSection({ judul, tagline }: HeroSectionProps) {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/backgrounddesa.webp')",
      }}
    >
      <h1 className="text-7xl text-center font-black text-[#3e4d2b] mb-4">
        {judul ?? "Desa Plumbangan"}
      </h1>

      <p className="mt-2 text-slate-400 text-center max-w-xl px-4">
        {tagline ?? "Selamat datang di website resmi Desa Plumbangan"}
      </p>
    </div>
  );
}
