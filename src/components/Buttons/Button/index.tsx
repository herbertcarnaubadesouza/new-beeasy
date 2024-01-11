import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'link' | 'excluir';
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
      {isLoading ? (
        // If you still want to show something during loading, you can modify this part
        'Loading...'
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
