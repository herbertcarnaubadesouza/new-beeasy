import Link from 'next/link';
import styles from './styles.module.scss';
export default function CardS() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.position}></div>
          <div className={styles.valor}>
            <h1>R$79,90</h1>
            <p>/mês</p>
          </div>
          <div className={styles.title}>
            <h1>Semestral</h1>
          </div>
          <div className={styles.undertitle}>
            <p>O plano mais vendido, um show de economia e bônus.</p>
            <ul>
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
          </div>
          <div className={styles.button}>
            <Link href={'/payment'}>
              <button>Trocar plano</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
