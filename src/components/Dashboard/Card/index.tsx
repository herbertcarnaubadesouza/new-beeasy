import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

const data = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Fev',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Abr',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Mai',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Ago',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Set',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Out',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Nov',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Dez',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
];

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    children: React.ReactNode;
}

const Card = ({ title, children, className }: CardProps) => {
    return (
        <section
            className={className ? `${styles.card} ${className}` : styles.card}
        >
            <h2>{title}</h2>

            <div className={styles['card-content']}>{children}</div>
        </section>
    );
};

export default Card;
