import * as THREE from 'three'
import { useRef, useState } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial,  Text , Float } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'

extend(geometry)


export default function Frame({ id, name, author, width = 1, height = 1.61803398875, children, ...props }) {

  const portal = useRef()

  const [, setLocation] = useLocation()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))
  return (

    <Float floatIntensity={3} speed={1.5}>
    <group {...props}>
        <Text font="./Starjedi.ttf" fontSize={0.1} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.475, 0.715, 0.01]} material-toneMapped={false}>
      {name}
      </Text>
      <mesh name={id} onDoubleClick={(e) => (e.stopPropagation(), setLocation('/item/' + e.object.name))} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
    </Float>

    
  )
}

