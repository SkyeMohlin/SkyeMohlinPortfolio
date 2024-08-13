import { FirestoreDataConverter, DocumentData } from "firebase/firestore";
import GamePortfolioItem from "../modules/PortfolioInterfaces";

const gamePortfolioConverter: FirestoreDataConverter<GamePortfolioItem> = {
  toFirestore(item: GamePortfolioItem): DocumentData {
    return {
      id: item.id,
      game_title: item.game_title,
      undertitle: item.undertitle,
      description: item.description,
      coverImgUrl: item.coverImgUrl,
      url: item.url,
      // Add other fields as necessary
    };
  },
  fromFirestore(snapshot, options): GamePortfolioItem {
    const data = snapshot.data(options)!;
    return {
      id: data.id,
      game_title: data.game_title,
      undertitle: data.undertitle,
      description: data.description,
      coverImgUrl: data.coverImgUrl,
      url: data.url,
      // Add other fields as necessary
    };
  },
};

export default gamePortfolioConverter;
