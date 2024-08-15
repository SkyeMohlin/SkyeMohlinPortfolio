import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AnimationMixer } from "three";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

interface AnimatedFBXModelProps {
  meshUrl: string;
  animationUrl?: string;
  position?: number[];
  rotationX?: number;
  rotationY?: number;
  rotationZ?: number;
  scale?: number;
}

const AnimatedFBXModel: React.FC<AnimatedFBXModelProps> = ({
  meshUrl,
  animationUrl,
  position,
  rotationX = 0,
  rotationY = 0,
  rotationZ = 0,
  scale = 0.001,
}) => {
  const modelRef = useRef<THREE.Group>(null);
  const mixerRef = useRef<AnimationMixer | null>(null);

  useEffect(() => {
    const loader = new FBXLoader();

    // Load the mesh
    loader.load(meshUrl, (object) => {
      if (scale) {
        object.scale.setScalar(scale);
      }

      if (position) {
        object.position.set(position[0], position[1], position[2]);
      }

      object.rotateX(rotationX);
      object.rotateY(rotationY);
      object.rotateZ(rotationZ);

      if (modelRef.current) {
        modelRef.current.add(object);
      }

      if (animationUrl) {
        // Load the animation
        loader.load(animationUrl, (anim) => {
          mixerRef.current = new AnimationMixer(object);
          const action = mixerRef.current.clipAction(anim.animations[0]);
          action.play();
        });
      }
    });

    return () => {
      // Clean up the mixer on component unmount
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [meshUrl, animationUrl]);

  // Update the mixer on each frame
  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return <group ref={modelRef} />;
};

export default AnimatedFBXModel;
