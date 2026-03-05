import { musicNotes } from "@/data/musicNotes";

interface AnimatedBackgroundProps {
  currentImageIndex: number;
}

const images = [
  "/1.png",
  "/2.png",
  "/3.jpg",
  "/4.png",
];

const AnimatedBackground = ({ currentImageIndex }: AnimatedBackgroundProps) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
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
      <div className="absolute inset-0 bg-background/75" />

      {/* ===== CIGAR SMOKE WISPS (Left Side) ===== */}
      <div className="absolute bottom-0 left-4 w-24 h-64">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`smoke-wisp-${i}`}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-32 bg-gradient-to-t from-transparent via-white/20 to-transparent rounded-full blur-xl animate-smoke-wisp"
            style={{
              animationDelay: `${i * 4}s`,
              left: `${20 + i * 30}%`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      {/* ===== CEILING SPOTLIGHT BEAMS ===== */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="none">
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
        <polygon points="120,0 80,500 160,500" fill="url(#beam1)" className="animate-spotlight-sweep" style={{ transformOrigin: "120px 0px" }} />
        <polygon points="280,0 240,450 320,450" fill="url(#beam2)" className="animate-spotlight-sweep-alt" style={{ transformOrigin: "280px 0px" }} />
        <polygon points="40,0 10,420 70,420" fill="url(#beam4)" className="animate-spotlight-sweep" style={{ transformOrigin: "40px 0px", animationDelay: "1s" }} />
        <polygon points="360,0 320,480 400,480" fill="url(#beam1)" className="animate-spotlight-sweep-alt" style={{ transformOrigin: "360px 0px", animationDelay: "0.5s" }} />
        <polygon points="200,0 170,400 230,400" fill="url(#beam3)" className="animate-spotlight-breathe" style={{ transformOrigin: "200px 0px" }} />
      </svg>

      {/* ===== CEILING LIGHT FIXTURES ===== */}
      <svg className="absolute top-0 left-0 w-full h-12" viewBox="0 0 400 30" preserveAspectRatio="none">
        {[80, 200, 320].map((x, i) => (
          <g key={`fixture-${i}`}>
            <line x1={x} y1="0" x2={x} y2="12" stroke="hsl(35 30% 25%)" strokeWidth="1" />
            <circle cx={x} cy="14" r="3" fill="none" stroke="hsl(35 40% 30%)" strokeWidth="0.5" />
            <circle cx={x} cy="14" r="1.5" className={`animate-fixture-glow-${i}`} fill="hsl(35 100% 60%)" opacity="0.6" />
          </g>
        ))}
      </svg>

      {/* ===== MOON ===== */}
      <div className="absolute top-5 right-8 w-12 h-12 rounded-full animate-moon-glow"
        style={{
          background: "radial-gradient(circle, hsl(45 70% 88% / 0.7) 0%, hsl(45 50% 70% / 0.2) 50%, transparent 70%)",
          boxShadow: "0 0 30px 12px hsl(45 70% 70% / 0.08)",
        }}
      />

      {/* ===== FLOATING MUSIC NOTES ===== */}
      {musicNotes.map((note, i) => (
        <div
          key={`note-${i}`}
          className={`absolute select-none ${i % 2 === 0 ? 'animate-float-note' : 'animate-float-note-alt'}`}
          style={{
            left: `${5 + i * 10}%`,
            bottom: "-20px",
            fontSize: `${14 + (i % 3) * 6}px`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${8 + (i % 4) * 2}s`,
            color: i % 2 === 0 ? "hsl(35 85% 55% / 0.25)" : "hsl(200 80% 50% / 0.2)",
          }}
        >
          {note}
        </div>
      ))}

      {/* ===== DUST / PARTICLES ===== */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="none">
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
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 25%, hsl(220 20% 6% / 0.9) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;