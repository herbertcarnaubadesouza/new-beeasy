import React, { useState, ChangeEvent, DragEvent } from 'react';
import Button from '@/components/Buttons/Button';
import styles from './styles.module.scss';
import MagicWandIcon from '@/Icons/MagicWandIcon';

const ActivateIntegrationsStep = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles([...selectedFiles, ...Array.from(event.target.files)]);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      setSelectedFiles([
        ...selectedFiles,
        ...Array.from(event.dataTransfer.files),
      ]);
    }
  };

  const handleRemoveFile = (indexToRemove: number) => {
    setSelectedFiles(
      selectedFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <div className={styles['step-wrapper']}>
            <div
              className={styles['buttons-container']}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <img src="upload.svg" alt="Upload" />
              <label>Arraste e solte seu anexo aqui ou clique em enviar</label>
              <button>
                <input
                  type="file"
                  accept=".pdf, .jpeg, .jpg, .png"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  id="fileInput"
                  multiple
                />
                <label htmlFor="fileInput" className={styles.customFileInput}>
                  Escolha arquivos para enviar
                </label>
              </button>
              <label className={styles.formatos}>
                Formatos aceitos: PDF, JPEG, PNG
              </label>
            </div>

            {/* This div will contain the file info divs in a grid layout */}
            <div className={styles.filesGrid}>
              {selectedFiles.map((file, index) => (
                <div key={file.name} className={styles.fileInfo}>
                  <div className={styles.fileName}>{file.name}</div>
                  <button
                    className={styles.removeButton}
                    onClick={() => handleRemoveFile(index)}
                  >
                    <span className="closeIcon"></span>{' '}
                    {/* This will be styled by SCSS */}
                  </button>
                </div>
              ))}
            </div>

            {!selectedFiles.length && (
              <Button
                label="Criar logo com IA"
                variant="dark"
                icon={<MagicWandIcon />}
              />
            )}
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.image}>
            <img src="/Anel.svg" alt="Anel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateIntegrationsStep;
