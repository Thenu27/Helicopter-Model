import * as THREE from 'three'

const Floor =()=>{
    return(
        <mesh 
            receiveShadow
            position={[0,-1.5,0]} 
            rotation={[-Math.PI/2,0,0]}>
            <boxGeometry args={[10,10,0.5]}/>
            <meshStandardMaterial transparent={true} opacity={2} color={'white'} side={THREE.DoubleSide}/>
        </mesh>
    )
}

export default Floor