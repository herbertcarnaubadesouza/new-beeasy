import React, { useState } from 'react';
import Input from '@/components/Inputs/Input';
import ModalPayment from '@/components/Modal/ModalPayment'; // Ensure this component exists
import styles from './styles.module.scss';

const PaymentData = () => {
  const [Documento, setDocumento] = useState<string>('');
  const [CardNumber, setCardNumber] = useState<string>('');
  const [CardName, setCardName] = useState<string>('');
  const [CVV, setCVV] = useState<string>('');
  const [ExpireDate, setExpireDate] = useState<string>('');
  const [formaPagamento, setFormaPagamento] = useState<string>('');
  const [isModalPaymentOpen, setIsModalPaymentOpen] = useState(false); // State for modal visibility

  return (
    <div className={styles.container}>
      <div className={styles.inputcontainer}>
        <h2 className={styles.title}>Dados do pagamento</h2>
        <p>Preencha os dados abaixo para prosseguir</p>
        <div className={styles.inputgroup}>
          <Input
            label="Documento"
            value={Documento}
            onChange={(e) => setDocumento(e.target.value)}
          />
        </div>
        <div className={styles.dropdownContainer}>
          <label htmlFor="formaPagamentoDropdown">Forma de pagamento</label>
          <select
            id="formaPagamentoDropdown"
            value={formaPagamento}
            onChange={(e) => setFormaPagamento(e.target.value)}
          >
            <option value="">Selecione o método de pagamento</option>
            <option value="CreditCard">Cartão de crédito</option>
            <option value="DebitCard">Cartão de débito</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <h2 className={styles.title}>Dados do cartão</h2>
        <div className={styles.inputgroup}>
          <Input
            label="Número do cartão"
            value={CardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className={styles.inputgroup}>
          <Input
            label="Nome do cartão"
            value={CardName}
            onChange={(e) => setCardName(e.target.value)}
          />
        </div>
        <div className={styles.inputgroup}>
          <Input
            label="Data de vencimento"
            value={ExpireDate}
            onChange={(e) => setExpireDate(e.target.value)}
          />
        </div>
        <div className={styles.inputgroup}>
          <Input
            label="CVV"
            value={CVV}
            onChange={(e) => setCVV(e.target.value)}
          />
        </div>
        <div className={styles.button}>
          <button onClick={() => setIsModalPaymentOpen(true)}>
            Finalizar Compra
          </button>
          <button className={styles.cancel}>Cancelar</button>
        </div>
      </div>

      {/* ModalPayment component */}
      <ModalPayment
        isOpen={isModalPaymentOpen}
        onClose={() => setIsModalPaymentOpen(false)}
      >
        <></> {/* Empty fragment as children */}
      </ModalPayment>
    </div>
  );
};

export default PaymentData;
