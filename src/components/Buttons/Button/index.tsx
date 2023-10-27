import { defaultOptions } from '@/animation';
import { ButtonHTMLAttributes, ReactElement } from 'react';
import Lottie from 'react-lottie';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    icon?: ReactElement;
    variant?: 'primary' | 'secondary' | 'dark' | 'link';
    isLoading?: boolean;
}

const Button = ({
    label,
    icon,
    variant = 'primary',
    isLoading = false,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${className}`}
            data-variant={variant}
            {...props}
        >
            {isLoading /*@ts-ignore*/ ? (
                <Lottie options={defaultOptions} height={40} width={50} />
            ) : (
                <>
                    {icon}
                    {label}
                </>
            )}
        </button>
    );
};

export default Button;
