import styles from './styles.module.scss';

export default function CurrentSignature() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.current}>
            <label className={styles.title}>Plano atual</label>
            <label className={styles.type}>SEMESTRAL</label>
          </div>
          <div className={styles.date}>
            <label className={styles.title}>Data de renovação</label>
            <label className={styles.type}>23/11/2023</label>
          </div>
          <div className={styles.situation}>
            <label className={styles.title}>Situação </label>
            <label className={styles.type}>ASSINATURA ATIVA</label>
          </div>
        </div>
      </div>
    </>
  );
}
