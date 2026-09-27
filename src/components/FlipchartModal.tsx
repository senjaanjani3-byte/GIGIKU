import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare, HelpCircle, User, Users, GraduationCap, HeartHandshake } from 'lucide-react';
import { AudienceCategory } from '../types/dental';
import { FLIPCHART_DECKS } from '../data/flipchartData';
import { DentalIllustration } from './DentalIllustrations';

interface FlipchartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrePostTest: () => void;
}

export const FlipchartModal: React.FC<FlipchartModalProps> = ({ isOpen, onClose, onOpenPrePostTest }) => {
  const [activeAudience, setActiveAudience] = useState<Exclude<AudienceCategory, 'semua'>>('anak');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showCounselorScript, setShowCounselorScript] = useState(true);

  if (!isOpen) return null;

  const slides = FLIPCHART_DECKS[activeAudience];
  const currentSlide = slides[currentSlideIndex] || slides[0];

  const handleAudienceChange = (aud: Exclude<AudienceCategory, 'semua'>) => {
    setActiveAudience(aud);
    setCurrentSlideIndex(0);
  };

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-5xl w-full h-[95vh] max-h-[820px] flex flex-col overflow-hidden shadow-2xl border border-sky-100 dark:border-slate-800">
        {/* Top Control Bar */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-indigo-500 text-white shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </span>
            <div>
              <div className="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2">
                <span>Flipchart Presentasi Edukasi Digital</span>
                <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800">
                  Mode Terapis Gigi & Pasien
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Slide peraga interaktif untuk penyuluhan kelompok & individu
              </p>
            </div>
          </div>

          {/* Mode Switcher Segmented Control */}
          <div className="flex items-center gap-1 bg-slate-200/80 dark:bg-slate-700 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => handleAudienceChange('anak')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeAudience === 'anak'
                  ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" /> Anak
            </button>
            <button
              onClick={() => handleAudienceChange('remaja')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeAudience === 'remaja'
                  ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" /> Remaja
            </button>
            <button
              onClick={() => handleAudienceChange('dewasa')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeAudience === 'dewasa'
                  ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" /> Dewasa
            </button>
            <button
              onClick={() => handleAudienceChange('lansia')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeAudience === 'lansia'
                  ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5" /> Lansia
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenPrePostTest}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors shadow-sm"
              title="Kuis Evaluasi Pre/Post-Test Penyuluhan"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Pre & Post-Test
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Presentation Slide Main Area */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Patient Facing Visual Area (Large & Bold) */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-gradient-to-b from-white to-sky-50/40 dark:from-slate-900 dark:to-slate-950">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
                <span className="uppercase tracking-widest text-sky-600 dark:text-sky-400">
                  Mode Edukasi: {activeAudience.toUpperCase()}
                </span>
                <span>
                  Halaman {currentSlideIndex + 1} dari {slides.length}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {currentSlide.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium text-sm sm:text-base mt-1">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* Illustration */}
            <div className="my-4 max-w-lg mx-auto w-full rounded-2xl overflow-hidden shadow-md border border-sky-100 dark:border-slate-800">
              <DentalIllustration type={currentSlide.visualType} className="w-full h-44 sm:h-56 object-contain" />
            </div>

            {/* Key Bullet Points for Patient */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-sky-100 dark:border-slate-700 shadow-sm space-y-2">
              <div className="text-xs font-bold text-sky-800 dark:text-sky-300 uppercase tracking-wider">
                Poin Utama untuk Pasien:
              </div>
              <ul className="space-y-2">
                {currentSlide.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800 dark:text-slate-200 font-medium">
                    <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Counselor / Speaker Notes Drawer */}
          <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 p-5 flex flex-col justify-between shrink-0 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Catatan Terapis / Edukator
                </span>
                <button
                  onClick={() => setShowCounselorScript(!showCounselorScript)}
                  className="text-[11px] text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline"
                >
                  {showCounselorScript ? 'Sembunyikan' : 'Tampilkan'}
                </button>
              </div>

              {showCounselorScript && (
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-3.5 bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
                    <div className="font-semibold text-indigo-900 dark:text-indigo-300 mb-1">
                      Panduan Bahasa & Narasi:
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                      "{currentSlide.counselorScript}"
                    </p>
                  </div>

                  <div className="p-3.5 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-100 dark:border-amber-900/50">
                    <div className="font-semibold text-amber-900 dark:text-amber-300 mb-1">
                      Pertanyaan Interaktif ke Pasien:
                    </div>
                    <p className="text-amber-800 dark:text-amber-200 font-medium">
                      "{currentSlide.audiencePrompt}"
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Slide Navigation Buttons */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 mt-4">
              <button
                onClick={handlePrev}
                disabled={currentSlideIndex === 0}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-30 disabled:pointer-events-none hover:bg-white dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" /> Sebelumnya
              </button>

              <div className="flex gap-1">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentSlideIndex ? 'w-5 bg-sky-500' : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentSlideIndex === slides.length - 1}
                className="px-3 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold flex items-center gap-1"
              >
                Selanjutnya <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
