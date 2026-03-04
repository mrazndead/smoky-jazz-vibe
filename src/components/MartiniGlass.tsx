const MartiniGlass = () => {
  return (
    <div className="w-20 h-24 opacity-60 hover:opacity-80 transition-opacity duration-700">
      <svg viewBox="0 0 80 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(200 20% 75%)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="hsl(200 20% 75%)" stopOpacity="0.15" />
          </linearGradient>
          <filter id="martiniGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Glass bowl - V shape */}
        <polygon
          points="15,20 65,20 40,58"
          fill="url(#glassGrad)"
          stroke="hsl(200 20% 75% / 0.5)"
          strokeWidth="1"
          filter="url(#martiniGlow)"
        />

        {/* Liquid surface */}
        <line x1="22" y1="30" x2="58" y2="30" stroke="hsl(35 60% 60% / 0.35)" strokeWidth="0.7" />

        {/* Stem */}
        <line x1="40" y1="58" x2="40" y2="82" stroke="hsl(200 20% 75% / 0.45)" strokeWidth="1.4" />

        {/* Base */}
        <ellipse cx="40" cy="83" rx="12" ry="2.5" fill="none" stroke="hsl(200 20% 75% / 0.45)" strokeWidth="1" />

        {/* Toothpick - Adjusted to stay inside the bowl */}
        <line
          x1="30" y1="10" x2="50" y2="40"
          stroke="hsl(35 40% 50% / 0.7)"
          strokeWidth="1.5"
          className="animate-toothpick-sway"
          style={{ transformOrigin: "40px 25px" }}
        />

        {/* Olive - Adjusted to match new toothpick position */}
        <g className="animate-olive-bob" style={{ transformOrigin: "40px 25px" }}>
          <ellipse cx="40" cy="25" rx="6" ry="5" fill="hsl(90(35% 40% / 0.9)" />
          <ellipse cx="40" cy="25" rx="2" ry="1.5" fill="hsl(35 50% 30% / 0.8)" />
        </g>

        {/* Rim highlight */}
        <line x1="17" y1="20" x2="63" y2="20" stroke="hsl(200 30% 80% / 0.25)" strokeWidth="0.5" />

        {/* Subtle glass reflection */}
        <line x1="24" y1="24" x2="34" y2="44" stroke="hsl(200 30% 80% / 0.1)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default MartiniGlass;