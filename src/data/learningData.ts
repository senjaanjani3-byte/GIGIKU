import { LearningArticle } from '../types/dental';

export const LEARNING_ARTICLES: LearningArticle[] = [
  {
    id: 'sikat-gigi-benar',
    slug: 'cara-menyikat-gigi-yang-benar',
    title: 'Cara Menyikat Gigi yang Benar',
    subtitle: 'Teknik Bass, Roll, dan langkah efektif membersihkan seluruh permukaan gigi',
    category: 'dasar',
    categoryLabel: 'Dasar Perawatan',
    readTimeMinutes: 3,
    illustration: 'brush',
    targetAudience: ['semua', 'anak', 'remaja', 'dewasa', 'lansia'],
    overview: 'Menyikat gigi bukan sekadar menggosok maju-mundur. Cara dan teknik yang tepat mampu mengangkat plak gigi tanpa melukai gusi atau mengikis lapisan email gigi.',
    causes: [
      'Menyikat terlalu keras dapat menyebabkan abrasi gigi dan resesi gusi.',
      'Arah sikat horizontal terus-menerus membuat sela gigi tidak terjangkau.',
      'Waktu menyikat kurang dari 2 menit menyisakan banyak bakteri plak.',
      'Sikat gigi yang sudah mekar bulunya tidak lagi efektif mengangkat kotoran.'
    ],
    symptoms: [
      'Gigi terasa kasar saat diraba dengan lidah setelah sikat gigi.',
      'Gusi sering berdarah saat atau setelah menyikat gigi.',
      'Muncul cekungan di dekat garis gusi akibat abrasi mekanik sikat gigi keras.'
    ],
    riskFactors: [
      'Memakai sikat berbulu keras (hard bristles).',
      'Menyikat gigi terburu-buru (kurang dari 1 menit).',
      'Tidak menyikat gigi sebelum tidur malam.'
    ],
    prevention: [
      'Pilih sikat gigi berbulu lembut (soft) dengan kepala sikat kecil membulat.',
      'Gunakan teknik Bass: arahkan bulu sikat 45 derajat ke arah batas gusi dan gigi, getarkan lembut dengan gerakan memutar kecil.',
      'Sikat seluruh bagian: permukaan luar, permukaan dalam, dan permukaan kunyah gigi.',
      'Sikat lidah secara lembut untuk membuang koloni bakteri penyebab bau mulut.',
      'Ganti sikat gigi setiap 3 bulan sekali atau jika bulunya sudah mulai mekar.'
    ],
    treatment: [
      'Evaluasi ulang tekanan tangan saat menyikat gigi.',
      'Gunakan pasta gigi berfluoride seukuran biji jagung (dewasa) atau sebutir beras (anak balita).',
      'Lengkapi dengan benang gigi (dental floss) untuk membersihkan sela sempit.'
    ],
    whenToSeeDentist: [
      'Gusi tetap berdarah meski sudah menyikat gigi dengan sangat lembut.',
      'Gigi terasa semakin ngilu di area dekat perbatasan gusi.',
      'Bulu sikat selalu berdarah setiap kali menyikat gigi selama lebih dari 1 minggu berturut-turut.'
    ],
    summary: 'Sikat gigi 2 kali sehari selama 2 menit (pagi setelah sarapan & malam sebelum tidur) dengan sudut 45 derajat, gerakan getar lembut memutar, dan sikat berbulu lembut.',
    keyPoints: [
      'Waktu ideal: 2 menit, 2 kali sehari.',
      'Sudut sikat 45 derajat ke arah garis gusi.',
      'Sikat permukaan luar, dalam, kunyah, dan bersihkan lidah.'
    ]
  },
  {
    id: 'karies-gigi',
    slug: 'karies-gigi-gigi-berlubang',
    title: 'Karies Gigi (Gigi Berlubang)',
    subtitle: 'Proses rusaknya jaringan keras gigi dari email, dentin, hingga saraf gigi',
    category: 'penyakit',
    categoryLabel: 'Penyakit Gigi',
    readTimeMinutes: 4,
    illustration: 'caries',
    targetAudience: ['semua', 'anak', 'remaja', 'dewasa', 'lansia'],
    overview: 'Karies gigi adalah penyakit infeksi jaringan keras gigi (email, dentin, dan sementum) yang disebabkan oleh aktivitas asam dari bakteri yang memfermentasi sisa gula makanan.',
    causes: [
      'Interaksi antara bakteri pembentuk asam (Streptococcus mutans) dan sisa karbohidrat/gula.',
      'Penurunan pH mulut di bawah 5.5 yang memicu larutnya mineral kalsium email (demineralisasi).',
      'Frekuensi ngemil makanan manis yang terlalu sering tanpa pembersihan.'
    ],
    symptoms: [
      'Bercak putih kapur (white spot) pada tahap awal.',
      'Noda kecokelatan atau kehitaman pada alur gigi kunyah.',
      'Rasa ngilu saat makan makanan manis, dingin, atau panas.',
      'Sakit berdenyut spontan jika lubang sudah mencapai ruang saraf (pulpa).'
    ],
    riskFactors: [
      'Konsumsi permen, biskuit, sirup, atau soda secara berlebihan.',
      'Sering tidur sambil mengedot susu botol pada balita (rampant caries).',
      'Produksi air liur berkurang (mulut kering).',
      'Kurangnya asupan fluoride untuk remineralisasi gigi.'
    ],
    prevention: [
      'Sikat gigi teratur dengan pasta gigi berfluoride.',
      'Kurangi makanan manis dan lengket, gantikan dengan buah segar yang berserat.',
      'Pemberian fissure sealant (pelapis lekukan gigi) oleh dokter gigi pada anak.',
      'Minum air putih setelah makan untuk membantu membilas sisa asam.'
    ],
    treatment: [
      'Tahap bercak putih: aplikasi fluoride topikal untuk remineralisasi.',
      'Tahap lubang dangkal/sedang: pembersihan jaringan rusak dan penambalan komposit sewarna gigi.',
      'Tahap lubang dalam hingga pulpa: perawatan saluran akar (PSA) sebelum ditambal permanen atau diberi mahkota jaket.',
      'Jika mahkota gigi sudah hancur total dan tak bisa dipertahankan: pencabutan gigi.'
    ],
    whenToSeeDentist: [
      'Melihat titik atau lubang kehitaman di gigi.',
      'Rasa sakit berdenyut yang mengganggu tidur di malam hari.',
      'Gusi di sekitar gigi berlubang membengkak atau keluar nanah.'
    ],
    summary: 'Karies bermula dari plak dan gula yang memicu asam. Sebelum menjadi lubang besar dan sakit hebat, segera tambal sejak tahap dini.',
    keyPoints: [
      'Bakteri + sisa gula = asam perusak lapisan email.',
      'Tahap awal tidak berasa sakit, jangan tunggu sakit baru periksa.',
      'Penambalan dini menyelamatkan gigi dari pencabutan.'
    ]
  },
  {
    id: 'gingivitis',
    slug: 'gingivitis-radang-gusi',
    title: 'Gingivitis (Radang Gusi)',
    subtitle: 'Peradangan gusi akibat penumpukan plak bakteri yang masih bersifat reversibel',
    category: 'penyakit',
    categoryLabel: 'Penyakit Gigi',
    readTimeMinutes: 3,
    illustration: 'gingivitis',
    targetAudience: ['semua', 'remaja', 'dewasa', 'lansia'],
    overview: 'Gingivitis adalah bentuk awal penyakit periodontal di mana gusi mengalami peradangan, kemerahan, dan mudah berdarah akibat iritasi oleh racun bakteri plak di garis gusi.',
    causes: [
      'Penumpukan lapisan biofilm plak bakteri di perbatasan gigi dan gusi.',
      'Karang gigi (kalkulus) yang menjadi sarang perlindungan koloni kuman.',
      'Perubahan hormonal pada masa pubertas, kehamilan, atau menstruasi.'
    ],
    symptoms: [
      'Gusi bengkak, tampak mengkilap, dan berwarna merah tua (bukan merah muda sehat).',
      'Gusi mudah berdarah saat menyikat gigi atau menggigit buah keras seperti apel.',
      'Bau mulut yang tidak kunjung hilang.',
      'Tekstur gusi lunak dan mudah tertekan.'
    ],
    riskFactors: [
      'Kebersihan mulut yang kurang terjaga.',
      'Merokok atau penggunaan produk tembakau/vape.',
      'Penyakit diabetes yang tidak terkontrol.',
      'Pemakaian kawat gigi tanpa sikat interdental khusus.'
    ],
    prevention: [
      'Menyikat gigi 2 kali sehari dengan teknik tepat di batas gusi.',
      'Membersihkan plak interdental dengan benang gigi minimal 1 kali sehari.',
      'Pembersihan karang gigi profesional (scaling) setiap 6 bulan sekali.'
    ],
    treatment: [
      'Pembersihan karang gigi (scaling) di klinik gigi.',
      'Penggunaan obat kumur antiseptik (misalnya chlorhexidine) sesuai anjuran tenaga medis.',
      'Perbaikan teknik menyikat gigi di rumah.'
    ],
    whenToSeeDentist: [
      'Gusi berdarah spontan tanpa disentuh atau disikat.',
      'Gusi tampak menjauh dari mahkota gigi dan gigi terasa mulai goyang.',
      'Keluar cairan kuning atau nanah dari kantung gusi saat ditekan.'
    ],
    summary: 'Gingivitis dapat sembuh total jika plak dan karang gigi dibersihkan. Jika diabaikan, gingivitis bisa berkembang menjadi periodontitis yang menyebabkan gigi goyang dan copot.',
    keyPoints: [
      'Tanda khas: gusi merah, bengkak, dan mudah berdarah saat sikat gigi.',
      'Bersifat reversibel (bisa sembuh sempurna dengan scaling).',
      'Jangan berhenti menyikat area berdarah, tapi sikatlah lebih lembut.'
    ]
  },
  {
    id: 'bau-mulut-halitosis',
    slug: 'bau-mulut-halitosis',
    title: 'Bau Mulut (Halitosis)',
    subtitle: 'Faktor pemicu senyawa volatil sulfur dan solusi napas segar percaya diri',
    category: 'perawatan',
    categoryLabel: 'Perawatan & Estetika',
    readTimeMinutes: 3,
    illustration: 'badbreath',
    targetAudience: ['semua', 'remaja', 'dewasa'],
    overview: 'Halitosis adalah aroma tidak sedap yang keluar dari rongga mulut, sekitar 85-90% bersumber dari dalam rongga mulut akibat pelepasan senyawa sulfur oleh bakteri anaerob.',
    causes: [
      'Lapisan putih kekuningan di punggung lidah (tongue coating) tempat bersarangnya bakteri.',
      'Gigi berlubang yang menjadi perangkap sisa makanan membusuk.',
      'Penyakit gusi (gingivitis & periodontitis).',
      'Produksi air liur berkurang (xerostomia), misalnya saat tidur atau puasa.',
      'Makanan beraroma kuat (bawang putih, petai, jengkol, durian).'
    ],
    symptoms: [
      'Rasa tidak enak atau pahit di mulut yang menetap.',
      'Orang di sekitar cenderung menjauh saat berbicara jarak dekat.',
      'Lidah tampak memiliki lapisan tebal berwarna putih kecokelatan.'
    ],
    riskFactors: [
      'Kebiasaan merokok dan konsumsi alkohol.',
      'Kurang minum air putih.',
      'Gigi palsu atau retainer yang jarang dicuci bersih.'
    ],
    prevention: [
      'Gunakan pembersih lidah (tongue scraper) atau sikat lidah lembut setiap hari.',
      'Minum air putih minimal 2 liter per hari untuk menjaga kelembapan mulut.',
      'Hindari rokok dan kurangi asupan kafein yang membuat mulut cepat kering.',
      'Kulum permen karet bebas gula (xylitol) untuk merangsang produksi saliva alami.'
    ],
    treatment: [
      'Menambal semua gigi yang berlubang.',
      'Melakukan pembersihan karang gigi (scaling) secara menyeluruh.',
      'Konsultasi dokter jika bau mulut berkaitan dengan asam lambung (GERD) atau sinusitis.'
    ],
    whenToSeeDentist: [
      'Bau mulut tidak hilang meski sudah sikat gigi, flossing, dan membersihkan lidah.',
      'Disertai mulut yang sangat kering, bibir pecah-pecah, atau rasa terbakar di lidah.'
    ],
    summary: 'Bersihkan lidah setiap hari dan tambal gigi berlubang. Minum air putih cukup agar aliran saliva membilas bakteri anaerob penyebab bau.',
    keyPoints: [
      'Punggung lidah adalah sumber nomor 1 bau mulut.',
      'Air liur adalah pembilas alami kuman dalam mulut.',
      'Permen penyegar hanya menutupi bau sementara, bukan mengobati akarnya.'
    ]
  },
  {
    id: 'sariawan-stomatitis',
    slug: 'sariawan-stomatitis-aftosa',
    title: 'Sariawan (Stomatitis Aftosa)',
    subtitle: 'Luka kecil pada mukosa mulut, penyebab, mitos, dan penanganan yang tepat',
    category: 'penyakit',
    categoryLabel: 'Penyakit Mulut',
    readTimeMinutes: 3,
    illustration: 'canker',
    targetAudience: ['semua', 'anak', 'remaja', 'dewasa', 'lansia'],
    overview: 'Sariawan atau stomatitis aftosa rekuren adalah luka dangkal atau ulkus pada jaringan lunak mulut (bibir dalam, pipi dalam, gusi, atau bawah lidah) dengan dasar putih/kuning dan tepian merah meradang.',
    causes: [
      'Trauma mekanik (tergigit saat makan, goresan kawat gigi atau tepi gigi tajam).',
      'Kekurangan nutrisi tertentu seperti vitamin B12, asam folat, zinc, atau zat besi.',
      'Faktor stres psikologis dan kurang tidur yang menurunkan imunitas mukosa.',
      'Alergi makanan tertentu atau sensitivitas terhadap deterjen pasta gigi (Sodium Lauryl Sulfate/SLS).'
    ],
    symptoms: [
      'Luka bulat kecil berwarna putih atau kekuningan dengan lingkaran merah di sekelilingnya.',
      'Sensasi pedih dan perih saat makan makanan asin, asam, atau pedas.',
      'Rasa tidak nyaman saat menggerakkan bibir atau berbicara.'
    ],
    riskFactors: [
      'Sering mengalami stres kerja atau ujian.',
      'Menggunakan kawat gigi tanpa lilin ortodonti (orthodontic wax).',
      'Kurang konsumsi sayur-mayur dan buah-buahan segar.'
    ],
    prevention: [
      'Makan perlahan dan hindari berbicara sambil mengunyah agar tidak tergigit.',
      'Pilih pasta gigi yang bebas SLS (non-SLS) jika memiliki riwayat sariawan berulang.',
      'Penuhi kebutuhan vitamin B kompleks, zat besi, dan vitamin C dari diet sehat.',
      'Kelola stres dan jaga pola tidur yang cukup.'
    ],
    treatment: [
      'Kumur air garam hangat untuk meredakan nyeri dan membersihkan area luka.',
      'Oleskan gel pelindung mukosa atau salep topikal khusus sariawan yang aman untuk mulut.',
      'Hindari makanan pedas, asam, panas, atau terlalu gurih sementara waktu.',
      'Gunakan orthodontic wax pada bagian kawat gigi yang tajam.'
    ],
    whenToSeeDentist: [
      'Sariawan tidak sembuh-sembuh setelah lebih dari 2 minggu.',
      'Ukuran sariawan luar biasa besar (diameter > 1 cm) atau muncul berkelompok banyak.',
      'Disertai demam tinggi, sulit menelan makanan, atau leher membengkak.'
    ],
    summary: 'Sariawan umumnya sembuh sendiri dalam 7-14 hari. Jaga kebersihan mulut, gunakan pasta gigi non-SLS, dan waspadai sariawan kronis yang tak kunjung sembuh lebih dari 2 pekan.',
    keyPoints: [
      'Bukan menular, sering dipicu luka tergigit atau stres.',
      'Gunakan pasta gigi bebas SLS bila sering kambuh.',
      'Sariawan > 2 minggu wajib diperiksa ke dokter gigi.'
    ]
  },
  {
    id: 'karang-gigi-kalkulus',
    slug: 'karang-gigi-kalkulus',
    title: 'Karang Gigi (Kalkulus)',
    subtitle: 'Endapan keras mineral saliva yang hanya bisa dihilangkan dengan scaling',
    category: 'penyakit',
    categoryLabel: 'Penyakit Gigi',
    readTimeMinutes: 3,
    illustration: 'calculus',
    targetAudience: ['remaja', 'dewasa', 'lansia', 'semua'],
    overview: 'Karang gigi adalah plak gigi yang mengalami pengerasan (mineralisasi) akibat pengendapan kalsium dan fosfat dari air liur. Karang gigi memiliki permukaan kasar yang mempercepat kolonisasi bakteri baru.',
    causes: [
      'Plak gigi yang tidak disikat bersih dalam waktu 24-72 jam.',
      'Kandungan mineral kalsium dan fosfat saliva yang tinggi.',
      'Air liur yang menggenang di belakang gigi seri bawah dan luar gigi geraham atas.'
    ],
    symptoms: [
      'Lapisan keras kekuningan, kecokelatan, atau kehitaman di dekat garis gusi.',
      'Permukaan gigi terasa bergelombang dan kasar saat disentuh lidah.',
      'Gusi di sekitar karang gigi mudah berdarah dan bengkak.'
    ],
    riskFactors: [
      'Jarang menyikat gigi atau teknik sikat tidak menyentuh garis gusi.',
      'Tidak pernah menggunakan dental floss.',
      'Merokok dan konsumsi kopi/teh pekat yang memperparah stain dan kalkulus.'
    ],
    prevention: [
      'Sikat gigi 2 kali sehari secara konsisten sebelum plak mengeras.',
      'Gunakan benang gigi untuk memutus pembentukan karang di sela-sela gigi.',
      'Periksakan gigi dan lakukan scaling rutin setiap 6 bulan sekali.'
    ],
    treatment: [
      'Scaling gigi oleh dokter gigi atau terapis gigi menggunakan alat getar ultrasonik (ultrasonic scaler).',
      'Penghalusan akar gigi (root planing) bila karang sudah masuk ke bawah saku gusi (subgingiva).',
      'PENTING: Karang gigi TIDAK BISA hilang hanya dengan menyikat gigi sekeras apa pun atau menggunakan garam/baking soda!'
    ],
    whenToSeeDentist: [
      'Sudah lebih dari 6 bulan sejak pembersihan karang gigi terakhir.',
      'Terlihat lapisan hitam di bawah batas gusi.',
      'Gigi terasa goyang atau ada rasa gatal di sela-sela gusi.'
    ],
    summary: 'Karang gigi adalah plak yang membatu. Tidak bisa rontok dengan sikat biasa, wajib dibersihkan dengan prosedur scaling di fasilitas kesehatan gigi.',
    keyPoints: [
      'Plak mengeras menjadi karang dalam 1-3 hari.',
      'Sikat gigi biasa tidak bisa merontokkan karang gigi.',
      'Scaling wajib dilakukan setiap 6 bulan sekali.'
    ]
  },
  {
    id: 'gigi-sensitif',
    slug: 'gigi-sensitif-hipersensitivitas-dentin',
    title: 'Gigi Sensitif (Hipersensitivitas Dentin)',
    subtitle: 'Rasa ngilu tajam seketika saat terkena rangsangan dingin, panas, atau manis',
    category: 'perawatan',
    categoryLabel: 'Keluhan Gigi',
    readTimeMinutes: 3,
    illustration: 'sensitive',
    targetAudience: ['semua', 'remaja', 'dewasa', 'lansia'],
    overview: 'Gigi sensitif terjadi ketika lapisan pelindung terluar (email gigi) terkikis atau gusi menyusut (resesi gusi), sehingga saluran-saluran mikroskopis pada dentin (tubulus dentin) terbuka langsung menuju saraf gigi.',
    causes: [
      'Menyikat gigi terlalu kuat dengan sikat berbulu keras (abrasi servikal).',
      'Erosi asam akibat makanan/minuman asam atau refluks lambung.',
      'Penurunan gusi akibat penyakit periodontal atau penuaan alami.',
      'Retakan mikro pada enamel gigi akibat mengunyah es atau benda keras.'
    ],
    symptoms: [
      'Rasa ngilu tajam sesaat saat meminum air es atau es krim.',
      'Ngilu saat meminum minuman panas atau memakan makanan manis/asam.',
      'Rasa ngilu saat udara dingin masuk ke mulut atau saat berkumur air dingin.'
    ],
    riskFactors: [
      'Kebiasaan menggemertakkan gigi saat tidur (bruxism).',
      'Penggunaan pasta gigi pemutih (whitening) yang sangat abrasif secara berlebihan.',
      'Sering minum soda, minuman berenergi, atau perasan jeruk nipis murni.'
    ],
    prevention: [
      'Gunakan sikat gigi berbulu ekstra lembut (ultra-soft).',
      'Sikat dengan gerakan memutar melingkar pelan, jangan menggesek keras horizontal.',
      'Tunggu minimal 30 menit sebelum menyikat gigi setelah mengonsumsi makanan asam.'
    ],
    treatment: [
      'Gunakan pasta gigi khusus gigi sensitif yang mengandung potassium nitrate atau stannous fluoride.',
      'Aplikasi varnish fluoride pekat atau bahan desensitisasi di klinik gigi.',
      'Penambalan komposit pada bagian leher gigi yang terkikis/aus.'
    ],
    whenToSeeDentist: [
      'Ngilu berlangsung lama (lebih dari beberapa detik setelah rangsangan hilang).',
      'Gigi terasa sakit spontan berdenyut tanpa ada rangsang dingin/panas.',
      'Terlihat cekungan tajam di leher gigi dekat gusi.'
    ],
    summary: 'Ngilu timbul karena pori-pori dentin terbuka ke saraf. Gunakan pasta gigi desensitisasi, sikat lembut, dan hindari makanan asam berlebih.',
    keyPoints: [
      'Terjadi bila email menipis atau gusi melorot membuka dentin.',
      'Gunakan sikat gigi ultra-soft dan pasta gigi khusus gigi sensitif.',
      'Jangan langsung menyikat gigi setelah minum minuman asam.'
    ]
  },
  {
    id: 'kebiasaan-buruk',
    slug: 'kebiasaan-buruk-kesehatan-gigi',
    title: 'Kebiasaan Buruk yang Merusak Gigi',
    subtitle: 'Bruxism, membuka benda dengan gigi, menggigit es, dan bernapas lewat mulut',
    category: 'kebiasaan',
    categoryLabel: 'Kebiasaan Sehari-hari',
    readTimeMinutes: 4,
    illustration: 'habits',
    targetAudience: ['semua', 'anak', 'remaja', 'dewasa'],
    overview: 'Berbagai kebiasaan tanpa sadar dapat menimbulkan kerusakan struktur gigi, perubahan susunan rahang, hingga gangguan sendi rahang (TMJ).',
    causes: [
      'Menggemertakkan gigi saat tidur malam (bruxism) akibat stres atau maloklusi.',
      'Menggunakan gigi sebagai alat pengganti gunting untuk membuka bungkus camilan atau tutup botol.',
      'Mengunyah es batu keras atau ujung pena.',
      'Menghisap jempol pada anak di atas usia 3-4 tahun.',
      'Bernapas lewat mulut yang membuat mulut kering dan memicu gigi maju.'
    ],
    symptoms: [
      'Permukaan kunyah gigi menjadi rata dan pendek.',
      'Tepi gigi depan gompal atau retak rambut.',
      'Otot rahang terasa pegal dan kaku saat bangun di pagi hari.',
      'Bunyi "klik" pada sendi depan telinga saat membuka mulut lebar.'
    ],
    riskFactors: [
      'Stres tinggi dan kecemasan.',
      'Sumbatan jalan napas hidung kronis (seperti polip atau deviasi septum).',
      'Kebiasaan menggigit kuku saat gugup.'
    ],
    prevention: [
      'Selalu gunakan gunting atau pembuka tutup botol yang sesuai.',
      'Tinggalkan kebiasaan mengunyah es batu; pilih minum air dingin tanpa mengunyah esnya.',
      'Bantu anak menghentikan kebiasaan isap jempol dengan pendekatan suportif.',
      'Latihan relaksasi otot rahang sebelum tidur.'
    ],
    treatment: [
      'Pembuatan night guard (pelindung gigi akrilik transparan) untuk penderita bruxism.',
      'Perbaikan gigi yang retak atau gompal dengan tambalan estetik atau veneer.',
      'Konsultasi THT jika ada keluhan bernapas melalui mulut.'
    ],
    whenToSeeDentist: [
      'Tepi gigi tampak pecah-pecah atau retak.',
      'Sendi rahang terasa nyeri tajam atau rahang terkunci saat membuka mulut.',
      'Susunan gigi anak tampak semakin maju tonggos akibat kebiasaan ngemut jari.'
    ],
    summary: 'Gigi dirancang khusus untuk mengunyah makanan, bukan untuk membuka kemasan plastik atau menggigit es batu. Hentikan kebiasaan buruk demi keawetan gigi.',
    keyPoints: [
      'Gigi bukan alat perkakas pembuka benda keras.',
      'Bruxism mengikis email saat tidur, lindungi dengan night guard.',
      'Bernapas lewat mulut memicu karies cepat dan bau mulut.'
    ]
  },
  {
    id: 'makanan-minuman-gigi',
    slug: 'makanan-dan-minuman-untuk-kesehatan-gigi',
    title: 'Makanan & Minuman untuk Gigi Kuat',
    subtitle: 'Panduan gizi ramah gigi: kalsium, fosfor, air putih vs gula tersembunyi',
    category: 'nutrisi',
    categoryLabel: 'Nutrisi & Pola Makan',
    readTimeMinutes: 3,
    illustration: 'nutrition',
    targetAudience: ['semua', 'anak', 'remaja', 'dewasa', 'lansia'],
    overview: 'Nutrisi yang kita konsumsi berpengaruh langsung pada kekuatan struktur email serta komposisi bakteri dalam rongga mulut.',
    causes: [
      'Makanan kariogenik tinggi sukrosa menjadi bahan bakar cepat bagi bakteri karies.',
      'Minuman berkarbonasi dan minuman energi memiliki tingkat keasaman (pH) rendah yang melarutkan email.',
      'Kudapan lengket bertahan lama menempel di celah-celah gigi.'
    ],
    symptoms: [
      'Gigi cepat terasa berpasir atau rapuh.',
      'Muncul warna kusam dan bercak putih di permukaan depan gigi.',
      'Pertumbuhan gigi anak terhambat akibat defisiensi vitamin D dan kalsium.'
    ],
    riskFactors: [
      'Sering minum boba, teh manis kemasan, dan kopi susu tinggi gula.',
      'Kebiasaan mengemut makanan atau permen dalam waktu lama.',
      'Jarang mengonsumsi produk susu, sayuran hijau, atau ikan bertulang lunak.'
    ],
    prevention: [
      'Konsumsi makanan kaya kalsium dan fosfat (susu, keju, yoghurt, tahu, tempe, brokoli).',
      'Perbanyak buah berserat renyah (apel, pir, wortel) yang merangsang saliva dan membersihkan gigi alami.',
      'Minum air putih berfluoride secara cukup sepanjang hari.',
      'Batasi camilan manis; jika ingin makan manis, konsumsi bersamaan dengan waktu makan utama, bukan ngemil di antara jam makan.'
    ],
    treatment: [
      'Bilas mulut dengan berkumur air putih segera setelah makan makanan manis.',
      'Pemberian suplemen mineral sesuai arahan dokter gizi bila terdapat malnutrisi.',
      'Kombinasikan dengan pembersihan sela gigi menggunakan dental floss.'
    ],
    whenToSeeDentist: [
      'Melihat tanda-tanda erosi email yang meluas di banyak gigi.',
      'Gigi anak terlihat rapuh dan mudah patah saat mengunyah makanan biasa.'
    ],
    summary: 'Pilih makanan kaya kalsium dan serat yang memicu air liur. Batasi minuman manis dan asam yang menjadi musuh utama email gigi.',
    keyPoints: [
      'Keju & susu menetralkan asam dan memasok kalsium email.',
      'Apel & wortel bertindak sebagai pembersih alami.',
      'Bilas mulut dengan air putih sehabis menyantap yang manis.'
    ]
  },
  {
    id: 'pentingnya-pemeriksaan-rutin',
    slug: 'pentingnya-pemeriksaan-gigi-rutin',
    title: 'Pentingnya Periksa Gigi Rutin 6 Bulan',
    subtitle: 'Deteksi dini masalah sebelum sakit hebat dan mencegah biaya perawatan mahal',
    category: 'pencegahan',
    categoryLabel: 'Pencegahan',
    readTimeMinutes: 3,
    illustration: 'checkup',
    targetAudience: ['semua', 'anak', 'remaja', 'dewasa', 'lansia'],
    overview: 'Sebagian besar penyakit gigi dan mulut (seperti karies dini dan gingivitis) berkembang tanpa gejala nyeri sama sekali. Menunggu sampai gigi terasa sakit berarti kerusakannya sudah parah.',
    causes: [
      'Ketakutan berlebihan terhadap alat dokter gigi (dental phobia).',
      'Anggapan keliru bahwa "tidak sakit berarti gigi sehat".',
      'Kurangnya edukasi pencegahan preventif dalam keluarga.'
    ],
    symptoms: [
      'Kerusakan yang terlambat disadari hingga harus dicabut.',
      'Gusi yang tiba-tiba turun dan gigi goyang tanpa rasa sakit sebelumnya.',
      'Biaya perawatan yang membengkak karena memerlukan perawatan saraf atau mahkota tiruan.'
    ],
    riskFactors: [
      'Tidak pernah ke dokter gigi lebih dari 1 tahun.',
      'Perokok aktif atau penderita diabetes melitus.',
      'Anak yang belum pernah diperkenalkan ke klinik gigi sejak gigi pertamanya tumbuh.'
    ],
    prevention: [
      'Jadwalkan kunjungan periksa gigi setiap 6 bulan sekali bagi seluruh anggota keluarga.',
      'Kenalkan anak ke klinik gigi sejak usia 1 tahun dalam suasana santai dan menyenangkan.',
      'Gunakan pengingat kalender di aplikasi Senyum Sehat untuk jadwal kontrol Anda.'
    ],
    treatment: [
      'Pemeriksaan komprehensif gigi, gusi, lidah, dan langit-langit mulut.',
      'Pembersihan karang gigi berkala (scaling).',
      'Deteksi karies dini dengan kaca mulut dan rontgen periapikal/panoramik bila diperlukan.',
      'Aplikasi fluoride topikal untuk memperkuat email gigi.'
    ],
    whenToSeeDentist: [
      'Kapan pun Anda sudah melewati waktu 6 bulan sejak pemeriksaan terakhir.',
      'Ada gigi yang terasa aneh, mengganjal, atau makanan selalu terselip di tempat yang sama.'
    ],
    summary: 'Periksa gigi rutin 6 bulan sekali adalah investasi terbaik untuk senyum sehat seumur hidup. Lebih murah, lebih cepat, dan bebas sakit dibanding mengobati lubang yang parah.',
    keyPoints: [
      'Jangan tunggu sakit baru ke dokter gigi.',
      'Deteksi dini mencegah perawatan saluran akar atau cabut gigi.',
      'Rutin scaling 6 bulan menjaga napas tetap segar dan gusi kencang.'
    ]
  },
  {
    id: 'pencegahan-penyakit-gigi',
    slug: 'pencegahan-penyakit-gigi-dan-mulut',
    title: 'Strategi Lengkap Pencegahan Penyakit Mulut',
    subtitle: 'Flossing, obat kumur yang tepat, fissure sealant, dan aplikasi fluoride',
    category: 'pencegahan',
    categoryLabel: 'Pencegahan',
    readTimeMinutes: 4,
    illustration: 'prevention',
    targetAudience: ['semua', 'anak', 'remaja', 'dewasa', 'lansia'],
    overview: 'Pencegahan (preventive dentistry) adalah pilar terpenting dalam menjaga kesehatan gigi. Langkah pencegahan yang konsisten menyelamatkan gigi asli agar bertahan seumur hidup.',
    causes: [
      'Menyikat gigi saja hanya membersihkan 60% permukaan gigi; 40% sela-sela gigi tertinggal jika tidak flossing.',
      'Lekukan dalam pada gigi geraham anak sulit dijangkau bulu sikat sehingga rentan karies pit & fissure.',
      'Penggunaan obat kumur beralkohol tinggi yang membuat mulut dehidrasi.'
    ],
    symptoms: [
      'Lubang sering timbul di antara dua gigi yang berdekatan (karies proksimal).',
      'Gusi di sela gigi membengkak dan mudah berdarah.',
      'Makanan selalu menyangkut dan sulit dikeluarkan.'
    ],
    riskFactors: [
      'Anatomi gigi berjejal (crowded teeth) yang mempersulit pembersihan.',
      'Pengabaian pemakaian benang gigi (dental floss).',
      'Penggunaan tusuk gigi kayu secara kasar yang melukai papila gusi.'
    ],
    prevention: [
      'Flossing harian: ambil benang gigi sepanjang 40 cm, selipkan lembut di sela gigi, bentuk kurva "C" mengitari gigi dan geser ke atas.',
      'Gunakan obat kumur antiseptik tanpa alkohol (alcohol-free) untuk menjaga keseimbangan flora normal mulut.',
      'Fissure Sealant: prosedur penutupan celah gigi geraham anak dengan bahan resin pelindung anti-karies.',
      'Aplikasi Topical Fluoride Varnish oleh tenaga kesehatan gigi.'
    ],
    treatment: [
      'Pemberian bimbingan sikat gigi dan flossing yang benar di klinik gigi.',
      'Penggunaan sikat interdental khusus untuk pengguna behel atau penderita penyusutan gusi.',
      'Penyelarasan gigi bila susunan yang berantakan menjadi pemicu utama plak tertinggal.'
    ],
    whenToSeeDentist: [
      'Kesulitan membersihkan sela gigi yang sangat rapat.',
      'Gusi bengkak setelah menggunakan tusuk gigi sembarangan.',
      'Ingin melakukan pencegahan sealant untuk gigi geraham pertama anak yang baru tumbuh.'
    ],
    summary: 'Kombinasikan sikat gigi 2x sehari, benang gigi harian, batasi gula, dan pemeriksaan rutin untuk proteksi maksimal 360 derajat terhadap penyakit mulut.',
    keyPoints: [
      'Sikat gigi hanya membersihkan 60% gigi, flossing melengkapi 40% sisanya.',
      'Gunakan benang gigi, tinggalkan tusuk gigi kayu yang melukai gusi.',
      'Fissure sealant melindungi gigi geraham anak dari lubang sejak dini.'
    ]
  }
];
