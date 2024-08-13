import { useState } from "react";
import AboutMe from "./AboutMe";
import PortfolioCollection from "./PortfolioCollection.tsx";

const ContentArea = ({ index }: { index: number }) => {
  return <>{index === 0 ? <AboutMe /> : <PortfolioCollection />}</>;
};

export default ContentArea;
