import React, { useState, useEffect } from 'react';
import { BookOpen, Stethoscope, Sparkles, HelpCircle, MessageSquareText, Lightbulb, Play, GraduationCap } from 'lucide-react';
import { ToothMascot } from './DentalIllustrations';
import { DAILY_DENTAL_FACTS } from '../data/tipsData';

interface HeroBannerProps {
  onSelectMenu: (menuId: string) => void;
  onOpenTimer: () => void;
  onOpenFlipchart: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onSelectMenu,
  onOpenTimer,
  onOpenFlipchart
}) => {
  const [greeting, setGreeting] = useState('Selamat Datang');
  const [dailyFact, setDailyFact] = useState(DAILY_DENTAL_FACTS[0]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 11) setGreeting('Selamat Pagi');
    else if (hour < 15) setGreeting('Selamat Siang');
    else if (hour < 19) setGreeting('Selamat Sore');
    else setGreeting('Selamat Malam');

    // Pick fact of day based on current date
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    setDailyFact(DAILY_DENTAL_FACTS[dayOfYear % DAILY_DENTAL_FACTS.length]);
  }, []);

  const menuCards = [
    {
      id: 'belajar',
      title: 'Belajar',
      subtitle: '11 Materi Lengkap Penyakit & Perawatan',
      icon: BookOpen,
      color: 'bg-sky-500 text-white',
      badge: 'Materi Lengkap'
    },
    {
      id: 'screening',
      title: 'Cek Kesehatan Gigi',
      subtitle: 'Screening Mandiri 8 Pertanyaan Klinis',
      icon: Stethoscope,
      color: 'bg-emerald-500 text-white',
      badge: 'Deteksi Dini'
    },
    {
      id: 'tips',
      title: 'Tips Perawatan',
      subtitle: '8 Panduan Praktis & Timer Sikat 2 Menit',
      icon: Sparkles,
      color: 'bg-amber-500 text-white',
      badge: 'Praktis Harian'
    },
    {
      id: 'kuis',
      title: 'Kuis & Evaluasi',
      subtitle: 'Uji Pengetahuan & Mode Pre/Post-Test',
      icon: HelpCircle,
      color: 'bg-indigo-500 text-white',
      badge: 'Interaktif'
    },
    {
      id: 'tanya-jawab',
      title: 'Tanya Jawab',
      subtitle: 'Konsultasi Edukasi dengan drg. Senyum',
      icon: MessageSquareText,
      color: 'bg-rose-500 text-white',
      badge: 'Asisten AI'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-sky-600 to-indigo-700 text-white p-6 sm:p-10 shadow-xl">
        {/* Soft Background Accents */}
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-12 w-72 h-72 rounded-full bg-sky-300/15 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-sky-100 text-xs font-semibold border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{greeting}, Sobat Senyum!</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Yuk, Kenali dan Jaga <br className="hidden sm:block" />
              <span className="text-sky-200">Kesehatan Gigi & Mulut!</span>
            </h1>

            <p className="text-sky-100 text-sm sm:text-base leading-relaxed max-w-xl">
              Senyum sehat berawal dari kebiasaan sederhana setiap hari. Pelajari cara sikat gigi yang tepat, cegah karies, lakukan screening mandiri, dan konsultasikan keluhan Anda dengan mudah.
            </p>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                onClick={onOpenTimer}
                className="px-5 py-3 rounded-2xl bg-white hover:bg-sky-50 text-sky-700 font-bold text-xs sm:text-sm shadow-lg shadow-sky-900/20 flex items-center gap-2 transition-transform active:scale-95"
              >
                <Play className="w-4 h-4 fill-current text-sky-600" />
                Mulai Sikat Gigi 2 Menit
              </button>

              <button
                onClick={onOpenFlipchart}
                className="px-5 py-3 rounded-2xl bg-sky-700/80 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-md flex items-center gap-2 transition-colors"
              >
                <GraduationCap className="w-4 h-4" />
                Media Flipchart Edukator
              </button>
            </div>
          </div>

          {/* Cheerful Tooth Mascot Graphic */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center p-4 shadow-inner relative group">
              <ToothMascot mood="cheering" size={120} />
              <div className="absolute -bottom-3 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-[11px] font-extrabold shadow-md uppercase tracking-wider">
                Moli si Gigi
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 5 Menu Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Menu Utama Edukasi
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Pilih menu yang ingin Anda jelajahi
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {menuCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onSelectMenu(card.id)}
                className="group p-5 rounded-3xl bg-white dark:bg-slate-900 border border-sky-100/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-600 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`p-3 rounded-2xl ${card.color} shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform">
                  Buka Menu →
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips Kesehatan Gigi Hari Ini */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 flex items-start gap-3.5 shadow-sm">
        <span className="p-2.5 rounded-xl bg-amber-400 text-slate-900 shrink-0 shadow-sm">
          <Lightbulb className="w-5 h-5" />
        </span>
        <div className="space-y-0.5">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
            Tips Kesehatan Gigi Hari Ini
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            {dailyFact}
          </p>
        </div>
      </div>
    </div>
  );
};
