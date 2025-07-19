import React from 'react';
import { Helmet } from 'react-helmet';
import MasonryGallery from '../Components/MasonryGallery';

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Hameau des Jeunes - ETSK Musha School</title>
        <meta
          name="description"
          content="Explore the photo gallery of Hameau des Jeunes showcasing youth activities and projects at ETSK Musha School."
        />
        <meta
          name="keywords"
          content="gallery, hameau des jeunes, etsk musha, youth projects, photos"
        />
        <link rel="canonical" href="https://yourdomain.com/gallery" />
      </Helmet>

      <div>
        <MasonryGallery />
      </div>
    </>
  );
};

export default Gallery;
