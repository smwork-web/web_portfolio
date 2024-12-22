import React from 'react';
import CursorTrail from './cursor/CursorTrail';
import CursorDot from './cursor/CursorDot';
import { useCursorPosition } from './cursor/useCursorPosition';

const CustomCursor = () => {
  const { position, trail } = useCursorPosition();

  return (
    <>
      <CursorTrail points={trail} />
      <CursorDot position={position} />
    </>
  );
};

export default CustomCursor;