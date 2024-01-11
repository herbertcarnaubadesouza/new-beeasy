import Link from 'next/link';
import styles from './styles.module.scss';
import PaymentS from '../PaymentS';
import PaymentData from '../PaymentData';

interface MainSectionProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const MainSection = ({ title, description, children }: MainSectionProps) => {
  return (
    <main className={styles.container}>
      <div className={styles.leftside}>
        <div className={styles.topcontent}>
          <div className={styles.titleWrapper}>
            <div className={styles.text}>
              <h1>{title}</h1>
              {description && <h3>{description}</h3>}
            </div>
            <div className={styles.compra}>
              <img src="Secure.svg" alt="" />
              Compra segura
            </div>
          </div>
          <PaymentS />
        </div>
      </div>
      <div className={styles.rightside}>
        {' '}
        <PaymentData />
      </div>
      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default MainSection;
