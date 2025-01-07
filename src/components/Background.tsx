import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

function Particles({ count = 5000 }) {
  const mesh = useRef<THREE.Points>(null)
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50

    // Blue-ish gradient colors
    colors[i * 3] = 0
    colors[i * 3 + 1] = 0.2 + Math.random() * 0.2
    colors[i * 3 + 2] = 0.8 + Math.random() * 0.2
  }

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.05
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.075
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          itemSize={3}
          array={positions}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          itemSize={3}
          array={colors}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  )
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <fog attach="fog" args={['#000', 20, 40]} />
        <Particles />
      </Canvas>
    </div>
  )
}
