import FloppyDiskIcon from '@/Icons/FloppyDiskIcon';
import { ReactElement, ReactNode, useCallback, useState } from 'react';
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

interface StepsProps {
  steps: StepData[];
  children: ReactNode;
}

const Steps = ({ steps, children }: StepsProps) => {
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
              className={step.id === activeStep ? styles.active : ''}
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
              className={step.id === activeStep ? styles.active : ''}
            >
              <StepContent step={step}>{step.content}</StepContent>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Steps;
