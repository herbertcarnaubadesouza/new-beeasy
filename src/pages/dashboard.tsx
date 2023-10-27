import DashboardCard from '@/components/Dashboard/DashboardCard';
import MainSection from '@/components/MainSection';
import DashboardLayout from '@/layouts/DashboardLayout';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const Dashboard: NextPageWithLayout = () => {
    const router = useRouter();

    return (
        <MainSection title="Dashboard">
            <DashboardCard
                title={'Total de pedidos'}
                value={56}
                spread={0.32}
            />
        </MainSection>
    );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
