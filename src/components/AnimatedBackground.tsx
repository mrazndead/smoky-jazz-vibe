import jazzBarBg from "@/assets/jazz-bar-bg.jpg";

const musicNotes = ["♪", "♫", "♬", "♩", "♭", "♯"];

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base image with flicker */}
      <div
        className="absolute inset-0 animate-flicker bg-cover bg-center"
        style={{ backgroundImage: `url(${jazzBarBg})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Moon glow - top right */}
      <div className="absolute top-6 right-10 w-16 h-16 rounded-full animate-moon-glow"
        style={{
          background: "radial-gradient(circle, hsl(45 80% 85% / 0.9) 0%, hsl(45 60% 70% / 0.4) 40%, transparent 70%)",
          boxShadow: "0 0 40px 20px hsl(45 80% 70% / 0.15), 0 0 80px 40px hsl(45 60% 60% / 0.08)",
        }}
      />

      {/* Warm amber light cone - top left */}
      <div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full animate-breathe"
        style={{
          background: "radial-gradient(circle, hsl(35 100% 60% / 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Blue neon light cone - top right */}
      <div
        className="absolute -top-10 -right-20 w-[400px] h-[400px] rounded-full animate-breathe"
        style={{
          background: "radial-gradient(circle, hsl(200 80% 50% / 0.1) 0%, transparent 70%)",
          animationDelay: "3s",
        }}
      />

      {/* Neon sign - "JAZZ" */}
      <div className="absolute top-16 left-6 animate-neon-sign pointer-events-none select-none">
        <span className="font-display text-2xl font-black italic text-neon-blue" style={{
          textShadow: "0 0 7px hsl(200 80% 50% / 0.8), 0 0 20px hsl(200 80% 50% / 0.5), 0 0 40px hsl(200 80% 50% / 0.3)",
        }}>JAZZ</span>
      </div>

      {/* Neon sign - "LIVE" */}
      <div className="absolute top-28 right-8 animate-neon-sign-alt pointer-events-none select-none">
        <span className="font-display text-lg font-bold text-primary" style={{
          textShadow: "0 0 7px hsl(35 100% 60% / 0.8), 0 0 20px hsl(35 100% 60% / 0.5), 0 0 40px hsl(35 100% 60% / 0.3)",
        }}>♪ LIVE ♪</span>
      </div>

      {/* Candle flickers - scattered */}
      {[
        { left: "12%", bottom: "18%", delay: "0s", size: "w-1 h-3" },
        { left: "78%", bottom: "22%", delay: "0.7s", size: "w-1 h-2.5" },
        { left: "45%", bottom: "15%", delay: "1.3s", size: "w-0.5 h-2" },
        { left: "88%", bottom: "30%", delay: "2s", size: "w-1 h-3" },
      ].map((c, i) => (
        <div key={`candle-${i}`} className="absolute pointer-events-none" style={{ left: c.left, bottom: c.bottom }}>
          <div className={`${c.size} bg-gradient-to-t from-primary/60 to-primary rounded-full animate-candle-flicker`}
            style={{ animationDelay: c.delay, filter: "blur(1px)" }} />
          <div className="w-3 h-3 -mt-1 rounded-full animate-candle-glow"
            style={{
              animationDelay: c.delay,
              background: "radial-gradient(circle, hsl(35 100% 60% / 0.5) 0%, transparent 70%)",
            }} />
        </div>
      ))}

      {/* Floating music notes */}
      {musicNotes.map((note, i) => (
        <div
          key={`note-${i}`}
          className="absolute text-primary/30 pointer-events-none select-none animate-float-note font-display"
          style={{
            left: `${10 + i * 15}%`,
            bottom: "-20px",
            fontSize: `${18 + (i % 3) * 8}px`,
            animationDelay: `${i * 1.8}s`,
            animationDuration: `${7 + (i % 4) * 2}s`,
          }}
        >
          {note}
        </div>
      ))}

      {/* Extra floating notes layer */}
      {["♪", "♫", "♬", "♩"].map((note, i) => (
        <div
          key={`note2-${i}`}
          className="absolute text-neon-blue/20 pointer-events-none select-none animate-float-note-alt font-display"
          style={{
            left: `${25 + i * 18}%`,
            bottom: "-30px",
            fontSize: `${14 + (i % 2) * 10}px`,
            animationDelay: `${2 + i * 2.5}s`,
            animationDuration: `${9 + i * 1.5}s`,
          }}
        >
          {note}
        </div>
      ))}

      {/* Smoke layers */}
      <div
        className="absolute inset-0 animate-smoke opacity-10"
        style={{
          background: "linear-gradient(180deg, transparent 30%, hsl(220 10% 30% / 0.4) 60%, transparent 90%)",
        }}
      />
      <div
        className="absolute inset-0 animate-smoke-slow opacity-10"
        style={{
          background: "linear-gradient(135deg, transparent 20%, hsl(35 20% 40% / 0.3) 50%, transparent 80%)",
        }}
      />

      {/* Strobe flash - more dramatic */}
      <div className="absolute inset-0 bg-foreground animate-strobe pointer-events-none" />
      <div className="absolute inset-0 bg-neon-blue animate-strobe-blue pointer-events-none" />

      {/* Colored strobe spots */}
      <div className="absolute top-0 left-1/4 w-40 h-full animate-strobe-spot pointer-events-none"
        style={{ background: "linear-gradient(180deg, hsl(200 80% 50% / 0.08) 0%, transparent 40%)" }} />
      <div className="absolute top-0 right-1/4 w-40 h-full animate-strobe-spot pointer-events-none"
        style={{ background: "linear-gradient(180deg, hsl(35 100% 60% / 0.06) 0%, transparent 40%)", animationDelay: "3s" }} />

      {/* Light sweep across stage */}
      <div
        className="absolute inset-0 animate-light-sweep opacity-30 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 40%, hsl(35 100% 60% / 0.06) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, hsl(220 20% 6% / 0.85) 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
