import React, { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    <div key={index} style={{ backgroundColor: 'white', padding: '8px' }}>
      {option.name}<br />

    </div>
  );

  return (
    <div className='container search-container'>
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
  );
}

export default SearchBar;
