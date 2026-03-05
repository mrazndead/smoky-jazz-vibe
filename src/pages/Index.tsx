import { useState, useEffect, useRef } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import JazzPlayer from "@/components/JazzPlayer";
import JazzQuote from "@/components/JazzQuote";
import { Music } from "lucide-react";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const totalImages = 4;

  // Cycle background every 25 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }, 25 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

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
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
      } else {
        // Swipe right -> Previous image
        setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
      }
    }
    
    touchStartX.current = null;
  };

  return (
    <div 
      className="relative min-h-screen flex flex-col overflow-hidden touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatedBackground currentImageIndex={currentImageIndex} />

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
          <div className="flex flex-col items-center gap-4">
            {/* Background Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalImages }).map((_, i) => (
                <div 
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    i === currentImageIndex ? "bg-primary w-4" : "bg-primary/20"
                  }`}
                />
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Music className="w-3 h-3" />
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase">
                Streaming Live Jazz 24/7
              </span>
              <Music className="w-3 h-3" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;