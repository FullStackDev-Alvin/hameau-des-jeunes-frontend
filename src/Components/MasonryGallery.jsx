import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const categories = ['hameau', 'etsk', 'staff','school life','educators','events','All'];

export default function MasonryGallery() {
  const [images, setImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  const fetchImages = async (category) => {
    try {
      setLoading(true);
      const endpoint =
        category === 'All'
          ? 'https://hameau-des-jeunes-backend.onrender.com/images'
          : `https://hameau-des-jeunes-backend.onrender.com/images/category/${category.toLowerCase()}`;
      const res = await axios.get(endpoint);
      setImages(res.data);
    } catch (err) {
      console.error('Error fetching images:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(activeCategory);
  }, [activeCategory]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Gallery</h2>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeCategory === category
                ? 'bg-blue-600 text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loading Animation */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin" />
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img.url}
              alt={`Gallery ${i}`}
              className="w-full rounded cursor-pointer hover:opacity-90 transition"
              onClick={() => {
                setSelectedImage(img.url);
                setModalIsOpen(true);
              }}
            />
          ))}
        </Masonry>
      )}

      {/* Modal */}
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
