import React from 'react';

interface IllustrationProps {
  type: string;
  className?: string;
}

export const DentalIllustration: React.FC<IllustrationProps> = ({ type, className = 'w-full h-48' }) => {
  switch (type) {
    case 'brush':
    case 'brushing-fun':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgBrush" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E0F2FE" />
              <stop offset="1" stopColor="#BAE6FD" />
            </linearGradient>
            <linearGradient id="toothGrad" x1="160" y1="40" x2="160" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#F0F9FF" />
            </linearGradient>
          </defs>
          <rect width="320" height="200" rx="16" fill="url(#bgBrush)" />
          {/* Sparkles */}
          <circle cx="80" cy="50" r="3" fill="#38BDF8" />
          <circle cx="240" cy="40" r="4" fill="#38BDF8" />
          <path d="M70 70L74 74L70 78L66 74Z" fill="#0284C7" />
          <path d="M250 80L254 84L250 88L246 84Z" fill="#0284C7" />
          {/* Cute Tooth */}
          <path
            d="M130 65C130 50 145 42 160 50C175 42 190 50 190 65C190 90 196 110 186 145C182 158 170 158 166 140C163 128 157 128 154 140C150 158 138 158 134 145C124 110 130 90 130 65Z"
            fill="url(#toothGrad)"
            stroke="#0284C7"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Tooth Face */}
          <circle cx="150" cy="85" r="3.5" fill="#0F172A" />
          <circle cx="170" cy="85" r="3.5" fill="#0F172A" />
          <path d="M153 95C157 101 163 101 167 95" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="143" cy="92" rx="4" ry="2.5" fill="#F472B6" opacity="0.6" />
          <ellipse cx="177" cy="92" rx="4" ry="2.5" fill="#F472B6" opacity="0.6" />
          {/* Toothbrush */}
          <path d="M60 140L145 95" stroke="#0284C7" strokeWidth="12" strokeLinecap="round" />
          <path d="M60 140L145 95" stroke="#38BDF8" strokeWidth="8" strokeLinecap="round" />
          {/* Bristles & Foam */}
          <path d="M142 96L158 88" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
          <circle cx="162" cy="72" r="7" fill="#FFFFFF" opacity="0.9" />
          <circle cx="172" cy="68" r="5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="156" cy="65" r="4" fill="#FFFFFF" opacity="0.9" />
          {/* 45 degree angle hint */}
          <path d="M210 115C215 110 220 120 230 118" stroke="#0284C7" strokeWidth="2" strokeDasharray="3 3" />
          <text x="210" y="140" fill="#0369A1" fontSize="12" fontWeight="bold">Sudut 45°</text>
        </svg>
      );

    case 'caries':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" rx="16" fill="#FEE2E2" />
          {/* Tooth Cross Section */}
          <path
            d="M120 60C120 45 138 38 160 48C182 38 200 45 200 60C200 95 208 120 196 155C190 170 176 170 170 148C166 135 154 135 150 148C144 170 130 170 124 155C112 120 120 95 120 60Z"
            fill="#FFFFFF"
            stroke="#DC2626"
            strokeWidth="3"
          />
          {/* Dentin inner layer */}
          <path
            d="M135 70C135 60 145 55 160 62C175 55 185 60 185 70C185 95 190 115 180 140C176 150 168 150 164 135C162 125 158 125 156 135C152 150 144 150 140 140C130 115 135 95 135 70Z"
            fill="#FEF08A"
          />
          {/* Pulp (Nerve) */}
          <path
            d="M152 85C152 80 156 78 160 81C164 78 168 80 168 85C168 100 172 110 166 128C165 132 163 132 162 126C161 122 159 122 158 126C157 132 155 132 154 128C148 110 152 100 152 85Z"
            fill="#F43F5E"
          />
          {/* Cavity Spot on Enamel */}
          <ellipse cx="140" cy="52" rx="10" ry="7" fill="#78350F" />
          <ellipse cx="140" cy="52" rx="6" ry="4" fill="#1C1917" />
          {/* Acid Bubbles */}
          <circle cx="120" cy="38" r="6" fill="#F87171" opacity="0.8" />
          <circle cx="105" cy="48" r="4" fill="#F87171" opacity="0.7" />
          <text x="75" y="32" fill="#B91C1C" fontSize="11" fontWeight="bold">Asam Bakteri</text>
          {/* Labels */}
          <line x1="202" y1="58" x2="245" y2="58" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="250" y="62" fill="#991B1B" fontSize="11" fontWeight="600">Email (Lapisan Luar)</text>
          <line x1="187" y1="90" x2="245" y2="90" stroke="#CA8A04" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="250" y="94" fill="#854D0E" fontSize="11" fontWeight="600">Dentin (Lapisan Tulang)</text>
          <line x1="170" y1="115" x2="245" y2="115" stroke="#E11D48" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="250" y="119" fill="#9F1239" fontSize="11" fontWeight="600">Pulpa (Saraf & Darah)</text>
        </svg>
      );

    case 'gingivitis':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" rx="16" fill="#FFF1F2" />
          {/* Left: Healthy Gum */}
          <g transform="translate(10, 0)">
            <text x="75" y="35" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="bold">Gusi Sehat</text>
            {/* Tooth */}
            <path d="M55 50C55 42 63 38 75 42C87 38 95 42 95 50V100H55V50Z" fill="#FFFFFF" stroke="#059669" strokeWidth="2.5" />
            {/* Healthy Gum (firm pink) */}
            <path d="M30 100C45 95 65 92 75 95C85 92 105 95 120 100V160H30V100Z" fill="#FBCFE8" stroke="#F472B6" strokeWidth="2" />
            <circle cx="75" cy="115" r="2" fill="#DB2777" opacity="0.4" />
            <circle cx="60" cy="125" r="2" fill="#DB2777" opacity="0.4" />
            <circle cx="90" cy="125" r="2" fill="#DB2777" opacity="0.4" />
            <text x="75" y="175" textAnchor="middle" fill="#059669" fontSize="10">Merah Muda, Kenyal</text>
          </g>
          {/* Divider */}
          <line x1="160" y1="25" x2="160" y2="185" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
          {/* Right: Gingivitis Gum */}
          <g transform="translate(150, 0)">
            <text x="85" y="35" textAnchor="middle" fill="#DC2626" fontSize="12" fontWeight="bold">Gingivitis (Radang)</text>
            {/* Tooth with Plaque */}
            <path d="M65 50C65 42 73 38 85 42C97 38 105 42 105 50V100H65V50Z" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2.5" />
            {/* Plaque at margin */}
            <path d="M65 92C75 90 95 90 105 92V97H65V92Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
            {/* Inflamed Gum (swollen red) */}
            <path d="M40 95C55 88 75 86 85 90C95 86 115 88 130 95V160H40V95Z" fill="#FDA4AF" stroke="#E11D48" strokeWidth="3" />
            {/* Blood droplets */}
            <path d="M72 88C72 85 75 80 75 80C75 80 78 85 78 88C78 90 75 92 72 88Z" fill="#DC2626" />
            <path d="M96 92C96 89 99 84 99 84C99 84 102 89 102 92C102 94 99 96 96 92Z" fill="#DC2626" />
            <text x="85" y="175" textAnchor="middle" fill="#B91C1C" fontSize="10">Merah Tua, Bengkak & Berdarah</text>
          </g>
        </svg>
      );

    case 'badbreath':
    case 'tongue-cleaner':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" rx="16" fill="#F0FDF4" />
          {/* Tongue Cross Section */}
          <path
            d="M90 70C90 50 130 45 160 45C190 45 230 50 230 70C230 115 220 150 160 155C100 150 90 115 90 70Z"
            fill="#FDA4AF"
            stroke="#F43F5E"
            strokeWidth="3"
          />
          {/* Papillae texture */}
          <path d="M120 75C125 72 135 72 140 75" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
          <path d="M175 75C180 72 190 72 195 75" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
          <path d="M150 90C155 87 165 87 170 90" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
          {/* Tongue Scraper tool */}
          <path d="M110 65C130 58 190 58 210 65" stroke="#0284C7" strokeWidth="6" strokeLinecap="round" />
          <path d="M160 60V25" stroke="#0284C7" strokeWidth="8" strokeLinecap="round" />
          {/* Coating being cleared */}
          <path d="M130 63C145 61 175 61 190 63" stroke="#FEF08A" strokeWidth="4" strokeLinecap="round" />
          {/* Fresh Breath Waves */}
          <path d="M70 120C55 125 45 140 30 135" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M250 120C265 125 275 140 290 135" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
          <text x="160" y="180" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="bold">
            Pembersihan Lidah = Napas Segar
          </text>
        </svg>
      );

    case 'canker':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" rx="16" fill="#FFF7ED" />
          {/* Inside Mouth Mucosa */}
          <path d="M40 40C90 30 230 30 280 40C290 90 290 130 280 160C230 170 90 170 40 160C30 130 30 90 40 40Z" fill="#FECDD3" />
          {/* Aphthous Ulcer */}
          <ellipse cx="160" cy="100" rx="35" ry="25" fill="#EF4444" opacity="0.3" />
          <ellipse cx="160" cy="100" rx="25" ry="18" fill="#DC2626" opacity="0.6" />
          <ellipse cx="160" cy="100" rx="18" ry="12" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
          {/* Salt Water Rinse Shield */}
          <circle cx="80" cy="100" r="28" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
          <text x="80" y="98" textAnchor="middle" fill="#0369A1" fontSize="10" fontWeight="bold">Kumur Air</text>
          <text x="80" y="112" textAnchor="middle" fill="#0369A1" fontSize="10" fontWeight="bold">Garam</text>
          <text x="160" y="145" textAnchor="middle" fill="#991B1B" fontSize="11" fontWeight="bold">Luka Bulat Tepi Merah</text>
          <text x="160" y="180" textAnchor="middle" fill="#78350F" fontSize="11">Sembuh sendiri dalam 7 - 14 hari</text>
        </svg>
      );

    case 'calculus':
    case 'scaling-procedure':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" rx="16" fill="#F8FAFC" />
          {/* Teeth Row with calculus */}
          <path d="M80 50C80 40 90 35 105 40C120 35 130 40 130 50V110H80V50Z" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
          <path d="M135 50C135 40 145 35 160 40C175 35 185 40 185 50V110H135V50Z" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
          <path d="M190 50C190 40 200 35 215 40C230 35 240 40 240 50V110H190V50Z" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
          {/* Gum */}
          <path d="M60 110C100 102 220 102 260 110V160H60V110Z" fill="#FBCFE8" stroke="#F472B6" strokeWidth="2" />
          {/* Hard Calculus between and on teeth */}
          <path d="M78 100C88 95 122 95 132 100L130 112L80 112Z" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
          <path d="M133 100C143 95 177 95 187 100L185 112L135 112Z" fill="#78350F" stroke="#451A03" strokeWidth="1.5" />
          {/* Ultrasonic Scaler Tip */}
          <path d="M260 40L210 92" stroke="#0284C7" strokeWidth="6" strokeLinecap="round" />
          <path d="M210 92L195 98" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
          {/* Water spray drops */}
          <circle cx="190" cy="92" r="2.5" fill="#38BDF8" />
          <circle cx="185" cy="85" r="3" fill="#38BDF8" />
          <circle cx="202" cy="88" r="2" fill="#38BDF8" />
          <text x="160" y="180" textAnchor="middle" fill="#0284C7" fontSize="12" fontWeight="bold">
            Scaling Getar Ultrasonik Membersihkan Karang
          </text>
        </svg>
      );

    case 'sensitive':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" rx="16" fill="#F0F9FF" />
          {/* Shivering Tooth */}
          <path
            d="M120 65C120 50 135 42 150 50C165 42 180 50 180 65C180 90 186 110 176 145C172 158 160 158 156 140C153 128 147 128 144 140C140 158 128 158 124 145C114 110 120 90 120 65Z"
            fill="#E0F2FE"
            stroke="#0284C7"
            strokeWidth="3"
          />
          {/* Receded Gum uncovering dentin neck */}
          <path d="M80 125C110 128 135 135 150 135C165 135 190 128 220 125V165H80V125Z" fill="#FDA4AF" />
          {/* Cold lightning / shiver lines */}
          <path d="M195 70L215 60L205 85L225 75" stroke="#0284C7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M105 70L85 60L95 85L75 75" stroke="#0284C7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Ice Cube */}
          <rect x="220" y="110" width="35" height="35" rx="6" fill="#BAE6FD" stroke="#38BDF8" strokeWidth="2" />
          <path d="M225 125L235 120L250 130" stroke="#FFFFFF" strokeWidth="2" />
          <text x="238" y="160" textAnchor="middle" fill="#0369A1" fontSize="10">Es Dingin</text>
          {/* Cold face on tooth */}
          <circle cx="142" cy="85" r="3" fill="#0F172A" />
          <circle cx="158" cy="85" r="3" fill="#0F172A" />
          <path d="M144 100C147 96 153 96 156 100" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          <text x="160" y="180" textAnchor="middle" fill="#0369A1" fontSize="12" fontWeight="bold">
            Dentin Terbuka Mengirim Ngilu ke Saraf
          </text>
        </svg>
      );

    case 'habits':
    case 'vape-smoke-risk':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" rx="16" fill="#FFFBEB" />
          {/* Warning sign */}
          <circle cx="160" cy="70" r="40" fill="#FEE2E2" stroke="#EF4444" strokeWidth="3" />
          {/* Chipped Tooth */}
          <path d="M148 55C148 48 154 45 160 48C166 45 172 48 172 55V75L165 72L162 76L158 70L148 75V55Z" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />
          {/* Red cross slash */}
          <line x1="130" y1="40" x2="190" y2="100" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
          <text x="160" y="135" textAnchor="middle" fill="#B45309" fontSize="12" fontWeight="bold">
            Hindari Menggigit Benda Keras & Merokok
          </text>
          <text x="160" y="155" textAnchor="middle" fill="#78350F" fontSize="11">
            Gigi bukan gunting pembuka bungkus atau pemecah es batu!
          </text>
        </svg>
      );

    case 'nutrition':
    case 'food-good-bad':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" rx="16" fill="#F0FDF4" />
          {/* Left Good Food (Milk & Apple) */}
          <g transform="translate(30, 30)">
            <circle cx="50" cy="50" r="35" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
            {/* Apple */}
            <circle cx="45" cy="52" r="16" fill="#EF4444" />
            <path d="M45 36C47 32 50 32 52 35" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
            {/* Milk Glass */}
            <rect x="58" y="45" width="16" height="22" rx="3" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
            <text x="50" y="105" textAnchor="middle" fill="#15803D" fontSize="11" fontWeight="bold">Sahabat Gigi ✓</text>
            <text x="50" y="120" textAnchor="middle" fill="#166534" fontSize="9">Susu, Keju, Apel</text>
          </g>
          {/* Right Bad Food (Candy & Soda) */}
          <g transform="translate(170, 30)">
            <circle cx="60" cy="50" r="35" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
            {/* Candy */}
            <ellipse cx="60" cy="50" rx="14" ry="8" fill="#F43F5E" />
            <path d="M42 46L46 50L42 54Z" fill="#F43F5E" />
            <path d="M78 46L74 50L78 54Z" fill="#F43F5E" />
            <text x="60" y="105" textAnchor="middle" fill="#B91C1C" fontSize="11" fontWeight="bold">Kurangi Manis ✗</text>
            <text x="60" y="120" textAnchor="middle" fill="#991B1B" fontSize="9">Permen, Sirup, Soda</text>
          </g>
        </svg>
      );

    case 'checkup':
    case 'dentist-clinic':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" rx="16" fill="#F0F9FF" />
          {/* Dental Mirror */}
          <circle cx="120" cy="80" r="28" fill="#E0F2FE" stroke="#0284C7" strokeWidth="4" />
          <ellipse cx="120" cy="80" rx="20" ry="20" fill="#FFFFFF" opacity="0.8" />
          <path d="M142 98L220 155" stroke="#64748B" strokeWidth="8" strokeLinecap="round" />
          <path d="M142 98L220 155" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
          {/* Little Star in Mirror */}
          <path d="M120 70L122 76L128 78L122 80L120 86L118 80L112 78L118 76Z" fill="#F59E0B" />
          <text x="160" y="180" textAnchor="middle" fill="#0369A1" fontSize="12" fontWeight="bold">
            Pemeriksaan Rutin Setiap 6 Bulan Sekali
          </text>
        </svg>
      );

    case 'prevention':
    case 'save-tooth':
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" rx="16" fill="#ECFDF5" />
          {/* Shield */}
          <path
            d="M160 35L210 55C210 110 160 145 160 145C160 145 110 110 110 55L160 35Z"
            fill="#34D399"
            opacity="0.2"
            stroke="#059669"
            strokeWidth="3"
          />
          {/* Tooth inside shield */}
          <path
            d="M142 65C142 58 149 54 160 58C171 54 178 58 178 65C178 80 182 92 176 112C174 120 168 120 164 110C162 104 158 104 156 110C152 120 146 120 144 112C138 92 142 80 142 65Z"
            fill="#FFFFFF"
            stroke="#059669"
            strokeWidth="2.5"
          />
          <text x="160" y="170" textAnchor="middle" fill="#065F46" fontSize="12" fontWeight="bold">
            Fluoride & Flossing: Perlindungan 360°
          </text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 320 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" rx="16" fill="#E0F2FE" />
          <path
            d="M130 65C130 50 145 42 160 50C175 42 190 50 190 65C190 90 196 110 186 145C182 158 170 158 166 140C163 128 157 128 154 140C150 158 138 158 134 145C124 110 130 90 130 65Z"
            fill="#FFFFFF"
            stroke="#0284C7"
            strokeWidth="3.5"
          />
          <circle cx="150" cy="85" r="3.5" fill="#0F172A" />
          <circle cx="170" cy="85" r="3.5" fill="#0F172A" />
          <path d="M153 95C157 101 163 101 167 95" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
  }
};

export const ToothMascot: React.FC<{ mood?: 'happy' | 'cheering' | 'brushing' | 'clean'; size?: number }> = ({
  mood = 'happy',
  size = 56
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mascotGrad" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E0F2FE" />
        </linearGradient>
      </defs>
      {/* Tooth Body */}
      <path
        d="M20 18C20 12 26 8 32 12C38 8 44 12 44 18C44 28 46 36 42 48C40 54 36 54 34 46C33 42 31 42 30 46C28 54 24 54 22 48C18 36 20 28 20 18Z"
        fill="url(#mascotGrad)"
        stroke="#0284C7"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Sparkle */}
      <path d="M46 12L48 16L52 18L48 20L46 24L44 20L40 18L44 16Z" fill="#38BDF8" />
      {/* Eyes */}
      <circle cx="28" cy="24" r="2.2" fill="#0F172A" />
      <circle cx="36" cy="24" r="2.2" fill="#0F172A" />
      <circle cx="29" cy="23" r="0.7" fill="#FFFFFF" />
      <circle cx="37" cy="23" r="0.7" fill="#FFFFFF" />
      {/* Cheeks */}
      <ellipse cx="25" cy="28" rx="2" ry="1.2" fill="#F472B6" opacity="0.6" />
      <ellipse cx="39" cy="28" rx="2" ry="1.2" fill="#F472B6" opacity="0.6" />
      {/* Smile */}
      {mood === 'cheering' ? (
        <path d="M28 28Q32 35 36 28Z" fill="#E11D48" stroke="#0F172A" strokeWidth="1" />
      ) : (
        <path d="M28 28C30 32 34 32 36 28" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" />
      )}
    </svg>
  );
};
