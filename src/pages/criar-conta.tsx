import Button from '@/components/Buttons/Button';
import Input from '@/components/Inputs/Input';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { XCircle } from 'phosphor-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from '../styles/CriarConta.module.scss';

export default function CriarConta() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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
        <div className={styles.Container}>
            <div className={styles.LoginContainer}>
                <div className={styles.Login}>
                    <div className={styles['input-container']}>
                        <p className={styles.title}>Criar conta</p>
                        <p className={styles.subtitle}>
                            Preencha abaixo para criar conta
                        </p>

                        <Input
                            id="nome"
                            label="Seu nome"
                            className={styles.field}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Input
                            id="email"
                            label="Email"
                            className={styles.field}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            id="password"
                            label="Senha"
                            className={styles.field}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Input
                            id="confirm-password"
                            label="Confirmar senha"
                            className={styles.field}
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <Button
                            label="Criar conta"
                            variant="secondary"
                            className={styles.button}
                            isLoading={isLoading}
                            onClick={handleLogin}
                        />
                    </div>

                    <div className={styles.sign}>
                        <p className={styles.signNew}>
                            Ainda não tem uma conta?{' '}
                        </p>
                        <Link href="/criar-conta" className={styles.create}>
                            Criar
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.ImageContainer}>
                <img className={styles.logo} src="/logoBeasy.svg" alt="logo" />
                <div className={styles.Social}>
                    <img src="facebook.svg" alt="facebook" />
                    <img src="instagram.svg" alt="instagram" />
                    <img src="twitter.svg" alt="twitter" />
                </div>
            </div>
        </div>
    );
}
