import { Suspense, useEffect, useState} from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Laptop = ({ isMobile }) => {
  
  const computer = useGLTF('./laptop/scene.gltf');

  return (
    <mesh>
      <hemisphereLight 
        intensity={0.15} 
        groundColor="black"
      />
      <pointLight intensity={1} />
      <spotLight
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={ isMobile ? 0.5: 0.75}
        position={ isMobile ? [0, -3.5, 1] : [0, -3.25, 1.5]}
        rotation={[-0.01, -.2, -0.1]}
      />
    </mesh>
  )
}

const LaptopCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    setIsMobile(mediaQuery.matches);

    const handleMediaQuearyChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQuearyChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQuearyChange);
    }
  }, [])
  
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={ <CanvasLoader/> }>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Laptop isMobile ={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default LaptopCanvas