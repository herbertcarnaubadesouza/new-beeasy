import Header from '@/components/Dashboard/Header';
import SidebarNav from '@/components/Dashboard/SidebarNav';
import { ReactElement } from 'react';
import styles from './styles.module.scss';

export default function DashboardLayout({
    children,
}: {
    children: ReactElement;
}) {
    return (
        <div className={styles.container}>
            <Header />
            <SidebarNav />
            {children}
        </div>
    );
}
