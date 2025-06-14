// FusionViewer.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useProgress, Html } from '@react-three/drei';

// Loader component to show loading progress
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '10px 20px',
        borderRadius: '8px',
        color: '#fff',
        fontSize: '16px'
      }}>
        Loading: {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

// GLB model loader
function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
}

// Main viewer component
export default function FusionViewer({ modelPath }) {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <Suspense fallback={<Loader />}>
          <Model path={modelPath} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
