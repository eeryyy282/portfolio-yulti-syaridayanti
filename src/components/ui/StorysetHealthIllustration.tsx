import React from "react";

interface IllustrationProps {
  className?: string;
}

export const StorysetHealthIllustration: React.FC<IllustrationProps> = ({
  className = "w-full h-auto max-w-md",
}) => {
  return (
    <svg
      viewBox="0 0 500 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ilustrasi Promosi Kesehatan dan Edukasi Masyarakat"
    >
      <defs>
        <linearGradient id="pinkBlobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEEBF0" />
          <stop offset="100%" stopColor="#FCD5E1" />
        </linearGradient>
        <linearGradient id="primaryPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F47FA4" />
          <stop offset="100%" stopColor="#EC4E80" />
        </linearGradient>
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#EC4E80" floodOpacity="0.15" />
        </filter>
      </defs>

      <path
        d="M420 220C420 310 350 400 240 400C130 400 70 320 70 230C70 140 140 60 250 60C360 60 420 130 420 220Z"
        fill="url(#pinkBlobGrad)"
        opacity="0.85"
      />
      <circle cx="90" cy="110" r="18" fill="#FDA4AF" opacity="0.4" />
      <circle cx="430" cy="340" r="14" fill="#99F6E4" opacity="0.6" />
      <circle cx="410" cy="90" r="24" fill="#FEEBF0" />

      <g opacity="0.8">
        <path d="M120 70V86M112 78H128" stroke="#EC4E80" strokeWidth="3" strokeLinecap="round" />
        <path d="M380 75V91M372 83H388" stroke="#EC4E80" strokeWidth="3" strokeLinecap="round" />
        <path d="M60 270V286M52 278H68" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" />
        <path d="M430 190V206M422 198H438" stroke="#EC4E80" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g filter="url(#softShadow)">
        <path d="M110 390L160 280M270 390L220 280" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />
        <rect x="100" y="110" width="180" height="170" rx="16" fill="#FFFFFF" stroke="#FCD5E1" strokeWidth="3" />
        <rect x="150" y="98" width="80" height="20" rx="6" fill="#F47FA4" />
        <rect x="120" y="140" width="80" height="10" rx="4" fill="#FEEBF0" />
        <rect x="120" y="160" width="140" height="6" rx="3" fill="#F1F5F9" />
        <rect x="120" y="174" width="120" height="6" rx="3" fill="#F1F5F9" />
        <rect x="120" y="188" width="90" height="6" rx="3" fill="#F1F5F9" />

        <path
          d="M125 250L155 230L185 240L215 210L245 200"
          stroke="#EC4E80"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="155" cy="230" r="4" fill="#EC4E80" />
        <circle cx="215" cy="210" r="4" fill="#EC4E80" />
        <circle cx="245" cy="200" r="5" fill="#14B8A6" />
      </g>

      <g filter="url(#softShadow)">
        <path
          d="M260 260C260 220 285 200 325 200C365 200 390 220 390 260L405 380H245L260 260Z"
          fill="#FFFFFF"
          stroke="#FCD5E1"
          strokeWidth="2"
        />
        <path d="M305 200H345L335 270L325 290L315 270L305 200Z" fill="url(#primaryPink)" />
        <path d="M295 200L325 275L310 278L285 210" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
        <path d="M355 200L325 275L340 278L365 210" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
        <path
          d="M305 210C305 250 315 270 325 270C335 270 345 250 345 210"
          stroke="#0D9488"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path d="M325 270V288" stroke="#0D9488" strokeWidth="4" strokeLinecap="round" />
        <circle cx="325" cy="294" r="7" fill="#2DD4BF" stroke="#0D9488" strokeWidth="2" />

        <rect x="315" y="170" width="20" height="35" rx="8" fill="#FED7AA" />

        <path
          d="M290 155C290 100 310 80 325 80C340 80 360 100 360 155C360 195 350 205 325 205C300 205 290 195 290 155Z"
          fill="#F47FA4"
        />
        <path
          d="M305 135C305 118 314 110 325 110C336 110 345 118 345 135C345 155 338 170 325 170C312 170 305 155 305 135Z"
          fill="#FED7AA"
        />
        <path d="M312 135C314 133 317 133 319 135" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
        <path d="M331 135C333 133 336 133 338 135" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
        <path d="M320 152C323 156 327 156 330 152" stroke="#EC4E80" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="310" cy="144" r="3.5" fill="#FDA4AF" opacity="0.6" />
        <circle cx="340" cy="144" r="3.5" fill="#FDA4AF" opacity="0.6" />

        <path
          d="M275 230L210 195L180 180"
          stroke="#FFFFFF"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="178" cy="178" r="7" fill="#FED7AA" />
        <line x1="178" y1="178" x2="160" y2="165" stroke="#F47FA4" strokeWidth="4" strokeLinecap="round" />

        <path
          d="M375 230L410 260L395 300"
          stroke="#FFFFFF"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="385" y="270" width="48" height="60" rx="6" fill="#FEF2E8" stroke="#FCD5E1" strokeWidth="2" />
        <rect x="400" y="264" width="18" height="8" rx="2" fill="#EC4E80" />
        <line x1="392" y1="285" x2="420" y2="285" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
        <line x1="392" y1="295" x2="415" y2="295" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
        <line x1="392" y1="305" x2="410" y2="305" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g className="animate-soft-float">
        <rect x="40" y="295" width="115" height="38" rx="19" fill="#FFFFFF" filter="url(#softShadow)" />
        <circle cx="60" cy="314" r="12" fill="#FEEBF0" />
        <path d="M56 314L59 317L65 311" stroke="#EC4E80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="78" y="312" fill="#1E293B" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          IPK 3.86
        </text>
        <text x="78" y="324" fill="#64748B" fontSize="8" fontWeight="500" fontFamily="sans-serif">
          Cumlaude UNJA
        </text>
      </g>

      <g className="animate-soft-float" style={{ animationDelay: "1.5s" }}>
        <rect x="330" y="350" width="130" height="38" rx="19" fill="#FFFFFF" filter="url(#softShadow)" />
        <circle cx="350" cy="369" r="12" fill="#CCFBF1" />
        <path d="M350 363V375M344 369H356" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
        <text x="368" y="367" fill="#1E293B" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          Promkes & IPE
        </text>
        <text x="368" y="379" fill="#0D9488" fontSize="8" fontWeight="600" fontFamily="sans-serif">
          Komunitas Sehat
        </text>
      </g>
    </svg>
  );
};
