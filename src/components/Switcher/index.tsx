import { useState } from 'react';
import styles from './styles.module.scss';

export default function Switcher() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchClick = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  return (
    <>
      <div
        className={`${styles.switch} ${isSwitchOn ? styles.active : ''}`}
        onClick={handleSwitchClick}
      >
        <div className={styles.switchBackground}>
          <div className={styles.switchButton}></div>
          <div className={styles.leftText}>COMPLETO</div>

          <div className={styles.rightText}>INTEGRAR</div>
        </div>
      </div>
    </>
  );
}
