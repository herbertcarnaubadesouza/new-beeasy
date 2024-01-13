import { ButtonHTMLAttributes, ReactElement } from "react";
import styles from "./styles.module.scss";

interface CardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  hideLabel?: boolean;
  icon?: ReactElement;
}

const CardButton = ({
  label,
  icon,
  hideLabel = false,
  ...props
}: CardButtonProps) => {
  return (
    <button
      className={styles["card-button"]}
      data-hide-label={hideLabel}
      {...props}
    >
      <div className={styles["icon-wrapper"]}>{icon}</div>
      <span>{label}</span>
    </button>
  );
};

export default CardButton;
