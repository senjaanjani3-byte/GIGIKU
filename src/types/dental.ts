export type AudienceCategory = 'semua' | 'anak' | 'remaja' | 'dewasa' | 'lansia';

export type ArticleCategory = 
  | 'dasar' 
  | 'penyakit' 
  | 'pencegahan' 
  | 'perawatan' 
  | 'kebiasaan'
  | 'nutrisi';

export interface LearningArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ArticleCategory;
  categoryLabel: string;
  readTimeMinutes: number;
  illustration: 'brush' | 'caries' | 'gingivitis' | 'badbreath' | 'canker' | 'calculus' | 'sensitive' | 'habits' | 'nutrition' | 'checkup' | 'prevention';
  targetAudience: AudienceCategory[];
  overview: string;
  causes: string[];
  symptoms: string[];
  riskFactors: string[];
  prevention: string[];
  treatment: string[];
  whenToSeeDentist: string[];
  summary: string;
  keyPoints: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: string;
}

export interface ScreeningQuestion {
  id: number;
  question: string;
  description: string;
  options: {
    text: string;
    score: number;
    severity: 'low' | 'moderate' | 'high';
    tip: string;
  }[];
}

export interface ScreeningResult {
  score: number;
  maxScore: number;
  level: 'low' | 'moderate' | 'high';
  title: string;
  summary: string;
  colorClass: string;
  flaggedSymptoms: string[];
  recommendations: string[];
  urgentFlag: boolean;
}

export interface FlipchartSlide {
  id: number;
  title: string;
  subtitle: string;
  audience: AudienceCategory;
  visualType: string;
  highlights: string[];
  counselorScript: string;
  audiencePrompt: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isEmergencyAlert?: boolean;
}
