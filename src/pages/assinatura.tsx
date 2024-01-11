import MainSection from '@/components/MainSection';
import DashboardLayout from '@/layouts/DashboardLayout';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { XCircle } from 'phosphor-react';
import { ReactElement, useState } from 'react';
import { toast } from 'react-toastify';
import { NextPageWithLayout } from './_app';
import CurrentSignature from '@/components/CurrentSignature';
import Switcher from '@/components/Switcher';
import Card from '@/components/Card';
import CardA from '@/components/CardA';
import CardM from '@/components/CardM';
import CardS from '@/components/CardS';
import styles from './assinatura.styles.module.scss';
const Assinatura: NextPageWithLayout = () => {
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
      title="Assinatura"
      description="Visualize e modifique sua assinatura atual"
    >
      <CurrentSignature />
      <Switcher />
      <div className={styles.card}>
        <Card />
        <CardA />
        <CardS />
        <CardM />
      </div>
      <div className={styles.cancel}>
        <label className={styles.label}>CANCELAR ASSINATURA</label>
      </div>
    </MainSection>
  );
};

Assinatura.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Assinatura;
