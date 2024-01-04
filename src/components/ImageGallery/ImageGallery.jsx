import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className={styles.list}>
            {images.map((image) => (
                <ImageGalleryItem key={image.id} image={image} onImageClick={onImageClick} />
            ))}
        </ul>
    )
}

export default ImageGallery;