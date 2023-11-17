import { formatCurrency } from '@/utils/format/number';
import styles from './styles.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <a href="#">Ver minha loja</a>
            <section>
                <div className={styles['money-section']}>
                    <span>A liberar</span>
                    <p className={styles['red']}>{formatCurrency(856)}</p>
                </div>
                <div className={styles['money-section']}>
                    <span>Disponível</span>
                    <p className={styles['green']}>{formatCurrency(3254)}</p>
                </div>
            </section>
            <div className={styles['avatar-wrapper']}>
                <a href="#">
                    <img
                        src="https://api.dicebear.com/7.x/fun-emoji/svg"
                        alt="Avatar"
                    />
                    <span>Avatar</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
