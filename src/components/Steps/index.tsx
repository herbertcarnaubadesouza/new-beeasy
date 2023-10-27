import FloppyDiskIcon from '@/Icons/FloppyDiskIcon';
import { ReactElement, useCallback, useState } from 'react';
import StepContent from './StepContent';
import styles from './styles.module.scss';

export interface StepData {
    id: string;
    title: string;
    description?: string;
    nextStepAction?: {
        label: string;
        onClick: () => void;
    };
    content: ReactElement | string | number;
    actions: {
        label: string;
        variant?: 'primary' | 'secondary' | 'dark';
        icon?: ReactElement;
        onClick?: () => void;
    }[];
}

const steps: StepData[] = [
    {
        id: 'create-store',
        title: 'Criar loja',
        description: 'Customize sua loja',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quos dolore molestias facere odio voluptatum eveniet minima soluta laborum impedit cumque laboriosam, ea non optio ut. Delectus maiores minima iusto.',
        actions: [
            {
                label: 'Cancelar',
            },
            {
                label: 'Salvar',
                variant: 'secondary',
                icon: <FloppyDiskIcon />,
            },
        ],
    },
    {
        id: 'create-products',
        title: 'Criar produtos',
        description: 'Crie os produtos do catálogo da sua loja',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quos dolore molestias facere odio voluptatum eveniet minima soluta laborum impedit cumque laboriosam, ea non optio ut. Delectus maiores minima iusto.',
        actions: [
            {
                label: 'Cancelar',
            },
            {
                label: 'Salvar',
                variant: 'secondary',
                icon: <FloppyDiskIcon />,
            },
        ],
    },
    {
        id: 'activate-integrations',
        title: 'Ativar integrações (opcional)',
        description:
            'Caso você já tenha uma loja virtual, você já pode ativar integrações de diversos parceiros em sua loja.',
        nextStepAction: {
            label: 'Pular passo',
            onClick: () => {},
        },
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quos dolore molestias facere odio voluptatum eveniet minima soluta laborum impedit cumque laboriosam, ea non optio ut. Delectus maiores minima iusto.',
        actions: [
            {
                label: 'Cancelar',
            },
            {
                label: 'Salvar',
                variant: 'secondary',
                icon: <FloppyDiskIcon />,
            },
        ],
    },
    {
        id: 'finish-register',
        title: 'Finalizar Cadastro',
        description: 'Complete seus dados de cadastro',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quos dolore molestias facere odio voluptatum eveniet minima soluta laborum impedit cumque laboriosam, ea non optio ut. Delectus maiores minima iusto.',
        actions: [
            {
                label: 'Finalizar',
                variant: 'secondary',
                icon: <FloppyDiskIcon />,
            },
        ],
    },
];

const Steps = ({ children }: { children: ReactElement }) => {
    const [activeStep, setActiveStep] = useState(steps[0].id);

    const handleStepClick = useCallback((stepId: string) => {
        setActiveStep(stepId);
    }, []);

    return (
        <div className={styles.container}>
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
                    {steps.map((step) => (
                        <li
                            key={step.id}
                            className={
                                step.id === activeStep ? styles.active : ''
                            }
                        >
                            <StepContent step={step}>
                                <p>{step.content}</p>
                            </StepContent>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Steps;