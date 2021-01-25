import * as THREE from 'three'
import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Model, Fragments } from './Text'

function Scene() {
  const vec = new THREE.Vector3()
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
  useFrame((state) => {
    state.camera.position.lerp(vec.set(clicked ? -10 : 0, clicked ? 10 : 0, 20), 0.1)
    state.camera.lookAt(0, 0, 0)
  })
  return (
    <group>
      <Fragments visible={clicked} />
      <Model visible={!clicked} onClick={() => setClicked(true)} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} />
    </group>
  )
}

export default function App() {
  return (
    <Canvas concurrent pixelRatio={[1, 2]} orthographic camera={{ zoom: 250 }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
