import React, { useEffect, useRef } from 'react';
import { useLoader, useFrame, Canvas } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

const initialPosition = [-0.5, 2.2, 0];
const initialRotation = [0, 0, 0];
const initialScaleFactor = 8;

const ObjModel = ({ url }) => {
  const obj = useLoader(OBJLoader, url);
  const ref = useRef();

  useEffect(() => {
    if (obj && ref.current) {
      ref.current.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial();

          const colorMap = {
            Body1: 'pink',
            Body2: 'pink',
            Body3: 'pink',
          };

          Object.entries(colorMap).forEach(([name, color]) => {
            if (child.name.includes(name)) {
              child.material.color.set(color);
            }
          });
        }
      });

      const box = new THREE.Box3().setFromObject(obj);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      obj.position.sub(center);

      ref.current.scale.set(
        initialScaleFactor / size.length(),
        initialScaleFactor / size.length(),
        initialScaleFactor / size.length()
      );
      ref.current.position.set(...initialPosition);
      ref.current.rotation.set(...initialRotation);

      obj.position.x += .7;
      obj.position.y += -2;
    }
  }, [obj]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.02;
    }
  });

  return <primitive ref={ref} object={obj} />;
};

export function Tiktokscene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      shadows
      style={{ width: '200px', height: '120px' }} 
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={3}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <ObjModel url="/Instagramicon.obj" />
    </Canvas>
  );
}