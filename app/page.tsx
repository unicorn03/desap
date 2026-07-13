export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/backgrounddesa.jpg')",
      }}
    >
      <h1 className="text-7xl text-center font-black text-[#3e4d2b] mb-4">
        Desa
        <br />
        Plumbangan
      </h1>

      <p className="mt-2 text-slate-400">
        anjay lorem ipsumm
      </p>
    </div>
  );
}