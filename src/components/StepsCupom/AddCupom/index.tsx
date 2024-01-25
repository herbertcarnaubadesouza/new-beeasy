import Input from "@/components/Inputs/Input";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface DadosfiscaisProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Dadosfiscais: React.FC<DadosfiscaisProps> = ({ setModalOpen }) => {
  const [Cupomname, setCupomname] = useState<string>("");
  const [CupomType, setCupomType] = useState<string>("");
  const [razaoSocial, setRazaoSocial] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("Cupomname", Cupomname);
    localStorage.setItem("CupomType", CupomType);
    localStorage.setItem("razaoSocial", razaoSocial);
  }, [Cupomname, CupomType, razaoSocial]);

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
            <option value="">Selecione o tipo</option>
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
