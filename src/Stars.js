import { useState, useRef } from 'react'
import {useFrame } from '@react-three/fiber'
import { Points, PointMaterial  } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
export default function Stars(props) {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(8000), { radius: 10 }))
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15.5
    })
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial transparent color="#EC9AA3" size={0.03} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>
    )
  }