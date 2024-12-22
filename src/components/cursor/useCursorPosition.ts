import { useState, useEffect } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface CursorTrailPoint extends CursorPosition {
  timestamp: number;
}

export const useCursorPosition = (trailLength: number = 15) => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [trail, setTrail] = useState<CursorTrailPoint[]>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      
      const newPoint = { ...newPosition, timestamp: Date.now() };
      setTrail(prev => [...prev, newPoint].slice(-trailLength));
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, [trailLength]);

  return { position, trail };
};

export type { CursorPosition, CursorTrailPoint };