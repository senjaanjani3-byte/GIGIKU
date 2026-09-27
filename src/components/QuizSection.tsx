import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, GraduationCap } from 'lucide-react';
import { GENERAL_QUIZ_QUESTIONS } from '../data/quizData';
import { soundService } from '../utils/audio';

interface QuizSectionProps {
  onOpenPrePostTest: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ onOpenPrePostTest }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const questions = GENERAL_QUIZ_QUESTIONS;
  const currentQ = questions[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
    soundService.playClick();
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;

    setIsAnswerSubmitted(true);
    const isCorrect = selectedOption === currentQ.correctAnswerIndex;

    if (isCorrect) {
      setUserScore((prev) => prev + 1);
      soundService.playQuadrantChime();
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      soundService.playFinishFanfare();
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setUserScore(0);
    setIsQuizCompleted(false);
  };

  const percentage = Math.round((userScore / questions.length) * 100);

  let motivationMessage = '';
  let motivationBadge = '';
  if (percentage >= 80) {
    motivationMessage = 'Luar biasa! Pemahaman Anda tentang kesehatan gigi dan mulut sangat mendalam. Pertahankan kebiasaan baik ini dan sebarkan ke keluarga!';
    motivationBadge = 'Pahlawan Senyum Sehat 🏆';
  } else if (percentage >= 60) {
    motivationMessage = 'Bagus sekali! Anda sudah memahami sebagian besar prinsip perawatan gigi. Terus pelajari materi pencegahan agar senyum selalu berkilau!';
    motivationBadge = 'Sahabat Gigi Cermat ⭐';
  } else {
    motivationMessage = 'Tetap semangat! Anda sudah memulai langkah awal yang baik. Buka menu Belajar untuk memperdalam pemahaman tentang sikat gigi dan pencegahan karang!';
    motivationBadge = 'Pejuang Senyum 🦷';
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Top Banner with Pre/Post Test Callout */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-sky-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="p-2 rounded-xl bg-indigo-500 text-white shadow-sm">
              <HelpCircle className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Kuis Interaktif Gigi & Mulut
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
            Uji wawasan Anda mengenai cara sikat gigi, karies, gusi berdarah, dan fluoride dengan penjelasan ilmiah langsung.
          </p>
        </div>

        {/* Student Special Button */}
        <button
          onClick={onOpenPrePostTest}
          className="px-5 py-3 rounded-2xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold shrink-0 flex items-center gap-2 transition-colors shadow-sm"
        >
          <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span>Mode Pre-Test & Post-Test Pasien</span>
        </button>
      </div>

      {!isQuizCompleted ? (
        /* Question Card */
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-sky-100 dark:border-slate-800 shadow-xl space-y-6">
          {/* Progress header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold">
                Soal {currentIdx + 1} dari {questions.length} · {currentQ.category}
              </span>
              <span>Skor Sementara: {userScore}</span>
            </div>
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-indigo-600 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Title */}
          <div className="pt-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectAnswer = idx === currentQ.correctAnswerIndex;

              let btnStyle = 'border-slate-200 dark:border-slate-700 hover:border-sky-300 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800';

              if (isAnswerSubmitted) {
                if (isCorrectAnswer) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold ring-2 ring-emerald-300';
                } else if (isSelected && !isCorrectAnswer) {
                  btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-semibold ring-2 ring-rose-300';
                } else {
                  btnStyle = 'opacity-40 border-slate-200 dark:border-slate-800 text-slate-400';
                }
              } else if (isSelected) {
                btnStyle = 'border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200 font-semibold ring-2 ring-sky-300';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full p-4 rounded-2xl text-left text-sm transition-all border flex items-center justify-between ${btnStyle}`}
                >
                  <span className="pr-3 leading-relaxed">{opt}</span>
                  <div className="shrink-0">
                    {isAnswerSubmitted ? (
                      isCorrectAnswer ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      ) : null
                    ) : (
                      <span
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-300 dark:border-slate-600'
                        }`}
                      >
                        {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Visible after submission) */}
          {isAnswerSubmitted && (
            <div
              className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed space-y-1 animate-fade-in ${
                selectedOption === currentQ.correctAnswerIndex
                  ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
              }`}
            >
              <div className="font-bold flex items-center gap-1.5">
                {selectedOption === currentQ.correctAnswerIndex ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Jawaban Anda Benar!
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600" /> Jawaban Kurang Tepat
                  </>
                )}
              </div>
              <p className="text-slate-700 dark:text-slate-300 pt-1">
                <strong>Penjelasan:</strong> {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Action button */}
          <div className="pt-2">
            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className="w-full py-3.5 bg-sky-600 hover:bg-sky-700 active:scale-95 disabled:opacity-40 disabled:pointer-events-none text-white font-bold rounded-2xl text-sm transition-all shadow-md shadow-sky-500/20"
              >
                Kunci Jawaban
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="w-full py-3.5 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold rounded-2xl text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-500/20"
              >
                <span>{currentIdx < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Skor Akhir'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Finished View */
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-sky-100 dark:border-slate-800 shadow-xl text-center space-y-6 animate-scale-up">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-100 dark:bg-amber-950/50 text-amber-600 flex items-center justify-center shadow-inner">
            <Award className="w-12 h-12" />
          </div>

          <div>
            <div className="text-xs uppercase font-extrabold tracking-wider text-sky-600 dark:text-sky-400">
              Hasil Kuis Kesehatan Gigi
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Selamat, Anda Telah Selesai!
            </h3>
            <div className="mt-3 inline-block px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800">
              {motivationBadge}
            </div>
          </div>

          {/* Big Score Display */}
          <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200 dark:border-slate-700 max-w-sm mx-auto space-y-1">
            <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
              {percentage}<span className="text-2xl text-slate-400 font-semibold">%</span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
              Menjawab benar {userScore} dari {questions.length} pertanyaan
            </div>
          </div>

          {/* Motivation Message */}
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
            {motivationMessage}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <button
              onClick={handleRestartQuiz}
              className="py-3 px-6 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-2xl text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-500/20 transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Ulangi Kuis
            </button>
            <button
              onClick={onOpenPrePostTest}
              className="py-3 px-6 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 border border-indigo-200 dark:border-indigo-800 font-bold rounded-2xl text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <GraduationCap className="w-4 h-4" /> Buka Pre/Post-Test Penyuluhan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
