import BeeasyIcon from '@/Icons/BeeasyIcon';
import CreditCardIcon from '@/Icons/CreditCardIcon';
import HelpIcon from '@/Icons/HelpIcon';
import HomeIcon from '@/Icons/HomeIcon';
import LogoutIcon from '@/Icons/LogoutIcon';
import PackageIcon from '@/Icons/PackageIcon';
import StorefrontIcon from '@/Icons/StorefrontIcon';
import TicketIcon from '@/Icons/TicketIcon';
import UserIcon from '@/Icons/UserIcon';
import { Exo } from 'next/font/google';
import styles from './styles.module.scss';

const buttons = [
    {
        icon: <BeeasyIcon />,
        label: 'Beeasy',
        isLogo: true,
    },
    {
        icon: <HomeIcon />,
        label: 'Início',
        isActive: true,
    },
    {
        icon: <PackageIcon />,
        label: 'Produtos',
    },
    {
        icon: <TicketIcon />,
        label: 'Cupons',
    },
    {
        icon: <StorefrontIcon />,
        label: 'Minha loja',
    },
    {
        icon: <CreditCardIcon />,
        label: 'Assinatura',
    },
    {
        icon: <UserIcon />,
        label: 'Minha conta',
    },
    {
        icon: <HelpIcon />,
        label: 'Central de ajuda',
    },
    {
        icon: <LogoutIcon />,
        label: 'Encerrar sessão',
        flipped: true,
    },
];

const exoFont = Exo({
    weight: '400',
    subsets: ['latin-ext'],
});

const SidebarNav = () => {
    return (
        <nav className={styles.sidebarNav}>
            <ul className={styles['navbar-nav']}>
                {buttons.map((button, index) => (
                    <li
                        className={`${
                            button.isLogo ? styles.logo : styles['nav-item']
                        } ${button.isActive ? styles.active : ''}`}
                        key={button.label}
                    >
                        <a href="#" className={styles['nav-link']}>
                            {index < buttons.length - 1 ? (
                                <>
                                    <div className={styles['icon-wrapper']}>
                                        {button.icon}
                                    </div>

                                    <span
                                        className={`${styles['link-text']} ${
                                            button.isLogo
                                                ? `${styles['logo-text']} ${exoFont.className}`
                                                : ''
                                        }`}
                                    >
                                        {button.label}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span
                                        className={`${styles['link-text']} ${
                                            button.isLogo
                                                ? `${styles['logo-text']} ${exoFont.className}`
                                                : ''
                                        }`}
                                    >
                                        {button.label}
                                    </span>

                                    <div className={styles['icon-wrapper']}>
                                        {button.icon}
                                    </div>
                                </>
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SidebarNav;
