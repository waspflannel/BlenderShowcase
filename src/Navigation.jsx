
import {  Html  } from '@react-three/drei'
import { useEffect } from 'react'
import { useRoute, useLocation } from 'wouter'


export default function Navigation(){
    const [, params] = useRoute('/item/:id')
    const [, setLocation] = useLocation()

    useEffect(()=>{
        setLocation('/')
        console.log("running")
    },[])
    return(
    <Html>
        <div style={{position : 'relative'}}>
        <a style={{ 
            position: 'absolute', 
            fontSize: '64px', 
            top:-400,
            left : -350,
            color: 'white',
            whiteSpace : 'nowrap'
   
        }} onClick={() => setLocation('/')}>
            {params ? 'back' : 'double click to enter portal'}
        </a>
        </div>
    </Html>
    )

}