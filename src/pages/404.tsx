import Button from '@/components/Buttons/Button';
import Link from 'next/link';
import styles from '../styles/404.module.scss';

export default function CriarConta() {
    return (
        <main className={styles.Container}>
            <div>
                <section>
                    <h1>Ops, algo de errado não está certo</h1>
                    <Link href="/">
                        <Button label="Voltar ao início" variant="secondary" />
                    </Link>
                </section>
                <img
                    className={styles.image404}
                    src="/images/404.webp"
                    alt="404 image"
                />
            </div>
        </main>
    );
}
