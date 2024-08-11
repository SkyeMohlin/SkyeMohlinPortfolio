import { FirestoreDataConverter, DocumentData } from "firebase/firestore";
import GamePortfolioItem from "../modules/PortfolioInterfaces";

const gamePortfolioConverter: FirestoreDataConverter<GamePortfolioItem> = {
  toFirestore(item: GamePortfolioItem): DocumentData {
    return {
      id: item.id,
      game_title: item.game_title,
      // Add other fields as necessary
    };
  },
  fromFirestore(snapshot, options): GamePortfolioItem {
    const data = snapshot.data(options)!;
    return {
      id: data.id,
      game_title: data.game_title,
      // Add other fields as necessary
    };
  },
};

export default gamePortfolioConverter;
