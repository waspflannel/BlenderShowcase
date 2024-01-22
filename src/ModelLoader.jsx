import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';


export default function ModelLoader({ path }) {
  const mixer = useRef(null);
  const gltf = useLoader(GLTFLoader, path); // Load the model

  useEffect(() => {
    gltf.scale = 0.1;
    if (gltf.animations.length > 0) {
      mixer.current = new AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }
  }, [gltf]);

  useFrame((state, delta) => mixer.current?.update(delta));

  return <primitive object={gltf.scene} />;
}
