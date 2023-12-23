import React, { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  const navigate = useNavigate();
  const courseState = useSelector(state => state?.course?.course);
  const [courseOptions, setCourseOptions] = useState([]);

  useEffect(() => {
    if (Array.isArray(courseState)) {
      const options = courseState.map(course => ({
        id: course._id,
        course: course._id,
        name: course.title,
      }));
      setCourseOptions(options);
    }
  }, [courseState]);

  const renderMenuItemChildren = (option, props, index) => (
    <div
      key={index}
      style={{
        backgroundColor: '#FFF',
        padding: '18px',
        boxShadow: '2px 2px 4px 2px rgba(38, 45, 118, 0.08)',
        cursor: 'pointer', 
        zIndex:'3000'
      }}
      > <p className="typeahead-option"> {option.name }</p>
      
    </div>
  );
  

  return (
    <div className='container search-container'>
      <div className='search-item'>
      <span className='search-icon' >
      <HiMiniMagnifyingGlass />
      </span>
      <Typeahead
        id="pagination-example"
        onChange={(selected) => {
          navigate(`/courses/${selected[0]?.course}`);
        }}
        options={courseOptions}
        labelKey="name"
        placeholder="Search for Courses here ...."
        minLength={1}
        renderMenuItemChildren={renderMenuItemChildren}
      />
      </div>
    </div>
  );
}

export default SearchBar;
