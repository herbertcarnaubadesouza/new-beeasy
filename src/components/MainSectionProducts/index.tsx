import Link from "next/link";
import styles from "./styles.module.scss";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";

interface MainSectionProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

interface Product {
  id: string;
  title: string;
  category: string;
  type: string;
  tags: string;
  font: string;
  description: string;
  profitMargin: string;
  totalValue: string;
  images: string[];
  createdDate: string;
}

const MainSection = ({ title, description, children }: MainSectionProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "PRODUCTS"));
        const productsData: Product[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          productsData.push({
            id: doc.id,
            title: data.title,
            category: data.category,
            type: data.type,
            tags: data.tags,
            font: data.font,
            description: data.description,
            profitMargin: data.profitMargin,
            totalValue: data.totalValue,
            images: data.images,
            createdDate: data.createdDate,
          });
        });

        setProducts(productsData);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.text}>
          <h1>{title}</h1>
          {description && <h3>{description}</h3>}
        </div>
        <div className={styles.button}>
          <Link href={"/criar-produto"}>
            <button>
              <img src="PlusCircle.svg" alt="" />
              Novo Produto
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <header className={styles.tableHeader}>
          <p>
            <b>Foto</b>
          </p>
          <p>
            <b>Produto</b>
          </p>
          <p>
            <b>Categoria</b>
          </p>
          <p>
            <b>Data de cadastro</b>
          </p>
          <p>
            <b>Custo</b>
          </p>
          <p>
            <b>Lucro</b>
          </p>
          <p>
            <b>Venda</b>
          </p>
          <p>
            <b>Ações</b>
          </p>
        </header>

        {products.map((product: Product) => (
          <section key={product.id} className={styles.tableRow}>
            <div className={styles.rowIconsLeft}>
              {/* Renderize a imagem do produto aqui */}
              <img src={product.images[0]} alt={product.title} />
            </div>
            <p>{product.title}</p>
            <p>{product.category}</p>
            <p>-</p>

            <p>{`R$${product.totalValue}`}</p>
            <p>{`R$${product.profitMargin}`}</p>
            <p>{`R$${product.totalValue + product.profitMargin}`}</p>
            <div className={styles.rowIcons}>
              <img src="PencilSimple.svg" alt="Editar" />
              <img src="TrashSimple.svg" alt="Excluir" />
            </div>
          </section>
        ))}
      </div>

      {/* <div className={styles.pagination}>
        <button className={styles.buttonArrow}>
          <img src="/leftArrowPagination.svg" />
        </button>
        <p>1</p>
        <button className={styles.buttonArrow}>
          <img src="/rightArrowPagination.svg" />
        </button>
      </div> */}

      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default MainSection;
