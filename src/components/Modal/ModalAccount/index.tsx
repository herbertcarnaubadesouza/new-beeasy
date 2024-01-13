import styles from "./styles.module.scss";
// components/SimpleModal.tsx
import React from "react";

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <img
          src="XCircle.svg"
          className={styles.closeButton}
          onClick={onClose}
          alt="Close"
        />
        <div className={styles.modalHeader}>
          <div className={styles.iconContainer}>
            <img src="CheckModal.svg" />
          </div>
          <h2 className={styles.modalTitle}>Informações salvas com sucesso!</h2>
        </div>
        <div className={styles.modalBody}>
          <p>
            Agradecemos a sua confiança em nossa empresa e esperamos que você
            aproveite ao máximo nosso sistema enquanto nosso equipe está à
            disposição para ajudá-lo(a) a configurar e usar o sistema.
          </p>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.primaryButton} onClick={onClose}>
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
