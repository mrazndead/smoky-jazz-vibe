import { useState, useEffect, useRef } from "react";
import jazzBarBg from "@/assets/jazz-bar-bg.jpg";
// Assuming these images will be added to the assets folder
const jazzBarBg2 = "/src/assets/jazz-bar-bg-2.jpg";
const jazzBarBg3 = "/src/assets/jazz-bar-bg-3.jpg";
const jazzBarBg4 = "/src/assets/jazz-bar-bg-4.jpg";

const musicNotes = ["♪", "♫", "♬", "♩", "♭", "♯", "𝄞", "♪", "♫"];

const AnimatedBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const images = [jazzBarBg, jazzBarBg2, jazzBarBg3, jazzBarBg4];

  // Cycle background every 25 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 25 * 60 * 1000); // 25 minutes in milliseconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Manual swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const threshold = 50; // minimum distance for a swipe

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left -> Next image
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else {
        // Swipe right -> Previous image
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    
    touchStartX.current = null;
  };

  return (
    <div 
      className="fixed inset-0 z-0 overflow-hidden touch-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with Crossfade */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

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
          <linearGradient id="beam4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(200 80% 50%)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="hsl(200 80% 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Sweeping amber spotlight */}
        <polygon points="120,0 80,500 160,500" fill="url(#beam1)" className="animate-spotlight-sweep" style={{ transformOrigin: "120px 0px" }} />
        {/* Sweeping blue spotlight */}
        <polygon points="280,0 240,450 320,450" fill="url(#beam2)" className="animate-spotlight-sweep-alt" style={{ transformOrigin: "280px 0px" }} />
        {/* Third sweeping spotlight (blue) - Left side */}
        <polygon points="40,0 10,420 70,420" fill="url(#beam4)" className="animate-spotlight-sweep" style={{ transformOrigin: "40px 0px", animationDelay: "1s" }} />
        {/* Fourth sweeping spotlight (amber) - Right side */}
        <polygon points="360,0 320,480 400,480" fill="url(#beam1)" className="animate-spotlight-sweep-alt" style={{ transformOrigin: "360px 0px", animationDelay: "0.5s" }} />
        {/* Center subtle beam */}
        <polygon points="200,0 170,400 230,400" fill="url(#beam3)" className="animate-spotlight-breathe" style={{ transformOrigin: "200px 0px" }} />
      </svg>

      {/* ===== CEILING LIGHT FIXTURES ===== */}
      <svg className="absolute top-0 left-0 w-full h-12 pointer-events-none" viewBox="0 0 400 30" preserveAspectRatio="none">
        {[80, 200, 320].map((x, i) => (
          <g key={`fixture-${i}`}>
            <line x1={x} y1="0" x2={x} y2="12" stroke="hsl(35 30% 25%)" strokeWidth="1" />
            <circle cx={x} cy="14" r="3" fill="none" stroke="hsl(35 40% 30%)" strokeWidth="0.5" />
            <circle cx={x} cy="14" r="1.5" className={`animate-fixture-glow-${i}`} fill="hsl(35 100% 60%)" opacity="0.6" />
          </g>
        ))}
      </svg>

      {/* ===== CEILING STROBE LIGHTS ===== */}
      <svg className="absolute top-0 left-0 w-full h-8 pointer-events-none" viewBox="0 0 400 20" preserveAspectRatio="none">
        <rect x="60" y="0" width="8" height="8" fill="hsl(35 100% 60%)" className="animate-strobe" style={{ animationDelay: "0s" }} />
        <rect x="160" y="0" width="8" height="8" fill="hsl(200 80% 50%)" className="animate-strobe" style={{ animationDelay: "0.3s" }} />
        <rect x="260" y="0" width="8" height="8" fill="hsl(35 100% 60%)" className="animate-strobe" style={{ animationDelay: "0.6s" }} />
        <rect x="340" y="0" width="8" height="8" fill="hsl(200 80% 50%)" className="animate-strobe" style={{ animationDelay: "0.9s" }} />
      </svg>

      {/* ===== MOON ===== */}
      <div className="absolute top-5 right-8 w-12 h-12 rounded-full animate-moon-glow pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(45 70% 88% / 0.7) 0%, hsl(45 50% 70% / 0.2) 50%, transparent 70%)",
          boxShadow: "0 0 30px 12px hsl(45 70% 70% / 0.08)",
        }}
      />

      {/* ===== NEON SIGNS ===== */}
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

      {/* ===== CANDLES ===== */}
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
            <rect x={c.x - 2} y={c.y} width="4" height={c.h} rx="1" fill="hsl(35 30% 25%)" opacity="0.5" />
            <line x1={c.x} y1={c.y} x2={c.x} y2={c.y - 3} stroke="hsl(35 20% 20%)" strokeWidth="0.5" />
            <ellipse cx={c.x} cy={c.y - 5} rx="2.5" ry="4" fill="hsl(35 100% 60%)" opacity="0.3"
              className="animate-candle-flicker" style={{ animationDelay: `${c.delay}s`, transformOrigin: `${c.x}px ${c.y - 5}px` }} />
            <ellipse cx={c.x} cy={c.y - 5} rx="1.2" ry="2.5" fill="hsl(45 100% 80%)" opacity="0.6"
              className="animate-candle-flicker" style={{ animationDelay: `${c.delay + 0.2}s`, transformOrigin: `${c.x}px ${c.y - 5}px` }} />
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

      {/* ===== DUST / PARTICLES ===== */}
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