import PropTypes from 'prop-types';

import { GalleryItem, Image } from './ImageGalleryItem.module';

export default function ImageGalleryItem({ images, onClickImg }) {
  return images.map((image, index) => {
    return (
      <GalleryItem key={index}>
        <Image
          src={image.webformatURL}
          alt={image.tags}
          onClick={() => {
            onClickImg(image.largeImageURL);
          }}
        />
      </GalleryItem>
    );
  });
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClickImg: PropTypes.func.isRequired,
};
