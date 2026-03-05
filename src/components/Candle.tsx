const Candle = () => {
  return (
    <div className="relative w-8 h-12 flex flex-col items-center">
      {/* Flame */}
      <div className="absolute -top-4 w-3 h-5 rounded-full bg-primary/80 blur-[1px] animate-candle-flicker">
        <div className="absolute inset-0 w-full h-full rounded-full bg-white/40 blur-[2px]" />
      </div>
      {/* Glow */}
      <div className="absolute -top-6 w-12 h-12 rounded-full bg-primary/20 blur-xl animate-candle-glow" />
      {/* Candle Body */}
      <div className="w-4 h-12 bg-gradient-to-b from-primary/40 to-primary/10 rounded-sm border-x border-t border-primary/20" />
    </div>
  );
};

export default Candle;