interface VinylDiscProps {
  isPlaying: boolean;
}

const VinylDisc = ({ isPlaying }: VinylDiscProps) => {
  return (
    <div className="relative w-28 h-28 flex-shrink-0">
      {/* Outer ring glow */}
      <div className="absolute inset-0 rounded-full border border-primary/30 animate-amber-glow" />
      {/* Vinyl body */}
      <div
        className={`absolute inset-1 rounded-full bg-gradient-to-br from-muted to-background border border-border/50 ${
          isPlaying ? "animate-vinyl-spin-slow" : ""
        }`}
      >
        {/* Grooves */}
        <div className="absolute inset-3 rounded-full border border-muted-foreground/10" />
        <div className="absolute inset-5 rounded-full border border-muted-foreground/10" />
        <div className="absolute inset-7 rounded-full border border-muted-foreground/10" />
        {/* Label */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary-foreground/80" />
        </div>
      </div>
    </div>
  );
};

export default VinylDisc;
