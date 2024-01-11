import MagicWandIcon from '@/Icons/MagicWandIcon';
import Button from '@/components/Buttons/Button';
import ImageInput from '@/components/Inputs/ImageInputAlterar';
import Input from '@/components/Inputs/Input';
import { useState } from 'react';

import styles from './styles.module.scss';

const Dadosfiscais = () => {
  const [Search, setSearch] = useState<string>('');
  const [Category, setCategory] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState('#CDD1F9');
  const [iconColor, setIconColor] = useState('#F70293');
  const [selectedRadioButton, setSelectedRadioButton] =
    useState<string>('option1');
  const [ProductType, setProductType] = useState<string>('');

  const handleBackgroundColorChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBackgroundColor(event.target.value);
  };

  const handleIconColorChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setIconColor(event.target.value);
  };

  const handleBackgroundHexChange = (event: { target: { value: any } }) => {
    const hexValue = event.target.value;
    setBackgroundColor(hexValue);
  };

  const handleIconHexChange = (event: { target: { value: any } }) => {
    const hexValue = event.target.value;
    setIconColor(hexValue);
  };

  const handleRadioButtonChange = (value: string) => {
    setSelectedRadioButton(value);
  };

  return (
    <div className={styles.inputcontainer}>
      <div className={styles.inputgroup}>
        <Input
          label="Buscar por nome"
          placeholder="Anel"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={styles.dropdownContainer}>
          <label htmlFor="cupomTypeDropdown">Categoria</label>
          <select
            id="cupomTypeDropdown"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecionar</option>
            <option value="Porcentagem">ANEIS</option>
          </select>
        </div>
        <div className={styles.dropdownContainer}>
          <label htmlFor="cupomTypeDropdown">Tipo de produto</label>
          <select
            id="cupomTypeDropdown"
            value={ProductType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="">Selecionar</option>
            <option value="Porcentagem">Personalizável</option>
          </select>
        </div>
      </div>
      <div className={styles.radiobutton}>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="option1"
            checked={selectedRadioButton === 'option1'}
            onChange={() => handleRadioButtonChange('option1')}
          />
          <img
            src="/Anel.svg" // Substitua pelo caminho real da sua imagem
            alt="Option 1"
            className={styles.radioImage}
          />
          <span
            className={`${styles.labelText} ${
              selectedRadioButton === 'option1' ? styles.selectedText : ''
            }`}
          >
            Anel de ouro redondo
          </span>
          {selectedRadioButton === 'option1' && (
            <img
              src="/CheckPurple.svg" // Substitua pelo caminho real da sua imagem
              alt="Checkmark"
              className={styles.checkmark}
            />
          )}
        </label>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="option2"
            checked={selectedRadioButton === 'option2'}
            onChange={() => handleRadioButtonChange('option2')}
          />
          <img
            src="/Pulseira.svg" // Substitua pelo caminho real da sua imagem
            alt="Option 2"
            className={styles.radioImage}
          />
          <span
            className={`${styles.labelText} ${
              selectedRadioButton === 'option2' ? styles.selectedText : ''
            }`}
          >
            Pulseira de ouro
          </span>
          {selectedRadioButton === 'option2' && (
            <img
              src="/CheckPurple.svg" // Substitua pelo caminho real da sua imagem
              alt="Checkmark"
              className={styles.checkmark}
            />
          )}
        </label>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="option3"
            checked={selectedRadioButton === 'option3'}
            onChange={() => handleRadioButtonChange('option3')}
          />
          <img
            src="/Pingente.svg" // Substitua pelo caminho real da sua imagem
            alt="Option 3"
            className={styles.radioImage}
          />
          <span
            className={`${styles.labelText} ${
              selectedRadioButton === 'option3' ? styles.selectedText : ''
            }`}
          >
            Pingente de ouro
          </span>
          {selectedRadioButton === 'option3' && (
            <img
              src="/CheckPurple.svg" // Substitua pelo caminho real da sua imagem
              alt="Checkmark"
              className={styles.checkmark}
            />
          )}
        </label>
      </div>
    </div>
  );
};

export default Dadosfiscais;
