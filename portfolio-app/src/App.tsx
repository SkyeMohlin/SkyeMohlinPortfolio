import "./App.css";

import PageTitle from "./components/PageTitle";
import ExpandableNavBar from "./components/ExpandableNavBar";
import ContentArea from "./components/ContentArea";

//Animations
import "aos/dist/aos.css"; // You can also use <link> for styles
import Aos from "aos";
import { useState } from "react";

// ..
Aos.init();

function App() {
  const [contentIndex, setContentIndex] = useState(0);

  return (
    <>
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
