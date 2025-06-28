import { DirectionalLightHelper } from "three"
import { useRef } from "react"
import { useHelper } from "@react-three/drei";

export default function Lights()

{
    const lightRef = useRef();
    useHelper(lightRef,DirectionalLightHelper,2,'red')

    return <>
        <directionalLight
            ref={lightRef}
            castShadow
            position={ [2,3,-5 ] }
            rotation={[0,0,0]}
            intensity={ 54.5 }
            shadow-mapSize={ [ 1024, 1024 ] }
            shadow-camera-near={ 1 }
            shadow-camera-far={ 10 }
            shadow-camera-top={ 10 }
            shadow-camera-right={ 10 }
            shadow-camera-bottom={ - 10 }
            shadow-camera-left={ - 10 }
        />
        <ambientLight intensity={ 2.5 } />
    </>
} 