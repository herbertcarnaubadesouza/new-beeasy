import React, { ReactNode, useState } from 'react';
import styles from './styles.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {children}
        <div className={styles.top}>
          <button onClick={onClose} className={styles.closeButton}>
            <img src="XCircle.svg" alt="" />
          </button>
        </div>
        <div className={styles.middle}>
          <img src="CheckModal.svg" alt="" />
          <h2>Cupom adicionado com sucesso!</h2>
          <p>
            O novo cupom foi adicionado com sucesso e já está ativo para compras
            na sua loja
          </p>
          <button onClick={onClose} className={styles.closeButton}>
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
