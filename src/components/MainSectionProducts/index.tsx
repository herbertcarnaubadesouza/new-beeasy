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
          <Link href={'/criar-produto'}>
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

        {/* Sample table row */}
        <section className={styles.tableRow}>
          <div className={styles.rowIconsLeft}>
            <img src="AnelRound.svg" alt="" />
          </div>
          <p>Anel Dourado</p>
          <p>Anéis</p>
          <p>04/10/23 19:11</p>
          <p>R$12,35</p>
          <p>R$22,35</p>
          <p>R$32,70</p>
          <div className={styles.rowIcons}>
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
