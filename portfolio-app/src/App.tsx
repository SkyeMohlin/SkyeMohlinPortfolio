import { useState } from "react";
import "./App.css";
import PageTitle from "./components/PageTitle";
import PathChooser from "./components/PathChooser";
import Separator from "./components/Separator";
import { AdventurerTypes } from "./components/AdventurerButton";

function App() {
  const [adventurer, setAdventurer] = useState<AdventurerTypes>(0);

  return (
    <>
      <PageTitle title="Skye Mohlin" />
      <div className="center">
        <Separator w="80%" />
      </div>
      <div className="center">
        <h2>Choose your hero</h2>
      </div>
      <PathChooser onAdventurerSelected={setAdventurer} />

      {adventurer !== 0 ? (
        <section>
          {adventurer === 1 && (
            <>
              <h1>Welcome to My Portfolio</h1>
              <p>
                Hello! I’m <strong>Skye</strong>, a seasoned game developer with
                a passion for creating immersive virtual reality experiences.
                With a solid background in VR development, I’ve spent years
                crafting engaging, interactive worlds that push the boundaries
                of technology and creativity.
              </p>
              <p>
                Currently, I’m transitioning into frontend development, eager to
                bring my expertise in user experience and interactive design to
                new challenges. My journey in game development has equipped me
                with a strong foundation in problem-solving, coding, and a deep
                understanding of what makes an interface both functional and
                captivating.
              </p>
              <p>
                Here, you'll find a collection of my work that showcases my
                ability to blend technical skill with creative vision. From VR
                projects to innovative frontend solutions, I’m excited to
                demonstrate how my diverse background can drive fresh
                perspectives and dynamic results in web development.
              </p>
              <p>Thank you for visiting, and I look forward to connecting!</p>
            </>
          )}
          {adventurer === 2 && <p>asnasjnskdgnskgmkf</p>}
        </section>
      ) : null}
    </>
  );
}

export default App;
