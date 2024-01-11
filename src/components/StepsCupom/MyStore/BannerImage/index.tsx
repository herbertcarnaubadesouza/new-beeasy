import { useState, ChangeEvent, DragEvent } from 'react';
import VideoIcon from '@/Icons/VideoIcon';
import Button from '@/components/Buttons/Button';
import CardButton from '@/components/Buttons/CardButton';
import styles from './styles.module.scss';

const ActivateIntegrationsStep = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

  const handleUpload = () => {
    // Handle the file upload logic here
    if (selectedFile) {
      console.log('File selected:', selectedFile);
      // Implement your file upload logic
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className={styles['step-wrapper']}>
      <div
        className={styles['buttons-container']}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <img src="upload.svg" alt="" />
        <label>Arraste e solte seu anexo aqui ou envie se preferir </label>

        {/* Input for file selection */}
        <button>
          <input
            type="file"
            accept=".pdf, .jpeg, .jpg, .png"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="fileInput"
          />

          <label htmlFor="fileInput" className={styles.customFileInput}>
            Escolha um arquivo para enviar
          </label>
        </button>

        <label className={styles.formatos}>
          Formatos aceitos PDF, JPEG e PNG
        </label>
      </div>
    </div>
  );
};

export default ActivateIntegrationsStep;
