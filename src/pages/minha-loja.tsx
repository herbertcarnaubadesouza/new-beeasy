import MainSection from '@/components/MainSection';
import Steps, { StepData } from '@/components/StepsMystore';
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
import Dadosiniciais from '@/components/Steps/MyStore/Dadosiniciais';
import ColorStore from '@/components/Steps/MyStore/ColorStore';
import BannerImage from '@/components/Steps/MyStore/BannerImage';
import SocialMidia from '@/components/StepsCupom/MyStore/SocialMidia';
const steps: StepData[] = [
  {
    id: 'create-store',
    title: 'Dados iniciais',
    description: 'Customize sua loja',

    content: <Dadosiniciais />,
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
    title: 'Cores da loja',
    description: 'Customize sua loja',
    content: <ColorStore />,
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
    title: 'Imagem da capa',
    description: 'Customize sua loja',

    content: <BannerImage />,
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
    title: 'Redes Sociais',
    description: 'Customize sua loja',

    content: <SocialMidia />,
    actions: [
      {
        label: 'Cancelar',
        variant: 'primary',
      },
      {
        label: 'Salvar',
        variant: 'secondary',
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
      title="Minha Loja"
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
