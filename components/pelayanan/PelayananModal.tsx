"use client";

import { useEffect } from "react";
import { PelayananItem } from "./pelayananData";
import { FileText, Copy, Camera, Info, Folder, X } from "lucide-react";

type PelayananModalProps = {
  item: PelayananItem | null;
  onClose: () => void;
};

export default function PelayananModal({
  item,
  onClose,
}: PelayananModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Tutup modal"
      />

      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white bg-opacity-[0.98] p-6 md:p-8 shadow-2xl border border-white/80 text-slate-800 z-10 max-h-[85vh] overflow-y-auto"
        style={{
          backgroundImage: "url('/backgrounddesa.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Top-Right "X" Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#3F4E20]/10 text-[#3F4E20] hover:bg-[#3F4E20] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3F4E20]"
          aria-label="Tutup Detail Persyaratan"
        >
          <X className="h-5 w-5 stroke-[2.5]" />
        </button>

        {/* Modal Title */}
        <div className="text-center pt-2 pb-6 border-b border-[#3F4E20]/20 mb-6">
          <h2 className="text-xl md:text-2xl font-black text-[#3F4E20] tracking-tight">
            {item.judulModal}
          </h2>
        </div>

        {/* Requirements List */}
        <div className="space-y-5 text-sm md:text-base text-slate-700">
          {/* Dokumen Section */}
          {item.dokumen && item.dokumen.length > 0 && (
            <div className="flex gap-3 items-start">
              <div className="p-2 rounded-xl bg-[#3F4E20]/10 text-[#3F4E20] shrink-0">
                <FileText size={20} className="stroke-[2.2]" />
              </div>
              <div>
                <h4 className="font-bold text-[#3F4E20] text-base">Dokumen</h4>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-slate-700">
                  {item.dokumen.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Fotocopy Section */}
          {item.fotocopy && item.fotocopy.length > 0 && (
            <div className="flex gap-3 items-start">
              <div className="p-2 rounded-xl bg-[#3F4E20]/10 text-[#3F4E20] shrink-0">
                <Copy size={20} className="stroke-[2.2]" />
              </div>
              <div>
                <h4 className="font-bold text-[#3F4E20] text-base">Fotocopy</h4>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-slate-700">
                  {item.fotocopy.map((fc, idx) => (
                    <li key={idx}>{fc}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Foto Ukuran Section */}
          {item.fotoUkuran && item.fotoUkuran.length > 0 && (
            <div className="flex gap-3 items-start">
              <div className="p-2 rounded-xl bg-[#3F4E20]/10 text-[#3F4E20] shrink-0">
                <Camera size={20} className="stroke-[2.2]" />
              </div>
              <div>
                <h4 className="font-bold text-[#3F4E20] text-base">Foto Ukuran</h4>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-slate-700">
                  {item.fotoUkuran.map((foto, idx) => (
                    <li key={idx}>{foto}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Detail Tambahan Section */}
          {item.detailTambahan && item.detailTambahan.length > 0 && (
            <div className="flex gap-3 items-start">
              <div className="p-2 rounded-xl bg-[#3F4E20]/10 text-[#3F4E20] shrink-0">
                <Info size={20} className="stroke-[2.2]" />
              </div>
              <div>
                <h4 className="font-bold text-[#3F4E20] text-base">Syarat Khusus</h4>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-slate-700">
                  {item.detailTambahan.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Lainnya Section */}
          {item.lainnya && item.lainnya.length > 0 && (
            <div className="flex gap-3 items-start">
              <div className="p-2 rounded-xl bg-[#3F4E20]/10 text-[#3F4E20] shrink-0">
                <Folder size={20} className="stroke-[2.2]" />
              </div>
              <div>
                <h4 className="font-bold text-[#3F4E20] text-base">Lainnya</h4>
                <ol className="mt-1 list-decimal list-inside space-y-0.5 text-slate-700">
                  {item.lainnya.map((lain, idx) => (
                    <li key={idx}>{lain}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
