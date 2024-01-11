import React, { useState, ReactElement } from 'react';
import MainSection from '@/components/MainSection';
import Steps, { StepData } from '@/components/StepsCupom';
import DashboardLayout from '@/layouts/DashboardLayout';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { XCircle } from 'phosphor-react';
import { toast } from 'react-toastify';
import FloppyDiskIcon from '@/Icons/FloppyDiskIcon';
import Dadosfiscais from '@/components/StepsCupom/AddCupom';
import Modal from '@/components/Modal';
import { NextPageWithLayout } from './_app';

const CriarLoja: NextPageWithLayout = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    // ... existing login handling logic
  };

  const steps: StepData[] = [
    {
      id: 'create-store',
      title: 'Cupom',
      description: 'Insira os dados abaixo do novo cupom',
      content: <Dadosfiscais setModalOpen={setModalOpen} />, // Passing setModalOpen to Dadosfiscais if needed
      actions: [
        {
          label: 'Cancelar',
          // Add any additional logic if required for the Cancel button
        },
        {
          label: 'Adicionar',
          variant: 'secondary',
          icon: <FloppyDiskIcon />,
          onClick: () => setModalOpen(true), // Open modal on click
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
