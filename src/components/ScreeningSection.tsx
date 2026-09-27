import React, { useState } from 'react';
import { Stethoscope, CheckCircle2, AlertTriangle, AlertCircle, RotateCcw, MessageSquare, ArrowRight, ShieldAlert } from 'lucide-react';
import { SCREENING_QUESTIONS, calculateScreeningResult } from '../data/screeningData';
import { ScreeningResult } from '../types/dental';
import { soundService } from '../utils/audio';

interface ScreeningSectionProps {
  onGoToChatbot: () => void;
}

export const ScreeningSection: React.FC<ScreeningSectionProps> = ({ onGoToChatbot }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<ScreeningResult | null>(null);

  const totalQuestions = SCREENING_QUESTIONS.length;
  const currentQ = SCREENING_QUESTIONS[currentStep];

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    soundService.playClick();
    const updated = { ...answers, [questionId]: optionIndex };
    setAnswers(updated);

    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const calculated = calculateScreeningResult(updated);
      setResult(calculated);
      setIsCompleted(true);
      soundService.playQuadrantChime();
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
    setResult(null);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header Card */}
      <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-sky-100 dark:border-slate-800 shadow-sm text-center space-y-3">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center shadow-sm">
          <Stethoscope className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Screening Mandiri Kesehatan Gigi
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto mt-1">
            Jawab 8 pertanyaan klinis sederhana untuk mengetahui tingkat risiko karies, peradangan gusi, dan kebutuhan pemeriksaan Anda.
          </p>
        </div>
      </div>

      {!isCompleted ? (
        /* Questionnaire Step Card */
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-sky-100 dark:border-slate-800 shadow-xl space-y-6">
          {/* Progress Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold">
              <span className="uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Pertanyaan {currentStep + 1} dari {totalQuestions}
              </span>
              <span>{Math.round(((currentStep + 1) / totalQuestions) * 100)}% Selesai</span>
            </div>
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-sky-600 transition-all duration-300 rounded-full"
                style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-1.5 pt-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
              {currentQ.question}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {currentQ.description}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((option, idx) => {
              const isSelected = answers[currentQ.id] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectAnswer(currentQ.id, idx)}
                  className={`w-full p-4 rounded-2xl text-left transition-all border flex items-center justify-between group ${
                    isSelected
                      ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200 font-semibold ring-2 ring-sky-300'
                      : 'border-slate-200 dark:border-slate-700 hover:border-sky-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="space-y-0.5 pr-3">
                    <div className="text-sm sm:text-base font-semibold">{option.text}</div>
                    <div className="text-xs text-slate-400 dark:text-slate-500">{option.tip}</div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'border-sky-500 bg-sky-500 text-white'
                        : 'border-slate-300 dark:border-slate-600 group-hover:border-sky-400'
                    }`}
                  >
                    {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step Back & Navigation */}
          {currentStep > 0 && (
            <div className="pt-2 flex justify-start">
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white font-semibold py-1 px-2"
              >
                ← Kembali ke pertanyaan sebelumnya
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Result Card */
        result && (
          <div className="space-y-6 animate-scale-up">
            <div className={`p-6 sm:p-8 rounded-3xl border-2 shadow-xl space-y-6 ${result.colorClass}`}>
              {/* Result Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-center shadow-sm">
                    {result.level === 'low' ? (
                      <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                    ) : result.level === 'moderate' ? (
                      <AlertCircle className="w-7 h-7 text-amber-600" />
                    ) : (
                      <AlertTriangle className="w-7 h-7 text-rose-600" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs uppercase font-extrabold tracking-wider opacity-80">
                      Hasil Evaluasi Screening
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      {result.title}
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs opacity-75">Skor Indeks Risiko:</span>
                  <div className="text-2xl font-black">
                    {result.score} <span className="text-sm font-semibold opacity-70">/ {result.maxScore}</span>
                  </div>
                </div>
              </div>

              {/* Summary Paragraph */}
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                {result.summary}
              </p>

              {/* Red flag symptoms if any */}
              {result.flaggedSymptoms.length > 0 && (
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-rose-200 dark:border-rose-900/50 space-y-2 text-slate-800 dark:text-slate-200">
                  <div className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" /> Gejala yang Memerlukan Perhatian:
                  </div>
                  <ul className="space-y-1.5">
                    {result.flaggedSymptoms.map((symp, i) => (
                      <li key={i} className="text-xs sm:text-sm flex items-start gap-2 text-rose-900 dark:text-rose-200 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                        <span>{symp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recommendations */}
              <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3 text-slate-800 dark:text-slate-200">
                <div className="text-xs font-bold text-sky-800 dark:text-sky-300 uppercase tracking-wider">
                  Rekomendasi Tindakan:
                </div>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, i) => (
                    <li key={i} className="text-xs sm:text-sm flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mandatory Medical Disclaimer */}
              <div className="p-4 rounded-2xl bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-xs leading-relaxed space-y-1">
                <strong>Catatan Penting (Disclaimer Medis):</strong>
                <p>
                  Hasil ini merupakan edukasi awal dan bukan diagnosis medis. Aplikasi ini tidak menggantikan pemeriksaan langsung, rontgen gigi, atau tindakan penanganan oleh dokter gigi berlisensi.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onGoToChatbot}
                  className="flex-1 py-3 px-5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> Konsultasikan ke drg. Senyum
                </button>
                <button
                  onClick={handleReset}
                  className="py-3 px-5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" /> Ulangi Screening
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
