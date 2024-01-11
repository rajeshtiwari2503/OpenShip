// YourComponent.js
import React from 'react';
import '@datobs/react-image-magnifiers/lib/style.css';
import { Magnifier, MagnifierContainer } from '@datobs/react-image-magnifiers';

const Magnifier = () => {
//   const smallImageSrc = 'path/to/small-image.jpg';
//   const largeImageSrc = 'path/to/large-image.jpg';

  return (
    <MagnifierContainer>
      <Magnifier
        // imageSrc={largeImageSrc}
        imageAlt="Large Image"
        className="custom-magnifier" // Add your custom styles
      />
    </MagnifierContainer>
  );
};

export default Magnifier;
