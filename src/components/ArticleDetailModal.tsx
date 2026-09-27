import React from 'react';
import { X, Bookmark, BookmarkCheck, Share2, AlertOctagon, CheckCircle2, Stethoscope, Clock, ShieldAlert } from 'lucide-react';
import { LearningArticle } from '../types/dental';
import { DentalIllustration } from './DentalIllustrations';

interface ArticleDetailModalProps {
  article: LearningArticle | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onShare: (article: LearningArticle) => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onShare
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full my-auto overflow-hidden shadow-2xl border border-sky-100 dark:border-slate-800 max-h-[92vh] flex flex-col">
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-sky-600 dark:text-sky-400">{article.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTimeMinutes} menit baca
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-2 rounded-xl border transition-colors ${
                isBookmarked
                  ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 border-amber-200 dark:border-amber-800'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700'
              }`}
              title={isBookmarked ? 'Hapus Simpanan' : 'Simpan Materi'}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4 fill-current" /> : <Bookmark className="w-4 h-4" />}
            </button>

            <button
              onClick={() => onShare(article)}
              className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              title="Bagikan Materi"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Title & Subtitle */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
              {article.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              {article.subtitle}
            </p>
          </div>

          {/* Visual Illustration */}
          <div className="rounded-2xl overflow-hidden border border-sky-100 dark:border-slate-800 shadow-sm">
            <DentalIllustration type={article.illustration} className="w-full h-52 sm:h-64 object-contain" />
          </div>

          {/* 1. Pengertian / Overview */}
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-sky-500" />
              1. Pengertian
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base pl-4">
              {article.overview}
            </p>
          </section>

          {/* 2. Penyebab */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-sky-500" />
              2. Penyebab
            </h2>
            <ul className="space-y-2 pl-4">
              {article.causes.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Tanda dan Gejala */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-amber-500" />
              3. Tanda dan Gejala
            </h2>
            <ul className="space-y-2 pl-4">
              {article.symptoms.map((s, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Faktor Risiko */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-indigo-500" />
              4. Faktor Risiko
            </h2>
            <ul className="space-y-2 pl-4">
              {article.riskFactors.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5. Cara Mencegah */}
          <section className="space-y-3 bg-emerald-50/70 dark:bg-emerald-950/20 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-900/40">
            <h2 className="text-lg font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              5. Cara Mencegah
            </h2>
            <ul className="space-y-2">
              {article.prevention.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-emerald-800 dark:text-emerald-200">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 6. Cara Merawat */}
          <section className="space-y-3 bg-sky-50/70 dark:bg-sky-950/20 p-5 rounded-2xl border border-sky-100 dark:border-sky-900/40">
            <h2 className="text-lg font-bold text-sky-900 dark:text-sky-300 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              6. Cara Merawat & Penanganan Klinis
            </h2>
            <ul className="space-y-2">
              {article.treatment.map((t, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-sky-800 dark:text-sky-200">
                  <span className="font-bold text-sky-600 dark:text-sky-400">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 7. Kapan Harus ke Dokter Gigi (Emergency Red Flags) */}
          <section className="space-y-3 bg-rose-50/80 dark:bg-rose-950/30 p-5 rounded-2xl border border-rose-200 dark:border-rose-900/50">
            <h2 className="text-lg font-bold text-rose-900 dark:text-rose-300 flex items-center gap-2">
              <AlertOctagon className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              7. Kapan Harus Segera ke Dokter Gigi?
            </h2>
            <ul className="space-y-2">
              {article.whenToSeeDentist.map((w, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-rose-800 dark:text-rose-200 font-medium">
                  <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-1" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 8. Ringkasan Singkat & Poin Kunci */}
          <section className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
            <h2 className="text-base font-bold text-slate-800 dark:text-white uppercase tracking-wider text-xs">
              Ringkasan Inti
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              "{article.summary}"
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">POIN UTAMA:</div>
              <div className="space-y-1">
                {article.keyPoints.map((k, i) => (
                  <div key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                    <span>{k}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between">
          <span className="text-xs text-slate-400 dark:text-slate-500">
            Aplikasi Senyum Sehat · Media Edukasi
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl text-sm transition-colors"
          >
            Tutup Materi
          </button>
        </div>
      </div>
    </div>
  );
};
