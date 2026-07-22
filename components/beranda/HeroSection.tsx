type HeroSectionProps = {
  judul?: string;
  tagline?: string;
};

export default function HeroSection({ judul, tagline }: HeroSectionProps) {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: "url('/backgrounddesa.webp')",
      }}
    >
      <h1 className="mb-4 bg-gradient-to-r from-[#2E4A2B] via-[#5A7A3D] to-[#A3C65D] bg-clip-text text-center text-5xl font-black leading-tight pb-2 text-transparent sm:text-6xl md:text-7xl">
        {judul ?? "Desa Plumbangan"}
      </h1>

      <p className="mt-2 max-w-xs text-center text-sm font-medium text-slate-600 sm:max-w-xl sm:text-base sm:font-normal sm:text-slate-400">
        {tagline ?? "Selamat datang di website resmi Desa Plumbangan"}
      </p>
    </div>
  );
}