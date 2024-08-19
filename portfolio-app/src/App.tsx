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
import DarkModeSwitch from "./components/DarkModeSwitch";
import { Color } from "three";
import ContactForm from "./components/ContactForm";

// ..
Aos.init();

function App() {
  const [contentIndex, setContentIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [charAnim, setCharAnim] = useState(0);

  const lightColorDay = new Color();
  lightColorDay.setRGB(1, 1, 1);
  const lightIntensityDay = 1;

  const lightColorNight = new Color();
  lightColorNight.setRGB(0.3, 0.5, 2);
  const lightIntensityNight = 0.5;

  const toggleDarkMode = (on: boolean) => {
    setDarkMode(on);

    if (on) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="scene">
          <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
            <ambientLight
              intensity={
                3 * (darkMode ? lightIntensityNight : lightIntensityDay)
              }
              color={darkMode ? lightColorNight : lightColorDay}
            />
            <directionalLight
              position={[100, 100, 100]}
              intensity={
                10 * (darkMode ? lightIntensityNight : lightIntensityDay)
              }
              color={darkMode ? lightColorNight : lightColorDay}
            />
            <AnimatedFBXModel
              meshUrl="/3dmodels/T-Pose.fbx"
              animationUrl={["/3dmodels/Skye_Anims_01.fbx"]}
              position={[1.6, 0, 0]}
              scale={0.001}
              currentAnimation={charAnim}
            />
            <AnimatedFBXModel
              meshUrl="/3dmodels/cloud_1.fbx"
              position={[1.6, 0, 0]}
              rotationY={-1.5}
              scale={0.001}
            />
          </Canvas>
        </div>
        <DarkModeSwitch onSwitch={toggleDarkMode} />

        <div className="hero-container">
          <div>
            <PageTitle firstName="Skye" lastName="Mohlin" />
          </div>
        </div>
        <ExpandableNavBar onChanged={setContentIndex} />
        <button id="animBtn">aad</button>

        <ContentArea index={contentIndex} />
      </div>
    </>
  );
}

export default App;
