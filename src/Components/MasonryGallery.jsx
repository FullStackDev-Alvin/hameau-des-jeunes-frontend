import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // or your app's root div

export default function MasonryGallery() {
  const [images, setImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get('https://hameau-des-jeunes-backend.onrender.com/images'); // Update this with your actual route
        setImages(res.data);
        console.log(res.data) // assume res.data is an array of image URLs
      } catch (err) {
        console.error('Error fetching images:', err);
      }
    };
    fetchImages();
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Gallery</h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((url, i) => (
          <img
            key={i}
            src={url.url}
            alt={`Gallery ${i}`}
            className="w-full rounded cursor-pointer hover:opacity-90 transition"
            onClick={() => {
              setSelectedImage(url.url);
              setModalIsOpen(true);
            }}
          />
        ))}
      </Masonry>

<Modal
  isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  contentLabel="Image Preview"
  style={{
    content: {
      background: 'transparent',
      padding: '0',
      border: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'visible',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 1000,
    },
  }}
>
  <div className="relative inline-block">
    <button
      onClick={() => setModalIsOpen(false)}
      className="absolute -top-3 -right-3 bg-white text-black px-2 py-1 text-sm rounded-full shadow-md z-10"
    >
      ✕
    </button>
    <img
      src={selectedImage}
      alt="Full view"
      className="max-w-full max-h-[90vh] h-auto w-auto block"
      onLoad={(e) => {
        const modal = document.querySelector('.ReactModal__Content');
        modal.style.width = `${e.target.naturalWidth}px`;
        modal.style.height = `${e.target.naturalHeight}px`;
      }}
    />
  </div>
</Modal>

    </section>
  );
}
