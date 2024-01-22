import * as THREE from 'three'
import { useEffect} from 'react'
import {useThree } from '@react-three/fiber'
import {CameraControls } from '@react-three/drei'
import { useRoute,  } from 'wouter'

export default function CameraFix({ position = new THREE.Vector3(0, 0, 6), focus = new THREE.Vector3(0, 0, 0) }) {
    const { controls, scene } = useThree()
    const [, params] = useRoute('/item/:id')
    useEffect(() => {
      const active = scene.getObjectByName(params?.id)
      if (active) {
        active.parent.localToWorld(position.set(0, 0.5, 3.5))
        active.parent.localToWorld(focus.set(0, 0, -2))
      }
      controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
    })
    return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
  }