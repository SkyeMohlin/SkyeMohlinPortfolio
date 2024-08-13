import "./ExpandableNavBar.css";

interface ExpandableNavBarProps {
  onChanged: (index: number) => void;
}

const ExpandableNavBar = ({ onChanged }: ExpandableNavBarProps) => {
  return (
    <div className="navbar">
      <div onClick={() => onChanged(0)} className="navbar__item">
        About Me
      </div>
      <div onClick={() => onChanged(1)} className="navbar__item">
        Games
      </div>
    </div>
  );
};

export default ExpandableNavBar;
