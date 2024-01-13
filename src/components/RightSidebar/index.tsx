// components/RightSidebar.tsx
import React from "react";
import styles from "./styles.module.scss"; // Make sure to create an SCSS module for styling

interface RightSidebarProps {
  apiKey: string;
  isOpen: boolean; // Include this line
  onClose: () => void;
  onSubmit: () => void;
  headerName: string;
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  apiKey,
  isOpen,
  onClose,
  onSubmit,
  headerName,
}) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.header}>
            <p>{headerName}</p>

            <button className={styles.closeButton} onClick={onClose}>
              <img src="/XCircleWhite.svg" alt="Close" />
            </button>
          </div>

          <h2 className={styles.title}>REQUISITOS</h2>
          <ul className={styles.requisitesList}>
            <li>- Ter CNPJ</li>
            <li>- Inscrição Estadual</li>
            <li>- Certificado Digital</li>
            <li>- Conta bancária</li>
            <li>- CNPJ cadastrado em nossa plataforma</li>
          </ul>
          <div className={styles.apiKeyContainer}>
            <label htmlFor="api-key" className={styles.apiKeyLabel}>
              Chave da API
            </label>
            <input
              type="text"
              id="api-key"
              value={apiKey}
              readOnly
              className={styles.apiKeyInput}
            />
          </div>
          <div className={styles.buttonsContainer}>
            <button onClick={onSubmit} className={styles.submitButton}>
              Adicionar integração
            </button>
            <button onClick={onClose} className={styles.cancelButton}>
              Cancelar
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default RightSidebar;
