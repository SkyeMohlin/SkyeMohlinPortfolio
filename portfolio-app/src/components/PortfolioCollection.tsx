import "./hooks/useGamePortfolio";
import PortfolioPieceSection from "./PortfolioPieceSection";

import { firestore } from "../firebase";
import { collection, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import gamePortfolioConverter from "../firebase-converters/GamePortfolioFirebaseConverter";

const PortfolioCollection = () => {
  const gamePortfolioRef = collection(firestore, "gameportfolio").withConverter(
    gamePortfolioConverter
  );
  const q = query(gamePortfolioRef);

  // Use the hook to fetch data
  const [data] = useCollectionData(q);

  return (
    <div>
      {data &&
        data.map((item, index) => (
          <PortfolioPieceSection data={item} index={index} />
        ))}
    </div>
  );
};

export default PortfolioCollection;
