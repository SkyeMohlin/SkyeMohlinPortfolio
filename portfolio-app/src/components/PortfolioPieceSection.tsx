import "./PortfolioPieceSection.css";
import GamePortfolioItem from "../modules/PortfolioInterfaces";

const PortfolioPieceSection = ({ data }: { data: GamePortfolioItem }) => {
  return (
    <div className="portfolio-piece-section">
      <img
        className="portfolio-piece-section_image"
        src="/public/images/vtmj_cover.jpg"
        alt=""
      />
      <div>
        <h3>{data.game_title}</h3>
        <p className="portfolio-piece-section_text">
          I worked on the first VR game in the Vampire the Masquerade IP:
          Justice. I worked as Technical Designer from its inception all the way
          through to release on Meta Quest and Playstation 5. Post launch I was
          also part of the team that ported it to PC/Steam. Throughout the
          development, I filled multiple shoes, ranging from system design to UI
          and Tech Art. I built progression systems, level design tools for AI
          and critters (rats, birds), had ownership of design and implementation
          of abilities and VR interaction. I handled VFX and shader work, and I
          was also responsible for all the haptics in the game, including for
          PSVR2 dualsense controllers and bHaptics.
        </p>
      </div>
    </div>
  );
};

export default PortfolioPieceSection;
