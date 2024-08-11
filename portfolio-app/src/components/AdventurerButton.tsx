import "./AdventurerButton.css";

export type AdventurerTypes = 0 | 1 | 2;

interface AdventurerButtonProps {
  type: AdventurerTypes;
  onSelect: (type: AdventurerTypes) => void;
}

const AdventurerButton = ({ type, onSelect }: AdventurerButtonProps) => {
  return (
    <>
      <img
        className="adventurer-button"
        src={
          type === 1
            ? "/public/adventurer_gamer.png"
            : "/public/adventurer_frontend.png"
        }
        alt=""
        onClick={() => {
          onSelect(type);
        }}
      />
      <div className="adventurer-button_BG"></div>
    </>
  );
};

export default AdventurerButton;
