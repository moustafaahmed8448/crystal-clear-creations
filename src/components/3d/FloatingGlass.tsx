import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

const GlassPrism = ({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.4) * 0.2;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.4}
          chromaticAberration={0.3}
          anisotropy={0.2}
          distortion={0.15}
          distortionScale={0.2}
          temporalDistortion={0.1}
          ior={1.6}
          color={color}
          roughness={0.03}
        />
      </mesh>
    </Float>
  );
};

const FloatingGlass = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 5, 3]} intensity={0.8} />
          <GlassPrism position={[-3, 0, 0]} scale={0.8} color="#88ccff" />
          <GlassPrism position={[3, 0.5, -1]} scale={0.6} color="#aaddff" />
          <GlassPrism position={[0, -1, 1]} scale={0.5} color="#77bbee" />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingGlass;
