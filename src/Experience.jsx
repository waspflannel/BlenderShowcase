import { OrbitControls , Text , MeshPortalMaterial,Gltf } from "@react-three/drei"
import { useRef , useState} from "react"
import * as THREE from 'three'


export default function Experience()
{

    const portalRef = useRef()
    

    const [isHovered , setisHovered] = useState(false);
    const [isZoomed , setisZoomed] = useState(false);

    

    return <>
        
        <OrbitControls makeDefault/>
    
        <mesh scale={5}  onClick ={()=>{setisHovered(true);setisZoomed(true)}} onDoubleClick={(e)=>{e.stopPropagation();setisHovered(false);setisZoomed(false)}}>
            <planeGeometry />
            <MeshPortalMaterial ref={portalRef} side={THREE.DoubleSide} blend={isHovered? 1 : 0}>
                <Gltf src="fiesta_tea-transformed.glb" position={[0, -2, -3]} />
                <Text position={[0,1.5,-4]}  color="salmon" font="./bangers-v20-latin-regular.woff">project 1</Text>
            </MeshPortalMaterial>
        </mesh>
        

        

    </>
}