import styles from './styles.module.scss';

interface InputProps {
    type?: string;
    label: string;
    placeholder?: string;
    value: string;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    type = 'string',
    label,
    placeholder,
    value,
    required = false,
    onChange,
}: InputProps) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel} data-required={required}>
                {label}
            </label>
            <input
                type={type}
                className={styles.inputElement}
                placeholder={placeholder}
                value={value}
                required={required}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
