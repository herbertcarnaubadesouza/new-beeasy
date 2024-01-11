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
      <div className={styles['input-container']}>
        <div className={styles['input-group']}>
          <Input
            label="Sua senha"
            value={storeName}
            onChange={handleStoreNameChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateStoreStep;
