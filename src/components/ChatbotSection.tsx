import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, AlertTriangle, ShieldCheck } from 'lucide-react';
import { ChatMessage } from '../types/dental';
import { ToothMascot } from './DentalIllustrations';

const QUICK_QUESTIONS = [
  'Kenapa gusi saya sering berdarah saat sikat gigi?',
  'Bagaimana cara mengatasi bau mulut yang membandel?',
  'Kenapa gigi saya ngilu saat minum es dingin?',
  'Bagaimana cara menyikat gigi yang benar?',
  'Apakah scaling bisa membuat gigi jadi tipis dan goyang?',
  'Kapan anak-anak harus mulai diajak ke dokter gigi?'
];

// Comprehensive local expert knowledge base for offline/fallback consultation
function getLocalDentalAdvice(query: string): { reply: string; isEmergency: boolean } {
  const q = query.toLowerCase();

  // Emergency triage checks
  if (
    q.includes('sulit bernapas') ||
    q.includes('susah menelan') ||
    q.includes('bengkak besar di leher') ||
    q.includes('demam tinggi') ||
    q.includes('darah tidak berhenti') ||
    q.includes('patah rahang') ||
    q.includes('mata bengkak')
  ) {
    return {
      reply: `⚠️ **PERINGATAN GAWAT DARURAT GIGI & MULUT:**\n\nGejala yang Anda sebutkan (seperti pembengkakan besar yang menjalar ke leher/wajah, demam tinggi, kesulitan menelan/bernapas, atau perdarahan yang tidak kunjung berhenti) merupakan kondisi darurat medis (spatium fasial / infeksi akut).\n\n**TINDAKAN SEGERA:**\n1. Segera kunjungi Instalasi Gawat Darurat (IGD) rumah sakit atau dokter gigi spesialis bedah mulut terdekat sekarang juga.\n2. Jangan menekan atau mengompres panas pada area yang bengkak.\n3. Jangan menunda penanganan medis langsung!`,
      isEmergency: true
    };
  }

  if (q.includes('darah') || q.includes('gusi berdarah') || q.includes('gingivitis')) {
    return {
      reply: `Halo! Gusi yang mudah berdarah umumnya merupakan tanda peradangan gusi (**Gingivitis**) yang disebabkan oleh penumpukan plak bakteri di perbatasan gigi dan gusi.\n\n**Penanganan yang Dianjurkan:**\n1. **Tetap sikat gigi:** Jangan berhenti menyikat area yang berdarah! Sikatlah secara lebih lembut dengan bulu sikat *ultra-soft* dan gerakan melingkar 45°.\n2. **Gunakan benang gigi (dental floss):** Bersihkan sela-sela gigi setiap malam sebelum tidur.\n3. **Pembersihan karang gigi (Scaling):** Kunjungi dokter gigi atau terapis gigi untuk scaling, karena karang gigi yang mengeras tidak bisa rontok hanya dengan sikat biasa.\n\n*Catatan Edukasi: Informasi ini bersifat edukatif dan bukan diagnosis pasti. Jika gusi berdarah spontan terus-menerus, segera periksakan ke dokter gigi.*`,
      isEmergency: false
    };
  }

  if (q.includes('bau mulut') || q.includes('halitosis') || q.includes('napas')) {
    return {
      reply: `Halo! Sekitar 90% penyebab bau mulut (**Halitosis**) berasal dari dalam rongga mulut kita, terutama akibat gas sulfur yang dihasilkan bakteri anaerob.\n\n**Langkah Mengatasinya:**\n1. **Bersihkan lidah:** Sikat lembut punggung lidah atau gunakan *tongue cleaner* setiap hari. Punggung lidah adalah sarang utama bakteri bau mulut.\n2. **Periksa gigi berlubang & karang:** Lubang gigi sering menjadi tempat pembusukan sisa makanan yang memicu bau tidak sedap.\n3. **Banyak minum air putih:** Mulut yang kering mempercepat perkembangbiakan bakteri. Minumlah minimal 2 liter air sehari.\n4. **Flossing:** Bersihkan sisa makanan di sela gigi yang tidak terjangkau sikat.\n\n*Jika bau mulut menetap meski mulut sudah bersih, konsultasikan ke dokter gigi untuk menyingkirkan infeksi saku gusi atau asam lambung (GERD).*`,
      isEmergency: false
    };
  }

  if (q.includes('sensitif') || q.includes('ngilu') || q.includes('dingin') || q.includes('panas')) {
    return {
      reply: `Halo! Rasa ngilu tajam sesaat saat terkena makanan dingin, panas, atau manis umumnya adalah **Hipersensitivitas Dentin (Gigi Sensitif)**.\n\n**Penyebab & Cara Mengatasinya:**\n1. **Penyebab:** Lapisan email pelindung menipis atau gusi menyusut (resesi gusi), sehingga pori-pori dentin terbuka langsung ke saraf gigi.\n2. **Gunakan pasta gigi khusus gigi sensitif:** Yang mengandung potassium nitrate atau stannous fluoride secara teratur selama 2-4 pekan.\n3. **Ganti sikat gigi:** Gunakan sikat berbulu halus (soft) dan hindari menggosok horizontal terlalu keras.\n4. **Hindari asam berlebih:** Kurangi soda, cuka, dan jeruk nipis berlebih.\n\n*Bila ngilu berlangsung terus-menerus atau berubah menjadi sakit berdenyut spontan, bisa jadi lubang sudah dalam dan membutuhkan penambalan segera.*`,
      isEmergency: false
    };
  }

  if (q.includes('cara sikat') || q.includes('menyikat') || q.includes('teknik')) {
    return {
      reply: `Halo! Menyikat gigi yang benar membutuhkan teknik, durasi, dan waktu yang tepat:\n\n**1. Teknik yang Benar (Teknik Bass):**\n- Posisikan bulu sikat miring 45° menghadap batas gusi dan gigi.\n- Getarkan lembut dengan gerakan memutar kecil, lalu sapukan ke arah mahkota gigi.\n- Bersihkan seluruh permukaan luar, permukaan dalam, dan permukaan kunyah gigi.\n\n**2. Waktu & Durasi:**\n- Minimal **2 kali sehari**: Pagi setelah sarapan dan malam tepat sebelum tidur.\n- Durasi minimal **2 menit** (gunakan fitur Timer di aplikasi ini!).\n\n**3. Sikat Lidah:**\n- Akhiri dengan menyikat lembut permukaan lidah dari belakang ke depan.\n\n*Gantilah sikat gigi Anda setiap 3 bulan sekali atau bila bulunya sudah mulai mekar!*`,
      isEmergency: false
    };
  }

  if (q.includes('scaling') || q.includes('karang gigi') || q.includes('kalkulus') || q.includes('tipis')) {
    return {
      reply: `Halo! Ada mitos populer bahwa scaling membuat gigi jadi tipis dan renggang. **Itu mitos yang salah!**\n\n**Fakta Ilmiah Scaling:**\n1. Alat scaling (*ultrasonic scaler*) bekerja dengan getaran ultrasonik frekuensi tinggi dan semprotan air untuk merontokkan karang gigi, **bukan mengikis atau mengamplas enamel gigi**.\n2. Rasa celah atau renggang setelah scaling timbul karena karang gigi tebal yang tadinya menutupi celah gigi telah hilang, dan gusi yang bengkak mulai mereda ke bentuk aslinya.\n3. Karang gigi **wajib dibersihkan setiap 6 bulan sekali** karena jika dibiarkan akan merusak tulang penyangga gigi dan membuat gigi goyang hingga copot.\n\n*Scaling aman, tidak merusak gigi, dan sangat penting untuk kesehatan gusi jangka panjang!*`,
      isEmergency: false
    };
  }

  if (q.includes('anak') || q.includes('balita') || q.includes('kapan')) {
    return {
      reply: `Halo! Perawatan gigi anak sebaiknya dimulai sejak dini:\n\n1. **Kapan ke dokter gigi:** Kunjungan pertama dianjurkan saat **gigi pertama tumbuh** atau paling lambat saat anak berusia **1 tahun** (First visit by first birthday).\n2. **Cara membersihkan:** Sebelum gigi tumbuh, bersihkan gusi bayi dengan kasa steril hangat. Setelah gigi tumbuh, gunakan sikat gigi bayi berbulu ekstra lembut.\n3. **Pasta gigi:** Gunakan pasta berfluoride seukuran sebutir beras (*rice grain*) untuk anak < 3 tahun, dan seukuran biji jagung (*pea-sized*) untuk anak 3-6 tahun.\n4. **Hindari susu botol saat tidur:** Jangan biarkan anak tertidur sambil mengedot susu manis, karena memicu karies botol (*rampant caries*).\n\n*Kenalkan anak ke klinik gigi dalam suasana ceria agar terbebas dari rasa takut!*`,
      isEmergency: false
    };
  }

  // General dental answer
  return {
    reply: `Terima kasih atas pertanyaannya! Rongga mulut yang sehat adalah cerminan tubuh yang sehat.\n\nUntuk keluhan Anda mengenai "${query}", langkah terbaik secara umum adalah:\n1. Menjaga kebersihan gigi dengan sikat gigi 2 kali sehari selama 2 menit menggunakan pasta gigi berfluoride.\n2. Membersihkan sela-sela gigi dengan dental floss setiap hari.\n3. Mengurangi makanan dan minuman manis serta asam.\n4. Melakukan konsultasi dan pemeriksaan langsung ke dokter gigi atau puskesmas/klinik terdekat.\n\n*Peringatan Medis: Informasi ini disediakan oleh aplikasi Senyum Sehat untuk keperluan edukasi dan tidak dapat menggantikan diagnosis medis langsung oleh dokter gigi.*`,
    isEmergency: false
  };
}

export const ChatbotSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Halo! Saya **drg. Senyum**, asisten virtual edukasi kesehatan gigi dan mulut di aplikasi **Senyum Sehat** 😊.\n\nAda yang ingin Anda tanyakan seputar kesehatan gigi, cara menyikat, gusi berdarah, atau keluhan lainnya? Silakan ketik pertanyaan Anda di bawah!',
      timestamp: 'Baru saja'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      // First attempt: call server-side proxy /api/chat with Gemini
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });

      if (response.ok) {
        const data = await response.json();
        const replyText = data.reply || data.text;
        if (replyText) {
          setMessages((prev) => [
            ...prev,
            {
              id: `bot-${Date.now()}`,
              sender: 'assistant',
              text: replyText,
              timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            }
          ]);
          setIsLoading(false);
          return;
        }
      }
    } catch {
      // Fallback seamlessly to local intelligent dental engine
    }

    // Fallback: Local Dental Engine
    setTimeout(() => {
      const localResult = getLocalDentalAdvice(text);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'assistant',
          text: localResult.reply,
          timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
          isEmergencyAlert: localResult.isEmergency
        }
      ]);
      setIsLoading(false);
    }, 450);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-sky-100 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col h-[650px] max-h-[80vh]">
      {/* Chat Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-sky-600 to-sky-700 text-white flex items-center justify-between shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
            <ToothMascot mood="happy" size={32} />
          </div>
          <div>
            <h3 className="font-bold text-base flex items-center gap-1.5">
              <span>drg. Senyum</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </h3>
            <p className="text-xs text-sky-100 font-medium">Asisten Edukasi Kesehatan Gigi & Mulut</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
          <span>Edukasi Medis</span>
        </div>
      </div>

      {/* Medical Disclaimer Banner */}
      <div className="px-4 py-2 bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-900/50 flex items-center gap-2 text-[11px] text-amber-800 dark:text-amber-300 shrink-0">
        <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
        <span>
          <strong>Disclaimer:</strong> Chatbot ini memberikan informasi edukatif awal dan tidak menggantikan pemeriksaan langsung oleh dokter gigi.
        </span>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-950/40">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 max-w-[85%] sm:max-w-[75%] ${
              msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
            }`}
          >
            {msg.sender === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div>
              <div
                className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-sky-600 text-white rounded-tr-none'
                    : msg.isEmergencyAlert
                    ? 'bg-rose-50 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 rounded-tl-none'
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
              <div
                className={`text-[10px] text-slate-400 mt-1 px-1 ${
                  msg.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce [animation-delay:0.4s]" />
              <span className="text-xs text-slate-500 ml-2">drg. Senyum sedang mengetik...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Questions */}
      <div className="px-4 py-2.5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-x-auto flex gap-2 shrink-0 no-scrollbar">
        <span className="text-[11px] font-semibold text-slate-400 shrink-0 self-center">
          Pertanyaan Cepat:
        </span>
        {QUICK_QUESTIONS.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(q)}
            className="text-xs text-sky-700 dark:text-sky-300 bg-sky-50 hover:bg-sky-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-sky-200 dark:border-slate-700 px-3 py-1.5 rounded-xl shrink-0 transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Tanyakan keluhan atau perawatan gigi Anda di sini..."
            className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-xs sm:text-sm"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="px-5 py-3 bg-sky-600 hover:bg-sky-700 active:scale-95 disabled:opacity-40 disabled:pointer-events-none text-white font-bold rounded-2xl text-sm transition-all flex items-center gap-2 shadow-md shadow-sky-500/20"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Kirim</span>
          </button>
        </form>
      </div>
    </div>
  );
};
