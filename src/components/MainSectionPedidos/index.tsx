import Link from 'next/link';
import styles from './styles.module.scss';
import Input from '@/components/Inputs/Input';
import { useState } from 'react';
interface MainSectionProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const MainSection = ({ title, description, children }: MainSectionProps) => {
  const [Number, setNumber] = useState<string>('');
  const [Status, setStatus] = useState<string>('');
  const [DateStart, setDateStart] = useState<string>('');
  const [DateEnd, setDateEnd] = useState<string>('');
  return (
    <main className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.text}>
          <h1>{title}</h1>
          {description && <h3>{description}</h3>}
        </div>
      </div>
      <div className={styles.undertitle}>
        <div className={styles.lucro}>
          <div className={styles.topcontent}>
            <h2>LUCRO</h2>
            {/* Radio buttons for LUCRO */}
            <div className={styles.radiobuttonsL}>
              <label>
                <input type="radio" name="lucroOption" value="lucroOption1" />
                <span>Hoje</span>
              </label>
              <label>
                <input type="radio" name="lucroOption" value="lucroOption2" />
                <span>7 Dias</span>
              </label>
              <label>
                <input type="radio" name="lucroOption" value="lucroOption3" />
                <span>30 Dias</span>
              </label>
            </div>
          </div>
          <div className={styles.bottomcontent}>
            <p>R$ 3.567,30</p>
          </div>
        </div>
        <div className={styles.vendas}>
          <div className={styles.topcontent}>
            <h2>VENDAS</h2>
            {/* Radio buttons for VENDAS */}
            <div className={styles.radiobuttonsV}>
              <label>
                <input type="radio" name="vendasOption" value="vendasOption1" />
                <span>Hoje</span>
              </label>
              <label>
                <input type="radio" name="vendasOption" value="vendasOption2" />
                <span>7 Dias</span>
              </label>
              <label>
                <input type="radio" name="vendasOption" value="vendasOption3" />
                <span>30 dias</span>
              </label>
            </div>
          </div>
          <div className={styles.bottomcontent}>
            <p>44</p>
          </div>
        </div>
      </div>
      <div className={styles.inputcontainer}>
        <div className={styles.inputgroup}>
          <Input
            label="Número do pedido"
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <Input
            label="Início"
            placeholder="DD/MM/AAAA"
            value={DateStart}
            onChange={(e) => setDateStart(e.target.value)}
          />
          <Input
            label="Fim"
            placeholder="DD/MM/AAAA"
            value={DateEnd}
            onChange={(e) => setDateEnd(e.target.value)}
          />
          <div className={styles.dropdownContainer}>
            <label htmlFor="StatusDropdown">Status</label>
            <select
              id="StatusDropdown"
              value={Status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select type</option>
              <option value="ALL">Todos</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <header className={styles.tableHeader}>
          <p>
            <b>PEDIDO</b>
          </p>
          <p>
            <b>DATA</b>
          </p>
          <p>
            <b>CLIENTE</b>
          </p>
          <p>
            <b>EMAIL</b>
          </p>
          <p>
            <b>VALOR</b>
          </p>
          <p>
            <b>VALOR DISPONÍVEL</b>
          </p>
          <p>
            <b>FRETE</b>
          </p>
          <p>
            <b>DESCONTO</b>
          </p>
          <p>
            <b>CUSTO</b>
          </p>
          <p>
            <b>FORMA DE PAGAMENTO</b>
          </p>
        </header>

        {/* Sample table row */}
        <section className={styles.tableRow}>
          <p>53342</p>
          <p>28/07/2023, 11:23</p>
          <p>Josué Gome da silva</p>
          <p>tienlapspktnd@gmail.com</p>
          <p>R$ 1.652,45</p>
          <p>R$ 1.652,45</p>
          <p>R$ 1.652,45</p>
          <p>R$ 1.652,45</p>
          <p>R$ 1.652,45</p>
          <p>Débito</p>
        </section>

        {/* Add more table rows as needed */}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button className={styles.buttonArrow}>
          <img src="/leftArrowPagination.svg" />
        </button>
        <p>1</p>
        <button className={styles.buttonArrow}>
          <img src="/rightArrowPagination.svg" />
        </button>
      </div>

      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default MainSection;
