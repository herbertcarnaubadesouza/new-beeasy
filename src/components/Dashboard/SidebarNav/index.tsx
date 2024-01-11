import { useState } from 'react';
import Link from 'next/link';
import { Exo } from 'next/font/google';
import styles from './styles.module.scss';
import BeeasyIcon from '@/Icons/BeeasyIcon';
import CreditCardIcon from '@/Icons/CreditCardIcon';
import HelpIcon from '@/Icons/HelpIcon';
import HomeIcon from '@/Icons/HomeIcon';
import LogoutIcon from '@/Icons/LogoutIcon';
import PackageIcon from '@/Icons/PackageIcon';
import StorefrontIcon from '@/Icons/StorefrontIcon';
import TicketIcon from '@/Icons/TicketIcon';
import UserIcon from '@/Icons/UserIcon';
import CartIcon from '@/Icons/CartIcon';

const buttons = [
  {
    icon: <BeeasyIcon />,
    label: 'Beeasy',
    isLogo: true,
    href: '/',
  },
  {
    icon: <HomeIcon />,
    label: 'Início',
    isActive: true,
    href: '/dashboard',
  },
  {
    icon: <CartIcon />,
    label: 'Pedidos',
    isActive: true,
    href: '/pedidos',
  },
  {
    icon: <PackageIcon />,
    label: 'Produtos',
    href: '/produtos',
  },
  {
    icon: <TicketIcon />,
    label: 'Cupons',
    href: '/cupons',
  },
  {
    icon: <StorefrontIcon />,
    label: 'Minha loja',
    href: '/minha-loja',
  },
  {
    icon: <CreditCardIcon />,
    label: 'Assinatura',
    href: '/assinatura',
  },
  {
    icon: <UserIcon />,
    label: 'Minha conta',
    href: '/minha-conta',
  },
  {
    icon: <HelpIcon />,
    label: 'Central de ajuda',
    href: '/help',
  },
  {
    icon: <LogoutIcon />,
    label: 'Encerrar sessão',
    flipped: true,
    href: '/logout',
  },
];

const exoFont = Exo({
  weight: '400',
  subsets: ['latin-ext'],
});

const SidebarNav = () => {
  const [activeButton, setActiveButton] = useState('/');

  return (
    <nav className={styles.sidebarNav}>
      <ul className={styles['navbar-nav']}>
        {buttons.map((button, index) => (
          <li
            className={`${button.isLogo ? styles.logo : styles['nav-item']} ${
              button.href === activeButton ? styles.active : ''
            }`}
            key={button.label}
          >
            <Link href={button.href || '#'}>
              <div
                className={styles['nav-link']}
                onClick={() => setActiveButton(button.href)}
              >
                {index < buttons.length - 1 ? (
                  <>
                    <div className={styles['icon-wrapper']}>{button.icon}</div>

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

                    <div className={styles['icon-wrapper']}>{button.icon}</div>
                  </>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
