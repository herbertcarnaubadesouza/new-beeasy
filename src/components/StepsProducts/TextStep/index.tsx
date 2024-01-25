import MagicWandIcon from "@/Icons/MagicWandIcon";
import Button from "@/components/Buttons/Button";
import { ChangeEvent, DragEvent, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const ActivateIntegrationsStep = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedRadioButton, setSelectedRadioButton] = useState<number | null>(
    null
  );
  const [selectedFont, setSelectedFont] = useState<string>("");

  useEffect(() => {
    const storedFont = localStorage.getItem("selectedFont");
    if (storedFont) {
      setSelectedFont(storedFont);
      const combinedFonts = [...radioButtonsLeft, ...radioButtonsRight];
      const storedIndex = combinedFonts.indexOf(storedFont);
      if (storedIndex !== -1) {
        setSelectedRadioButton(storedIndex);
      }
    }
  }, []);

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
    const font =
      index < radioButtonsLeft.length
        ? radioButtonsLeft[index]
        : radioButtonsRight[index - radioButtonsLeft.length];
    setSelectedFont(font);
    localStorage.setItem("selectedFont", font);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("File selected:", selectedFile);
      // Implement your file upload logic
    } else {
      console.log("No file selected");
    }

    if (selectedRadioButton !== null) {
      console.log("RadioButton selected:", selectedRadioButton);
      // Implement your logic for the selected radio button
    }
  };

  const radioButtonsLeft = [
    "Roboto",
    "Arial",
    "Diplomata",
    "ERICA ONE",
    "Arial",
    "Erica One",
    "Ephesis",
  ];

  const radioButtonsRight = [
    "Montserrat",
    "DM SANS",
    "Ephesis",
    "Montserrat",
    "DM sans",
    "Diplomata",
    "Montserrat",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <div className={styles.radiocontent}>
            <div className={styles.radioButtonsleft}>
              {radioButtonsLeft.map((text, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    value={index}
                    checked={selectedRadioButton === index}
                    onChange={() => handleRadioButtonChange(index)}
                  />
                  <div style={{ fontFamily: text }}>{text}</div>
                </label>
              ))}
            </div>
            <div className={styles.radioButtonsright}>
              {radioButtonsRight.map((text, index) => (
                <label key={index + radioButtonsLeft.length}>
                  <input
                    type="radio"
                    value={index + radioButtonsLeft.length}
                    checked={
                      selectedRadioButton === index + radioButtonsLeft.length
                    }
                    onChange={() =>
                      handleRadioButtonChange(index + radioButtonsLeft.length)
                    }
                  />
                  <div style={{ fontFamily: text }}>{text}</div>
                </label>
              ))}
            </div>
          </div>
          <p>Não achou o que queria?</p>
          <Button
            label="Criar logo com IA"
            variant="secondary"
            icon={<MagicWandIcon />}
            onClick={handleUpload}
          />
        </div>
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
