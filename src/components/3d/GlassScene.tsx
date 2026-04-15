import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

const GlassCube = ({ position, scale, rotationSpeed }: { position: [number, number, number]; scale: number; rotationSpeed: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x += rotationSpeed * 0.003;
    ref.current.rotation.y += rotationSpeed * 0.005;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.5}
          chromaticAberration={0.2}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.2}
          temporalDistortion={0.1}
          ior={1.5}
          color="#88ccff"
          roughness={0.05}
        />
      </mesh>
    </Float>
  );
};

const GlassSphere = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.002;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + position[0] * 2) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.3}
          chromaticAberration={0.15}
          anisotropy={0.2}
          distortion={0.1}
          distortionScale={0.15}
          temporalDistortion={0.05}
          ior={1.8}
          color="#aaddff"
          roughness={0.02}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#88ccff" />

      <GlassCube position={[2.5, 0.2, 0]} scale={1.2} rotationSpeed={1} />
      <GlassCube position={[-2, 0.8, -1.5]} scale={0.8} rotationSpeed={1.5} />
      <GlassCube position={[0.3, -0.5, -1]} scale={0.6} rotationSpeed={0.8} />

      <Environment preset="city" />
    </>
  );
};

const GlassScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GlassScene;
