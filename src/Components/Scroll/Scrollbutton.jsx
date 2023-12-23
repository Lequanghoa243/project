// ScrollToTopButton.js
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import './Scroll.css'
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to top when the location changes (e.g., when navigating between routes)
    scrollToTop();
  }, [location]);

  return (
    <button
      id="scrollToTopBtn"
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowUp style={{ fontSize: '30px' , color:'white' }}  />
    </button>
  );
};

export default ScrollToTopButton;
