import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Repeat, Apple, Droplets, Ban, AlertTriangle, CalendarCheck, Play, CheckCircle2 } from 'lucide-react';
import { CARE_TIPS } from '../data/tipsData';
import { DentalIllustration } from './DentalIllustrations';

interface CareTipsSectionProps {
  onOpenTimer: () => void;
}

export const CareTipsSection: React.FC<CareTipsSectionProps> = ({ onOpenTimer }) => {
  const [selectedTechnique, setSelectedTechnique] = useState<'bass' | 'roll' | 'fones'>('bass');

  const getTipIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-sky-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'Repeat':
        return <Repeat className="w-5 h-5 text-indigo-500" />;
      case 'Apple':
        return <Apple className="w-5 h-5 text-rose-500" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-cyan-500" />;
      case 'Ban':
        return <Ban className="w-5 h-5 text-red-500" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-blue-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-500" />;
    }
  };

  const techniqueData = {
    bass: {
      name: 'Teknik Bass (Modifikasi)',
      target: 'Dewasa, Penderita Radang Gusi & Periodontitis',
      steps: [
        'Arahkan bulu sikat membentuk sudut 45 derajat ke arah perbatasan antara gigi dan gusi (sulkus gingiva).',
        'Lakukan gerakan getaran kecil/memutar lembut di tempat selama beberapa detik tanpa melepas bulu sikat.',
        'Sapukan bulu sikat ke arah mahkota gigi (menjauhi gusi).',
        'Ulangi pada seluruh permukaan luar dan dalam gigi atas serta bawah.'
      ],
      advantage: 'Paling efektif mengangkat plak di saku gusi tempat berkembangnya kuman gingivitis.'
    },
    roll: {
      name: 'Teknik Roll (Menggulung)',
      target: 'Anak Sekolah & Pemula',
      steps: [
        'Letakkan bulu sikat di gusi sejajar dengan sumbu panjang gigi.',
        'Putar atau gulung sikat ke arah permukaan kunyah gigi (seperti gerakan menyapu).',
        'Gigi atas disapu ke bawah, gigi bawah disapu ke atas.',
        'Jangan melakukan gerakan maju mundur horizontal keras.'
      ],
      advantage: 'Mudah dipelajari dan aman untuk gusi yang rentan terluka.'
    },
    fones: {
      name: 'Teknik Fones (Sirkular Bulat-Bulat)',
      target: 'Anak Balita & Anak Usia Dini',
      steps: [
        'Katupkan gigi atas dan bawah bersama-sama.',
        'Letakkan sikat gigi di permukaan luar gigi.',
        'Gerakkan sikat membentuk lingkaran-lingkaran besar seperti roda sepeda.',
        'Buka mulut dan sikat permukaan kunyah geraham dengan gerakan maju-mundur pendek.'
      ],
      advantage: 'Menyenangkan bagi anak-anak dan melatih koordinasi motorik sikat gigi sejak kecil.'
    }
  };

  const activeTech = techniqueData[selectedTechnique];

  return (
    <div className="space-y-10">
      {/* Interactive Timer Banner */}
      <div className="bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Fitur Praktis Harian
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Smart Brushing Timer 2 Menit
          </h2>
          <p className="text-sky-100 text-xs sm:text-sm max-w-lg leading-relaxed">
            Bantu Anda dan anak menyikat gigi dengan durasi tepat! Dilengkapi peta 4 kuadran mulut (30 detik per area) dan nada pengingat pergantian kuadran.
          </p>
        </div>

        <button
          onClick={onOpenTimer}
          className="px-6 py-3.5 bg-white hover:bg-sky-50 active:scale-95 text-sky-700 font-extrabold rounded-2xl text-sm shadow-lg shadow-sky-900/20 flex items-center gap-2.5 shrink-0 transition-transform"
        >
          <Play className="w-5 h-5 fill-current text-sky-600" />
          Buka Timer Sekarang
        </button>
      </div>

      {/* 8 Care Tips Grid */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            8 Pilar Utama Perawatan Gigi Sehari-hari
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Panduan kebersihan dan pencegahan praktis yang direkomendasikan dokter gigi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARE_TIPS.map((tip) => (
            <div
              key={tip.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-sky-100 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                    {getTipIcon(tip.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {tip.category}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                  {tip.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {tip.shortDescription}
                </p>
              </div>

              {/* Detailed Points */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                {tip.detailedGuide.map((d, i) => (
                  <div key={i} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                    <span className="text-sky-500 font-bold">•</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Brushing Technique Demo */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-sky-100 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Panduan Teknik Klinis
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
            Pilih Teknik Menyikat Gigi Sesuai Usia
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Teknik menyikat gigi harus disesuaikan dengan kelompok usia dan kondisi gusi
          </p>
        </div>

        {/* Technique Buttons */}
        <div className="flex flex-wrap gap-2">
          {(['bass', 'roll', 'fones'] as const).map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTechnique(tech)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                selectedTechnique === tech
                  ? 'bg-sky-600 text-white border-sky-600 shadow-md'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-sky-300'
              }`}
            >
              {techniqueData[tech].name}
            </button>
          ))}
        </div>

        {/* Selected Technique Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center bg-sky-50/50 dark:bg-slate-800/60 p-6 rounded-2xl border border-sky-100 dark:border-slate-700">
          <div className="lg:col-span-1 rounded-2xl overflow-hidden shadow-sm">
            <DentalIllustration type="brush" className="w-full h-44 object-contain" />
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div>
              <div className="text-xs font-semibold text-sky-700 dark:text-sky-300">
                Sasaran: {activeTech.target}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {activeTech.name}
              </h3>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Langkah-Langkah:
              </div>
              <div className="space-y-2">
                {activeTech.steps.map((st, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-sky-500 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-sky-100 dark:border-slate-800 text-xs text-sky-800 dark:text-sky-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span><strong>Keunggulan:</strong> {activeTech.advantage}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
