import ImageInput from "@/components/Inputs/ImageInputAlterar";
import Input from "@/components/Inputs/Input";
import React, { useState } from "react";
import { uploadLogoToFirebase } from "../../../../../firebase";
import styles from "./styles.module.scss";

const Dadosiniciais = () => {
  const [storeName, setStoreName] = useState<string>("");
  const [storeDescription, setStoreDescription] = useState<string>("");

  const handleStoreNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setStoreName(newName);
    localStorage.setItem("storeName", newName);
  };

  const handleStoreDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newDescription = e.target.value;
    setStoreDescription(newDescription);
    localStorage.setItem("storeDescription", newDescription);
  };

  const handleImageChange = async (file: File | null) => {
    if (file) {
      try {
        const downloadURL = await uploadLogoToFirebase(file);
        localStorage.setItem("storeLogoURL", downloadURL);
      } catch (error) {
        console.error("Erro ao fazer upload da imagem: ", error);
      }
    } else {
      localStorage.removeItem("storeLogoURL");
    }
  };

  return (
    <div className={styles["step-wrapper"]}>
      <ImageInput onChange={handleImageChange} />
      <div className={styles["input-container"]}>
        <div className={styles["input-group"]}>
          <Input
            label="Nome da loja"
            placeholder="Digite o nome da sua loja"
            value={storeName}
            required
            onChange={handleStoreNameChange}
          />
          <Input
            label="Descrição"
            placeholder="Adicione uma descrição para sua loja"
            value={storeDescription}
            onChange={handleStoreDescriptionChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Dadosiniciais;
