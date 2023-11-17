import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { HTMLAttributes } from 'react';
import Card from '../../Card';
import styles from './styles.module.scss';

const data = [
    { name: 'Em andamento', value: 98 },
    { name: 'Cancelada', value: 17 },
    { name: 'Finalizada', value: 215 },
];
const COLORS = ['#F3B200', '#ED1C24', 'rgba(0, 143, 140, 0.7)'];

interface SalesChartProps extends HTMLAttributes<HTMLDivElement> {}

const SalesChart = ({ className }: SalesChartProps) => {
    const completedSales =
        data.find((item) => item.name === 'Finalizada')?.value || 0;
    const totalSales = data.reduce((acc, item) => item.value + acc, 0) || 1;
    const completedSalesPercentage = (
        completedSales / totalSales
    ).toLocaleString('pt-BR', {
        style: 'percent',
    });

    return (
        <Card title="Vendas" className={className}>
            <div className={styles.container}>
                <div className={styles['chart-wrapper']}>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={85}
                                outerRadius={100}
                                fill="#8884d8"
                                nameKey="name"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                separator=""
                                contentStyle={{
                                    backgroundColor: 'var(--black-500)',
                                    color: 'var(--white-500, #fff)',
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <h3>{completedSalesPercentage}</h3>
                </div>
                <ul>
                    {data.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                // @ts-ignore
                                '--color': COLORS[index % COLORS.length],
                            }}
                        >
                            <span>{item.value}</span>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

export default SalesChart;
