import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const LavaPlanet = () => {
  const planet = useGLTF( './lava_planet/scene.gltf');
  return (
    <primitive 
      object={planet.scene}
      scale={2}
      position-y={0}
      rotation-y={0}
      camera={{
        fov: 45,
        near:0.1,
        far:200,
        position: [-4, 3, 6]
      }}
    />
  )
}

const LavaPlanetCanvas = () =>{
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{}}
    > 
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={ Math.PI / 2}
          minPolarAngle={ Math.PI / 2}
        />
        <LavaPlanet />
      </Suspense>
    </Canvas>
  )
}
export default LavaPlanetCanvas