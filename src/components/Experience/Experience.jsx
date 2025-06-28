import { Environment, OrbitControls } from '@react-three/drei'
import Lights from '../Lights/Lights'
import Model from '../Model/Model'
import './Experience.css'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import Floor from '../Floor/Floor'
import { useThree } from '@react-three/fiber'

const Experience =()=>{


    return(
        <>
        <div className='experience'>
        <Canvas
        shadows
        camera={{
            fov: 75,
            near: 0.1,
            far: 200,
            position: [0, 0, -7],
        }}
        gl={{
            // antialias: true,
            outputColorSpace: THREE.SRGBColorSpace,
        }}
        >
                <OrbitControls/>
                <Model/> 
                {/* <Lights/> */}
                <Environment preset='dawn'/>


        </Canvas>
        </div>


        </>
    )
}

export default Experience