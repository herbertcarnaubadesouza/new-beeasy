import ProductsChart from '@/components/Dashboard/Charts/ProductsChart';
import SalesChart from '@/components/Dashboard/Charts/SalesChart';
import VolumeChart from '@/components/Dashboard/Charts/VolumeChart';
import DashboardCard from '@/components/Dashboard/InfoCard';
import MainSection from '@/components/MainSection';
import DashboardLayout from '@/layouts/DashboardLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

import styles from '@/styles/Dashboard.module.scss';

const Dashboard: NextPageWithLayout = () => {
    return (
        <MainSection title="Dashboard">
            <div className={styles['content-grid']}>
                <div className={styles['info-cards']}>
                    <DashboardCard
                        title={'Total de pedidos'}
                        value={56}
                        spread={0.32}
                    />
                    <DashboardCard
                        title={'Aprovados'}
                        value={44}
                        spread={0.11}
                    />
                    <DashboardCard
                        title={'Cancelamentos'}
                        value={12}
                        spread={-0.05}
                    />
                    <DashboardCard
                        title={'Pendentes'}
                        value={34}
                        spread={0.14}
                    />
                </div>
                <VolumeChart className={styles['volume-chart']} />
                <div className={styles['conversion-charts']}>
                    <ProductsChart />
                    <SalesChart />
                </div>
            </div>
        </MainSection>
    );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
