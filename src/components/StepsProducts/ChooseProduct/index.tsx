import Input from "@/components/Inputs/Input";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";

type RadioOption = {
  value: string;
  label: string;
  imageSrc: string;
  category: string;
  type: string;
};

const Dadosfiscais = () => {
  const [backgroundColor, setBackgroundColor] = useState("#CDD1F9");
  const [iconColor, setIconColor] = useState("#F70293");
  const [Search, setSearch] = useState<string>("");
  const [Category, setCategory] = useState<string>("");
  const [ProductType, setProductType] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<RadioOption[]>([]);
  const [selectedRadioButton, setSelectedRadioButton] = useState<string | null>(
    null
  );

  useEffect(() => {
    const storedValue = localStorage.getItem("selectedProduct");
    if (storedValue) {
      setSelectedRadioButton(JSON.parse(storedValue).value);
    }
  }, []);

  const categoryOptions = ["ANEIS", "PINGENTES", "PULSEIRAS"];
  const productTypeOptions = ["Personalizável", "Não Personalizável"];

  const radioOptions: RadioOption[] = [
    {
      value: "option1",
      label: "Anel de ouro redondo",
      imageSrc: "/Anel.svg",
      category: "ANEIS",
      type: "Personalizável",
    },
    {
      value: "option2",
      label: "Pulseira de ouro",
      imageSrc: "/Pulseira.svg",
      category: "PULSEIRAS",
      type: "Não Personalizável",
    },
    {
      value: "option3",
      label: "Pingente de ouro",
      imageSrc: "/Pingente.svg",
      category: "PINGENTES",
      type: "Personalizável",
    },
  ];

  useEffect(() => {
    const newFilteredItems = radioOptions.filter(
      (option) =>
        option.label.toLowerCase().includes(Search.toLowerCase()) &&
        (Category === "" || option.category === Category) &&
        (ProductType === "" || option.type === ProductType)
    );
    setFilteredItems(newFilteredItems);
  }, [Search, Category, ProductType]);

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

  const handleRadioButtonChange = (value: string) => {
    setSelectedRadioButton(value);
    const selectedProduct = radioOptions.find(
      (option) => option.value === value
    );
    if (selectedProduct) {
      const productToStore = {
        name: selectedProduct.label,
        imageSrc: selectedProduct.imageSrc,
        category: selectedProduct.category,
        type: selectedProduct.type,
      };
      localStorage.setItem("selectedProduct", JSON.stringify(productToStore));
    }
  };

  return (
    <div className={styles.inputcontainer}>
      <div className={styles.inputgroup}>
        <Input
          label="Buscar por nome"
          placeholder="Anel"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={styles.dropdownContainer}>
          <label htmlFor="categoryDropdown">Categoria</label>
          <select
            id="categoryDropdown"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecionar</option>
            {categoryOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.dropdownContainer}>
          <label htmlFor="productTypeDropdown">Tipo de produto</label>
          <select
            id="productTypeDropdown"
            value={ProductType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="">Selecionar</option>
            {productTypeOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.radiobutton}>
        {filteredItems.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name="radioGroup"
              value={option.value}
              checked={selectedRadioButton === option.value}
              onChange={() => handleRadioButtonChange(option.value)}
            />
            <img
              src={option.imageSrc}
              alt={option.label}
              className={styles.radioImage}
            />
            <span
              className={`${styles.labelText} ${
                selectedRadioButton === option.value ? styles.selectedText : ""
              }`}
            >
              {option.label}
            </span>
            {selectedRadioButton === option.value && (
              <img
                src="/CheckPurple.svg"
                alt="Checkmark"
                className={styles.checkmark}
              />
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Dadosfiscais;
