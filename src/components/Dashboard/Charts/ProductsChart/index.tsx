import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { HTMLAttributes } from 'react';
import Card from '../../Card';
import styles from './styles.module.scss';

const data = [
    { name: 'Produto 1', value: 300 },
    { name: 'Produto 2', value: 250 },
    { name: 'Produto 3', value: 250 },
    { name: 'Produto 4', value: 200 },
    { name: 'Produto 5', value: 150 },
    { name: 'Produto 6', value: 100 },
];
const COLORS = [
    '#F94144',
    '#F8961E',
    '#2D9CDB',
    '#F3722C',
    '#90BE6D',
    '#F9C74F',
];

interface ProductsChartProps extends HTMLAttributes<HTMLDivElement> {}

const ProductsChart = ({ className }: ProductsChartProps) => {
    return (
        <Card title="Volume de pedidos" className={className}>
            <div className={styles.container}>
                <div className={styles['chart-wrapper']}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="101.75%"
                                startAngle={180}
                                endAngle={0}
                                innerRadius={140}
                                outerRadius={230}
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
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
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
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

export default ProductsChart;
