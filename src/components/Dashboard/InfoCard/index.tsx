import DownArrowIcon from '@/Icons/DownArrowIcon';
import UpArrowIcon from '@/Icons/UpArrowIcon';
import { formatPercentage } from '@/utils/format/number';
import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InfoCardProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    value: number;
    spread: number;
}

const InfoCard = ({ title, value, spread, className }: InfoCardProps) => {
    return (
        <section
            className={
                className
                    ? `${styles['card-container']} ${className}`
                    : styles['card-container']
            }
        >
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

export default InfoCard;
