// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait for page content to load before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // or 'auto'
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
