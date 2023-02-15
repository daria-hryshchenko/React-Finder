import React from 'react';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.module';
import ImageGalleryItem from './../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, onClick }) {
  return (
    <Gallery>
      <ImageGalleryItem images={images} onClickImg={onClick} />
    </Gallery>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
