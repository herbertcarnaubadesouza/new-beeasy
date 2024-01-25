import FloppyDiskIcon from "@/Icons/FloppyDiskIcon";
import MainSection from "@/components/MainSectionCreate";
import Steps, { StepData } from "@/components/StepsProducts";
import DashboardLayout from "@/layouts/DashboardLayout";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { XCircle } from "phosphor-react";
import { ReactElement, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { NextPageWithLayout } from "./_app";

import RightSidebar2 from "@/components/RightSidebar/ProductSidebar";
import ChooseProduct from "@/components/StepsProducts/ChooseProduct";
import ImageSelect from "@/components/StepsProducts/ImageSelect";
import TextStep from "@/components/StepsProducts/TextStep";

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

  const handleOpenModal = () => {
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
      title: "Produto",
      description: "Escolha em nosso catálogo os produtos",

      content: <ChooseProduct />,

      actions: [
        {
          label: "Cancelar",
        },
        {
          label: "Próximo",
          variant: "secondary",
          icon: <FloppyDiskIcon />,
          onClick: handleNextStep,
        },
      ],
    },
    {
      id: "create-products",
      title: "Imagem",
      description: "Escolha em nosso catálogo de produtos",
      nextStepAction: {
        label: "Finalizar sem personalização",
        type: "link",
        onClick: () => {},
      },
      content: <ImageSelect />,
      actions: [
        {
          label: "Cancelar",
          onClick: handlePreviousStep,
        },
        {
          label: "Próximo",
          variant: "secondary",
          icon: <FloppyDiskIcon />,
          onClick: handleNextStep,
        },
      ],
    },
    {
      id: "activate-integrations",
      title: "Texto",
      description: "Escolha em nosso catálogo os produtos",

      content: <TextStep />,
      actions: [
        {
          label: "Cancelar",
          onClick: handlePreviousStep,
        },
        {
          label: "Adicionar produto",
          variant: "secondary",
          icon: <FloppyDiskIcon />,
          onClick: handleOpenModal,
        },
      ],
    },
    // {
    //   id: "finish-register",
    //   title: "Camadas",
    //   description: "Altere, edite ou remova uma camada",

    //   content: <LayerStep />,
    //   actions: [
    //     {
    //       label: "Cancelar",
    //       onClick: handlePreviousStep,
    //       variant: "primary",
    //     },
    //     {
    //       label: "Adicionar Produto",
    //       variant: "secondary",
    //       icon: <FloppyDiskIcon />,
    //       onClick: handleOpenModal,
    //     },
    //   ],
    // },
  ];

  return (
    <>
      {isModalOpen && (
        <RightSidebar2
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleLogin}
        />
      )}
      <MainSection title="Criar produto">
        <ToastContainer />
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
