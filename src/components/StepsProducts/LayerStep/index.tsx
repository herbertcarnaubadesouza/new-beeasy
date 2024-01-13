import { useState, ChangeEvent, DragEvent, useCallback } from "react";
import Button from "@/components/Buttons/Button";
import styles from "./styles.module.scss";
import MagicWandIcon from "@/Icons/MagicWandIcon";
import Layer from "./Layer";

const ActivateIntegrationsStep = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedRadioButton, setSelectedRadioButton] = useState<number | null>(
    null
  );
  const [layers, setLayers] = useState<string[]>(["layer1", "layer2"]);
  const [draggedLayerId, setDraggedLayerId] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Necessary to allow dropping
  };

  const handleDragStart = (id: string) => {
    setDraggedLayerId(id);
  };

  // Handler for when a dragged layer is dropped
  const handleDrop = useCallback(
    (id: string) => {
      if (draggedLayerId) {
        setLayers((currentLayers) => {
          const newLayers = Array.from(currentLayers);
          const draggedIndex = newLayers.indexOf(draggedLayerId);
          const droppedIndex = newLayers.indexOf(id);

          if (draggedIndex < 0 || droppedIndex < 0) {
            return currentLayers; // Do nothing if we can't find indices
          }

          // Remove the dragged layer from its original position and insert it before the target
          newLayers.splice(draggedIndex, 1);
          newLayers.splice(droppedIndex, 0, draggedLayerId);

          return newLayers;
        });
      }
      // Reset the draggedLayerId after dropping
      setDraggedLayerId(null);
    },
    [draggedLayerId]
  );

  const getTextLayerZIndex = () => {
    return layers[0] === "layer1" ? 2 : 0;
  };

  const getImageLayerZIndex = () => {
    return 1;
  };

  const handleRadioButtonChange = (index: number) => {
    setSelectedRadioButton(index);
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
          {layers.map((layerId) => (
            <Layer
              key={layerId}
              id={layerId}
              zIndex={getTextLayerZIndex()} // Updated to use the text layer z-index function
              onDragStart={() => handleDragStart(layerId)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(layerId)}
            />
          ))}
        </div>
        <div className={styles.rightside}>
          <div className={styles.imageLayer} style={{ position: "relative" }}>
            <img
              src="/Anel.svg"
              alt="Decorative Seal"
              className={styles.layerImage}
              style={{ zIndex: getImageLayerZIndex() }}
            />
            <p
              className={styles.layerText}
              style={{ zIndex: getTextLayerZIndex() }}
            >
              Montserrat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateIntegrationsStep;
