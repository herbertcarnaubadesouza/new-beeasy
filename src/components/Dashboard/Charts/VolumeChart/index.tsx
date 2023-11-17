import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { formatCurrency } from '@/utils/format/number';
import { HTMLAttributes } from 'react';
import Card from '../../Card';
import styles from './styles.module.scss';

const data = [
    {
        name: 'Jan',
        pedidos: 4000,
        total: 2400,
    },
    {
        name: 'Fev',
        pedidos: 3000,
        total: 2210,
    },
    {
        name: 'Mar',
        pedidos: 2000,
        total: 2290,
    },
    {
        name: 'Abr',
        pedidos: 2780,
        total: 2000,
    },
    {
        name: 'Mai',
        pedidos: 1890,
        total: 2181,
    },
    {
        name: 'Jun',
        pedidos: 2390,
        total: 2500,
    },
    {
        name: 'Jul',
        pedidos: 3490,
        total: 2100,
    },
    {
        name: 'Ago',
        pedidos: 2780,
        total: 2000,
    },
    {
        name: 'Set',
        pedidos: 1890,
        total: 2181,
    },
    {
        name: 'Out',
        pedidos: 2390,
        total: 2500,
    },
    {
        name: 'Nov',
        pedidos: 3490,
        total: 2100,
    },
    {
        name: 'Dez',
        pedidos: 4000,
        total: 2400,
    },
];

interface CustomTooltipProps {
    active: boolean;
    payload: any;
    label: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.tooltip}>
                <p>{payload[0]?.payload.pedidos} pedidos</p>
                <div className={styles.divider} />
                <p>{formatCurrency(payload[0].payload.total)}</p>
            </div>
        );
    }

    return;
};

interface VolumeChartProps extends HTMLAttributes<HTMLDivElement> {}

const VolumeChart = ({ className }: VolumeChartProps) => {
    return (
        <Card title="Volume de pedidos" className={className}>
            <ResponsiveContainer width="100%" height={320}>
                <AreaChart
                    data={data}
                    margin={{
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient
                            id="fill-gradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="85%"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#F70293" />
                            <stop
                                offset="1"
                                stopColor="#F70293"
                                stopOpacity="0"
                            />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                        content={
                            // @ts-ignore
                            <CustomTooltip />
                        }
                    />
                    <Area
                        dataKey="pedidos"
                        stroke="#F70293"
                        fill="url(#fill-gradient)"
                        strokeWidth={3}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default VolumeChart;
