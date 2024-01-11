import { useState, ChangeEvent, DragEvent } from 'react';
import Button from '@/components/Buttons/Button';
import styles from './styles.module.scss';
import MagicWandIcon from '@/Icons/MagicWandIcon';

const ActivateIntegrationsStep = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedRadioButton, setSelectedRadioButton] = useState<number | null>(
    null
  );

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const file = event.dataTransfer.files?.[0];
    setSelectedFile(file || null);
  };

  const handleRadioButtonChange = (index: number) => {
    setSelectedRadioButton(index);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('File selected:', selectedFile);
      // Implement your file upload logic
    } else {
      console.log('No file selected');
    }

    if (selectedRadioButton !== null) {
      console.log('RadioButton selected:', selectedRadioButton);
      // Implement your logic for the selected radio button
    }
  };

  const radioButtonsLeft = [
    'Roboto',
    'Arial',
    'Diplomata',
    'ERICA ONE',
    'Arial',
    'Erica One',
    'Ephesis',
  ];

  const radioButtonsRight = [
    'Montserrat',
    'DM SANS',
    'Ephesis',
    'Montserrat',
    'DM sans',
    'Diplomata',
    'Montserrat',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}></div>
        <div className={styles.rightside}>
          <div className={styles.image}>
            <img src="/Anel.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateIntegrationsStep;
