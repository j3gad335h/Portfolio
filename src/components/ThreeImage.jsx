import React, { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from './Loader'
import scene from '../../public/desktop_pc/scene.gltf'


const ThreeImage = () => {
    const computer = useGLTF(scene)
    return (
        <mesh>
            <hemisphereLight intensity={0.15}
                groundColor={'black'} />
            <pointLight intensity={1} />
            <primitive object={computer.scene} />
        </mesh>
    );


};
const ComputerCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }} >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <ThreeImage />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default ComputerCanvas;
