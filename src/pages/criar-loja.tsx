import MainSection from '@/components/MainSection';
import Steps, { StepData } from '@/components/Steps';
import DashboardLayout from '@/layouts/DashboardLayout';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { XCircle } from 'phosphor-react';
import { ReactElement, useState } from 'react';
import { toast } from 'react-toastify';
import { NextPageWithLayout } from './_app';
import FloppyDiskIcon from '@/Icons/FloppyDiskIcon';
import ActivateIntegrationsStep from '@/components/Steps/SetupStore/ActivateIntegrationsStep';
import CreateProductsStep from '@/components/Steps/SetupStore/CreateProductsStep';
import CreateStoreStep from '@/components/Steps/SetupStore/CreateStoreStep';
import FinishRegisterStep from '@/components/Steps/SetupStore/FinishRegisterStep';
import { redirect } from 'next/navigation';

const steps: StepData[] = [
  {
    id: 'create-store',
    title: 'Criar loja',
    description: 'Customize sua loja',
    nextStepAction: {
      label: 'Personalizar loja',
      type: 'button',
      onClick: () => {},
    },
    content: <CreateStoreStep />,
    actions: [
      {
        label: 'Cancelar',
      },
      {
        label: 'Salvar',
        variant: 'secondary',
        icon: <FloppyDiskIcon />,
      },
    ],
  },
  {
    id: 'create-products',
    title: 'Criar produtos',
    description: 'Crie os produtos do catálogo da sua loja',
    content: <CreateProductsStep />,
    actions: [
      {
        label: 'Cancelar',
      },
      {
        label: 'Salvar',
        variant: 'secondary',
        disabled: true,
        icon: <FloppyDiskIcon />,
      },
    ],
  },
  {
    id: 'activate-integrations',
    title: 'Ativar integrações (opcional)',
    description:
      'Caso você já tenha uma loja virtual, você já pode ativar integrações de diversos parceiros em sua loja.',
    nextStepAction: {
      label: 'Pular passo opcional',
      type: 'link',
      onClick: () => {},
    },
    content: <ActivateIntegrationsStep />,
    actions: [
      {
        label: 'Cancelar',
      },
      {
        label: 'Salvar',
        variant: 'secondary',
        disabled: true,
        icon: <FloppyDiskIcon />,
      },
    ],
  },
  {
    id: 'finish-register',
    title: 'Finalizar Cadastro',
    description: 'Complete seus dados de cadastro',
    nextStepAction: {
      label: 'Pular passo opcional',
      type: 'link',
      onClick: () => {},
    },
    content: <FinishRegisterStep />,
    actions: [
      {
        label: 'Finalizar',
        variant: 'secondary',
        icon: <FloppyDiskIcon />,
      },
    ],
  },
];

const CriarLoja: NextPageWithLayout = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      toast.error('Usuário ou senha inválidos!', {
        icon: <XCircle size={32} color="#ff3838" weight="fill" />,
      });
      setIsLoading(false);
    } else {
      toast.success('Autenticado com sucesso!', {
        icon: '🎉',
      });
      setIsLoading(false);
      router.push('/admin/dashboard');
    }
  };

  return (
    <MainSection
      title="Passo a passo"
      description="Siga o passo a passo para lançar sua loja"
    >
      <Steps steps={steps}>
        <p>Teste</p>
      </Steps>
    </MainSection>
  );
};

CriarLoja.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CriarLoja;
