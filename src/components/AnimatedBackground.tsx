import jazzBarBg from "@/assets/jazz-bar-bg.jpg";

const musicNotes = ["♪", "♫", "♬", "♩", "♭", "♯", "𝄞", "♪", "♫"];

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base image with gentle flicker */}
      <div
        className="absolute inset-0 animate-flicker-subtle bg-cover bg-center"
        style={{ backgroundImage: `url(${jazzBarBg})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/65" />

      {/* ===== CEILING SPOTLIGHT BEAMS ===== */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="beam1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(35 100% 60%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(35 100% 60%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(200 80% 50%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(200 80% 50%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(35 80% 55%)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="hsl(35 80% 55%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Sweeping amber spotlight */}
        <polygon points="120,0 80,500 160,500" fill="url(#beam1)" className="animate-spotlight-sweep" style={{ transformOrigin: "120px 0px" }} />
        {/* Sweeping blue spotlight */}
        <polygon points="280,0 240,450 320,450" fill="url(#beam2)" className="animate-spotlight-sweep-alt" style={{ transformOrigin: "280px 0px" }} />
        {/* Center subtle beam */}
        <polygon points="200,0 170,400 230,400" fill="url(#beam3)" className="animate-spotlight-breathe" style={{ transformOrigin: "200px 0px" }} />
      </svg>

      {/* ===== CEILING LIGHT FIXTURES (SVG) ===== */}
      <svg className="absolute top-0 left-0 w-full h-12 pointer-events-none" viewBox="0 0 400 30" preserveAspectRatio="none">
        {[80, 200, 320].map((x, i) => (
          <g key={`fixture-${i}`}>
            <line x1={x} y1="0" x2={x} y2="12" stroke="hsl(35 30% 25%)" strokeWidth="1" />
            <circle cx={x} cy="14" r="3" fill="none" stroke="hsl(35 40% 30%)" strokeWidth="0.5" />
            <circle cx={x} cy="14" r="1.5" className={`animate-fixture-glow-${i}`} fill="hsl(35 100% 60%)" opacity="0.6" />
          </g>
        ))}
      </svg>

      {/* ===== MOON ===== */}
      <div className="absolute top-5 right-8 w-12 h-12 rounded-full animate-moon-glow pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(45 70% 88% / 0.7) 0%, hsl(45 50% 70% / 0.2) 50%, transparent 70%)",
          boxShadow: "0 0 30px 12px hsl(45 70% 70% / 0.08)",
        }}
      />

      {/* ===== SUBTLE WARM AMBIENT ===== */}
      <div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full animate-breathe-slow"
        style={{
          background: "radial-gradient(circle, hsl(35 100% 60% / 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -top-10 -right-20 w-[350px] h-[350px] rounded-full animate-breathe-slow"
        style={{
          background: "radial-gradient(circle, hsl(200 80% 50% / 0.04) 0%, transparent 70%)",
          animationDelay: "4s",
        }}
      />

      {/* ===== NEON SIGNS (SVG) ===== */}
      <svg className="absolute top-14 left-4 w-20 h-10 pointer-events-none select-none animate-neon-sign" viewBox="0 0 80 30">
        <text x="5" y="22" fontFamily="Playfair Display, serif" fontWeight="900" fontStyle="italic" fontSize="18"
          fill="none" stroke="hsl(200 80% 50%)" strokeWidth="0.8"
          filter="url(#neonGlow)">JAZZ</text>
        <defs>
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
      </svg>

      <svg className="absolute top-24 right-4 w-14 h-8 pointer-events-none select-none animate-neon-sign-alt" viewBox="0 0 56 24">
        <text x="4" y="17" fontFamily="Playfair Display, serif" fontWeight="700" fontSize="13"
          fill="hsl(35 100% 60%)" stroke="hsl(35 100% 60%)" strokeWidth="0.3"
          filter="url(#neonGlowAmber)">LIVE</text>
        <defs>
          <filter id="neonGlowAmber" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
      </svg>

      {/* ===== CANDLES (SVG) ===== */}
      <svg className="absolute bottom-0 left-0 w-full h-48 pointer-events-none" viewBox="0 0 400 120" preserveAspectRatio="xMidYMax meet">
        {[
          { x: 30, y: 85, h: 18, delay: 0 },
          { x: 72, y: 90, h: 14, delay: 0.4 },
          { x: 145, y: 82, h: 20, delay: 0.8 },
          { x: 210, y: 92, h: 12, delay: 1.2 },
          { x: 260, y: 78, h: 22, delay: 0.3 },
          { x: 310, y: 88, h: 16, delay: 1.6 },
          { x: 365, y: 84, h: 19, delay: 0.6 },
          { x: 105, y: 95, h: 10, delay: 2.0 },
          { x: 340, y: 93, h: 11, delay: 1.0 },
        ].map((c, i) => (
          <g key={`candle-${i}`}>
            {/* Candle body */}
            <rect x={c.x - 2} y={c.y} width="4" height={c.h} rx="1" fill="hsl(35 30% 25%)" opacity="0.5" />
            {/* Wick */}
            <line x1={c.x} y1={c.y} x2={c.x} y2={c.y - 3} stroke="hsl(35 20% 20%)" strokeWidth="0.5" />
            {/* Flame outer */}
            <ellipse cx={c.x} cy={c.y - 5} rx="2.5" ry="4" fill="hsl(35 100% 60%)" opacity="0.3"
              className="animate-candle-flicker" style={{ animationDelay: `${c.delay}s`, transformOrigin: `${c.x}px ${c.y - 5}px` }} />
            {/* Flame inner */}
            <ellipse cx={c.x} cy={c.y - 5} rx="1.2" ry="2.5" fill="hsl(45 100% 80%)" opacity="0.6"
              className="animate-candle-flicker" style={{ animationDelay: `${c.delay + 0.2}s`, transformOrigin: `${c.x}px ${c.y - 5}px` }} />
            {/* Glow */}
            <circle cx={c.x} cy={c.y - 4} r="8" fill="hsl(35 100% 60%)" opacity="0.04"
              className="animate-candle-glow" style={{ animationDelay: `${c.delay}s` }} />
          </g>
        ))}
      </svg>

      {/* ===== FLOATING MUSIC NOTES ===== */}
      {musicNotes.map((note, i) => (
        <div
          key={`note-${i}`}
          className="absolute pointer-events-none select-none animate-float-note"
          style={{
            left: `${5 + i * 10}%`,
            bottom: "-20px",
            fontSize: `${14 + (i % 3) * 6}px`,
            animationDelay: `${i * 1.6}s`,
            animationDuration: `${8 + (i % 4) * 2}s`,
            color: i % 2 === 0 ? "hsl(35 85% 55% / 0.2)" : "hsl(200 80% 50% / 0.15)",
          }}
        >
          {note}
        </div>
      ))}

      {/* ===== DUST / PARTICLES (SVG) ===== */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 800" preserveAspectRatio="none">
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={`dust-${i}`}
            cx={30 + (i * 37) % 370}
            cy={50 + (i * 73) % 700}
            r={0.5 + (i % 3) * 0.3}
            fill="hsl(35 60% 70%)"
            opacity={0.08 + (i % 4) * 0.03}
            className="animate-dust-float"
            style={{ animationDelay: `${(i * 0.8) % 10}s`, animationDuration: `${10 + (i % 5) * 3}s` }}
          />
        ))}
      </svg>

      {/* ===== CIGAR SMOKE WISPS (SVG) ===== */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 800" preserveAspectRatio="none">
        <defs>
          <filter id="smokeBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <filter id="smokeBlur2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* Wisp 1 - left side, thick rising curl */}
        <path d="M60,650 Q45,580 70,520 Q95,460 55,400 Q30,350 65,290 Q85,250 50,200"
          stroke="hsl(220 10% 60%)" strokeWidth="12" fill="none" opacity="0.04"
          filter="url(#smokeBlur2)" className="animate-smoke-wisp-1" />

        {/* Wisp 2 - center-left, lazy drift */}
        <path d="M130,700 Q110,640 145,580 Q170,520 125,460 Q100,410 140,350 Q165,300 120,240"
          stroke="hsl(35 15% 55%)" strokeWidth="16" fill="none" opacity="0.03"
          filter="url(#smokeBlur2)" className="animate-smoke-wisp-2" />

        {/* Wisp 3 - right side, thin elegant curl */}
        <path d="M320,680 Q340,610 305,550 Q280,490 330,430 Q355,380 310,320 Q290,270 325,210"
          stroke="hsl(220 8% 65%)" strokeWidth="10" fill="none" opacity="0.045"
          filter="url(#smokeBlur)" className="animate-smoke-wisp-3" />

        {/* Wisp 4 - far left, wide billowing */}
        <path d="M25,720 Q10,660 40,600 Q60,540 20,480 Q-5,430 35,370 Q55,320 15,260"
          stroke="hsl(35 10% 50%)" strokeWidth="20" fill="none" opacity="0.025"
          filter="url(#smokeBlur2)" className="animate-smoke-wisp-4" />

        {/* Wisp 5 - center, dense plume */}
        <path d="M200,750 Q180,680 215,620 Q240,560 190,500 Q165,450 210,390 Q235,340 185,280 Q165,230 200,180"
          stroke="hsl(220 12% 58%)" strokeWidth="18" fill="none" opacity="0.035"
          filter="url(#smokeBlur2)" className="animate-smoke-wisp-5" />

        {/* Wisp 6 - right, quick thin trail */}
        <path d="M350,690 Q370,630 340,570 Q315,520 355,460 Q380,400 345,340"
          stroke="hsl(35 12% 60%)" strokeWidth="8" fill="none" opacity="0.05"
          filter="url(#smokeBlur)" className="animate-smoke-wisp-6" />

        {/* Wisp 7 - center-right, spiraling */}
        <path d="M260,730 Q230,670 275,610 Q300,550 250,490 Q220,440 270,380 Q295,330 245,270"
          stroke="hsl(220 10% 55%)" strokeWidth="14" fill="none" opacity="0.03"
          filter="url(#smokeBlur2)" className="animate-smoke-wisp-7" />

        {/* Wide haze layer 1 */}
        <ellipse cx="200" cy="450" rx="180" ry="80" fill="hsl(220 10% 50%)" opacity="0.02"
          filter="url(#smokeBlur2)" className="animate-smoke-haze-1" />

        {/* Wide haze layer 2 */}
        <ellipse cx="150" cy="350" rx="150" ry="60" fill="hsl(35 15% 50%)" opacity="0.015"
          filter="url(#smokeBlur2)" className="animate-smoke-haze-2" />

        {/* Wide haze layer 3 */}
        <ellipse cx="280" cy="550" rx="160" ry="70" fill="hsl(220 8% 55%)" opacity="0.018"
          filter="url(#smokeBlur2)" className="animate-smoke-haze-3" />
      </svg>

      {/* ===== SMOKE LAYERS (CSS) ===== */}
      <div
        className="absolute inset-0 animate-smoke opacity-[0.07]"
        style={{
          background: "linear-gradient(180deg, transparent 20%, hsl(220 10% 40% / 0.4) 50%, transparent 80%)",
        }}
      />
      <div
        className="absolute inset-0 animate-smoke-slow opacity-[0.06]"
        style={{
          background: "linear-gradient(135deg, transparent 10%, hsl(35 15% 45% / 0.35) 45%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0 animate-smoke-slower opacity-[0.05]"
        style={{
          background: "linear-gradient(200deg, transparent 15%, hsl(220 8% 50% / 0.3) 50%, transparent 85%)",
        }}
      />

      {/* ===== LIGHT SWEEP ===== */}
      <div
        className="absolute inset-0 animate-light-sweep opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 40%, hsl(35 100% 60% / 0.04) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* ===== VIGNETTE ===== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 25%, hsl(220 20% 6% / 0.9) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
