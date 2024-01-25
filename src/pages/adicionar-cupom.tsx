import FloppyDiskIcon from "@/Icons/FloppyDiskIcon";
import MainSection from "@/components/MainSection";
import Modal from "@/components/Modal";
import Steps, { StepData } from "@/components/StepsCupom";
import Dadosfiscais from "@/components/StepsCupom/AddCupom";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { NextPageWithLayout } from "./_app";

const CriarLoja: NextPageWithLayout = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    // ... existing login handling logic
  };

  const handleCreateCoupom = async () => {
    const Cupomname = localStorage.getItem("Cupomname");
    const CupomType = localStorage.getItem("CupomType");
    const razaoSocial = localStorage.getItem("razaoSocial");

    if (Cupomname && CupomType && razaoSocial) {
      const coupomData = {
        name: Cupomname,
        type: CupomType,
        value: razaoSocial,
        count: 0,
      };

      console.log(coupomData);

      try {
        const response = await fetch("/api/create-coupom", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(coupomData),
        });

        if (response.ok) {
          console.log("Cupom criado com sucesso!");
          alert("Cupom criado com sucesso!");
          setModalOpen(false);
        } else {
          console.error("Erro ao criar o cupom:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao criar o cupom:", error);
      }
    } else {
      console.error("Dados do cupom não encontrados no localStorage");
    }
  };

  const steps: StepData[] = [
    {
      id: "create-store",
      title: "Cupom",
      description: "Insira os dados abaixo do novo cupom",
      content: <Dadosfiscais setModalOpen={setModalOpen} />,
      actions: [
        {
          label: "Cancelar",
        },
        {
          label: "Adicionar",
          variant: "secondary",
          icon: <FloppyDiskIcon />,
          onClick: () => handleCreateCoupom(), // Open modal on click
        },
      ],
    },
  ];

  return (
    <MainSection title="Adicionar Cupom">
      <Steps steps={steps}>
        <p>Teste</p>
      </Steps>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <></> {/* Empty fragment as children */}
      </Modal>
    </MainSection>
  );
};

CriarLoja.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CriarLoja;
