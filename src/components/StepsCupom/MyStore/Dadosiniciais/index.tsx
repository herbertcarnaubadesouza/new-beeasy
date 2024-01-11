import MagicWangIcon from '@/Icons/MagicWandIcon';
import Button from '@/components/Buttons/Button';
import ImageInput from '@/components/Inputs/ImageInputAlterar';

import Input from '@/components/Inputs/Input';
import { useState } from 'react';

import styles from './styles.module.scss';

const Dadosiniciais = () => {
  const [storeName, setStoreName] = useState<string>('');
  const [storeDescription, setStoreDescription] = useState<string>('');

  const handleStoreNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreName(e.target.value);
  };

  const handleStoreDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStoreName(e.target.value);
  };

  return (
    <div className={styles['step-wrapper']}>
      <ImageInput />
      <div className={styles['input-container']}>
        <div className={styles['input-group']}>
          <Input
            label="Nome da loja"
            placeholder="Digite o nome da sua loja"
            value={storeName}
            required
            onChange={handleStoreNameChange}
          />
          <Input
            label="Descrição"
            placeholder="Adicione uma descrição para sua loja"
            value={storeDescription}
            onChange={handleStoreDescriptionChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Dadosiniciais;
