import MainSection from "@/components/MainSection";
import Steps, { StepData } from "@/components/Steps";
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
import { redirect } from "next/navigation";
import RightSidebar from "@/components/RightSidebar";

const CriarLoja: NextPageWithLayout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [headerName, setHeaderName] = useState("Default Header");
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleIntegrationClick = (integrationName: string) => {
    console.log("Integration clicked:", integrationName);
    setHeaderName(integrationName);
    setIsModalOpen(true);
  };

  const goToDashboard = () => {
    router.push("/dashboard");
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
      title: "Criar loja",
      description: "Customize sua loja",
      nextStepAction: {
        label: "Personalizar loja",
        type: "button",
        onClick: () => {},
      },
      content: <CreateStoreStep />,
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
      title: "Criar produtos",
      description: "Crie os produtos do catálogo da sua loja",
      content: <CreateProductsStep />,
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
      title: "Ativar integrações (opcional)",
      description:
        "Caso você já tenha uma loja virtual, você já pode ativar integrações de diversos parceiros em sua loja.",
      nextStepAction: {
        label: "Pular passo opcional",
        type: "link",
        onClick: () => {},
      },
      content: (
        <ActivateIntegrationsStep
          onOpenModal={handleOpenModal}
          onCloseModal={handleCloseModal}
          onIntegrationClick={handleIntegrationClick}
        />
      ),
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
      title: "Finalizar Cadastro",
      description: "Complete seus dados de cadastro",
      nextStepAction: {
        label: "Pular passo opcional",
        type: "link",
        onClick: () => {},
      },
      content: <FinishRegisterStep />,
      actions: [
        {
          label: "Finalizar",
          variant: "secondary",
          icon: <FloppyDiskIcon />,
          onClick: goToDashboard,
        },
      ],
    },
  ];

  const openModalWithHeader = (name: string) => {
    setHeaderName(name);
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <RightSidebar
          apiKey="4654ad6-aw54daa654d6a-w54dwaaa"
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleLogin}
          headerName={headerName}
        />
      )}

      <MainSection
        title="Passo a passo"
        description="Siga o passo a passo para lançar sua loja"
      >
        <Steps
          steps={steps}
          activeStep={activeStep}
          onStepChange={setActiveStep}
        >
          <p>Teste</p>
        </Steps>
      </MainSection>
    </>
  );
};

CriarLoja.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CriarLoja;
