import PlusIcon from "@/Icons/PlusIcon";
import VideoIcon from "@/Icons/VideoIcon";
import Button from "@/components/Buttons/Button";
import CardButton from "@/components/Buttons/CardButton";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const CreateProductsStep = () => {
  const router = useRouter();

  // Function to handle redirection
  const handleAddProductClick = () => {
    router.push("/criar-produto-loja");
  };
  return (
    <div className={styles["step-wrapper"]}>
      <div className={styles["buttons-container"]}>
        <CardButton
          label="Adicionar produto"
          icon={<PlusIcon color="#F70293" />}
          onClick={handleAddProductClick}
        />
      </div>
      <div className={styles["help-container"]}>
        <p>Precisa de ajuda?</p>
        <Button label={"Ver videoaula"} icon={<VideoIcon color="#000" />} />
      </div>
    </div>
  );
};

export default CreateProductsStep;
