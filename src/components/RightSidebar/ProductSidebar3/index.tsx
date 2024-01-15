import React, { useState } from "react";
import styles from "../ProductSidebar/styles.module.scss";
import Switch from "@/components/Buttons/SwitchButton";
import router, { useRouter } from "next/router";

interface RightSidebar3 {
  isOpen: boolean; // Include this line
  onClose: () => void;
  onSubmit?: () => void;
  onClick?: () => void;
}

const RightSidebar3: React.FC<RightSidebar3> = ({
  isOpen,
  onClose,
  onSubmit,
  onClick,
}) => {
  const [isOn, setIsOn] = useState(false);
  const router = useRouter();

  const toggleSwitch = () => setIsOn(!isOn);

  const handleButtonClick = () => {
    onClick?.();
    router.push("/criar-loja");
  };

  return (
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}></div>
        <header className={styles.header}>
          <h2>Home</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <img src="/XCircleWhite.svg" alt="Close" />
          </button>
        </header>
        <form className={styles.form}>
          <div className={styles.product}>
            <p>Título do produto</p>
            <input type="text" placeholder="Anel especial" />
          </div>
          <div className={styles.description}>
            Description
            <textarea>
              Noivos, convidados e amigos, sejam todos bem-vindos a um lugar
              onde sonhos se tornam realidade. Nossa plataforma de presentes de
              casamento é o seu guia para uma jornada inesquecível rumo ao
              altar.
            </textarea>
          </div>
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
          <div className={styles.tags}>
            <p>Tags</p>
            <input type="text" />
          </div>
          <div className={styles.profit}>
            <p>Margem de lucro</p>
            <input type="text" placeholder="R$20" />
          </div>
          <div className={styles.total}>
            <p>Valor total</p>
            <input type="text" placeholder="R$120,00" />
          </div>

          <div className={styles.footer}>
            <button
              type="submit"
              onClick={handleButtonClick}
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
        </form>
      </aside>
    </>
  );
};
export default RightSidebar3;
