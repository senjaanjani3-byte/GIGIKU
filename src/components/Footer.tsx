import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';
import { ToothMascot } from './DentalIllustrations';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenTimer: () => void;
  onOpenFlipchart: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenTimer,
  onOpenFlipchart
}) => {
  return (
    <footer className="mt-16 border-t border-sky-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 flex items-center justify-center">
                <ToothMascot mood="happy" size={28} />
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white">
                Senyum<span className="text-sky-600 dark:text-sky-400">Sehat</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Media edukasi kesehatan gigi dan mulut interaktif yang dirancang untuk masyarakat umum, anak sekolah, remaja, lansia, pasien klinik gigi, serta mahasiswa Terapis Gigi dan Mulut.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/40 px-3 py-1.5 rounded-xl border border-sky-200 dark:border-sky-800">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Standar Edukasi Berbasis Bukti Ilmiah</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li>
                <button onClick={() => onSelectTab('belajar')} className="hover:text-sky-600 transition-colors">
                  11 Materi Edukasi Gigi
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('screening')} className="hover:text-sky-600 transition-colors">
                  Screening Mandiri 8 Gejala
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('tips')} className="hover:text-sky-600 transition-colors">
                  Tips Perawatan & Teknik Sikat
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('kuis')} className="hover:text-sky-600 transition-colors">
                  Kuis Interaktif Pilihan Ganda
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('tanya-jawab')} className="hover:text-sky-600 transition-colors">
                  Tanya Jawab dengan drg. Senyum
                </button>
              </li>
            </ul>
          </div>

          {/* Special Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Fitur Edukator & Pasien
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li>
                <button onClick={onOpenTimer} className="hover:text-sky-600 transition-colors">
                  ⏱️ Timer Sikat Gigi 2 Menit (4 Kuadran)
                </button>
              </li>
              <li>
                <button onClick={onOpenFlipchart} className="hover:text-sky-600 transition-colors">
                  📊 Flipchart Edukasi Digital Mahasiswa
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('kuis')} className="hover:text-sky-600 transition-colors">
                  📈 Evaluasi Pre-Test & Post-Test
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Disclaimer Banner */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
          <strong>Pernyataan Medis Resmi (Medical Disclaimer):</strong> Materi, artikel, kuis, asisten tanya jawab, dan hasil screening mandiri dalam aplikasi <em>Senyum Sehat</em> disajikan semata-mata untuk tujuan edukasi dan promosi kesehatan (health promotion). Aplikasi ini tidak dimaksudkan untuk menggantikan diagnosis medis langsung, pemeriksaan radiografis, atau rencana perawatan oleh dokter gigi atau terapis gigi berlisensi. Bila Anda mengalami nyeri hebat tak tertahankan, demam tinggi, atau pembengkakan besar pada wajah/rahang, segera dapatkan pertolongan medis langsung di klinik gigi atau rumah sakit terdekat.
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            © {new Date().getFullYear()} Senyum Sehat. Hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-1">
            Dibuat untuk Senyum Sehat Indonesia <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
