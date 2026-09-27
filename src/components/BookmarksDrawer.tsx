import React from 'react';
import { X, Bookmark, Trash2, ChevronRight, Clock } from 'lucide-react';
import { LearningArticle } from '../types/dental';
import { LEARNING_ARTICLES } from '../data/learningData';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedIds: string[];
  onOpenArticle: (article: LearningArticle) => void;
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedIds,
  onOpenArticle,
  onRemoveBookmark,
  onClearAll
}) => {
  if (!isOpen) return null;

  const bookmarkedArticles = LEARNING_ARTICLES.filter((a) => bookmarkedIds.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/40 text-amber-600">
                <Bookmark className="w-5 h-5 fill-current" />
              </span>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Materi Disimpan</h3>
                <p className="text-xs text-slate-400">{bookmarkedArticles.length} artikel tersimpan</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List Body */}
          <div className="flex-1 p-6 overflow-y-auto space-y-3">
            {bookmarkedArticles.length === 0 ? (
              <div className="text-center py-16 text-slate-400 space-y-3">
                <Bookmark className="w-12 h-12 stroke-1 mx-auto text-slate-300 dark:text-slate-600" />
                <p className="text-sm font-medium">Belum ada materi yang disimpan</p>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Klik ikon bookmark di kartu materi atau di dalam artikel untuk menyimpannya di sini.
                </p>
              </div>
            ) : (
              bookmarkedArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 group hover:border-sky-300 transition-all"
                >
                  <div
                    onClick={() => {
                      onOpenArticle(article);
                      onClose();
                    }}
                    className="flex-1 cursor-pointer space-y-1"
                  >
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold">
                      <span className="text-sky-600 dark:text-sky-400">{article.categoryLabel}</span>
                      <span>·</span>
                      <span className="flex items-center gap-0.5">
                        <Clock className="w-3 h-3" /> {article.readTimeMinutes}m
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {article.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => onRemoveBookmark(article.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-colors"
                      title="Hapus dari simpanan"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onOpenArticle(article);
                        onClose();
                      }}
                      className="p-2 text-sky-600 dark:text-sky-400 hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {bookmarkedArticles.length > 0 && (
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
              <button
                onClick={onClearAll}
                className="w-full py-2.5 text-xs text-rose-600 hover:text-rose-700 font-bold transition-colors"
              >
                Hapus Semua Simpanan
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
