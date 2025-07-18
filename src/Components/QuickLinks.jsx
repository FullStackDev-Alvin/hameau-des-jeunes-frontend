import React from 'react';
import { FaBlog, FaImage, FaEnvelope, FaInfoCircle } from 'react-icons/fa';

const links = [
  { title: 'Blogs', url: '/Blogs', description: 'Read our latest articles', icon: <FaBlog className="w-6 h-6" /> },
  { title: 'Gallery', url: '/Gallery', description: 'View our photo gallery', icon: <FaImage className="w-6 h-6" /> },
];

const QuickLinks = () => {
  return (
    <div className="p-8 bg-white rounded-lg max-w-screen-xl m-auto my-14 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-primary">Quick Links</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-[200px]">
        {links.map(({ title, url, description, icon }) => (
          <a
            key={title}
            href={url}
            className="flex items-center block p-5 bg-secondary rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className='flex flex-col gap-[20px]'>
                <div className="mr-3 text-primary">{icon}</div>
                <div>
                    <h3 className="text-lg font-semibold mb-1">{title}</h3>
                    {description && <p className="text-gray-600 text-sm">{description}</p>}
                </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
