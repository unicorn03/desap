import type { ReactNode } from "react";
import Link from "next/link";

type DataKependudukanSectionProps = {
  icon: ReactNode; // pass your own icon component, e.g. <UsersIcon className="h-20 w-20 text-white" />
  jumlahPenduduk?: string;
  dusunList?: string[];
};

export default function DataKependudukanSection({
  icon,
  jumlahPenduduk = "2.300",
  dusunList = ["03 Dusun", "03 Dusun", "03 Dusun"],
}: DataKependudukanSectionProps) {
  return (
    <section className="bg-[#485935] px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-10 text-2xl font-bold text-white sm:text-3xl">
          Data Kependudukan
        </h2>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
          <div className="text-white">{icon}</div>

          <div>
            <p className="text-6xl font-black text-white sm:text-7xl">
              {jumlahPenduduk}
            </p>
            <p className="mt-1 text-sm font-semibold text-white sm:text-base">
              Jumlah Penduduk
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {dusunList.map((label, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white px-6 py-6 text-lg font-bold text-[#3F4E20] shadow-sm"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
