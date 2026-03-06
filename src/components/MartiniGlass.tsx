interface MartiniGlassProps {
  isPlaying: boolean;
}

const MartiniGlass = ({ isPlaying }: MartiniGlassProps) => {
  return (
    <div className="relative w-32 h-24 flex-shrink-0 flex items-center justify-center">
      {/* First Martini Glass (Left) */}
      <div className="relative w-20 h-24 opacity-50 hover:opacity-70 transition-opacity duration-700 translate-x-4">
        <svg viewBox="0 0 80 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glassGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(200 20% 75%)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="hsl(200 20% 75%)" stopOpacity="0.15" />
            </linearGradient>
            <filter id="martiniGlow1" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon
            points="15,20 65,20 40,58"
            fill="url(#glassGrad1)"
            stroke="hsl(200 20% 75% / 0.5)"
            strokeWidth="1"
            filter="url(#martiniGlow1)"
          />
          <line x1="22" y1="30" x2="58" y2="30" stroke="hsl(35 60% 60% / 0.35)" strokeWidth="0.7" />
          <line x1="40" y1="58" x2="40" y2="82" stroke="hsl(200 20% 75% / 0.45)" strokeWidth="1.4" />
          <ellipse cx="40" cy="83" rx="12" ry="2.5" fill="none" stroke="hsl(200 20% 75% / 0.45)" strokeWidth="1" />
          
          {/* Toothpick */}
          <line
            x1="30" y1="10" x2="50" y2="40"
            stroke="hsl(35 40% 50% / 0.7)"
            strokeWidth="1.5"
            className={isPlaying ? "animate-toothpick-sway" : ""}
            style={{ transformOrigin: "40px 25px" }}
          />
          
          {/* Olive */}
          <g className={isPlaying ? "animate-olive-bob" : ""} style={{ transformOrigin: "42px 32px" }}>
            <ellipse cx="42" cy="32" rx="6" ry="5" fill="hsl(90 50% 40%)" />
            <ellipse cx="42" cy="32" rx="2" ry="1.5" fill="hsl(35 50% 30%)" />
          </g>
          
          <line x1="17" y1="20" x2="63" y2="20" stroke="hsl(200 30% 80% / 0.25)" strokeWidth="0.5" />
          <line x1="24" y1="24" x2="34" y2="44" stroke="hsl(200 30% 80% / 0.1)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Second Martini Glass (Right) */}
      <div className="relative w-20 h-24 opacity-50 hover:opacity-70 transition-opacity duration-700 -translate-x-4">
        <svg viewBox="0 0 80 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glassGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(200 20% 75%)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="hsl(200 20% 75%)" stopOpacity="0.15" />
            </linearGradient>
            <filter id="martiniGlow2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon
            points="15,20 65,20 40,58"
            fill="url(#glassGrad2)"
            stroke="hsl(200 20% 75% / 0.5)"
            strokeWidth="1"
            filter="url(#martiniGlow2)"
          />
          <line x1="22" y1="30" x2="58" y2="30" stroke="hsl(35 60% 60% / 0.35)" strokeWidth="0.7" />
          <line x1="40" y1="58" x2="40" y2="82" stroke="hsl(200 20% 75% / 0.45)" strokeWidth="1.4" />
          <ellipse cx="40" cy="83" rx="12" ry="2.5" fill="none" stroke="hsl(200 20% 75% / 0.45)" strokeWidth="1" />
          
          {/* Toothpick */}
          <line
            x1="30" y1="10" x2="50" y2="40"
            stroke="hsl(35 40% 50% / 0.7)"
            strokeWidth="1.5"
            className={isPlaying ? "animate-toothpick-sway" : ""}
            style={{ transformOrigin: "40px 25px" }}
          />
          
          {/* Olive */}
          <g className={isPlaying ? "animate-olive-bob" : ""} style={{ transformOrigin: "42px 32px" }}>
            <ellipse cx="42" cy="32" rx="6" ry="5" fill="hsl(90 50% 40%)" />
            <ellipse cx="42" cy="32" rx="2" ry="1.5" fill="hsl(35 50% 30%)" />
          </g>
          
          <line x1="17" y1="20" x2="63" y2="20" stroke="hsl(200 30% 80% / 0.25)" strokeWidth="0.5" />
          <line x1="24" y1="24" x2="34" y2="44" stroke="hsl(200 30% 80% / 0.1)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default MartiniGlass;