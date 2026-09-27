import { QuizQuestion } from '../types/dental';

export const GENERAL_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Berapa kali sehari sebaiknya kita menyikat gigi?',
    options: [
      'Cukup 1 kali sehari saat mandi pagi',
      'Minimal 2 kali sehari (pagi setelah sarapan dan malam sebelum tidur)',
      'Hanya saat gigi terasa kotor atau bau',
      '5 kali sehari setiap selesai makan kudapan'
    ],
    correctAnswerIndex: 1,
    explanation: 'Standar kesehatan gigi internasional menyarankan menyikat gigi minimal 2 kali sehari: pagi sesudah sarapan untuk membersihkan sisa makanan dan malam sebelum tidur untuk melindungi gigi dari asam bakteri saat air liur menurun.',
    category: 'Kebiasaan Dasar'
  },
  {
    id: 2,
    question: 'Kapan waktu yang paling tepat dan penting untuk menyikat gigi di malam hari?',
    options: [
      'Tepat sebelum mandi sore jam 5',
      'Tepat sebelum tidur malam (dan tidak makan/minum manis lagi setelahnya)',
      'Satu jam sebelum makan malam',
      'Saat bangun tidur di tengah malam'
    ],
    correctAnswerIndex: 1,
    explanation: 'Saat tidur malam, produksi air liur yang berfungsi sebagai pembersih alami berkurang drastis. Menyikat gigi tepat sebelum tidur memastikan tidak ada sisa gula yang difermentasi bakteri menjadi asam selama berjam-jam.',
    category: 'Waktu Sikat Gigi'
  },
  {
    id: 3,
    question: 'Apa fungsi utama zat Fluoride yang ada pada pasta gigi?',
    options: [
      'Hanya memberi rasa segar dan wangi mint',
      'Memutihkan gigi secara instan dalam 1 hari',
      'Memperkuat lapisan email gigi dan membantu remineralisasi dari asam',
      'Menggantikan fungsi menyikat gigi sehingga tidak perlu digosok'
    ],
    correctAnswerIndex: 2,
    explanation: 'Fluoride berikatan dengan kristal hidroksiapatit pada email gigi membentuk fluorapatit yang jauh lebih tahan terhadap serangan asam bakteri, serta merangsang remineralisasi karies tahap dini.',
    category: 'Bahan Pasta Gigi'
  },
  {
    id: 4,
    question: 'Apa penyebab utama terjadinya karies gigi (gigi berlubang)?',
    options: [
      'Gigi termakan oleh cacing gigi yang hidup di gusi',
      'Asam yang diproduksi bakteri (Streptococcus mutans) dari sisa karbohidrat/gula',
      'Hanya karena faktor keturunan orang tua',
      'Terlalu sering minum air putih dingin'
    ],
    correctAnswerIndex: 1,
    explanation: 'Mitos "ulat gigi" tidak benar. Karies disebabkan oleh bakteri plak yang memakan sisa karbohidrat/gula dan menghasilkan asam. Asam ini melarutkan mineral kalsium email hingga akhirnya gigi berlubang.',
    category: 'Penyakit Karies'
  },
  {
    id: 5,
    question: 'Berikut ini yang merupakan tanda utama gingivitis (radang gusi) adalah...',
    options: [
      'Gusi berwarna merah muda kenyal seperti kulit jeruk',
      'Gusi bengkak, kemerahan, dan mudah berdarah saat sikat gigi',
      'Gigi berubah warna menjadi putih mutiara berkilau',
      'Lidah terasa kebas setelah makan sambal'
    ],
    correctAnswerIndex: 1,
    explanation: 'Tanda klasik gingivitis adalah gusi tampak merah tua, bengkak/membulat, mengkilap, dan mudah berdarah saat disentuh bulu sikat gigi atau saat makan buah apel.',
    category: 'Penyakit Gusi'
  },
  {
    id: 6,
    question: 'Mengapa gigi perlu diperiksa secara rutin ke dokter gigi minimal setiap 6 bulan sekali?',
    options: [
      'Hanya jika gigi sudah terasa sakit berdenyut hebat',
      'Karena banyak penyakit gigi seperti lubang kecil dan radang gusi tidak terasa sakit di tahap awal',
      'Supaya gigi langsung dicabut semua dan diganti gigi palsu',
      'Hanya untuk membeli sikat gigi baru'
    ],
    correctAnswerIndex: 1,
    explanation: 'Sebagian besar masalah gigi berkembang tanpa rasa sakit. Pemeriksaan 6 bulan sekali memungkinkan dokter mendeteksi lubang kecil sedini mungkin dan membersihkan karang gigi sebelum merusak tulang rahang.',
    category: 'Pemeriksaan Rutin'
  },
  {
    id: 7,
    question: 'Berapa durasi waktu yang dianjurkan untuk menyikat seluruh gigi secara menyeluruh?',
    options: [
      '30 detik agar cepat selesai',
      'Minimal 2 menit (sekitar 30 detik untuk setiap kuadran mulut)',
      '10 menit dengan sekuat tenaga',
      '15 detik cukup di gigi bagian depan saja'
    ],
    correctAnswerIndex: 1,
    explanation: 'Waktu 2 menit adalah standar klinis untuk memastikan seluruh permukaan luar, dalam, dan permukaan kunyah di keempat kuadran mulut (kanan atas, kiri atas, kiri bawah, kanan bawah) terbersihkan dengan baik.',
    category: 'Teknik Sikat Gigi'
  },
  {
    id: 8,
    question: 'Bagaimana cara membersihkan karang gigi (kalkulus) yang sudah mengeras?',
    options: [
      'Menyikat gigi sekeras-kerasnya memakai sikat berbulu kawat',
      'Menggosok gigi dengan garam dapur atau baking soda setiap hari',
      'Melakukan prosedur scaling menggunakan alat ultrasonik di klinik dokter gigi',
      'Mencungkil sendiri dengan peniti atau jarum'
    ],
    correctAnswerIndex: 2,
    explanation: 'Karang gigi adalah endapan mineral yang telah membatu. Upaya mencungkil sendiri atau menggosok kasar hanya akan melukai gusi dan mengikis email. Karang gigi hanya bisa dilepas dengan aman melalui scaling dokter gigi.',
    category: 'Karang Gigi'
  },
  {
    id: 9,
    question: 'Bagian apa di dalam rongga mulut yang paling sering menjadi sarang utama bakteri penyebab bau mulut?',
    options: [
      'Punggung lidah (tongue coating)',
      'Langit-langit mulut bagian keras',
      'Bibir bagian luar',
      'Gigi seri bawah bagian depan'
    ],
    correctAnswerIndex: 0,
    explanation: 'Permukaan lidah yang berpapila kasar menjadi tempat menempelnya sel mati dan bakteri anaerob penghasil gas sulfur. Membersihkan lidah setiap hari sangat ampuh menghempaskan bau mulut.',
    category: 'Bau Mulut'
  },
  {
    id: 10,
    question: 'Berapa banyak pasta gigi yang dianjurkan untuk orang dewasa?',
    options: [
      'Memenuhi seluruh bulu sikat dari ujung ke ujung',
      'Seukuran biji jagung atau kacang polong (pea-sized)',
      'Cukup dicelupkan ke air tanpa pasta gigi',
      'Sebanyak satu sendok makan'
    ],
    correctAnswerIndex: 1,
    explanation: 'Seukuran biji jagung sudah mengandung konsentrasi fluoride yang cukup untuk membersihkan dan melindungi seluruh gigi tanpa menghasilkan busa berlebih yang membuat ingin cepat meludah.',
    category: 'Kebiasaan Dasar'
  }
];

export const COUNSELING_PREPOST_QUESTIONS: QuizQuestion[] = [
  {
    id: 101,
    question: 'Kapan waktu menyikat gigi yang paling penting agar gigi tidak berlubang saat tidur?',
    options: [
      'Malam sebelum tidur',
      'Sore hari saat mandi',
      'Siang hari setelah makan siang',
      'Hanya pagi hari'
    ],
    correctAnswerIndex: 0,
    explanation: 'Malam sebelum tidur adalah waktu krusial karena air liur berkurang drastis saat tidur sehingga gigi mudah dirusak asam jika tidak disikat.',
    category: 'Waktu Sikat'
  },
  {
    id: 102,
    question: 'Apa tanda awal gusi yang mengalami radang (gingivitis)?',
    options: [
      'Gigi langsung copot sendiri',
      'Gusi bengkak dan mudah berdarah saat disikat',
      'Gusi berubah warna jadi hitam pekat',
      'Muncul rasa kebas di pipi'
    ],
    correctAnswerIndex: 1,
    explanation: 'Gusi mudah berdarah saat disikat adalah tanda paling awal adanya radang gusi akibat plak bakteri.',
    category: 'Penyakit Gusi'
  },
  {
    id: 103,
    question: 'Berapa sudut kemiringan bulu sikat gigi yang dianjurkan pada batas gusi dan gigi?',
    options: [
      '90 derajat tegak lurus',
      '45 derajat mengarah ke garis gusi',
      '0 derajat sejajar datar',
      '180 derajat terbalik'
    ],
    correctAnswerIndex: 1,
    explanation: 'Sudut 45 derajat (teknik Bass) memungkinkan ujung bulu sikat masuk membersihkan sulkus gusi tempat plak bakteri bersembunyi.',
    category: 'Teknik Sikat'
  },
  {
    id: 104,
    question: 'Berapa lama durasi menyikat gigi yang ideal untuk seluruh bagian mulut?',
    options: [
      '30 detik',
      '2 menit',
      '10 menit',
      '5 detik'
    ],
    correctAnswerIndex: 1,
    explanation: 'Dua menit adalah waktu optimal untuk membersihkan seluruh kuadran gigi tanpa merusak jaringan gusi.',
    category: 'Durasi Sikat'
  },
  {
    id: 105,
    question: 'Apakah karang gigi bisa hilang hanya dengan menyikat gigi biasa di rumah?',
    options: [
      'Bisa, asalkan sikat gigi 10 kali sehari',
      'Bisa jika menggunakan baking soda dan cuka',
      'Tidak bisa, harus dibersihkan dengan scaling oleh dokter gigi/terapis gigi',
      'Bisa rontok dengan makan kerupuk keras'
    ],
    correctAnswerIndex: 2,
    explanation: 'Karang gigi telah mengeras (termineralisasi) dan hanya bisa dilepas dengan alat ultrasonik scaler profesional.',
    category: 'Karang Gigi'
  }
];
