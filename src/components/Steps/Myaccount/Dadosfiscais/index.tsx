import MagicWandIcon from '@/Icons/MagicWandIcon';
import Button from '@/components/Buttons/Button';
import ImageInput from '@/components/Inputs/ImageInputAlterar';
import Input from '@/components/Inputs/Input';
import { useState } from 'react';

import styles from './styles.module.scss';

const Dadosfiscais = () => {
  const [cnpjCpf, setCnpjCpf] = useState<string>('');
  const [inscricaoEstadual, setInscricaoEstadual] = useState<string>('');
  const [razaoSocial, setRazaoSocial] = useState<string>('');
  const [telefone1, setTelefone1] = useState<string>('');
  const [cep1, setCep1] = useState<string>('');
  const [telefone2, setTelefone2] = useState<string>('');
  const [cep2, setCep2] = useState<string>('');
  const [cep3, setCep3] = useState<string>('');
  const [bairro, setBairro] = useState<string>('');
  const [endereco, setEndereco] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');
  const [estado, setEstado] = useState<string>('');
  const [numero, setNumero] = useState<string>('');
  const [complemento, setComplemento] = useState<string>(''); // New state for Complemento

  return (
    <div className={styles.inputcontainer}>
      <div className={styles.inputgroup}>
        <Input
          label="CNPJ/CPF"
          value={cnpjCpf}
          onChange={(e) => setCnpjCpf(e.target.value)}
        />
        <Input
          label="Inscrição estadual"
          value={inscricaoEstadual}
          onChange={(e) => setInscricaoEstadual(e.target.value)}
        />
        <Input
          label="Razão social"
          value={razaoSocial}
          onChange={(e) => setRazaoSocial(e.target.value)}
        />
      </div>
      <div className={styles.inputgroup}>
        <Input
          label="Telefone"
          value={telefone1}
          onChange={(e) => setTelefone1(e.target.value)}
        />
        <Input
          label="CEP"
          value={cep1}
          onChange={(e) => setCep1(e.target.value)}
        />
        <Input
          label="Telefone"
          value={telefone2}
          onChange={(e) => setTelefone2(e.target.value)}
        />
      </div>
      <h2 className={styles.title}>Endereço</h2>
      <div className={styles.inputgroup}>
        <Input
          label="CEP"
          value={cep2}
          onChange={(e) => setCep2(e.target.value)}
        />
        <Input
          label="Bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
        <Input
          label="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
      </div>
      <div className={styles.inputgroup}>
        <Input
          label="Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <Input
          label="Estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
        <Input
          label="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </div>
      <div className={styles.inputgroup}>
        <Input
          label="Complemento"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Dadosfiscais;
