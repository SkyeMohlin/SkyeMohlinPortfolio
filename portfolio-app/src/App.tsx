import "./App.css";

import PageTitle from "./components/PageTitle";
import ExpandableNavBar from "./components/ExpandableNavBar";
import ContentArea from "./components/ContentArea";

//Animations
import "aos/dist/aos.css"; // You can also use <link> for styles
import Aos from "aos";
import { useState } from "react";
import AnimatedFBXModel from "./components/Scene";
import { Canvas } from "@react-three/fiber";

// ..
Aos.init();

function App() {
  const [contentIndex, setContentIndex] = useState(0);

  return (
    <>
      <div className="scene">
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          <ambientLight intensity={3} />
          <directionalLight position={[100, 100, 100]} intensity={10} />
          <AnimatedFBXModel
            meshUrl="/3dmodels/T-Pose.fbx"
            animationUrl="/3dmodels/Falling.fbx"
            position={[1.2, 1.3, 0]}
            scale={0.001}
          />
          <AnimatedFBXModel
            meshUrl="/3dmodels/cloud_1.fbx"
            position={[1.6, 0, 0]}
            rotationY={-1.5}
            scale={0.001}
          />
        </Canvas>
      </div>
      <div className="hero-container">
        <div>
          <PageTitle firstName="Skye" lastName="Mohlin" />
        </div>
      </div>
      <ExpandableNavBar onChanged={setContentIndex} />

      <ContentArea index={contentIndex} />
    </>
  );
}

export default App;
