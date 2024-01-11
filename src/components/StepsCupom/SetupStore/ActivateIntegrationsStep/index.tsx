import VideoIcon from '@/Icons/VideoIcon';
import Button from '@/components/Buttons/Button';
import CardButton from '@/components/Buttons/CardButton';
import styles from './styles.module.scss';

const integrations = [
    {
        id: 'integracao-1',
        name: 'Bling',
        imageURL: '/images/integracoes/integracao1.webp',
    },
    {
        id: 'integracao-2',
        name: 'Hotmart',
        imageURL: '/images/integracoes/integracao2.webp',
    },
    {
        id: 'integracao-3',
        name: 'Integração Misteriosa 1',
        imageURL: '/images/integracoes/integracao3.webp',
    },
    {
        id: 'integracao-4',
        name: 'Integração Misteriosa 2',
        imageURL: '/images/integracoes/integracao4.webp',
    },
    {
        id: 'integracao-5',
        name: 'Facebook',
        imageURL: '/images/integracoes/integracao5.webp',
    },
];

const ActivateIntegrationsStep = () => {
    return (
        <div className={styles['step-wrapper']}>
            <div className={styles['buttons-container']}>
                {integrations.map((integration) => (
                    <CardButton
                        key={integration.id}
                        label={integration.name}
                        hideLabel
                        icon={
                            <img
                                src={integration.imageURL}
                                alt={`Ícone ${integration.name}`}
                            />
                        }
                    />
                ))}
            </div>
            <div className={styles['help-container']}>
                <p>Precisa de ajuda?</p>
                <Button
                    label={'Ver videoaula'}
                    icon={<VideoIcon color="#000" />}
                />
            </div>
        </div>
    );
};

export default ActivateIntegrationsStep;
