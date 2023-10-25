import { ReactElement } from 'react';
import Header from '../components/Dashboard/Header';
import SidebarNav from '../components/Dashboard/SidebarNav';
import styles from '../styles/Dashboard.module.scss';

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
