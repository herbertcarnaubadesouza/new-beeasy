import MainSection from "@/components/MainSectionCreate";
import Steps, { StepData } from "@/components/StepsProducts";
import DashboardLayout from "@/layouts/DashboardLayout";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Sidebar, XCircle } from "phosphor-react";
import { ReactElement, useState } from "react";
import { toast } from "react-toastify";
import { NextPageWithLayout } from "./_app";
import FloppyDiskIcon from "@/Icons/FloppyDiskIcon";
import DeleteAccount from "@/components/Steps/Myaccount/DeleteAccount";
import ChooseProduct from "@/components/StepsProducts/ChooseProduct";
import ImageSelect from "@/components/StepsProducts/ImageSelect";
import TextStep from "@/components/StepsProducts/TextStep";
import LayerStep from "@/components/StepsProducts/LayerStep";
import PlusIcon from "@/Icons/PlusIcon";
import RightSidebar2 from "@/components/RightSidebar/ProductSidebar";

const CriarLoja: NextPageWithLayout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goToNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  // Function to go to the previous step
  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
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
          onClick: goToPreviousStep,
        },
        {
          label: "Próximo",
          variant: "secondary",
          icon: <FloppyDiskIcon />,
          onClick: goToNextStep,
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
        },
        {
          label: "Próximo",
          variant: "secondary",

          icon: <FloppyDiskIcon />,
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
        },
        {
          label: "Próximo",
          variant: "secondary",

          icon: <FloppyDiskIcon />,
        },
      ],
    },
    {
      id: "finish-register",
      title: "Camadas",
      description: "Altere, edite ou remova uma camada",

      content: <LayerStep />,
      actions: [
        {
          label: "Cancelar",
          variant: "primary",
        },
        {
          label: "Adicionar Produto",
          variant: "secondary",
          icon: <FloppyDiskIcon />,
          onClick: handleOpenModal,
        },
      ],
    },
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
        <Steps steps={steps}>
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
