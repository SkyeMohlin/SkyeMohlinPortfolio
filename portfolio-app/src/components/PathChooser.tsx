import AdventurerButton, { AdventurerTypes } from "./AdventurerButton";
import "./PathChooser.css";

const PathChooser = ({
  onAdventurerSelected,
}: {
  onAdventurerSelected: (type: AdventurerTypes) => void;
}) => {
  return (
    <div className="path-chooser">
      <div className="path-chooser-item">
        <AdventurerButton type={1} onSelect={onAdventurerSelected} />
      </div>
      <div className="path-chooser-item">
        <AdventurerButton type={2} onSelect={onAdventurerSelected} />
      </div>
    </div>
  );
};

export default PathChooser;
