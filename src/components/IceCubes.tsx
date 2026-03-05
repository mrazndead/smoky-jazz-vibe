import { useState, useEffect } from 'react';

const IceCubes = () => {
  const [iceCubes, setIceCubes] = useState([
    { x: 0, y: 0, size: 1, rotation: 0, opacity: 0.8 },
    { x: 0, y: 0, size: 1, rotation: 0, opacity: 0.8 },
    { x: 0, y: 0, size: 1, rotation: 0, opacity: 0.8 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIceCubes((prev) => {
        return prev.map((cube) => ({
          ...cube,
          y: cube.y - 0.1,
          rotation: cube.rotation + 0.05,
          opacity: cube.opacity - 0.01,
        }));
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none">
      {iceCubes.map((cube, index) => (
        <div
          key={index}
          className="absolute bottom-0 left-0 w-8 h-8 rounded-full bg-white/80"
          style={{
            transform: `translate(${cube.x * 100}%, ${cube.y * 100}%) rotate(${cube.rotation}rad)`,
            opacity: cube.opacity,
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default IceCubes;