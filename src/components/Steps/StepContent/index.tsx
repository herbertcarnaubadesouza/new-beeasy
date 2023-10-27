import Button from '@/components/Buttons/Button';
import { ReactElement } from 'react';
import { StepData } from '..';
import styles from './styles.module.scss';

const StepContent = ({
    step,
    children,
}: {
    step: StepData;
    children?: ReactElement;
}) => {
    return (
        <article className={styles['step-container']}>
            <header>
                <div className={styles['step-title']}>
                    <h2>{step.title}</h2>
                    <p>{step.description}</p>
                </div>
                {step.nextStepAction && (
                    <button
                        className={styles['btn-link']}
                        onClick={(e) => {
                            e.preventDefault();
                            step.nextStepAction?.onClick();
                        }}
                    >
                        {step.nextStepAction.label}
                    </button>
                )}
            </header>
            <section>{children}</section>
            <footer>
                {step.actions.map((action) => (
                    <Button
                        key={action.label}
                        label={action.label}
                        icon={action.icon}
                        variant={action.variant}
                        disabled={action.disabled}
                        onClick={action.onClick}
                    />
                ))}
            </footer>
        </article>
    );
};

export default StepContent;
