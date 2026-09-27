import React, { useState } from 'react';
import { X, CheckCircle2, RotateCcw, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { COUNSELING_PREPOST_QUESTIONS } from '../data/quizData';
import { soundService } from '../utils/audio';

interface PrePostTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TestPhase = 'intro' | 'pre-test' | 'pre-result' | 'post-test' | 'comparison';

export const PrePostTestModal: React.FC<PrePostTestModalProps> = ({ isOpen, onClose }) => {
  const [phase, setPhase] = useState<TestPhase>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [preAnswers, setPreAnswers] = useState<Record<number, number>>({});
  const [postAnswers, setPostAnswers] = useState<Record<number, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  if (!isOpen) return null;

  const questions = COUNSELING_PREPOST_QUESTIONS;
  const currentQ = questions[currentQuestionIndex];

  const calculateScore = (answers: Record<number, number>) => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswerIndex) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const preScore = calculateScore(preAnswers);
  const postScore = calculateScore(postAnswers);
  const scoreDiff = postScore - preScore;

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
    soundService.playClick();
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) return;

    if (phase === 'pre-test') {
      const updated = { ...preAnswers, [currentQ.id]: selectedOption };
      setPreAnswers(updated);
      setSelectedOption(null);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setPhase('pre-result');
        soundService.playQuadrantChime();
      }
    } else if (phase === 'post-test') {
      const updated = { ...postAnswers, [currentQ.id]: selectedOption };
      setPostAnswers(updated);
      setSelectedOption(null);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setPhase('comparison');
        soundService.playFinishFanfare();
      }
    }
  };

  const handleStartPreTest = () => {
    setPreAnswers({});
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setPhase('pre-test');
  };

  const handleStartPostTest = () => {
    setPostAnswers({});
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setPhase('post-test');
  };

  const handleResetAll = () => {
    setPhase('intro');
    setPreAnswers({});
    setPostAnswers({});
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-sky-100 dark:border-slate-800 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-emerald-50 dark:bg-slate-800/80 border-b border-emerald-100 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-emerald-600 text-white shadow-sm">
              <TrendingUp className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-white text-base">Evaluasi Pre-Test & Post-Test</h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                Alat Pengukur Efektivitas Promosi Kesehatan Gigi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Phase: Intro */}
          {phase === 'intro' && (
            <div className="text-center space-y-4 py-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center">
                <Award className="w-9 h-9" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Uji Peningkatan Pengetahuan</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                  Fitur ini dirancang khusus untuk mahasiswa Terapis Gigi atau tenaga penyuluhan:
                </p>
              </div>
              <div className="text-left bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">1.</span>
                  <span><strong>Pre-Test:</strong> Berikan kuis singkat sebelum sesi edukasi dimulai.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">2.</span>
                  <span><strong>Edukasi:</strong> Lakukan penyuluhan menggunakan materi atau Flipchart.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">3.</span>
                  <span><strong>Post-Test:</strong> Uji kembali pemahaman pasien setelah edukasi.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">4.</span>
                  <span><strong>Grafik Skor:</strong> Lihat persentase lonjakan pemahaman pasien secara riil.</span>
                </div>
              </div>
              <button
                onClick={handleStartPreTest}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-sm transition-colors shadow-lg shadow-emerald-500/20"
              >
                Mulai Pre-Test Sekarang
              </button>
            </div>
          )}

          {/* Phase: Pre-Test & Post-Test Questions */}
          {(phase === 'pre-test' || phase === 'post-test') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {phase === 'pre-test' ? 'Tahap 1: Pre-Test' : 'Tahap 2: Post-Test'}
                </span>
                <span>
                  Soal {currentQuestionIndex + 1} dari {questions.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                />
              </div>

              <div className="pt-2">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {currentQ.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-2.5 pt-2">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-3.5 rounded-2xl text-left text-sm transition-all border flex items-center justify-between ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold ring-2 ring-emerald-300'
                          : 'border-slate-200 dark:border-slate-700 hover:border-emerald-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span>{opt}</span>
                      <span
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-500 text-white'
                            : 'border-slate-300 dark:border-slate-600'
                        }`}
                      >
                        {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleNextQuestion}
                disabled={selectedOption === null}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:pointer-events-none text-white font-bold rounded-2xl text-sm transition-colors mt-4"
              >
                {currentQuestionIndex < questions.length - 1 ? 'Soal Berikutnya' : 'Selesaikan Tahap Ini'}
              </button>
            </div>
          )}

          {/* Phase: Pre-Result */}
          {phase === 'pre-result' && (
            <div className="text-center space-y-4 py-3">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Skor Awal (Pre-Test)
                </div>
                <div className="text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                  {preScore}<span className="text-xl text-slate-400">/100</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
                  Tingkat pengetahuan pasien sebelum diberikan edukasi kesehatan gigi.
                </p>
              </div>

              <div className="p-4 bg-sky-50 dark:bg-sky-950/30 rounded-2xl border border-sky-100 dark:border-sky-900/50 text-left space-y-2">
                <div className="font-bold text-sky-900 dark:text-sky-300 text-sm">
                  Langkah Selanjutnya:
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Silakan berikan materi penyuluhan (bisa menggunakan <strong>Media Flipchart</strong> atau materi di menu <strong>Belajar</strong>). Setelah pasien memahami materi, klik tombol di bawah untuk melaksanakan <strong>Post-Test</strong>.
                </p>
              </div>

              <button
                onClick={handleStartPostTest}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                Lanjutkan ke Post-Test <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Phase: Comparison Result */}
          {phase === 'comparison' && (
            <div className="text-center space-y-5 py-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Hasil Evaluasi Penyuluhan</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Perbandingan Pengetahuan Sebelum vs Sesudah Edukasi
                </p>
              </div>

              {/* Side by side comparison cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Pre-Test (Sebelum)</div>
                  <div className="text-3xl font-bold text-slate-700 dark:text-slate-300 mt-1">{preScore}%</div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800">
                  <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Post-Test (Sesudah)</div>
                  <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">{postScore}%</div>
                </div>
              </div>

              {/* Difference badge */}
              <div className="p-4 rounded-2xl bg-sky-50 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 text-left space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Peningkatan Pengetahuan:</span>
                  <span className={`text-sm font-extrabold ${scoreDiff >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {scoreDiff >= 0 ? `+${scoreDiff}%` : `${scoreDiff}%`}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {scoreDiff > 0
                    ? `Penyuluhan berhasil meningkatkan pemahaman pasien sebesar ${scoreDiff} poin persentase! Pasien kini lebih memahami cara sikat gigi, radang gusi, dan perawatan berkala.`
                    : scoreDiff === 0
                    ? 'Skor pasien tetap stabil. Pasien sudah memiliki pemahaman awal yang baik sebelum penyuluhan.'
                    : 'Disarankan mengulang kembali materi tentang teknik sikat gigi dan radang gusi.'}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleResetAll}
                  className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl text-xs flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" /> Uji Pasien Lain
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl text-xs"
                >
                  Selesai
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
