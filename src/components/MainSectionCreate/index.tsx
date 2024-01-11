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
          <Link href={''}>
            <button>
              <img src="PlusCircle.svg" alt="" />
              Adicionar produto
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default MainSection;
