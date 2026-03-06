import AnimatedBackground from "@/components/AnimatedBackground";
import JazzPlayer from "@/components/JazzPlayer";
import JazzQuote from "@/components/JazzQuote";
import { Music } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <AnimatedBackground />

      {/* LIVE Indicator - Top Right */}
      <div className="absolute top-8 right-8 z-20 pointer-events-none select-none">
        <div className="flex items-center animate-flicker-subtle">
          <span className="font-display text-[14px] font-black tracking-[0.2em] text-orange-500/60 uppercase italic blur-[0.8px] animate-neon-orange-pulse"
            style={{ 
              textShadow: "0 0 6px rgba(249, 115, 22, 0.4)",
            }}>
            Live
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen px-4 py-8">
        {/* Header */}
        <header className="text-center mb-6">
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-primary/60 mb-2">
            ♪ est. 1920 ♪
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-black italic text-foreground animate-amber-glow leading-none">
            The Blue Note
          </h1>
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-neon-blue animate-neon-pulse mt-2"
            style={{ textShadow: "0 0 8px hsl(200 80% 50% / 0.7), 0 0 24px hsl(200 80% 50% / 0.4), 0 0 48px hsl(200 80% 50% / 0.2)" }}>
            Underground Jazz Parlour
          </p>
        </header>

        {/* Quote */}
        <div className="mb-8">
          <JazzQuote />
        </div>

        {/* Player */}
        <div className="flex-1 flex items-start justify-center">
          <JazzPlayer />
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 pb-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Music className="w-3 h-3" />
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase">
              Streaming Live Jazz 24/7
            </span>
            <Music className="w-3 h-3" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;