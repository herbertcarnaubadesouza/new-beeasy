import React, { useState } from 'react';
import PlusIcon from '@/Icons/PlusIcon';
import VideoIcon from '@/Icons/VideoIcon';
import Button from '@/components/Buttons/Button';
import CardButton from '@/components/Buttons/CardButton';
import styles from './styles.module.scss';

const CreateProductsStep = () => {
  const [backgroundColor, setBackgroundColor] = useState('#CDD1F9');
  const [iconColor, setIconColor] = useState('#F70293');

  const handleBackgroundColorChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBackgroundColor(event.target.value);
  };

  const handleIconColorChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setIconColor(event.target.value);
  };

  const handleBackgroundHexChange = (event: { target: { value: any } }) => {
    const hexValue = event.target.value;
    setBackgroundColor(hexValue);
  };

  const handleIconHexChange = (event: { target: { value: any } }) => {
    const hexValue = event.target.value;
    setIconColor(hexValue);
  };

  return (
    <div className={styles['step-wrapper']}>
      <div className={styles['buttons-container']}>
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
