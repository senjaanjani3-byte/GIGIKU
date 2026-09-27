import { FlipchartSlide, AudienceCategory } from '../types/dental';

export const FLIPCHART_DECKS: Record<Exclude<AudienceCategory, 'semua'>, FlipchartSlide[]> = {
  anak: [
    {
      id: 1,
      title: 'Halo, Aku Gigi si Putih!',
      subtitle: 'Yuk Kenalan dengan Gigi Sehat Kita',
      audience: 'anak',
      visualType: 'mascot-happy',
      highlights: [
        'Gigi membantu kita mengunyah makanan lezat.',
        'Gigi membuat senyum kita cantik dan tampan!',
        'Gigi suka kalau kita membersihkannya setiap hari.'
      ],
      counselorScript: 'Adik-adik, lihat ini si Gigi Putih! Gigi kita ini adalah sahabat kita untuk makan buah, sayur, dan roti. Kalau giginya bersih, giginya tersenyum lebar seperti ini!',
      audiencePrompt: 'Siapa di sini yang giginya suka senyum lebar setiap hari?'
    },
    {
      id: 2,
      title: 'Awas, Ada Monster Kuman Plak!',
      subtitle: 'Dari Mana Datangnya Kuman di Gigi?',
      audience: 'anak',
      visualType: 'mascot-germ',
      highlights: [
        'Kuman suka makan sisa permen, cokelat, dan biskuit manis.',
        'Kuman membuat asam yang membuat gigi bolong kecil.',
        'Kalau dibiarkan, gigi bisa sakit dan nangis!'
      ],
      counselorScript: 'Nah, kalau kita habis makan permen atau cokelat tapi lupa sikat gigi, monster kuman akan berpesta di gigi kita. Kuman mengeluarkan racun asam yang melubangi rumah si Gigi!',
      audiencePrompt: 'Siapa yang mau giginya bebas dari monster kuman jahat?'
    },
    {
      id: 3,
      title: 'Senjata Rahasia: Sikat Gigi 2 Menit!',
      subtitle: 'Kapan Waktunya Kita Mengusir Kuman?',
      audience: 'anak',
      visualType: 'brushing-fun',
      highlights: [
        '1. Pagi hari setelah sarapan roti/nasi.',
        '2. Malam hari tepat sebelum tidur nyenyak.',
        'Pakai pasta gigi berfluoride seukuran biji jagung!',
        'Putar sikat memutar bulat-bulat seperti roda sepeda.'
      ],
      counselorScript: 'Kita punya senjata sakti: sikat gigi dan pasta berfluoride! Sikatnya jangan buru-buru ya, putar-putar melingkar seperti roda mobil selama 2 menit sampai kuman kabur semua!',
      audiencePrompt: 'Ayo coba gerakkan tanganmu membentuk lingkaran seperti menyikat gigi!'
    },
    {
      id: 4,
      title: 'Makanan Sahabat Gigi vs Musuh Gigi',
      subtitle: 'Pilih Makanan yang Bikin Gigi Kuat!',
      audience: 'anak',
      visualType: 'food-good-bad',
      highlights: [
        'Sahabat Gigi: Susu, keju, apel renyah, wortel, dan air putih.',
        'Kurangi: Permen manis lengket, gulali, dan soda.',
        'Jangan lupa minum air putih sehabis makan!'
      ],
      counselorScript: 'Gigi kita suka sekali kalau adik-adik minum susu dan makan buah apel segar. Rasanya renyah dan bikin gigi makin kuat seperti pahlawan super!',
      audiencePrompt: 'Sebutkan buah kesukaan adik-adik yang segar dan renyah!'
    },
    {
      id: 5,
      title: 'Ayo Berteman dengan Dokter Gigi!',
      subtitle: 'Klinik Gigi Tempat yang Menyenangkan',
      audience: 'anak',
      visualType: 'dentist-clinic',
      highlights: [
        'Dokter gigi dan perawat gigi adalah teman terbaik gigimu.',
        'Kursi gigi bisa naik-turun seperti wahana roket!',
        'Gigi dihitung dan dibersihkan agar tetap berkilau.',
        'Periksa setiap 6 bulan sekali.'
      ],
      counselorScript: 'Di klinik gigi tidak ada yang perlu ditakuti! Kursinya bisa naik turun seperti wahana bermain, ada lampu terang, dan dokter akan menghitung gigi adik-adik satu per satu.',
      audiencePrompt: 'Janji ya, nanti mau periksa gigi ke dokter gigi dengan senyum ceria!'
    }
  ],
  remaja: [
    {
      id: 101,
      title: 'Senyum Percaya Diri & Estetika Gigi',
      subtitle: 'Kesehatan Gigi Pengaruh Langsung Penampilanmu',
      audience: 'remaja',
      visualType: 'aesthetic-smile',
      highlights: [
        'Senyum rapi dan napas segar meningkatkan rasa percaya diri bergaul.',
        'Gigi kuning akibat noda kopi, teh, boba, atau rokok bisa dihindari.',
        'Kesehatan gusi menentukan estetika garis senyum (smile line).'
      ],
      counselorScript: 'Halo teman-teman! Di usia remaja, penampilan dan rasa percaya diri sangat penting saat bergaul atau presentasi. Senyum yang cerah dan napas segar berakar dari kebiasaan sederhana setiap hari.',
      audiencePrompt: 'Apa hal pertama yang kamu perhatikan saat seseorang tersenyum ke arahmu?'
    },
    {
      id: 102,
      title: 'Perawatan Khusus Kawat Gigi (Behel)',
      subtitle: 'Jangan Sampai Rapi Tapi Berlubang dan Rusak!',
      audience: 'remaja',
      visualType: 'braces-care',
      highlights: [
        'Bracket kawat gigi adalah magnet penimbun sisa makanan dan plak.',
        'Wajib pakai sikat khusus ortodonti dan sikat sela (interdental brush).',
        'Gunakan dental floss dengan threader khusus behel.',
        'Risiko white spot decalcification di sekitar bracket jika pembersihan malas.'
      ],
      counselorScript: 'Bagi yang memakai kawat gigi, ingat bahwa behel hanyalah alat merapikan. Jika tidak rajin membersihkan sela bracket, saat kawat dilepas giginya bisa penuh bercak putih karies dan gusi bengkak menutupi gigi.',
      audiencePrompt: 'Bagi yang pakai behel, seberapa sering kamu membersihkan sela kawat gigi?'
    },
    {
      id: 103,
      title: 'Bahaya Rokok, Vape, dan Minuman Asam-Manis',
      subtitle: 'Fakta Nyata di Balik Kebiasaan Gaul',
      audience: 'remaja',
      visualType: 'vape-smoke-risk',
      highlights: [
        'Vape dan rokok memicu mulut kering (xerostomia) yang meningkatkan risiko karies 3x lipat.',
        'Tar tembakau mengikat kalsium dan menghasilkan karang gigi hitam membandel.',
        'Kopi kekinian & soda memiliki pH asam yang mengikis enamel gigi secara permanen (erosi gigi).'
      ],
      counselorScript: 'Banyak mitos bahwa vape tidak merusak gigi. Faktanya, uap vape mengeringkan air liur pelindung dan memicu bakteri patogen berkembang biak dengan cepat. Ditambah konsumsi boba manis setiap hari, gigi cepat rapuh.',
      audiencePrompt: 'Berapa banyak gelas minuman manis atau kopi yang kamu konsumsi dalam seminggu?'
    },
    {
      id: 104,
      title: 'Kunci Napas Segar: Bersihkan Lidah!',
      subtitle: '90% Sumber Bau Mulut Ada di Lidahmu',
      audience: 'remaja',
      visualType: 'tongue-cleaner',
      highlights: [
        'Lapisan putih kekuningan di lidah adalah koloni bakteri penghasil sulfur (bau tak sedap).',
        'Sikat lidah atau gunakan tongue scraper dari belakang ke depan secara lembut.',
        'Minum air putih minimal 2 liter per hari.',
        'Permen mint hanya menyamarkan bau selama 15 menit, bukan menghilangkan penyebabnya.'
      ],
      counselorScript: 'Kalau kamu merasa sudah sikat gigi tapi napas masih kurang percaya diri, cek lidahmu di cermin! Membersihkan punggung lidah setiap hari adalah game-changer untuk napas segar 24 jam.',
      audiencePrompt: 'Sudahkah kamu menyikat atau mengerok lidahmu hari ini?'
    }
  ],
  dewasa: [
    {
      id: 201,
      title: 'Penyakit Periodontal: Ancaman Senyap Gigi Dewasa',
      subtitle: 'Dari Gusi Berdarah Hingga Gigi Goyang',
      audience: 'dewasa',
      visualType: 'periodontitis-stages',
      highlights: [
        'Plak yang mengeras menjadi karang gigi masuk ke bawah saku gusi (subgingiva).',
        'Bakteri merusak jaringan ikat dan melarutkan tulang rahang alveolar penyangga gigi.',
        'Gejala: gusi melorot, akar gigi terbuka, bau mulut menahun, gigi merenggang dan goyang.',
        'Penyebab nomor 1 kehilangan gigi pada usia dewasa produktif!'
      ],
      counselorScript: 'Bapak dan Ibu sekalian, pada orang dewasa, ancaman terbesar gigi bukan lagi sekadar gigi berlubang, melainkan penyakit jaringan penyangga gigi atau periodontitis. Tulang rahang yang sudah rusak tidak dapat tumbuh kembali dengan mudah.',
      audiencePrompt: 'Pernahkah Bapak/Ibu merasakan gusi berdarah saat menyikat gigi atau gigi terasa sedikit bergoyang?'
    },
    {
      id: 202,
      title: 'Menambal vs Mencabut: Pertahankan Gigi Asli!',
      subtitle: 'Gigi Asli Selalu Lebih Baik dari Gigi Tiruan Apa Pun',
      audience: 'dewasa',
      visualType: 'save-tooth',
      highlights: [
        'Mencabut gigi tanpa diganti menyebabkan gigi tetangga bergeser dan miring.',
        'Gigi lawan akan turun (ekstrusi) mengganggu pengunyahan.',
        'Teknologi kedokteran gigi modern mampu mempertahankan gigi berlubang dalam dengan Perawatan Saluran Akar (PSA).',
        'Penambalan komposit sewarna gigi mengembalikan fungsi dan estetika alami.'
      ],
      counselorScript: 'Sering kali pasien datang meminta langsung dicabut karena malas bolak-balik rawat gigi. Padahal satu gigi yang hilang akan memicu efek domino: gigi sebelah miring, makanan mudah terselip, dan pengunyahan jadi pincang.',
      audiencePrompt: 'Berapa banyak gigi asli Anda yang saat ini masih lengkap?'
    },
    {
      id: 203,
      title: 'Mengapa Scaling Gigi Itu Mutlak Wajib?',
      subtitle: 'Mitos Scaling Menipiskan Gigi Tidaklah Benar',
      audience: 'dewasa',
      visualType: 'scaling-procedure',
      highlights: [
        'Tip ultrasonik hanya bergetar dengan semprotan air untuk merontokkan karang yang menempel, BUKAN mengikis email gigi.',
        'Sensasi renggang atau ngilu sesaat setelah scaling adalah normal karena gusi yang bengkak mulai mereda ke posisi asli.',
        'Wajib dilakukan setiap 6 bulan sekali untuk mencegah resorpsi tulang rahang.'
      ],
      counselorScript: 'Banyak mitos di masyarakat bahwa scaling bikin gigi tipis dan renggang. Itu salah besar! Yang hilang adalah karang gigi yang tadinya menutupi celah. Jika karang dibiarkan, gigi akan goyang dan copot dengan sendirinya.',
      audiencePrompt: 'Kapan terakhir kali Anda melakukan scaling gigi?'
    },
    {
      id: 204,
      title: 'Koneksi Kesehatan Gigi dengan Penyakit Sistemik',
      subtitle: 'Hubungan Mulut dengan Jantung dan Diabetes',
      audience: 'dewasa',
      visualType: 'systemic-link',
      highlights: [
        'Diabetes melitus yang tidak terkontrol memperparah peradangan gusi hingga 3 kali lipat.',
        'Bakteri radang gusi dapat masuk ke aliran darah dan memicu plak pada pembuluh darah jantung (aterosklerosis).',
        'Infeksi gigi pada ibu hamil berisiko memicu kelahiran prematur dan berat bayi lahir rendah (BBLR).'
      ],
      counselorScript: 'Kesehatan rongga mulut adalah cerminan kesehatan seluruh tubuh. Infeksi kronis di gusi melepaskan mediator radang ke aliran darah sistemik. Menjaga gusi sehat berarti juga menjaga jantung dan gula darah tetap stabil.',
      audiencePrompt: 'Apakah ada riwayat diabetes atau hipertensi di keluarga Bapak/Ibu?'
    }
  ],
  lansia: [
    {
      id: 301,
      title: 'Menjaga Kualitas Hidup di Usia Emas',
      subtitle: 'Mengunyah Nyaman, Nutrisi Terpenuhi, Hidup Berkualitas',
      audience: 'lansia',
      visualType: 'elderly-chewing',
      highlights: [
        'Kemampuan mengunyah yang baik memastikan penyerapan nutrisi makanan tetap optimal bagi tubuh lansia.',
        'Kehilangan banyak gigi menyebabkan lansia hanya memilih makanan lunak tinggi karbohidrat yang memicu malnutrisi.',
        'Kesehatan mulut yang baik mencegah infeksi paru-paru (aspirasi pneumonia).'
      ],
      counselorScript: 'Selamat pagi Bapak dan Ibu. Di usia emas, kenikmatan menyantap makanan bersama keluarga dan cucu adalah salah satu kebahagiaan terbesar. Gigi yang terawat memastikan asupan protein dan serat tetap terjaga baik.',
      audiencePrompt: 'Apakah Bapak/Ibu merasakan kendala saat mengunyah makanan berserat seperti daging atau sayuran?'
    },
    {
      id: 302,
      title: 'Mengatasi Mulut Kering (Xerostomia)',
      subtitle: 'Efek Samping Obat Hipertensi & Penuaan Alami Saliva',
      audience: 'lansia',
      visualType: 'dry-mouth',
      highlights: [
        'Banyak obat rutin lansia (obat darah tinggi, jantung, antidepresan) menurunkan produksi air liur.',
        'Mulut kering meningkatkan risiko sariawan, rasa terbakar di lidah, dan karies akar leher gigi.',
        'Solusi: Sering minum air putih tegukan kecil, kumur dengan air tanpa alkohol, kulum es batu kecil, dan gunakan pelembap bibir.'
      ],
      counselorScript: 'Kerap kali lansia mengeluh mulutnya terasa lengket, pahit, atau lidah seperti terbakar. Ini bukan karena kurang vitamin saja, melainkan efek samping obat-obatan rutin. Air liur yang berkurang harus dikompensasi dengan sering minum air putih.',
      audiencePrompt: 'Apakah Bapak/Ibu sering terbangun di malam hari karena mulut terasa sangat kering?'
    },
    {
      id: 303,
      title: 'Perawatan Gigi Tiruan (Gigi Palsu) yang Benar',
      subtitle: 'Jangan Tidur Sambil Menggunakan Gigi Tiruan!',
      audience: 'lansia',
      visualType: 'denture-hygiene',
      highlights: [
        'Lepas gigi tiruan di malam hari saat tidur agar gusi dan mukosa langit-langit mulut bisa beristirahat bernapas.',
        'Bersihkan gigi tiruan dengan sikat berbulu lembut dan sabun cair ringan atau tablet pembersih khusus denture.',
        'JANGAN menyikat gigi palsu dengan pasta gigi berbutir kasar karena akan menggores akrilik.',
        'Rendam dalam wadah air bersih saat tidak digunakan agar akrilik tidak menyusut atau berubah bentuk.'
      ],
      counselorScript: 'Gigi tiruan membutuhkan perawatan khusus. Jangan pernah tidur dengan gigi palsu masih terpasang di mulut, karena dapat menimbulkan infeksi jamur Candida di langit-langit mulut. Rendam dalam air bersih setiap malam.',
      audiencePrompt: 'Bagi pengguna gigi tiruan, bagaimana cara Bapak/Ibu membersihkannya setiap hari?'
    },
    {
      id: 304,
      title: 'Pemeriksaan Rutin Jaringan Lunak Mulut',
      subtitle: 'Deteksi Dini Luka Mukosa dan Kanker Rongga Mulut',
      audience: 'lansia',
      visualType: 'oral-screening',
      highlights: [
        'Gigi tiruan yang longgar dapat menggesek gusi dan menimbulkan luka kronis.',
        'Periksa cermin di rumah: waspadai bercak merah (eritroplakia) atau bercak putih (leukoplakia) yang tidak kunjung hilang.',
        'Periksakan ke dokter gigi setiap 6 bulan meskipun sudah tidak memiliki gigi asli.'
      ],
      counselorScript: 'Meskipun sudah memakai gigi tiruan lengkap, kunjungan ke dokter gigi tetap penting untuk memeriksa kesehatan jaringan lunak mulut, kesesuaian gigi palsu, dan memastikan tidak ada iritasi kronis pada mukosa.',
      audiencePrompt: 'Mari kita jadwalkan pemeriksaan rutin agar senyum Bapak dan Ibu tetap sehat dan berseri!'
    }
  ]
};
