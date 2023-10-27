import DownArrowIcon from '@/Icons/DownArrowIcon';
import UpArrowIcon from '@/Icons/UpArrowIcon';
import styles from './styles.module.scss';

const formatPercentage = (value: number) => {
    return value.toLocaleString('pt-BR', {
        style: 'percent',
    });
};

interface DashboardCardProps {
    title: string;
    value: number;
    spread: number;
}

const DashboardCard = ({ title, value, spread }: DashboardCardProps) => {
    return (
        <section className={styles['card-container']}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.value}>{value}</p>
            <div className={styles['data-container']}>
                <div>
                    {spread > 0 ? <UpArrowIcon /> : <DownArrowIcon />}
                    <p className={styles.spread} data-is-positive={spread > 0}>
                        {spread > 0 ? '+' : ''}
                        {formatPercentage(spread)}
                    </p>
                </div>
                <p className={styles.period}>Mês anterior</p>
            </div>
        </section>
    );
};

export default DashboardCard;
