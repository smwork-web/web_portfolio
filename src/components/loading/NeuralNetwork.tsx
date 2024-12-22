import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { useLoadingContext } from './LoadingContext';

const NeuralNodes = () => {
  const { progress } = useLoadingContext();
  const pointsRef = useRef<THREE.Points>(null);
  const nodesCount = 200;

  useEffect(() => {
    if (!pointsRef.current) return;

    const positions = new Float32Array(nodesCount * 3);
    const colors = new Float32Array(nodesCount * 3);

    for (let i = 0; i < nodesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 5;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      colors[i * 3] = 0.5;
      colors[i * 3 + 1] = 0.8;
      colors[i * 3 + 2] = 1;
    }

    pointsRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    pointsRef.current.geometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3)
    );
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.001;
    pointsRef.current.rotation.x += 0.0005;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const Connections = () => {
  const linesRef = useRef<THREE.LineSegments>(null);
  const { progress } = useLoadingContext();

  useEffect(() => {
    if (!linesRef.current) return;

    const positions = new Float32Array(600);
    const colors = new Float32Array(600);

    for (let i = 0; i < 200; i += 2) {
      const theta1 = Math.random() * Math.PI * 2;
      const phi1 = Math.acos(Math.random() * 2 - 1);
      const radius = 5;

      const x1 = radius * Math.sin(phi1) * Math.cos(theta1);
      const y1 = radius * Math.sin(phi1) * Math.sin(theta1);
      const z1 = radius * Math.cos(phi1);

      const theta2 = Math.random() * Math.PI * 2;
      const phi2 = Math.acos(Math.random() * 2 - 1);

      const x2 = radius * Math.sin(phi2) * Math.cos(theta2);
      const y2 = radius * Math.sin(phi2) * Math.sin(theta2);
      const z2 = radius * Math.cos(phi2);

      positions[i * 3] = x1;
      positions[i * 3 + 1] = y1;
      positions[i * 3 + 2] = z1;

      positions[i * 3 + 3] = x2;
      positions[i * 3 + 4] = y2;
      positions[i * 3 + 5] = z2;

      const color = new THREE.Color();
      color.setHSL(0.6, 1, 0.5);

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      colors[i * 3 + 3] = color.r;
      colors[i * 3 + 4] = color.g;
      colors[i * 3 + 5] = color.b;
    }

    linesRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    linesRef.current.geometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3)
    );
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    linesRef.current.rotation.y += 0.001;
    linesRef.current.rotation.x += 0.0005;
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry />
      <lineBasicMaterial vertexColors transparent opacity={0.2} />
    </lineSegments>
  );
};

const NeuralNetwork = () => {
  return (
    <div className="w-full h-64">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <NeuralNodes />
        <Connections />
      </Canvas>
    </div>
  );
};

export default NeuralNetwork;