import React, { useState, useMemo } from 'react';
import { Search, Bookmark, BookmarkCheck, Clock, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { LearningArticle, AudienceCategory, ArticleCategory } from '../types/dental';
import { LEARNING_ARTICLES } from '../data/learningData';
import { DentalIllustration } from './DentalIllustrations';

interface LearningSectionProps {
  onOpenArticle: (article: LearningArticle) => void;
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
  readArticles: string[];
  onMarkAsRead: (id: string) => void;
}

export const LearningSection: React.FC<LearningSectionProps> = ({
  onOpenArticle,
  bookmarks,
  onToggleBookmark,
  readArticles,
  onMarkAsRead
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAudience, setSelectedAudience] = useState<AudienceCategory>('semua');

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: 'Semua Materi' },
    { id: 'dasar', label: 'Dasar Perawatan' },
    { id: 'penyakit', label: 'Penyakit Gigi' },
    { id: 'pencegahan', label: 'Pencegahan' },
    { id: 'perawatan', label: 'Perawatan & Keluhan' },
    { id: 'kebiasaan', label: 'Kebiasaan' },
    { id: 'nutrisi', label: 'Nutrisi Gigi' }
  ];

  const audienceOptions: { id: AudienceCategory; label: string }[] = [
    { id: 'semua', label: 'Semua Usia' },
    { id: 'anak', label: 'Anak-anak' },
    { id: 'remaja', label: 'Remaja' },
    { id: 'dewasa', label: 'Dewasa' },
    { id: 'lansia', label: 'Lansia' }
  ];

  const filteredArticles = useMemo(() => {
    return LEARNING_ARTICLES.filter((article) => {
      const matchSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.causes.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        article.symptoms.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchCategory = selectedCategory === 'all' || article.category === (selectedCategory as ArticleCategory);

      const matchAudience =
        selectedAudience === 'semua' ||
        article.targetAudience.includes(selectedAudience) ||
        article.targetAudience.includes('semua');

      return matchSearch && matchCategory && matchAudience;
    });
  }, [searchQuery, selectedCategory, selectedAudience]);

  const readCount = readArticles.length;
  const totalArticles = LEARNING_ARTICLES.length;
  const progressPercent = Math.round((readCount / totalArticles) * 100);

  const handleCardClick = (article: LearningArticle) => {
    onMarkAsRead(article.id);
    onOpenArticle(article);
  };

  return (
    <div className="space-y-6">
      {/* Header and Progress */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-sky-100 dark:border-slate-800 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Pusat Edukasi & Belajar Gigi
            </h2>
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 px-2.5 py-0.5 rounded-full border border-sky-200 dark:border-sky-800">
              11 Topik
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Pelajari anatomi, penyakit, pencegahan, dan panduan perawatan gigi terlengkap dengan bahasa sederhana.
          </p>
        </div>

        {/* Progress Tracker Bar */}
        <div className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700 min-w-[220px]">
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className="text-slate-600 dark:text-slate-300">Progres Belajar</span>
            <span className="text-sky-600 dark:text-sky-400">{readCount}/{totalArticles} ({progressPercent}%)</span>
          </div>
          <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-400 to-sky-600 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari topik (misal: karies, sikat gigi, gusi berdarah, bau mulut)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
            />
          </div>

          {/* Target Audience Segmented Buttons */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl shrink-0 overflow-x-auto no-scrollbar">
            {audienceOptions.map((aud) => (
              <button
                key={aud.id}
                onClick={() => setSelectedAudience(aud.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedAudience === aud.id
                    ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {aud.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Pills (Functional Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-sky-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <Sparkles className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 dark:text-white">Tidak ada materi yang cocok</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Coba gunakan kata kunci lain atau pilih kategori "Semua Materi" untuk melihat daftar lengkap.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedAudience('semua');
            }}
            className="px-4 py-2 bg-sky-50 text-sky-600 font-semibold rounded-xl text-xs"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredArticles.map((article) => {
            const isBookmarked = bookmarks.includes(article.id);
            const isRead = readArticles.includes(article.id);

            return (
              <div
                key={article.id}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-sky-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-600 transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div
                  onClick={() => handleCardClick(article)}
                  className="cursor-pointer relative overflow-hidden bg-slate-50 dark:bg-slate-800/50"
                >
                  <DentalIllustration
                    type={article.illustration}
                    className="w-full h-44 object-contain group-hover:scale-103 transition-transform"
                  />
                  {/* Bookmark Button (Absolute) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(article.id);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md transition-colors ${
                      isBookmarked
                        ? 'bg-amber-400 text-slate-900 shadow-md'
                        : 'bg-white/80 dark:bg-slate-900/80 text-slate-500 hover:text-slate-900 dark:text-slate-300'
                    }`}
                    title={isBookmarked ? 'Disimpan' : 'Simpan materi'}
                  >
                    {isBookmarked ? <BookmarkCheck className="w-4 h-4 fill-current" /> : <Bookmark className="w-4 h-4" />}
                  </button>

                  {/* Read status check */}
                  {isRead && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                      <CheckCircle2 className="w-3 h-3" /> Sudah Dibaca
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Metadata unboxed text */}
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500 font-semibold mb-1.5">
                      <span className="text-sky-600 dark:text-sky-400">{article.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTimeMinutes} menit
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => handleCardClick(article)}
                      className="font-bold text-slate-900 dark:text-white text-base leading-snug cursor-pointer group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors"
                    >
                      {article.title}
                    </h3>

                    {/* Subtitle / summary */}
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {article.overview}
                    </p>
                  </div>

                  {/* Key points kicker */}
                  <div className="space-y-1 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {article.keyPoints.slice(0, 2).map((kp, idx) => (
                      <div key={idx} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                        <span className="truncate">{kp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <button
                    onClick={() => handleCardClick(article)}
                    className="w-full pt-2 flex items-center justify-between text-xs font-bold text-sky-600 dark:text-sky-400 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Baca Selengkapnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
