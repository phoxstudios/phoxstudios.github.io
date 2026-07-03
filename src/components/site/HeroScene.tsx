import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function Blob() {
  const ref = useRef<Mesh>(null);
  useFrame(({ mouse, clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.25 + mouse.x * 0.3;
    ref.current.rotation.x = mouse.y * 0.3;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[1.6, 6]}>
        <MeshDistortMaterial
          color="#FFB300"
          roughness={0.15}
          metalness={0.9}
          distort={0.35}
          speed={1.6}
          emissive="#7a4a00"
          emissiveIntensity={0.6}
        />
      </Icosahedron>
    </Float>
  );
}

function Particles({ count = 120 }) {
  const group = useRef<any>(null);
  const positions = Array.from({ length: count }, () => [
    (Math.random() - 0.5) * 12,
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 6,
  ]);
  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.y = clock.elapsedTime * 0.05;
  });
  return (
    <group ref={group}>
      {positions.map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshBasicMaterial color="#FFC107" />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFC107" />
        <pointLight position={[-4, -2, -3]} intensity={2} color="#FFB300" />
        <Blob />
        <Particles />
        <Environment preset="warehouse" />
      </Suspense>
    </Canvas>
  );
}