import React, { useState, useEffect } from 'react';
import { X, Bell, Calendar, Clock, Check, BellRing } from 'lucide-react';

interface ReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReminderModal: React.FC<ReminderModalProps> = ({ isOpen, onClose }) => {
  const [morningTime, setMorningTime] = useState('06:30');
  const [nightTime, setNightTime] = useState('21:00');
  const [lastCheckupDate, setLastCheckupDate] = useState('');
  const [notificationsActive, setNotificationsActive] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const savedMorning = localStorage.getItem('senyum_morning_time');
    const savedNight = localStorage.getItem('senyum_night_time');
    const savedCheckup = localStorage.getItem('senyum_last_checkup');
    const savedNotif = localStorage.getItem('senyum_notif_enabled');

    if (savedMorning) setMorningTime(savedMorning);
    if (savedNight) setNightTime(savedNight);
    if (savedCheckup) setLastCheckupDate(savedCheckup);
    if (savedNotif === 'true') setNotificationsActive(true);
  }, []);

  if (!isOpen) return null;

  const handleRequestNotification = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setNotificationsActive(true);
        localStorage.setItem('senyum_notif_enabled', 'true');
        new Notification('Pengingat Senyum Sehat Aktif!', {
          body: 'Kami akan mengingatkan Anda untuk menyikat gigi pagi dan malam hari.',
          icon: '/favicon.ico'
        });
      }
    }
  };

  const handleSave = () => {
    localStorage.setItem('senyum_morning_time', morningTime);
    localStorage.setItem('senyum_night_time', nightTime);
    if (lastCheckupDate) {
      localStorage.setItem('senyum_last_checkup', lastCheckupDate);
    }
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  // Next checkup calculation (6 months after last checkup)
  let nextCheckupText = 'Belum diatur';
  if (lastCheckupDate) {
    const date = new Date(lastCheckupDate);
    date.setMonth(date.getMonth() + 6);
    nextCheckupText = date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-sky-100 dark:border-slate-800">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-sky-50 dark:bg-slate-800/80 border-b border-sky-100 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-sky-500 text-white shadow-sm">
              <Bell className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-white text-base">Pengingat Kesehatan Gigi</h3>
              <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">Jadwal Sikat Gigi & Kontrol Rutin</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-5">
          {/* Notification permission button */}
          {!notificationsActive && (
            <div className="p-3.5 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900/50 flex items-center justify-between gap-3">
              <div className="text-xs text-amber-900 dark:text-amber-200 leading-snug">
                Aktifkan notifikasi browser agar alarm pengingat muncul di layar HP/laptop.
              </div>
              <button
                onClick={handleRequestNotification}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold shrink-0 transition-colors"
              >
                Aktifkan
              </button>
            </div>
          )}

          {notificationsActive && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 flex items-center gap-2 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
              <BellRing className="w-4 h-4 text-emerald-600" />
              Notifikasi aktif untuk pengingat harian
            </div>
          )}

          {/* Sikat Pagi */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-sky-500" />
              Sikat Gigi Pagi (Sesudah Sarapan)
            </label>
            <input
              type="time"
              value={morningTime}
              onChange={(e) => setMorningTime(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Sikat Malam */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-indigo-500" />
              Sikat Gigi Malam (Sebelum Tidur)
            </label>
            <input
              type="time"
              value={nightTime}
              onChange={(e) => setNightTime(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Last Checkup Date */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-500" />
              Tanggal Terakhir Periksa Dokter Gigi
            </label>
            <input
              type="date"
              value={lastCheckupDate}
              onChange={(e) => setLastCheckupDate(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            {lastCheckupDate && (
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-1">
                Jadwal kontrol 6 bulan berikutnya:{' '}
                <strong className="text-sky-600 dark:text-sky-400">{nextCheckupText}</strong>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            onClick={handleSave}
            className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-2xl text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 mt-2"
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4" /> Pengingat Tersimpan!
              </>
            ) : (
              'Simpan Pengingat'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
