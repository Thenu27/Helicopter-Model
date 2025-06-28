import { Canvas, useThree } from '@react-three/fiber'
import './Model.css'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import Floor from '../Floor/Floor'

const Model=()=>{

    const {viewport} = useThree()
    const [scale,setScale] = useState(1)

    useEffect(()=>{
      console.log(viewport)
    },[viewport])

    useEffect(() => {
      if (viewport.width > 12) {
        setScale(1)
      } else if (viewport.width > 9) {
        setScale(0.8)
      }
        else if(viewport.width >7.5){
          setScale(0.6)
        }else{
          setScale(0.6)
        }
    
}, [viewport.width])

    const model = useGLTF('/Helicopter12.glb')
    console.log(model)

    const modelRef = useRef();

    const {actions} = useAnimations(model.animations,modelRef)

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      action.reset().play();
    });
  }, [actions]);

    useEffect(() => {
        model.scene.traverse((child) => { 
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
        }
        })
  }, [model])

    return(
        <>
        <group rotation={[0,3,0]} scale={scale} position={[0,-0.8,3]}>
            <primitive 
                ref={modelRef}
                rotation={[0,2.8,0]}
                position={[0, -2.5, 0]} 
                object={model.scene} />
            <Floor/>
        </group>

        </>

    )
}

export default Model