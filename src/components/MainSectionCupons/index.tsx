import Link from 'next/link';
import styles from './styles.module.scss';

interface MainSectionProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const MainSection = ({ title, description, children }: MainSectionProps) => {
  return (
    <main className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.text}>
          <h1>{title}</h1>
          {description && <h3>{description}</h3>}
        </div>
        <div className={styles.button}>
          <Link href={'/adicionar-cupom'}>
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
        <section className={styles.tableRow}>
          <p>ABC123</p>
          <p>10%</p>
          <p>50</p>
          <div className={styles.rowIcons}>
            <img src="Linkpurple.svg" alt="" />
            <img src="PencilSimple.svg" alt="" />
            <img src="TrashSimple.svg" alt="" />
          </div>
        </section>

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
