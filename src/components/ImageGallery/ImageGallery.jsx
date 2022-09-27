import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from 'components/ImageGallery/ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onImgClick }) => {
  return (
      <Gallery onClick={onImgClick}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          );
        })}
      </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGallery;