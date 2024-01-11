import UserIcon from '@/Icons/UserIcon';
import CardButton from '@/components/Buttons/CardButton';
import styles from './styles.module.scss';

const FinishRegisterStep = () => {
    return (
        <div className={styles['step-wrapper']}>
            <div className={styles['buttons-container']}>
                <CardButton
                    label={'Completar cadastro'}
                    icon={<UserIcon color="#F70293" />}
                />
            </div>
        </div>
    );
};

export default FinishRegisterStep;
