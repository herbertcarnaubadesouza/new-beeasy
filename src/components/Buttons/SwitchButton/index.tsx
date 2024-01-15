// components/MyButton.tsx
import React, { useState } from "react";
import styles from "./styles.module.scss";

interface SwitchProps {
  color: string; // prop for the static circle color
}

const Switch: React.FC<SwitchProps> = ({ color }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent the default form submit action
    setIsToggled(!isToggled);
  };

  return (
    <div className={styles.switchContainer}>
      <button
        className={`${styles.switch} ${isToggled ? styles.on : ""}`}
        onClick={toggleSwitch}
      >
        <div className={styles.circle}></div>
      </button>
      <div
        className={styles.staticCircle}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default Switch;
