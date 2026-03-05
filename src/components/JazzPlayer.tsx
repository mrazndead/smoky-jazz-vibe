import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Radio } from 'lucide-react';
import { jazzStations } from '@/data/jazzStations';
import VinylDisc from './VinylDisc';
import MartiniGlass from './MartiniGlass';

const JazzPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [stationIndex, setStationIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wakeLockRef = useRef<any>(null);

  const station = jazzStations[stationIndex];

  // Screen Wake Lock logic
  useEffect(() => {
    const requestWakeLock = async () => {
      if ('wakeLock' in navigator && isPlaying) {
        try {
          wakeLockRef.current = await (navigator as any).wakeLock.request('screen');
        } catch (err) {
          console.error(`${err.name}, ${err.message}`);
        }
      }
    };

    const releaseWakeLock = async () => {
      if (wakeLockRef.current) {
        await wakeLockRef.current.release();
        wakeLockRef.current = null;
      }
    };

    if (isPlaying) {
      requestWakeLock();
    } else {
      releaseWakeLock();
    }

    // Re-request wake lock if tab becomes visible again
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isPlaying) {
        requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      releaseWakeLock();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying]);

  useEffect(() => {
    const audio = new Audio();
    audio.volume = volume;
    audio.crossOrigin = 'anonymous';
    audioRef.current = audio;

    audio.addEventListener('playing', () => {
      setLoading(false);
      setIsPlaying(true);
    });
    audio.addEventListener('waiting', () => setLoading(true));
    audio.addEventListener('error', () => {
      setLoading(false);
      setIsPlaying(false);
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setLoading(true);
      audio.src = station.url;
      audio.play().catch(() => {
        setLoading(false);
        setIsPlaying(false);
      });
    }
  };

  const changeStation = (direction: number) => {
    const newIndex = (stationIndex + direction + jazzStations.length) % jazzStations.length;
    setStationIndex(newIndex);
    const audio = audioRef.current;
    if (audio && isPlaying) {
      setLoading(true);
      audio.src = jazzStations[newIndex].url;
      audio.play().catch(() => {
        setLoading(false);
        setIsPlaying(false);
      });
    }
  };

  return (
    <div className="glass-card rounded-xl p-5 w-full max-w-sm mx-auto">
      {/* Station info with vinyl */}
      <div className="flex items-center gap-4 mb-5">
        <VinylDisc isPlaying={isPlaying && !loading} />
        <div className="flex-1 min-w-0">
          {/* Status Indicator Area */}
          <div className="flex flex-col gap-1.5 mb-1">
            {/* Visualizer Container - Extended to the right */}
            <div className="relative w-full h-32 mb-4 pr-[30%]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
              <div className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl font-bold">
                {isPlaying ? "LIVE" : loading ? "TUNING..." : "OFFLINE"}
              </div>
            </div>
            {/* Visualizer Bars */}
            <div className="absolute inset-0 flex items-center justify-center space-x-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse duration-2s ease-in-out"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
          {/* Status Text (Below) */}
          <div className="flex items-center gap-1.5">
            <Radio className="w-3 h-3 text-primary" />
            <span className={`text-xs font-mono ${isPlaying ? "text-primary animate-amber-glow" : "text-muted-foreground"}`}>
              {isPlaying ? "LIVE" : loading ? "TUNING..." : "OFFLINE"}
            </span>
          </div>
        </div>
        <div className="shrink-0 self-center">
          <MartiniGlass isPlaying={isPlaying && !loading} />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <button
          onClick={() => changeStation(-1)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <SkipBack className="w-5 h-5" />
        </button>

        <button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full border-2 border-primary/60 flex items-center justify-center text-primary hover:bg-primary/10 transition-all hover:border-primary/30 hover:scale-105 active:scale-95"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6 ml-0.5" />
          )}
        </button>

        <button
          onClick={() => changeStation(1)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <SkipForward className="w-5 h-5" />
        </button>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-3 px-2">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={(e) => {
            setVolume(parseFloat(e.target.value));
            setIsMuted(false);
          }}
          className="flex-1 h-1 appearance-none bg-muted rounded-full cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
        />
      </div>

      {/* Station list */}
      <div className="mt-4 pt-4 border-t border-border/30">
        <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted-foreground mb-2 text-center">
          ♪ Stations ♪
        </p>
        <div className="flex flex-wrap gap-1.5 justify-center">
          {jazzStations.map((s, i) => (
            <button
              key={s.name}
              onClick={() => {
                setStationIndex(i);
                if (isPlaying && audioRef.current) {
                  setLoading(true);
                  audioRef.current.src = s.url;
                  audioRef.current.play().catch(() => {
                    setLoading(false);
                    setIsPlaying(false);
                  });
                }
              }}
              className={`text-[10px] font-mono px-2.5 py-1 rounded-full border transition-all ${
                i === stationIndex
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JazzPlayer;