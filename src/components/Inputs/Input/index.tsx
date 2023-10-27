import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    type = 'string',
    label,
    placeholder,
    value,
    required = false,
    onChange,
    className,
    ...props
}: InputProps) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel} data-required={required}>
                {label}
            </label>
            <input
                type={type}
                className={`${styles.inputElement} ${className}`}
                placeholder={placeholder}
                value={value}
                required={required}
                onChange={onChange}
                {...props}
            />
        </div>
    );
};

export default Input;
