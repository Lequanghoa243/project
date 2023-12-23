import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Coursecate = () => {
  const location = useLocation();

  return (
    <div className='container coursecate-container'>
      <div className="category-buttons">
        <Link to="/courses" className={`category-button ${location.pathname === '/courses' ? 'active' : ''}`}>
          All Course
        </Link>
        <Link to="/courses/UI-UX" className={`category-button ${location.pathname === '/courses/UI-UX' ? 'active' : ''}`}>
          UI/UX
        </Link>
        <Link to="/courses/Business-Analysis" className={`category-button ${location.pathname === '/courses/Business-Analysis' ? 'active' : ''}`}>
          Business Analysis
        </Link>
        <Link to="/courses/Data-Analysis" className={`category-button ${location.pathname === '/courses/Data-Analysis' ? 'active' : ''}`}>
          Data Analysis
        </Link>
        <Link to="/courses/Front-End" className={`category-button ${location.pathname === '/courses/Front-End' ? 'active' : ''}`}>
          Front-End
        </Link>
        <Link to="/courses/Back-End" className={`category-button ${location.pathname === '/courses/Back-End' ? 'active' : ''}`}>
          Back-End
        </Link>
      </div>
    </div>
  );
};

export default Coursecate;
