import { useState } from "react";
import "./DarkModeSwitch.css";

interface DarkModeSwitchProps {
  onSwitch: (on: boolean) => void;
}

const DarkModeSwitch = ({ onSwitch }: DarkModeSwitchProps) => {
  const [isOn, setIsOn] = useState(false);

  const onToggle = () => {
    setIsOn(!isOn);

    onSwitch(!isOn);
  };

  return (
    <div onClick={onToggle} className="dark-mode-switch">
      <div className={isOn ? "toggle-circle on" : "toggle-circle"}></div>
    </div>
  );
};

export default DarkModeSwitch;
