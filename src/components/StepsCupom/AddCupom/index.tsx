import React, { Dispatch, SetStateAction, useState } from 'react';
import MagicWandIcon from '@/Icons/MagicWandIcon';
import Button from '@/components/Buttons/Button';
import ImageInput from '@/components/Inputs/ImageInputAlterar';
import Input from '@/components/Inputs/Input';
import styles from './styles.module.scss';

interface DadosfiscaisProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Dadosfiscais: React.FC<DadosfiscaisProps> = ({ setModalOpen }) => {
  const [Cupomname, setCupomname] = useState<string>('');
  const [CupomType, setCupomType] = useState<string>('');
  const [razaoSocial, setRazaoSocial] = useState<string>('');

  // Additional functions and logic can go here
  // You can use setModalOpen as needed to control the modal

  return (
    <div className={styles.inputcontainer}>
      <div className={styles.inputgroup}>
        <Input
          label="Nome do cupom"
          placeholder="BLACKFRIDAY"
          value={Cupomname}
          onChange={(e) => setCupomname(e.target.value)}
        />
        <div className={styles.dropdownContainer}>
          <label htmlFor="cupomTypeDropdown">Tipo de cupom</label>
          <select
            id="cupomTypeDropdown"
            value={CupomType}
            onChange={(e) => setCupomType(e.target.value)}
          >
            <option value="">Select type</option>
            <option value="Porcentagem">Porcentagem</option>
          </select>
        </div>
        <Input
          label="Valor"
          placeholder="10%"
          value={razaoSocial}
          onChange={(e) => setRazaoSocial(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Dadosfiscais;
