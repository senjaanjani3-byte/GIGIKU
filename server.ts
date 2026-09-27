import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // Initialize Gemini AI SDK if API key is present
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    try {
      ai = new GoogleGenAI({ apiKey });
    } catch (err) {
      console.error('Failed to initialize GoogleGenAI:', err);
    }
  }

  // API endpoint for chatbot drg. Senyum
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: 'Message is required' });
        return;
      }

      // Check emergency red flags
      const lower = message.toLowerCase();
      if (
        lower.includes('sulit bernapas') ||
        lower.includes('susah menelan') ||
        lower.includes('bengkak besar di leher') ||
        lower.includes('demam tinggi') ||
        lower.includes('darah tidak berhenti') ||
        lower.includes('patah rahang')
      ) {
        res.json({
          reply: `⚠️ **PERINGATAN GAWAT DARURAT GIGI & MULUT:**\n\nKondisi yang Anda sebutkan berpotensi merupakan komplikasi infeksi spatium wajah akut atau perdarahan aktif yang memerlukan pertolongan gawat darurat.\n\n**TINDAKAN SEGERA:**\n1. Kunjungi Instalasi Gawat Darurat (IGD) rumah sakit atau dokter gigi spesialis bedah mulut terdekat sekarang juga.\n2. Jangan menekan atau mengompres panas area yang bengkak.\n3. Jangan menunda penanganan medis langsung!`,
          isEmergency: true
        });
        return;
      }

      if (!ai) {
        res.status(503).json({ error: 'AI service unavailable; falling back to local engine.' });
        return;
      }

      const systemInstruction = `Anda adalah "drg. Senyum", dokter gigi asisten virtual ramah, profesional, dan edukatif di aplikasi "Senyum Sehat".
Pedoman Komunikasi:
1. Berikan penjelasan kesehatan gigi dan mulut dalam bahasa Indonesia yang sederhana, jelas, dan mudah dipahami masyarakat umum maupun anak/remaja.
2. JELASKAN dengan pendekatan medis yang akurat: penyebab, cara merawat, pencegahan, dan teknik yang benar.
3. JANGAN memberikan diagnosis definitif atau meresepkan antibiotik/obat keras secara spesifik.
4. INGATKAN selalu bahwa aplikasi ini adalah media edukasi dan sarankan pengguna untuk berkonsultasi langsung ke dokter gigi bila memerlukan tindakan fisik (seperti penambalan, pembersihan karang gigi/scaling, pencabutan, atau jika sakit berlanjut).
5. Format jawaban dengan rapi menggunakan bullet points atau poin bernomor agar nyaman dibaca.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: message,
        config: {
          systemInstruction,
          temperature: 0.6,
          maxOutputTokens: 800
        }
      });

      const reply = response.text || 'Maaf, saya tidak dapat memproses jawaban saat ini. Silakan coba lagi.';
      res.json({ reply });
    } catch (error) {
      console.error('Error generating chat reply:', error);
      res.status(500).json({ error: 'Failed to process AI chat request' });
    }
  });

  // Vite development middleware or static serving
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Senyum Sehat server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Server startup failed:', err);
});
