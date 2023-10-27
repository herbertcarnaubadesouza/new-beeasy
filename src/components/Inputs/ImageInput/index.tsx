import CloseIcon from '@/Icons/CloseIcon';
import ImageIcon from '@/Icons/ImageIcon';
import { MouseEvent, useRef, useState } from 'react';
import styles from './styles.module.scss';

const ImageInput = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            const file = files[0];
            previewImage(file);
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            previewImage(file);
        }
    };

    const previewImage = (file: File) => {
        if (!file) {
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            if (typeof reader.result === 'string') {
                setImageSrc(reader.result);
            }
        };
        reader.readAsDataURL(file);
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleClearImage = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        fileInputRef.current?.value && (fileInputRef.current.value = '');
        setImageSrc(null);
    };

    return (
        <div className={styles['input-wrapper']}>
            <div
                className={styles['image-upload-container']}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onClick={handleClick}
                data-has-image={!!imageSrc}
            >
                {imageSrc ? (
                    <>
                        <div className={styles['clear-image']}>
                            <button onClick={handleClearImage}>
                                <CloseIcon color="rgba(64, 64, 73, 0.6)" />
                                <span>Remover imagem</span>
                            </button>
                        </div>
                        <img src={imageSrc} alt="Preview" />
                    </>
                ) : (
                    <ImageIcon color="#F70293" />
                )}
            </div>
            <button onClick={handleClick}>Enviar logo</button>
            <input
                ref={fileInputRef}
                type="file"
                onChange={onChange}
                accept="image/*"
            />
        </div>
    );
};

export default ImageInput;
