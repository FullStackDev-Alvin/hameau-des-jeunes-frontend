import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

// Reusable Line Dot Component
const LineDot = ({ isActive, onClick }) => (
  <button
    onClick={onClick}
    aria-label="carousel line"
    className={`w-12 h-2 rounded-lg focus:outline-none cursor-pointer relative transition-all duration-300 ${isActive ? 'bg-[var(--color-primary)] scale-150' : 'bg-[var(--color-secondary)]'}`}
  >
    <span className={`block h-full transition-all duration-300 ${isActive ? 'scale-150' : 'scale-100'}`}></span>
  </button>
);

// Blog Modal Component
const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-3xl w-full p-6 shadow-xl relative animate-fade-in-up">

        <img
          src={blog.media}
          alt={blog.title}
          className="w-full h-60 object-cover rounded mb-4"
        />
        <div className='flex flex-row justify-between'>
          <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-2">{blog.title}</h2>
          <button
            onClick={onClose}
            className="text-primary hover:text-bg hover:bg-primary hover:shadow-xl hover:cursor-pointer transition-all text-lg border-2 border-primary w-[10px] h-[10px] flex justify-center items-center p-4  rounded-full"
          >
            ×
          </button>
        </div>
        <p className="text-gray-700 whitespace-pre-line mb-4">{blog.content}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaCalendarAlt />
          {new Date(blog.createdAt).toLocaleDateString()}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [activeBlog, setActiveBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('https://hameau-des-jeunes-backend.vercel.app/blogs');
      const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setCarouselData(sorted.slice(0, 4)); // Only last 4
    };
    fetchBlogs();
  }, []);

  const length = carouselData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [length]);

  if (length === 0) return null;

  return (
    <div className="mx-auto mb-16 w-full select-none">
      <div className="bg-white overflow-hidden flex flex-col justify-center md:flex-row h-auto md:h-[520px]">
        {/* Image Section */}
        <div className="md:w-7/12 w-full h-64 md:h-auto overflow-hidden relative group">
          {carouselData.map((slide, index) => (
            <img
              key={index}
              src={slide.imageUrl}
              alt={slide.title}
              className={`
                object-cover w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-[1300ms] ease-in-out
                ${index === current ? 'opacity-100 z-10 scale-105' : 'z-0 scale-100'}
              `}
              loading="lazy"
              style={{ objectPosition: 'center' }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        </div>

        {/* Text Section */}
        <div className="md:w-[40%] w-full p-10 flex flex-col justify-end space-y-8 bg-white">
          <h2 className="text-2xl font-semibold text-[var(--color-primary)] tracking-wide drop-shadow-lg">
            {carouselData[current].title}
          </h2>
          <p className="text-lg text-[var(--color-text)] leading-relaxed max-w-md">
            {carouselData[current].content.length > 150
              ? carouselData[current].content.slice(0, 150) + '...'
              : carouselData[current].content}
          </p>

          <div className="flex items-center justify-between max-w-md">
            <div className="flex items-center space-x-3 text-[var(--color-primary)] font-semibold text-sm gap-[10px]">
              <FaCalendarAlt className="w-5 h-5" />
              {new Date(carouselData[current].createdAt).toLocaleDateString()}
            </div>
            <button
              onClick={() => setActiveBlog(carouselData[current])}
              className="relative group inline-block bg-[var(--color-primary)] py-3 px-8 rounded-full font-bold text-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-500"
            >
              <span className="relative z-10">View</span>
              <span
                className="absolute inset-0 bg-primary rounded-full opacity-75 scale-95 group-hover:scale-110 transition-transform duration-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-5 mt-10">
        {carouselData.map((_, index) => (
          <LineDot key={index} isActive={index === current} onClick={() => setCurrent(index)} />
        ))}
      </div>

      {/* Modal */}
      {activeBlog && <BlogModal blog={activeBlog} onClose={() => setActiveBlog(null)} />}
    </div>
  );
};

export default Carousel;
