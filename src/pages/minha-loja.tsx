import MainSection from "@/components/MainSection";
import Steps, { StepData } from "@/components/StepsMystore";
import DashboardLayout from "@/layouts/DashboardLayout";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { XCircle } from "phosphor-react";
import { ReactElement, useState } from "react";
import { toast } from "react-toastify";
import { NextPageWithLayout } from "./_app";
import FloppyDiskIcon from "@/Icons/FloppyDiskIcon";
import ActivateIntegrationsStep from "@/components/Steps/SetupStore/ActivateIntegrationsStep";
import CreateProductsStep from "@/components/Steps/SetupStore/CreateProductsStep";
import CreateStoreStep from "@/components/Steps/SetupStore/CreateStoreStep";
import FinishRegisterStep from "@/components/Steps/SetupStore/FinishRegisterStep";
import Dadosiniciais from "@/components/Steps/MyStore/Dadosiniciais";
import ColorStore from "@/components/Steps/MyStore/ColorStore";
import BannerImage from "@/components/Steps/MyStore/BannerImage";
import SocialMidia from "@/components/StepsCupom/MyStore/SocialMidia";
import StoreModal from "@/components/Modal/ModalStore";

const CriarLoja: NextPageWithLayout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState("create-store");

  const handleNextStep = () => {
    const currentStepIndex = steps.findIndex((step) => step.id === activeStep);
    const nextStepIndex = currentStepIndex + 1;
    if (nextStepIndex < steps.length) {
      setActiveStep(steps[nextStepIndex].id);
    }
  };

  const handlePreviousStep = () => {
    const currentStepIndex = steps.findIndex((step) => step.id === activeStep);
    const previousStepIndex = currentStepIndex - 1;
    if (previousStepIndex >= 0) {
      setActiveStep(steps[previousStepIndex].id);
    }
  };

  const handleSave = async () => {
    // Logic to handle save action
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      toast.error("Usuário ou senha inválidos!", {
        icon: <XCircle size={32} color="#ff3838" weight="fill" />,
      });
      setIsLoading(false);
    } else {
      toast.success("Autenticado com sucesso!", {
        icon: "🎉",
      });
      setIsLoading(false);
      router.push("/admin/dashboard");
    }
  };

  const steps: StepData[] = [
    {
      id: "create-store",
      title: "Dados iniciais",
      description: "Customize sua loja",

      content: <Dadosiniciais />,
      actions: [
        {
          label: "Cancelar",
          onClick: handlePreviousStep,
        },
        {
          label: "Salvar",
          variant: "secondary",
          icon: <FloppyDiskIcon />,
          onClick: handleNextStep,
        },
      ],
    },
    {
      id: "create-products",
      title: "Cores da loja",
      description: "Customize sua loja",
      content: <ColorStore />,
      actions: [
        {
          label: "Cancelar",
          onClick: handlePreviousStep,
        },
        {
          label: "Salvar",
          variant: "secondary",

          icon: <FloppyDiskIcon />,
          onClick: handleNextStep,
        },
      ],
    },
    {
      id: "activate-integrations",
      title: "Imagem da capa",
      description: "Customize sua loja",

      content: <BannerImage />,
      actions: [
        {
          label: "Cancelar",
          onClick: handlePreviousStep,
        },
        {
          label: "Salvar",
          variant: "secondary",

          icon: <FloppyDiskIcon />,
          onClick: handleNextStep,
        },
      ],
    },
    {
      id: "finish-register",
      title: "Redes Sociais",
      description: "Customize sua loja",

      content: <SocialMidia />,
      actions: [
        {
          label: "Cancelar",
          variant: "primary",
          onClick: handlePreviousStep,
        },
        {
          label: "Salvar",
          variant: "secondary",
          onClick: handleSave,
        },
      ],
    },
  ];

  return (
    <>
      <MainSection
        title="Minha Loja"
        description="Siga o passo a passo para lançar sua loja"
      >
        <Steps
          steps={steps.map((step) => ({
            ...step,
            actions: step.actions.map((action) =>
              action.label === "Salvar" ? { ...action } : action
            ),
          }))}
          activeStep={activeStep}
          onStepChange={setActiveStep}
        >
          <p>Teste</p>
        </Steps>
        <StoreModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </MainSection>
    </>
  );
};

CriarLoja.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CriarLoja;
