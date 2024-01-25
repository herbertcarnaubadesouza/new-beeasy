import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import styles from "./styles.module.scss";

interface MainSectionProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

interface Cupom {
  id: string;
  name: string;
  type: string;
  value: string;
  count: number;
}

const MainSection = ({ title, description, children }: MainSectionProps) => {
  const [cupons, setCupons] = useState<Cupom[]>([]);

  useEffect(() => {
    const fetchCupons = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "COUPONS"));
        const cuponsData: Cupom[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const cupom: Cupom = {
            id: doc.id,
            name: data.name,
            type: data.type,
            value: data.value,
            count: data.count,
          };

          cuponsData.push(cupom);
        });

        setCupons(cuponsData);
      } catch (error) {
        console.error("Erro ao buscar os cupons:", error);
      }
    };

    fetchCupons();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.text}>
          <h1>{title}</h1>
          {description && <h3>{description}</h3>}
        </div>
        <div className={styles.button}>
          <Link href={"/adicionar-cupom"}>
            <button>
              <img src="PlusCircle.svg" alt="" />
              Novo Cupom
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <header className={styles.tableHeader}>
          <p>
            <b>CÓDIGO</b>
          </p>
          <p>
            <b>DESCONTO</b>
          </p>
          <p>
            <b>UTILIZADOS</b>
          </p>
          <p>
            <b>Ações</b>
          </p>
        </header>

        {/* Sample table row */}
        {cupons.map((cupom) => (
          <section key={cupom.id} className={styles.tableRow}>
            <p>{cupom.name}</p>
            <p>{cupom.value}</p>
            <p>{cupom.count}</p>
            <div className={styles.rowIcons}>
              <img src="Linkpurple.svg" alt="" />
              <img src="PencilSimple.svg" alt="" />
              <img src="TrashSimple.svg" alt="" />
            </div>
          </section>
        ))}

        {/* Add more table rows as needed */}
      </div>

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
