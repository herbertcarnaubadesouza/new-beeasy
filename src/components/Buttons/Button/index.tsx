import { ButtonHTMLAttributes, ReactElement } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    icon?: ReactElement;
    variant?: 'primary' | 'secondary' | 'dark';
}

const Button = ({
    label,
    icon,
    variant = 'primary',
    ...props
}: ButtonProps) => {
    return (
        <button className={styles.button} data-variant={variant} {...props}>
            {icon}
            {label}
        </button>
    );
};

export default Button;
