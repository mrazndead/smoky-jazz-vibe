import jazzBarBg from "@/assets/jazz-bar-bg.jpg";

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

      {/* Strobe flash */}
      <div className="absolute inset-0 bg-foreground animate-strobe pointer-events-none" />

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
