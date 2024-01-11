import MainSection from '@/components/MainSectionCupons';

import DashboardLayout from '@/layouts/DashboardLayout';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { XCircle } from 'phosphor-react';
import { ReactElement, useState } from 'react';
import { toast } from 'react-toastify';
import { NextPageWithLayout } from './_app';

const Cupons: NextPageWithLayout = () => {
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
      title="Cupons"
      description="Crie, altere e edite os cupons da sua loja"
    ></MainSection>
  );
};

Cupons.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Cupons;
