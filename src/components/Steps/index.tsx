import FloppyDiskIcon from '@/Icons/FloppyDiskIcon';
import { ReactElement, useCallback, useState } from 'react';
import ActivateIntegrationsStep from './SetupStore/ActivateIntegrationsStep';
import CreateProductsStep from './SetupStore/CreateProductsStep';
import CreateStoreStep from './SetupStore/CreateStoreStep';
import FinishRegisterStep from './SetupStore/FinishRegisterStep';
import StepContent from './StepContent';
import styles from './styles.module.scss';

export interface StepData {
    id: string;
    title: string;
    description?: string;
    nextStepAction?: {
        label: string;
        type: 'button' | 'link';
        onClick: () => void;
    };
    content: ReactElement;
    actions: {
        label: string;
        variant?: 'primary' | 'secondary' | 'dark';
        icon?: ReactElement;
        disabled?: boolean;
        onClick?: () => void;
    }[];
}

const steps: StepData[] = [
    {
        id: 'create-store',
        title: 'Criar loja',
        description: 'Customize sua loja',
        nextStepAction: {
            label: 'Personalizar loja',
            type: 'button',
            onClick: () => {},
        },
        content: <CreateStoreStep />,
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
        content: <CreateProductsStep />,
        actions: [
            {
                label: 'Cancelar',
            },
            {
                label: 'Salvar',
                variant: 'secondary',
                disabled: true,
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
            label: 'Pular passo opcional',
            type: 'link',
            onClick: () => {},
        },
        content: <ActivateIntegrationsStep />,
        actions: [
            {
                label: 'Cancelar',
            },
            {
                label: 'Salvar',
                variant: 'secondary',
                disabled: true,
                icon: <FloppyDiskIcon />,
            },
        ],
    },
    {
        id: 'finish-register',
        title: 'Finalizar Cadastro',
        description: 'Complete seus dados de cadastro',
        nextStepAction: {
            label: 'Pular passo opcional',
            type: 'link',
            onClick: () => {},
        },
        content: <FinishRegisterStep />,
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
                                {step.content}
                            </StepContent>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Steps;
