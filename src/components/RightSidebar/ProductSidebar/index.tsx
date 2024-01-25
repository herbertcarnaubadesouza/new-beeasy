import Switch from "@/components/Buttons/SwitchButton";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface RightSidebar2 {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  onClick?: () => void;
}

const RightSidebar2: React.FC<RightSidebar2> = ({
  isOpen,
  onClose,
  onSubmit,
  onClick,
}) => {
  const [isOn, setIsOn] = useState(false);
  const [productTitle, setProductTitle] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [productTags, setProductTags] = useState("");
  const [selectedFont, setSelectedFont] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [profitMargin, setProfitMargin] = useState("");
  const [totalValue, setTotalValue] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  useEffect(() => {
    const storedProduct = localStorage.getItem("selectedProduct");
    const storedFont = localStorage.getItem("selectedFont");
    const storedImages = localStorage.getItem("selectedImages");

    if (storedProduct) {
      const productDetails = JSON.parse(storedProduct);
      setProductTitle(productDetails.name);
      setProductCategory(productDetails.category);
      setProductType(productDetails.type);
      setProductTags(`${productDetails.category}, ${productDetails.type}`);
    }

    if (storedFont) {
      setSelectedFont(storedFont);
    }

    if (storedImages) {
      const imagesArray = JSON.parse(storedImages);
      setSelectedImages(imagesArray);
    }
  }, []);

  const handleProfitMarginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9.,]/g, "");
    setProfitMargin(newValue);
  };

  const handleTotalValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9.,]/g, "");
    setTotalValue(newValue);
  };

  const handleAddProductClick = async () => {
    try {
      const productData = {
        title: productTitle,
        category: productCategory,
        type: productType,
        tags: productTags,
        font: selectedFont,
        description: productDescription,
        profitMargin: profitMargin,
        totalValue: totalValue,
        images: selectedImages, // Usando as URLs das imagens diretamente
      };

      const response = await axios.post("/api/create-product", productData);

      if (response.status === 200) {
        console.log("Produto criado com sucesso");
        toast.success("Produto criado com sucesso");
        alert("Produto criado com sucesso!");
      } else {
        console.error("Erro ao criar o produto:", response.statusText);
        toast.error("Erro ao criar o produto");
      }

      onClose();
    } catch (error) {
      console.error("Erro ao adicionar o produto:", error);
      toast.error("Erro ao adicionar o produto");
    }
  };

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      <ToastContainer />
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}></div>
        <header className={styles.header}>
          <h2>Adicionar produto</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <img src="/XCircleWhite.svg" alt="Close" />
          </button>
        </header>
        <div className={styles.form}>
          <div className={styles.product}>
            <p>Título do produto</p>
            <input
              type="text"
              placeholder="Anel especial"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
            />
          </div>
          <div className={styles.description}>
            Description
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <label className={styles.label}>
            <p>Cores</p>
            <div className={styles.colors}>
              <label className={styles.label}>
                <p>Cores</p>
                <div className={styles.colors}>
                  <div className={styles.row1}>
                    <Switch color="#433A3A" />
                    <div className={styles.color1}></div>
                  </div>
                  <div className={styles.row2}>
                    <Switch color="#E8CF7A" />
                    <div className={styles.color2}></div>
                  </div>
                  <div className={styles.row3}>
                    <Switch color="#DCD5D5" />
                    <div className={styles.color3}></div>
                  </div>
                </div>
              </label>
            </div>
          </label>
          <div className={styles.tags}>
            <p>Tags</p>
            <input
              type="text"
              value={productTags}
              onChange={(e) => setProductTags(e.target.value)}
            />
          </div>
          <div className={styles.profit}>
            <p>Margem de lucro</p>
            <input
              type="text"
              placeholder="Margem de lucro"
              value={profitMargin}
              onChange={handleProfitMarginChange}
            />{" "}
          </div>
          <div className={styles.total}>
            <p>Valor total</p>
            <input
              type="text"
              placeholder="Valor total"
              value={totalValue}
              onChange={handleTotalValueChange}
            />{" "}
          </div>

          <div className={styles.footer}>
            <button
              onClick={handleAddProductClick}
              className={styles.addButton}
            >
              Adicionar produto
            </button>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
export default RightSidebar2;
