import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

/* Auto-generated by https://github.com/pmndrs/gltfjsx */

export function Fragments(props) {
  const group = useRef()
  const { scene, animations, materials } = useGLTF('/hello-fragments.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    scene.traverse((o) => o.type === 'Mesh' && o.material === materials.inner && (o.material = new THREE.MeshNormalMaterial()))
    if (props.visible)
      Object.keys(actions).forEach((key) => {
        actions[key].repetitions = 0
        actions[key].clampWhenFinished = true
        actions[key].play()
      })
  }, [props.visible])
  return <primitive ref={group} object={scene} {...props} />
}

export function Model(props) {
  const { scene } = useGLTF('/hello-text.glb')
  return <primitive object={scene} {...props} />
}

useGLTF.preload('/hello-text.glb')
useGLTF.preload('/hello-fragments.glb')
