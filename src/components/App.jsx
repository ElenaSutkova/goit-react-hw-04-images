import React, { useState, useEffect, useCallback } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [hasMoreImages, setHasMoreImages] = useState(true);

  const fetchImages = useCallback(() => {
    const API_KEY = '40450680-17c279c7abde5535240169683';
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&per_page=${perPage}`;

    setIsLoading(true);

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const receivedImages = data.hits || [];
        if (receivedImages.length < perPage) {
          setHasMoreImages(false)
        }
        setImages((prevImages) => [...prevImages, ...receivedImages])
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        setIsLoading(false)
      });
  }, [query, page, perPage]);

  useEffect(() => {
    if (query) {
      fetchImages()
    }
  }, [query, fetchImages]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery)
    setImages([])
    setPage(1)
    setHasMoreImages(true)
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  };

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setShowModal(true)
  };

  const handleCloseModal = () => {
    setShowModal(false)
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />

      {isLoading ? (
        <Loader />
      ) : (
          images.length > 0 && (
            <ImageGallery 
              images={images.map((image) => ({
                id: image.id,
                src: image.webformatURL,
                srcLarge: image.largeImageURL,
                alt: image.tags,
              }))}
              onImageClick={handleImageClick}
            />
          )
      )}

      {images.length > 0 && !isLoading && hasMoreImages && (
        <Button onClick={handleLoadMore} />
      )}

      {showModal && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default App;