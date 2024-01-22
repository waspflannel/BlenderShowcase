import { Gltf, useGLTF } from '@react-three/drei';



export default function ModelLoader({ path , position ,scale}) {

    return(
        <Gltf src={path} position = {position}> scale={scale}</Gltf>
    )
}
