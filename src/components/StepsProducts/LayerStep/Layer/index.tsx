import styles from "./styles.module.scss";

interface LayerProps {
  id: string;
  zIndex: number;
  onDragStart: () => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: () => void;
}

const Layer: React.FC<LayerProps> = ({
  id,
  zIndex,
  onDragStart,
  onDragOver,
  onDrop,
}) => {
  return (
    <div className={styles.layerContainer} style={{ zIndex: zIndex }}>
      <div className={styles.layerContent}>
        <div
          className={styles.leftside}
          draggable
          onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
            e.dataTransfer.setData("text/plain", id);
            onDragStart();
          }}
          onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            onDragOver(e);
          }}
          onDrop={(e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            onDrop();
          }}
        >
          <img src="/DotsSix.svg" className={styles.sixDots} />
          <img src="/Mouth.svg" />
          {id}
        </div>
        <div className={styles.close}>
          <img src="/XCircleRed.svg" />
        </div>
      </div>
    </div>
  );
};

export default Layer;
