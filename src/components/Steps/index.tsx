import { ReactElement, useCallback, useState } from 'react';
import styles from './styles.module.scss';

const steps = [
    {
        id: 'create-store',
        title: 'Criar loja',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quos dolore molestias facere odio voluptatum eveniet minima soluta laborum impedit cumque laboriosam, ea non optio ut. Delectus maiores minima iusto.',
    },
    {
        id: 'customize-store',
        title: 'Customizar loja',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quos dolore molestias facere odio voluptatum eveniet minima soluta laborum impedit cumque laboriosam, ea non optio ut. Delectus maiores minima iusto.',
    },
    {
        id: 'activate-integrations',
        title: 'Ativar integrações',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quos dolore molestias facere odio voluptatum eveniet minima soluta laborum impedit cumque laboriosam, ea non optio ut. Delectus maiores minima iusto.',
    },
    {
        id: 'finish-register',
        title: 'Finalizar Cadastro',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quos dolore molestias facere odio voluptatum eveniet minima soluta laborum impedit cumque laboriosam, ea non optio ut. Delectus maiores minima iusto.',
    },
];

const Steps = ({ children }: { children: ReactElement }) => {
    const [activeStep, setActiveStep] = useState(steps[0].id);

    const handleStepClick = useCallback((stepId: string) => {
        setActiveStep(stepId);
    }, []);

    return (
        <section className={styles.container}>
            <nav>
                <ul className={styles.menu}>
                    {steps.map((step, index) => (
                        <li
                            key={step.id}
                            className={
                                step.id === activeStep ? styles.active : ''
                            }
                        >
                            <button
                                disabled={step.id === activeStep}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleStepClick(step.id);
                                }}
                            >
                                <span>{index + 1}</span>
                                {step.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={styles.content}>
                <ul>
                    {steps.map((step, index) => (
                        <li
                            key={step.id}
                            className={
                                step.id === activeStep ? styles.active : ''
                            }
                        >
                            <div className={styles['step-content']}>
                                <p>{step.content}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Steps;
