import { useEffect, useState } from "react";

const COLORS = [
  "hsl(270, 60%, 55%)",
  "hsl(330, 60%, 65%)",
  "hsl(42, 90%, 60%)",
  "hsl(180, 60%, 50%)",
  "hsl(120, 50%, 55%)",
  "hsl(0, 70%, 60%)",
];

type Piece = { id: number; left: number; color: string; delay: number; size: number };

const ConfettiEffect = ({ active }: { active: boolean }) => {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (!active) { setPieces([]); return; }
    const newPieces: Piece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 2,
      size: Math.random() * 8 + 6,
    }));
    setPieces(newPieces);
    const timer = setTimeout(() => setPieces([]), 3500);
    return () => clearTimeout(timer);
  }, [active]);

  if (!pieces.length) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece rounded-sm"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;
