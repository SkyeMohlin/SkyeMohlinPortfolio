import "./PortfolioPieceSection.css";
import GamePortfolioItem from "../modules/PortfolioInterfaces";
import { useEffect, useState } from "react";

import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";

const PortfolioPieceSection = ({
  data,
  index,
}: {
  data: GamePortfolioItem;
  index: number;
}) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageRef = ref(storage, data.coverImgUrl);

    getDownloadURL(imageRef)
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.error("Error downloading image: ", error);
      });
  }, []);

  return (
    <div
      className={
        "portfolio-piece-section " +
        (index === 0 ? "left-shift" : "right-shift")
      }
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
    >
      <a
        className="portfolio-piece-section_image"
        href="https://www.google.com"
      >
        <img className="portfolio-piece-section_image" src={imageUrl} alt="" />
      </a>
      <div>
        <h3 className="portfolio-piece-section_title">{data.game_title}</h3>
        <h4 className="portfolio-piece-section_undertitle">
          {data.undertitle}
        </h4>
        <p className="portfolio-piece-section_text">{data.description}</p>
      </div>
    </div>
  );
};

export default PortfolioPieceSection;
