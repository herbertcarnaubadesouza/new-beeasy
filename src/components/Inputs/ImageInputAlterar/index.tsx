import CloseIcon from "@/Icons/CloseIcon";
import ImageIcon from "@/Icons/ImageIcon";
import React, { MouseEvent, useRef, useState } from "react";
import styles from "./styles.module.scss";

// Defina uma interface para as props do componente
interface ImageInputProps {
  onChange: (file: File | null) => void;
}

const ImageInput = ({ onChange }: ImageInputProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      const file = files[0];
      previewAndHandleImage(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      previewAndHandleImage(file);
    } else {
      onChange(null); // caso não haja arquivo
    }
  };

  const previewAndHandleImage = (file: File) => {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImageSrc(reader.result);
        onChange(file); // Chama a função onChange com o arquivo
      }
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleClearImage = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    fileInputRef.current?.value && (fileInputRef.current.value = "");
    setImageSrc(null);
    onChange(null); // Tratar a remoção da imagem no componente pai
  };

  return (
    <div className={styles["input-wrapper"]}>
      <div
        className={styles["image-upload-container"]}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onClick={handleClick}
        data-has-image={!!imageSrc}
      >
        {imageSrc ? (
          <>
            <div className={styles["clear-image"]}>
              <button onClick={handleClearImage}>
                <CloseIcon color="rgba(64, 64, 73, 0.6)" />
                <span>Remover imagem</span>
              </button>
            </div>
            <img src={imageSrc} alt="Preview" />
          </>
        ) : (
          <ImageIcon color="#F70293" />
        )}
      </div>
      <button onClick={handleClick}>Alterar logo</button>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleChange}
        accept="image/*"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ImageInput;
