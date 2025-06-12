import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set for accessibility

const ETSKMushaShowcase = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Static image JSON data (locally defined)
  const galleryImages = [
    { id: 1, url: "https://i0.wp.com/etsk.org/wp-content/uploads/2018/03/img_0068-1.jpg", alt: "Class Rooms" },
    { id: 2, url: "https://i0.wp.com/etsk.org/wp-content/uploads/2017/06/img_6102.jpg", alt: "Volley Ball" },
    { id: 3, url: "https://i0.wp.com/etsk.org/wp-content/uploads/2018/03/img_0069-1.jpg", alt: "Computer Labs " },
    { id: 5, url: "https://i0.wp.com/etsk.org/wp-content/uploads/2020/05/12.jpg", alt: "Outdoor project" },
  ];

  return (  
    <div className='max-w-screen-xl w-fit m-auto'>
          <section className="bg-white py-20 px-4 md:px-12 m-auto ">
      {/* Info Section */}
      <div className="flex flex-col md:flex-row items-center  gap-10 mb-16 h-fit">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-xl font-bold text-primary border-b-4 border-primary w-fit pb-1">
            ETSK Musha – Where Dreams Take Shape
          </h2>
          <p className="text-gray-700 ">
            ETSK Musha isn't just a school — it's a space of transformation. From hands-on technical training to creative problem solving, our students grow with purpose.
          </p>
          <p className="text-gray-600">
            Through your support and the dedication of our mentors, every project becomes a story of resilience and brilliance.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src='https://etsk.org/wp-content/uploads/2017/05/dsc_0331.jpg'
            className="w-full h-[350px] bg-cover bg-center  shadow-lg"
          />
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map(img => (
          <img
            key={img.id}
            src={img.url}
            alt={img.alt}
            className="w-full h-[250px] object-cover rounded-lg shadow cursor-pointer hover:scale-105 transition-transform"
            onClick={() => {
              setSelectedImage(img.url);
              setModalIsOpen(true);
            }}
          />
        ))}
      </div>

      {/* Modal Preview */}
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
    </div>
  );
};

export default ETSKMushaShowcase;
