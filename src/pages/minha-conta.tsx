import MainSection from "@/components/MainSection";
import Steps, { StepData } from "@/components/StepsNew";
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
import Dadosfiscais from "@/components/Steps/Myaccount/Dadosfiscais";
import ChangePassword from "@/components/Steps/Myaccount/ChangePassword";
import Loja from "@/components/Steps/Myaccount/Loja";
import DeleteAccount from "@/components/Steps/Myaccount/DeleteAccount";
import AccountModal from "@/components/Modal/ModalAccount";
const steps: StepData[] = [
  {
    id: "create-store",
    title: "Dados fiscais",
    description: "Mantenha seus dados sempre atualizados",

    content: <Dadosfiscais />,

    actions: [
      {
        label: "Cancelar",
      },
      {
        label: "Salvar",
        variant: "secondary",
        icon: <FloppyDiskIcon />,
      },
    ],
  },
  {
    id: "create-products",
    title: "Loja",
    description: "Altere as informações da sua loja",

    content: <Loja />,
    actions: [
      {
        label: "Cancelar",
      },
      {
        label: "Salvar",
        variant: "secondary",
        disabled: true,
        icon: <FloppyDiskIcon />,
      },
    ],
  },
  {
    id: "activate-integrations",
    title: "Alterar Senha",
    description: "Altere suas informações",

    content: <ChangePassword />,
    actions: [
      {
        label: "Cancelar",
      },
      {
        label: "Salvar",
        variant: "secondary",
        disabled: true,
        icon: <FloppyDiskIcon />,
      },
    ],
  },
  {
    id: "finish-register",
    title: "Excluir conta",
    description: "Cuidado, ao informar sua senha abaixo sua conta será apagada",

    content: <DeleteAccount />,
    actions: [
      {
        label: "Excluir conta",
        variant: "excluir",
      },
      {
        label: "Cancelar",
        variant: "primary",
      },
    ],
  },
];

const CriarLoja: NextPageWithLayout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSave = async () => {
    // Logic to handle save action
    setIsModalOpen(true); // Open the modal
    // Other save logic...
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <MainSection title="Minha Conta">
      <Steps
        steps={steps.map((step) => ({
          ...step,
          actions: step.actions.map((action) =>
            action.label === "Salvar"
              ? { ...action, onClick: handleSave }
              : action
          ),
        }))}
      >
        <p>Teste</p>
      </Steps>
      <AccountModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>Changes saved successfully!</p>
      </AccountModal>
    </MainSection>
  );
};

CriarLoja.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CriarLoja;
