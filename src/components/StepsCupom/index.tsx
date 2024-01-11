import { ReactElement, ReactNode, useCallback, useState } from 'react';
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
    variant?: 'primary' | 'secondary' | 'dark' | 'excluir';
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

  const currentStep = steps.find((step) => step.id === activeStep);

  // Ensure that currentStep is defined
  if (!currentStep) {
    return null; // or handle the case when currentStep is undefined
  }

  // Assuming there's only one button for all steps
  const buttonVariant = currentStep.actions[0]?.variant || 'primary';

  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.active}>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleStepClick(activeStep);
              }}
              className={styles[buttonVariant]}
            >
              <span className={styles.stepImage}>
                <img
                  src={`/Box.svg`}
                  alt={currentStep.title}
                  className={styles.stepImage}
                />
              </span>
              {currentStep.title}
            </button>
          </li>
        </ul>
      </nav>

      <div className={styles.content}>
        <ul>
          <li className={styles.active}>
            <StepContent step={currentStep}>{currentStep.content}</StepContent>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Steps;
