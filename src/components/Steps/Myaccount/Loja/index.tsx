import MagicWangIcon from '@/Icons/MagicWandIcon';
import Button from '@/components/Buttons/Button';

import Input from '@/components/Inputs/Input';
import { useState } from 'react';
import ImageInput from '@/components/Inputs/ImageInputAlterar';
import styles from './styles.module.scss';

const CreateStoreStep = () => {
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
        <Button
          label="Criar logo com IA"
          variant="dark"
          icon={<MagicWangIcon />}
        />
      </div>
    </div>
  );
};

export default CreateStoreStep;
