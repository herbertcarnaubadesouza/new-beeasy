import { ReactElement, ReactNode, useCallback, useState } from "react";
import StepContent from "./StepContent";
import styles from "./styles.module.scss";

export interface StepData {
  id: string;
  title: string;
  description?: string;
  nextStepAction?: {
    label: string;
    type: "button" | "link";
    onClick: () => void;
  };
  content: ReactElement;
  actions: {
    label: string;
    variant?: "primary" | "secondary" | "dark" | "excluir";
    icon?: ReactElement;
    disabled?: boolean;
    onClick?: () => void;
  }[];
}

interface StepsProps {
  steps: StepData[];
  children: ReactNode;
  activeStep: string;
  onStepChange: (stepId: string) => void;
}

const Steps = ({ steps, children, activeStep, onStepChange }: StepsProps) => {
  // Define image names for active and inactive steps
  const imageNames = {
    active: ["Dados.svg", "Cores.svg", "Imagem.svg", "Redes.svg"],
    inactive: ["DadosB.svg", "CoresB.svg", "ImagemB.svg", "RedesB.svg"],
  };

  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.menu}>
          {steps.map((step, index) => (
            <li
              key={step.id}
              className={step.id === activeStep ? styles.active : ""}
            >
              <button
                disabled={step.id === activeStep}
                onClick={(e) => {
                  e.preventDefault();
                  onStepChange(step.id);
                }}
              >
                <span className={styles.stepImage}>
                  <img
                    src={`/${
                      activeStep === step.id
                        ? imageNames.active[index]
                        : imageNames.inactive[index]
                    }`}
                    alt={step.title}
                    className={styles.stepImage}
                  />
                </span>
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
              className={step.id === activeStep ? styles.active : ""}
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
