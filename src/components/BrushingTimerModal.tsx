import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundService } from '../utils/audio';

interface BrushingTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUADRANTS = [
  {
    id: 1,
    name: 'Kanan Atas',
    detail: 'Gigi Geraham & Seri Kanan Atas',
    instruction: 'Arahkan sikat 45° ke gusi. Bersihkan permukaan luar, dalam, dan permukaan kunyah.',
    coord: 'top-right'
  },
  {
    id: 2,
    name: 'Kiri Atas',
    detail: 'Gigi Geraham & Seri Kiri Atas',
    instruction: 'Pindah ke kiri atas. Gerakkan sikat memutar lembut, jangan menekan terlalu keras.',
    coord: 'top-left'
  },
  {
    id: 3,
    name: 'Kiri Bawah',
    detail: 'Gigi Geraham & Seri Kiri Bawah',
    instruction: 'Turun ke gigi kiri bawah. Pastikan bulu sikat menjangkau gigi geraham paling belakang.',
    coord: 'bottom-left'
  },
  {
    id: 4,
    name: 'Kanan Bawah & Lidah',
    detail: 'Gigi Kanan Bawah + Sikat Lidah',
    instruction: 'Selesaikan kanan bawah, lalu sikat lembut punggung lidah untuk napas segar!',
    coord: 'bottom-right'
  }
];

export const BrushingTimerModal: React.FC<BrushingTimerModalProps> = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(120); // 120 seconds = 2 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [completed, setCompleted] = useState(false);

  // 120 seconds total, 30s per quadrant
  const currentQuadrantIndex = Math.min(3, Math.floor((120 - timeLeft) / 30));
  const quadrantSecondsLeft = (timeLeft % 30) === 0 && timeLeft !== 120 ? 30 : (timeLeft % 30 || 30);
  const currentQuadrant = QUADRANTS[currentQuadrantIndex];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setCompleted(true);
            if (soundEnabled) soundService.playFinishFanfare();
            return 0;
          }
          // Chime on quadrant switch
          if (soundEnabled && (prev - 1) % 30 === 0 && prev > 1) {
            soundService.playQuadrantChime();
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, soundEnabled, timeLeft]);

  const handleStartPause = () => {
    if (completed) {
      handleReset();
      setIsRunning(true);
      return;
    }
    if (!isRunning && timeLeft === 120 && soundEnabled) {
      soundService.playQuadrantChime();
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(120);
    setCompleted(false);
  };

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progressPercent = ((120 - timeLeft) / 120) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-sky-100 dark:border-slate-800">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-sky-50 dark:bg-slate-800/60 border-b border-sky-100 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-sky-500 text-white shadow-sm">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-white text-base">Panduan Sikat Gigi 2 Menit</h3>
              <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">4 Kuadran Mulut (30 detik per area)</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}
              className="p-2 text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-colors"
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center space-y-6">
          {completed ? (
            <div className="py-6 space-y-4 animate-scale-up">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Hebat! Sikat Gigi Selesai!</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xs mx-auto">
                  Semua 4 kuadran telah bersih maksimal. Buang sisa busa pasta gigi dan nikmati senyum segarmu!
                </p>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-md"
              >
                Ulangi Lagi
              </button>
            </div>
          ) : (
            <>
              {/* Mouth Quadrant Visual Map */}
              <div className="max-w-[260px] mx-auto bg-slate-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  PETA KUADRAN MULUT
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {/* Top-Right (Kuadran 1) */}
                  <div
                    className={`p-3 rounded-xl border transition-all ${
                      currentQuadrantIndex === 0
                        ? 'bg-sky-500 text-white font-bold border-sky-400 shadow-md scale-102 ring-2 ring-sky-300'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-wide opacity-80">Bagian 1</div>
                    <div className="font-semibold text-xs mt-0.5">Kanan Atas</div>
                  </div>

                  {/* Top-Left (Kuadran 2) */}
                  <div
                    className={`p-3 rounded-xl border transition-all ${
                      currentQuadrantIndex === 1
                        ? 'bg-sky-500 text-white font-bold border-sky-400 shadow-md scale-102 ring-2 ring-sky-300'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-wide opacity-80">Bagian 2</div>
                    <div className="font-semibold text-xs mt-0.5">Kiri Atas</div>
                  </div>

                  {/* Bottom-Right (Kuadran 4) */}
                  <div
                    className={`p-3 rounded-xl border transition-all ${
                      currentQuadrantIndex === 3
                        ? 'bg-sky-500 text-white font-bold border-sky-400 shadow-md scale-102 ring-2 ring-sky-300'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-wide opacity-80">Bagian 4</div>
                    <div className="font-semibold text-xs mt-0.5">Kanan Bawah</div>
                  </div>

                  {/* Bottom-Left (Kuadran 3) */}
                  <div
                    className={`p-3 rounded-xl border transition-all ${
                      currentQuadrantIndex === 2
                        ? 'bg-sky-500 text-white font-bold border-sky-400 shadow-md scale-102 ring-2 ring-sky-300'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-wide opacity-80">Bagian 3</div>
                    <div className="font-semibold text-xs mt-0.5">Kiri Bawah</div>
                  </div>
                </div>
              </div>

              {/* Big Timer Display */}
              <div className="relative inline-flex flex-col items-center justify-center">
                <div className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono">
                  {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </div>
                <div className="text-xs text-sky-600 dark:text-sky-400 font-semibold mt-1">
                  Kuadran {currentQuadrantIndex + 1} ({quadrantSecondsLeft}s tersisa di area ini)
                </div>

                {/* Progress bar */}
                <div className="w-64 h-2 bg-slate-100 dark:bg-slate-800 rounded-full mt-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-sky-600 transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Quadrant Guidance Card */}
              <div className="bg-sky-50/70 dark:bg-slate-800/60 p-4 rounded-2xl border border-sky-100 dark:border-slate-700 text-left">
                <div className="text-xs font-bold text-sky-800 dark:text-sky-300 uppercase tracking-wider">
                  Fokus Area Sekarang:
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-base mt-0.5">
                  {currentQuadrant.detail}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {currentQuadrant.instruction}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <button
                  onClick={handleReset}
                  className="p-3 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-2xl transition-colors"
                  title="Reset Timer"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>

                <button
                  onClick={handleStartPause}
                  className="px-8 py-3.5 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold rounded-2xl shadow-lg shadow-sky-500/25 flex items-center gap-2 text-base transition-all"
                >
                  {isRunning ? (
                    <>
                      <Pause className="w-5 h-5" /> Jeda
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-current" /> {timeLeft === 120 ? 'Mulai Sikat Gigi' : 'Lanjutkan'}
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
