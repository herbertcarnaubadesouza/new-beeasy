import Link from 'next/link';
import styles from './styles.module.scss';
export default function Card() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.valor}>
            <h1>R$0</h1>
            <p>/mês</p>
          </div>
          <div className={styles.title}>
            <h1>Test Drive</h1>
          </div>
          <div className={styles.undertitle}>
            <p>Teste tudo por nossa conta, durante 7 dias</p>
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
