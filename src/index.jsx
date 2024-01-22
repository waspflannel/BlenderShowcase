import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Stars from './Stars'
import Frame from './Frame'


import {Gltf, } from '@react-three/drei'
import CameraFix from './CameraFix'
import Navigation from './Navigation'


var model = <Gltf src="spaceboi.glb" position={[0, -2, -3]} scale={0.5}/>
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
        } }
    >
    <Navigation/>
    <CameraFix/>

    <Frame id="01" name="Retro" author="Jaden Varghese">
    {/*This work is based on "space boi" (https://sketchfab.com/3d-models/space-boi-f6a8c6a6727b4f2cb020c8b50bb2ee60) by silvercrow101 (https://sketchfab.com/silvercrow101) licensed under CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)*/}
            <Gltf src="animation1.glb" position={[0, -2, -3]} />
    </Frame>
    <group position={[-2.5,0,0]}>
            <Frame id="02" name="Space Boy" author="Jaden Varghese">
                <Gltf src='spaceboi.glb'position={[0, -2, -3]} scale={0.5}/>
            </Frame>
    </group>
    <group position={[2.5,0,0]}>
            <Frame id="03" name="Space Girl" author="Jaden Varghese">

                    <Gltf src="spacegirl1.glb" position={[0, -2, -3]}/>
    
            </Frame>
    </group>
    <Stars/>
    </Canvas>
)