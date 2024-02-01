import { ChangeEvent, DragEvent, useState } from "react";
import { uploadBannerToFirebase } from "../../../../../firebase";
import styles from "./styles.module.scss";

const ActivateIntegrationsStep = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus("Enviando...");
      try {
        const downloadURL = await uploadBannerToFirebase(file);
        localStorage.setItem("storeBannerURL", downloadURL);
        console.log("Banner uploaded successfully. URL:", downloadURL);
        setUploadStatus(`Enviado com sucesso: ${file.name}`);
      } catch (error) {
        console.error("Error uploading banner:", error);
        setUploadStatus("Erro ao enviar o arquivo.");
        // Tratamento de erro adicional, se necessário
      }
    } else {
      setSelectedFile(null);
      setUploadStatus("");
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const file = event.dataTransfer.files?.[0];
    setSelectedFile(file || null);
  };

  return (
    <div className={styles["step-wrapper"]}>
      <div
        className={styles["buttons-container"]}
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
            style={{ display: "none" }}
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

      {selectedFile && (
        <label className={styles.fileNameLabel}>{selectedFile.name}</label>
      )}
      {uploadStatus && (
        <div className={styles.uploadStatus}>{uploadStatus}</div>
      )}
    </div>
  );
};

export default ActivateIntegrationsStep;
