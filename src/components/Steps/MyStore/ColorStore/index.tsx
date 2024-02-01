import { useState } from "react";

import styles from "./styles.module.scss";

const CreateProductsStep = () => {
  const [backgroundColor, setBackgroundColor] = useState("#CDD1F9");
  const [iconColor, setIconColor] = useState("#F70293");

  const handleBackgroundColorChange = (event: {
    target: { value: string };
  }) => {
    const newBackgroundColor = event.target.value;
    setBackgroundColor(newBackgroundColor);
    localStorage.setItem("storeBackgroundColor", newBackgroundColor);
  };

  const handleIconColorChange = (event: { target: { value: string } }) => {
    const newIconColor = event.target.value;
    setIconColor(newIconColor);
    localStorage.setItem("storeIconColor", newIconColor);
  };

  const handleBackgroundHexChange = (event: { target: { value: any } }) => {
    const hexValue = event.target.value;
    setBackgroundColor(hexValue);
    localStorage.setItem("storeBackgroundColor", hexValue);
  };

  const handleIconHexChange = (event: { target: { value: any } }) => {
    const hexValue = event.target.value;
    setIconColor(hexValue);
    localStorage.setItem("storeIconColor", hexValue);
  };

  return (
    <div className={styles["step-wrapper"]}>
      <div className={styles["buttons-container"]}>
        <div className={styles.selectcolor}>
          <div className={styles.top}>
            <input
              type="color"
              id="background"
              name="background"
              value={backgroundColor}
              onChange={handleBackgroundColorChange}
            />
            <div className={styles.background}>
              <label htmlFor="background">Cor do fundo</label>
              <input
                className={styles.hex}
                type="text"
                id="backgroundHex"
                name="backgroundHex"
                value={backgroundColor}
                onChange={handleBackgroundHexChange}
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <input
              type="color"
              id="icon"
              name="icon"
              value={iconColor}
              onChange={handleIconColorChange}
            />
            <div className={styles.icons}>
              <label htmlFor="icon">Cor dos ícones</label>
              <input
                className={styles.hex}
                type="text"
                id="iconHex"
                name="iconHex"
                value={iconColor}
                onChange={handleIconHexChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductsStep;
