import React, { useEffect, useCallback } from 'react';
import styles from './Modal.module.css';

const Modal = ({ image, onClose }) => {
    const handleKeyDown = useCallback(
        (evt) => {
            if (evt.code === 'Escape') {
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


    const handleImageClick = useCallback(
        evt => {
            if (evt.target === evt.currentTarget) {
                onClose()
            }
        },
        [onClose]
    )

    return (
        <div className={styles.overlay} onClick={handleImageClick}>
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