import BeeasyIcon from '@/components/Icons/BeeasyIcon';
import CreditCardIcon from '@/components/Icons/CreditCardIcon';
import HelpIcon from '@/components/Icons/HelpIcon';
import HomeIcon from '@/components/Icons/HomeIcon';
import LogoutIcon from '@/components/Icons/LogoutIcon';
import PackageIcon from '@/components/Icons/PackageIcon';
import StorefrontIcon from '@/components/Icons/StorefrontIcon';
import TicketIcon from '@/components/Icons/TicketIcon';
import UserIcon from '@/components/Icons/UserIcon';
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
                                                ? styles['logo-text']
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
                                                ? styles['logo-text']
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
