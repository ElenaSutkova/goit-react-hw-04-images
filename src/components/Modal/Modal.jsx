import React, { useEffect, useCallback } from 'react';
import styles from './Modal.module.css';

const Modal = ({ image, onClose, onImageClick }) => {
    const handleKeyDown = useCallback(
        (evt) => {
            if (evt.keyCode === 27) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    const handleClose = () => {
        onImageClick(image);
    };

    const handleImageClick = () => {
        onImageClick(image)
    };

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal}>
                <img
                    src={image.srcLarge}
                    alt={image.alt}
                onClick={handleImageClick}/>
            </div>
        </div>
    )
}

export default Modal;