// src/components/3d/MockupCanvas3D.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { MugModel } from './MugModel'; // 1. Importe o componente do modelo

interface MockupCanvas3DProps {
  // ...
}

export function MockupCanvas3D({}: MockupCanvas3DProps) {
  return (
    <div className="w-full h-full border rounded-lg bg-gray-100 dark:bg-gray-800">
      <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
        <ambientLight intensity={1.5} />
        <Suspense fallback={null}>
          {/* 2. Adicione o componente do modelo dentro do Suspense */}
          <MugModel />

          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          autoRotate // Adiciona uma rotação automática suave
          autoRotateSpeed={0.5}
          enableZoom={false} // Desabilita o zoom para focar na rotação
        />
      </Canvas>
    </div>
  );
}