import { ScreeningQuestion, ScreeningResult } from '../types/dental';

export const SCREENING_QUESTIONS: ScreeningQuestion[] = [
  {
    id: 1,
    question: 'Apakah gigi Anda sering terasa sakit atau berdenyut?',
    description: 'Rasa sakit spontan pada gigi menunjukkan adanya peradangan pada lapisan saraf atau infeksi aktif.',
    options: [
      {
        text: 'Tidak pernah sakit',
        score: 0,
        severity: 'low',
        tip: 'Pertahankan kebersihan gigi dengan sikat rutin 2 kali sehari.'
      },
      {
        text: 'Hanya kadang-kadang saat mengunyah makanan keras',
        score: 2,
        severity: 'moderate',
        tip: 'Bisa menandakan adanya retakan mikro, tumpatan goyang, atau gigi berlubang awal.'
      },
      {
        text: 'Sering sakit berdenyut, bahkan mengganggu tidur di malam hari',
        score: 5,
        severity: 'high',
        tip: 'Gejala khas pulpitis ireversibel (saraf gigi meradang parah), butuh tindakan dokter gigi segera.'
      }
    ]
  },
  {
    id: 2,
    question: 'Apakah gusi Anda mudah berdarah?',
    description: 'Gusi berdarah saat menyikat gigi atau makan adalah tanda primer terjadinya peradangan (gingivitis).',
    options: [
      {
        text: 'Tidak pernah berdarah, gusi berwarna merah muda kenyal',
        score: 0,
        severity: 'low',
        tip: 'Kondisi gusi Anda tergolong prima dan sehat.'
      },
      {
        text: 'Kadang berdarah sedikit saat menyikat gigi atau memakai benang gigi',
        score: 2,
        severity: 'moderate',
        tip: 'Gusi mengalami radang ringan (gingivitis) akibat penumpukan plak di tepi gusi.'
      },
      {
        text: 'Sering berdarah spontan tanpa disikat, gusi merah tua dan bengkak',
        score: 4,
        severity: 'high',
        tip: 'Indikasi peradangan gusi aktif atau radang jaringan pendukung gigi (periodontitis).'
      }
    ]
  },
  {
    id: 3,
    question: 'Apakah terdapat bau mulut (halitosis) yang menetap?',
    description: 'Bau mulut yang tidak kunjung hilang sering kali bersumber dari gas sulfur sisa bakteri di lidah atau gigi berlubang.',
    options: [
      {
        text: 'Napas segar, tidak ada keluhan bau mulut',
        score: 0,
        severity: 'low',
        tip: 'Lidah bersih dan aliran saliva cukup melindungi dari bau mulut.'
      },
      {
        text: 'Kadang muncul di pagi hari atau saat berpuasa/kurang minum',
        score: 1,
        severity: 'low',
        tip: 'Fisiologis normal akibat berkurangnya air liur, dapat diatasi dengan minum air dan sikat lidah.'
      },
      {
        text: 'Ya, bau mulut menetap meski sudah sikat gigi dan kumur-kumur',
        score: 3,
        severity: 'high',
        tip: 'Bau menetap biasanya berasal dari gigi busuk tersembunyi, karang gigi, atau kantung gusi bernanah.'
      }
    ]
  },
  {
    id: 4,
    question: 'Apakah Anda melihat atau merasakan adanya gigi berlubang?',
    description: 'Gigi berlubang bisa berupa bercak cokelat/hitam, celah yang sering kemasukan makanan, atau lubang nyata.',
    options: [
      {
        text: 'Tidak ada, semua permukaan gigi utuh dan bersih',
        score: 0,
        severity: 'low',
        tip: 'Gunakan pasta gigi fluoride untuk menjaga enamel tetap kuat.'
      },
      {
        text: 'Ada bercak hitam atau makanan sering tersangkut di celah gigi',
        score: 2,
        severity: 'moderate',
        tip: 'Kemungkinan karies dini atau lubang kecil yang belum menyentuh saraf gigi.'
      },
      {
        text: 'Ada lubang besar yang tampak jelas atau mahkota gigi sudah patah',
        score: 5,
        severity: 'high',
        tip: 'Segera lakukan penambalan atau perawatan saluran akar sebelum gigi patah habis.'
      }
    ]
  },
  {
    id: 5,
    question: 'Apakah gigi Anda sensitif atau ngilu saat terkena dingin/panas?',
    description: 'Hipersensitivitas dentin muncul saat email menipis atau gusi melorot membuka pori-pori dentin.',
    options: [
      {
        text: 'Tidak sensitif sama sekali, nyaman makan minum apa saja',
        score: 0,
        severity: 'low',
        tip: 'Lapisan enamel gigi Anda masih tebal melindungi saraf dentin.'
      },
      {
        text: 'Ngilu sesaat beberapa detik hanya jika minum es yang sangat dingin',
        score: 2,
        severity: 'moderate',
        tip: 'Dentin terbuka ringan. Gunakan pasta gigi sensitif ber-potassium nitrate.'
      },
      {
        text: 'Ngilu menusuk tajam dan lama pada makanan manis, panas, atau dingin',
        score: 4,
        severity: 'high',
        tip: 'Bisa menandakan lubang dalam dekat pulpa atau abrasi berat di leher gigi.'
      }
    ]
  },
  {
    id: 6,
    question: 'Apakah terdapat sariawan yang sering muncul atau sulit sembuh?',
    description: 'Sariawan biasa sembuh dalam 7-14 hari. Luka yang lebih dari 2 minggu memerlukan evaluasi khusus.',
    options: [
      {
        text: 'Jarang sekali sariawan',
        score: 0,
        severity: 'low',
        tip: 'Mukosa mulut sehat dengan asupan vitamin dan hidrasi baik.'
      },
      {
        text: 'Hanya muncul jika tergigit atau sedang kelelahan/stres',
        score: 1,
        severity: 'low',
        tip: 'Kumur air garam hangat dan cukupi istirahat serta vitamin B kompleks.'
      },
      {
        text: 'Sering muncul banyak, atau ada satu luka sariawan > 2 minggu tak kunjung sembuh',
        score: 4,
        severity: 'high',
        tip: 'Luka mulut yang tidak sembuh lebih dari 2 pekan wajib diperiksa dokter gigi untuk biopsi/evaluasi lesi mukosa.'
      }
    ]
  },
  {
    id: 7,
    question: 'Apakah Anda melihat adanya endapan karang gigi (kalkulus)?',
    description: 'Endapan keras kekuningan atau kehitaman terutama di balik gigi seri bawah dan gigi geraham atas.',
    options: [
      {
        text: 'Gigi bersih dan licin, tidak ada lapisan keras kuning/cokelat',
        score: 0,
        severity: 'low',
        tip: 'Pemakaian sikat gigi dan benang gigi Anda sangat efektif.'
      },
      {
        text: 'Ada sedikit endapan kuning tipis di bagian belakang gigi seri bawah',
        score: 2,
        severity: 'moderate',
        tip: 'Karang gigi supragingiva mulai terbentuk dan memerlukan scaling.'
      },
      {
        text: 'Banyak karang gigi tebal berwarna cokelat/hitam dan terasa kasar',
        score: 4,
        severity: 'high',
        tip: 'Karang gigi tebal merusak perlekatan gusi dan tulang rahang penyangga gigi.'
      }
    ]
  },
  {
    id: 8,
    question: 'Kapan terakhir kali Anda melakukan pemeriksaan ke dokter gigi?',
    description: 'Pemeriksaan rutin berkala adalah standar emas menjaga kesehatan mulut preventif.',
    options: [
      {
        text: 'Kurang dari 6 bulan yang lalu',
        score: 0,
        severity: 'low',
        tip: 'Bagus sekali! Anda disiplin menjaga jadwal kontrol berkala.'
      },
      {
        text: 'Antara 6 bulan sampai 1 tahun yang lalu',
        score: 2,
        severity: 'moderate',
        tip: 'Sudah saatnya membuat jadwal kunjungan kontrol berikutnya.'
      },
      {
        text: 'Lebih dari 1 tahun yang lalu atau belum pernah sama sekali',
        score: 4,
        severity: 'high',
        tip: 'Sangat disarankan segera berkunjung untuk general check-up dan scaling.'
      }
    ]
  }
];

export function calculateScreeningResult(selectedAnswers: Record<number, number>): ScreeningResult {
  let totalScore = 0;
  const maxPossible = 33;
  const flaggedSymptoms: string[] = [];
  let urgentFlag = false;

  SCREENING_QUESTIONS.forEach((q) => {
    const chosenIndex = selectedAnswers[q.id];
    if (chosenIndex !== undefined && q.options[chosenIndex]) {
      const option = q.options[chosenIndex];
      totalScore += option.score;

      if (option.severity === 'high') {
        flaggedSymptoms.push(`${q.question.replace('Apakah ', '').replace('?', '')}: ${option.text}`);
        if (q.id === 1 || q.id === 4 || q.id === 6) {
          urgentFlag = true;
        }
      }
    }
  });

  const recommendations: string[] = [];

  if (totalScore <= 4) {
    recommendations.push('Pertahankan kebiasaan baik menyikat gigi 2 kali sehari selama 2 menit.');
    recommendations.push('Gunakan pasta gigi berfluoride dan benang gigi sekali sehari.');
    recommendations.push('Jadwalkan kunjungan periksa rutin 6 bulan sekali untuk pembersihan karang gigi ringan.');
    return {
      score: totalScore,
      maxScore: maxPossible,
      level: 'low',
      title: 'Risiko Rendah (Kondisi Gigi Sangat Baik)',
      summary: 'Kondisi kesehatan gigi dan mulut Anda secara umum dalam kategori prima. Tidak ditemukan tanda bahaya atau infeksi akut.',
      colorClass: 'text-emerald-600 border-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-800 dark:text-emerald-400',
      flaggedSymptoms,
      recommendations,
      urgentFlag: false
    };
  } else if (totalScore <= 11) {
    recommendations.push('Perbaiki teknik sikat gigi dengan bulu lembut dan sudut 45 derajat.');
    recommendations.push('Mulai gunakan benang gigi (dental floss) setiap malam sebelum tidur.');
    recommendations.push('Jadwalkan pembersihan karang gigi (scaling) dan penambalan dini dalam 1-2 pekan ke depan.');
    recommendations.push('Hindari penggunaan tusuk gigi kayu keras yang dapat merusak celah gusi.');
    return {
      score: totalScore,
      maxScore: maxPossible,
      level: 'moderate',
      title: 'Perlu Perhatian (Ada Potensi Masalah Dini)',
      summary: 'Ditemukan beberapa indikator masalah gigi atau gusi tahap awal (seperti radang gusi ringan, plak mengeras, atau ngilu). Perawatan dini akan mencegah masalah membesar.',
      colorClass: 'text-amber-600 border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-400',
      flaggedSymptoms,
      recommendations,
      urgentFlag: false
    };
  } else {
    recommendations.push('Segera buat janji konsultasi dan pemeriksaan langsung ke dokter gigi atau klinik terdekat.');
    recommendations.push('Hindari mengunyah pada sisi gigi yang sakit atau berlubang.');
    recommendations.push('Jangan menaruh obat pereda nyeri (seperti puyer asam mefenamat/aspirin) langsung di lubang gigi karena dapat membakar mukosa gusi.');
    recommendations.push('Lakukan pembersihan karang gigi menyeluruh dan perawatan karies aktif.');
    return {
      score: totalScore,
      maxScore: maxPossible,
      level: 'high',
      title: 'Disarankan Melakukan Pemeriksaan ke Dokter Gigi',
      summary: 'Ditemukan gejala yang memerlukan penanganan klinis oleh dokter gigi atau terapis gigi (seperti nyeri berdenyut, gusi berdarah aktif, gigi berlubang nyata, atau karang gigi tebal).',
      colorClass: 'text-rose-600 border-rose-300 bg-rose-50 dark:bg-rose-950/30 dark:border-rose-800 dark:text-rose-400',
      flaggedSymptoms,
      recommendations,
      urgentFlag
    };
  }
}
