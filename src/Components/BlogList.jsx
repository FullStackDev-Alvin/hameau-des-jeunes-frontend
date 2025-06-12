import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';

export default function BlogRows() {
  const [rows, setRows] = useState([[], [], []]);
  const containerRef = useRef(null);
  const [selectedBlog, setSelectedBlog] = useState(null);


  // Fetch and chunk blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('https://hameau-des-jeunes-backend.onrender.com/blogs');
      const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      const chunked = [[], [], []];
      sorted.forEach((blog, index) => {
        chunked[index % 3].push(blog);
      });
      setRows(chunked);
    };
    fetchBlogs();
  }, []);
  // Auto scroll every 5s and loop to top
useEffect(() => {
  const interval = setInterval(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollBottom = container.scrollTop + container.clientHeight;
    const isAtBottom = scrollBottom >= container.scrollHeight - 10;

    if (isAtBottom) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ top: 750, behavior: 'smooth' });
    }
  }, 8000);

  return () => clearInterval(interval);
}, []);




  const scrollContent = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const amount = 750;
    container.scrollBy({
      top: direction === 'up' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full max-w-screen-xl m-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Latest Blogs</h2>

      {/* Desktop View */}
      <div className="hidden md:block relative ">
        {/* Scroll Buttons */}
        <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
          <button
            onClick={() => scrollContent('up')}
            className="bg-gray-300 hover:bg-primary hover:text-bg transition-all p-2 rounded-full"
          >
            <FaChevronUp />
          </button>
          <button
            onClick={() => scrollContent('down')}
            className="bg-gray-300 hover:bg-primary hover:text-bg transition-all p-2 rounded-full"
          >
            <FaChevronDown />
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          className="max-h-[700px] overflow-hidden scroll-smooth no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="grid grid-cols-3 gap-4">
            {rows.map((row, idx) => (
              <div key={idx} className="flex flex-col gap-[10px]">
                {row.map((blog) => (
                  <div key={blog._id} className="bg-white h-[700px] shadow rounded overflow-hidden">
                    <div
                      style={{ backgroundImage: `url(${blog.imageUrl})` }}
                      className="w-full h-[50%] bg-cover bg-center"
                    ></div>
                    <div className="p-3 flex flex-col gap-[20px]">
                      <h3 className="font-semibold">{blog.title}</h3>
                      <p className="text-sm text-gray-600">{blog.content.slice(0, 500)}...</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <FaCalendarAlt />
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </div>
                        <button
                            onClick={() => setSelectedBlog(blog)}
                            className="bg-primary text-white px-4 py-1 rounded"
                            >
                            View
                        </button>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-4">
        {rows.flat().map((blog) => (
            <div key={blog._id} className="bg-white h-[700px] shadow rounded overflow-hidden">
                <div
                    style={{ backgroundImage: `url(${blog.imageUrl})` }}
                    className="w-full h-[50%] bg-cover bg-center"
                ></div>
                <div className="p-3 flex flex-col gap-[20px]">
                    <h3 className="font-semibold">{blog.title}</h3>
                    <p className="text-sm text-gray-600">{blog.content.slice(0, 500)}...</p>
                    <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <FaCalendarAlt />
                        {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                    <button
                        onClick={() => setSelectedBlog(blog)}
                        className="bg-primary text-white px-4 py-1 rounded"
                        >
                        View
                    </button>

                    </div>
                </div>
            </div>
        ))}
      </div>
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4 ">
            <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg overflow-hidden animate-fade-in-up">
            <div className="h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${selectedBlog.imageUrl})` }}></div>
            <div className="p-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
                <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold">{selectedBlog.title}</h2>
                <button onClick={() => setSelectedBlog(null)} className="text-primary hover:text-bg hover:bg-primary hover:shadow-xl hover:cursor-pointer transition-all text-lg border-2 border-primary w-[10px] h-[10px] flex justify-center items-center p-4  rounded-full">&times;</button>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{selectedBlog.content}</p>
                <div className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                <FaCalendarAlt />
                {new Date(selectedBlog.createdAt).toLocaleDateString()}
                </div>
            </div>
            </div>
        </div>
        )}

    </section>
  );
}
