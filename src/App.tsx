import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { LearningSection } from './components/LearningSection';
import { ScreeningSection } from './components/ScreeningSection';
import { CareTipsSection } from './components/CareTipsSection';
import { QuizSection } from './components/QuizSection';
import { ChatbotSection } from './components/ChatbotSection';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { BrushingTimerModal } from './components/BrushingTimerModal';
import { FlipchartModal } from './components/FlipchartModal';
import { PrePostTestModal } from './components/PrePostTestModal';
import { ReminderModal } from './components/ReminderModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { Footer } from './components/Footer';
import { LearningArticle } from './types/dental';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState<LearningArticle | null>(null);
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [isFlipchartOpen, setIsFlipchartOpen] = useState(false);
  const [isPrePostTestOpen, setIsPrePostTestOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('senyum_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [readArticles, setReadArticles] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('senyum_read_articles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Dark mode effect
  useEffect(() => {
    const savedTheme = localStorage.getItem('senyum_theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('senyum_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('senyum_theme', 'light');
      }
      return next;
    });
  };

  const handleToggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      let updated: string[];
      if (prev.includes(id)) {
        updated = prev.filter((item) => item !== id);
      } else {
        updated = [...prev, id];
      }
      localStorage.setItem('senyum_bookmarks', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearAllBookmarks = () => {
    setBookmarks([]);
    localStorage.removeItem('senyum_bookmarks');
  };

  const handleMarkAsRead = (id: string) => {
    setReadArticles((prev) => {
      if (prev.includes(id)) return prev;
      const updated = [...prev, id];
      localStorage.setItem('senyum_read_articles', JSON.stringify(updated));
      return updated;
    });
  };

  const handleShare = async (article: LearningArticle) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${article.title} - Senyum Sehat`,
          text: `${article.subtitle}\n\nBaca edukasi kesehatan gigi selengkapnya di aplikasi Senyum Sehat!`,
          url: window.location.href
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(
        `*${article.title}*\n${article.subtitle}\n\n${article.summary}\n\nPelajari di aplikasi Senyum Sehat!`
      );
      alert('Teks edukasi berhasil disalin ke clipboard untuk dibagikan!');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenTimer={() => setIsTimerOpen(true)}
        onOpenReminder={() => setIsReminderOpen(true)}
        onOpenFlipchart={() => setIsFlipchartOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        bookmarkCount={bookmarks.length}
      />

      {/* Main Page Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'home' && (
          <div className="space-y-12">
            <HeroBanner
              onSelectMenu={(menuId) => setActiveTab(menuId)}
              onOpenTimer={() => setIsTimerOpen(true)}
              onOpenFlipchart={() => setIsFlipchartOpen(true)}
            />

            {/* Quick Preview of Learning Section on Home */}
            <div className="space-y-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Materi Edukasi Pilihan
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Mulai jelajahi topik dasar dan penyakit gigi
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('belajar')}
                  className="text-xs sm:text-sm font-bold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  Lihat Semua 11 Materi →
                </button>
              </div>

              <LearningSection
                onOpenArticle={(article) => setSelectedArticle(article)}
                bookmarks={bookmarks}
                onToggleBookmark={handleToggleBookmark}
                readArticles={readArticles}
                onMarkAsRead={handleMarkAsRead}
              />
            </div>
          </div>
        )}

        {activeTab === 'belajar' && (
          <LearningSection
            onOpenArticle={(article) => setSelectedArticle(article)}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            readArticles={readArticles}
            onMarkAsRead={handleMarkAsRead}
          />
        )}

        {activeTab === 'screening' && (
          <ScreeningSection onGoToChatbot={() => setActiveTab('tanya-jawab')} />
        )}

        {activeTab === 'tips' && (
          <CareTipsSection onOpenTimer={() => setIsTimerOpen(true)} />
        )}

        {activeTab === 'kuis' && (
          <QuizSection onOpenPrePostTest={() => setIsPrePostTestOpen(true)} />
        )}

        {activeTab === 'tanya-jawab' && (
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="text-center space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Tanya Jawab Kesehatan Gigi
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Konsultasikan pertanyaan seputar gigi & mulut bersama drg. Senyum
              </p>
            </div>
            <ChatbotSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={setActiveTab}
        onOpenTimer={() => setIsTimerOpen(true)}
        onOpenFlipchart={() => setIsFlipchartOpen(true)}
      />

      {/* Modals & Drawers */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        isBookmarked={selectedArticle ? bookmarks.includes(selectedArticle.id) : false}
        onToggleBookmark={handleToggleBookmark}
        onShare={handleShare}
      />

      <BrushingTimerModal
        isOpen={isTimerOpen}
        onClose={() => setIsTimerOpen(false)}
      />

      <FlipchartModal
        isOpen={isFlipchartOpen}
        onClose={() => setIsFlipchartOpen(false)}
        onOpenPrePostTest={() => {
          setIsFlipchartOpen(false);
          setIsPrePostTestOpen(true);
        }}
      />

      <PrePostTestModal
        isOpen={isPrePostTestOpen}
        onClose={() => setIsPrePostTestOpen(false)}
      />

      <ReminderModal
        isOpen={isReminderOpen}
        onClose={() => setIsReminderOpen(false)}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedIds={bookmarks}
        onOpenArticle={(article) => setSelectedArticle(article)}
        onRemoveBookmark={handleToggleBookmark}
        onClearAll={handleClearAllBookmarks}
      />
    </div>
  );
}
