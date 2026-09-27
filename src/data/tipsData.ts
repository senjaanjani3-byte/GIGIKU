export interface CareTip {
  id: string;
  title: string;
  shortDescription: string;
  detailedGuide: string[];
  icon: string;
  category: 'rutin' | 'kebiasaan' | 'alat' | 'pola-hidup';
}

export const CARE_TIPS: CareTip[] = [
  {
    id: 'sikat-2x',
    title: 'Sikat Gigi 2 Kali Sehari',
    shortDescription: 'Pagi setelah sarapan dan malam sebelum tidur selama minimal 2 menit.',
    detailedGuide: [
      'Gunakan sikat gigi dengan kepala sikat kecil dan bulu lembut (soft bristles).',
      'Pagi hari: sikat gigi setelah sarapan agar gigi bersih saat beraktivitas.',
      'Malam hari: sikat gigi tepat sebelum tidur, dan jangan mengonsumsi makanan/minuman manis setelahnya.'
    ],
    icon: 'Sparkles',
    category: 'rutin'
  },
  {
    id: 'pasta-fluoride',
    title: 'Gunakan Pasta Gigi Berfluoride',
    shortDescription: 'Fluoride memperkuat email gigi dan mencegah karies dini.',
    detailedGuide: [
      'Untuk orang dewasa: gunakan pasta gigi seukuran biji jagung (pea-sized).',
      'Untuk anak di bawah 3 tahun: gunakan seukuran sebutir beras (smear/grain of rice).',
      'Setelah menyikat gigi, buang sisa busa, tetapi hindari berkumur berulang-ulang dengan air agar lapisan pelindung fluoride tidak terbilas habis.'
    ],
    icon: 'ShieldCheck',
    category: 'alat'
  },
  {
    id: 'bersihkan-sela',
    title: 'Bersihkan Sela-Sela Gigi (Flossing)',
    shortDescription: 'Bulu sikat tidak bisa menjangkau celah rapat antar-gigi.',
    detailedGuide: [
      'Gunakan benang gigi (dental floss) sepanjang kira-kira 40 cm.',
      'Kaitkan benang membentuk huruf C melingkari sisi satu gigi, lalu geser perlahan ke atas menjauhi gusi.',
      'Lakukan minimal 1 kali sehari, terutama sebelum menyikat gigi di malam hari.'
    ],
    icon: 'Repeat',
    category: 'alat'
  },
  {
    id: 'batasi-manis',
    title: 'Batasi Makanan & Minuman Manis',
    shortDescription: 'Gula adalah makanan favorit bakteri penghasil asam perusak enamel.',
    detailedGuide: [
      'Hindari ngemil makanan manis lengket (permen kenyal, cokelat, biskuit) di sela waktu makan utama.',
      'Jika ingin makan makanan manis, santaplah bersama jam makan utama karena produksi air liur sedang tinggi.',
      'Selalu bilas rongga mulut dengan air putih setelah mengonsumsi kudapan manis.'
    ],
    icon: 'Apple',
    category: 'pola-hidup'
  },
  {
    id: 'air-putih',
    title: 'Perbanyak Minum Air Putih',
    shortDescription: 'Mencegah mulut kering dan membilas sisa makanan secara alami.',
    detailedGuide: [
      'Minum minimal 8 gelas atau 2 liter air putih setiap hari.',
      'Air liur (saliva) mengandung antibodi dan mineral kalsium alami yang melindungi enamel dari asam.',
      'Air putih bebas kalori dan bebas asam, menjadikannya minuman terbaik untuk gigi sehat.'
    ],
    icon: 'Droplets',
    category: 'pola-hidup'
  },
  {
    id: 'stop-merokok',
    title: 'Hindari Rokok dan Produk Tembakau',
    shortDescription: 'Merokok merusak pembuluh darah gusi dan memicu kanker mulut.',
    detailedGuide: [
      'Nikotin dan tar menempel di permukaan gigi menyebabkan noda kuning-hitam yang sulit hilang.',
      'Merokok menyamarkan tanda radang gusi karena menyempitkan pembuluh darah, sehingga gusi jarang berdarah meski penyakit tulang rahang sudah parah.',
      'Penggunaan rokok elektrik (vape) juga terbukti menyebabkan mulut kering dan ketidakseimbangan mikrobiota mulut.'
    ],
    icon: 'Ban',
    category: 'kebiasaan'
  },
  {
    id: 'bukan-alat',
    title: 'Jangan Gunakan Gigi untuk Membuka Benda',
    shortDescription: 'Gigi bukan gunting atau tang pembuka tutup botol.',
    detailedGuide: [
      'Jangan menggigit bungkus plastik kemasan, selotip, atau membuka tutup botol dengan gigi.',
      'Beban gigit mendadak pada tepi email tipis dapat memicu fraktur atau retakan gigi yang membutuhkan penambalan mahal.',
      'Hindari pula kebiasaan mengunyah es batu yang dapat menimbulkan micro-crack pada email gigi.'
    ],
    icon: 'AlertTriangle',
    category: 'kebiasaan'
  },
  {
    id: 'periksa-rutin',
    title: 'Periksa Gigi Rutin Setiap 6 Bulan',
    shortDescription: 'Pencegahan selalu lebih mudah, nyaman, dan terjangkau dibanding pengobatan.',
    detailedGuide: [
      'Lakukan pembersihan karang gigi (scaling) secara berkala agar gusi tetap menempel kuat pada tulang rahang.',
      'Deteksi karies sejak bercak putih sebelum lubang mencapai saraf gigi.',
      'Konsultasikan kebutuhan perawatan ortodonti (kawat gigi) atau estetika dengan dokter gigi profesional.'
    ],
    icon: 'CalendarCheck',
    category: 'rutin'
  }
];

export const DAILY_DENTAL_FACTS = [
  'Tahukah Anda? Email gigi adalah substansi paling keras di seluruh tubuh manusia, bahkan lebih keras daripada tulang rangka!',
  'Tahukah Anda? Air liur Anda menghasilkan sekitar 1 hingga 1.5 liter cairan setiap hari untuk melindungi gigi dari asam dan bakteri.',
  'Tahukah Anda? Menyikat gigi hanya membersihkan sekitar 60% permukaan gigi. 40% sisanya berada di sela-sela gigi dan hanya bisa dijangkau oleh benang gigi!',
  'Tahukah Anda? Karang gigi (kalkulus) hanya membutuhkan waktu 24 hingga 72 jam untuk mulai mengeras dari plak lunak jika tidak disikat.',
  'Tahukah Anda? Mengunyah makanan menggunakan kedua sisi rahang secara seimbang membantu menjaga keseimbangan otot wajah dan kebersihan alami gigi.',
  'Tahukah Anda? Ganti sikat gigi Anda setelah sembuh dari flu atau batuk agar bakteri tidak berpindah kembali ke mulut.'
];
