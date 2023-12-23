
// CoursesByCategory.js
import React from 'react';
import Card from '../Card/Card';
import { Link, useLocation } from 'react-router-dom';
import { IoTimeOutline } from 'react-icons/io5';
import { CiVideoOn } from 'react-icons/ci';
import ReactStars from 'react-stars';
import { useDispatch, useSelector } from 'react-redux';



const CoursesByCategory = ({ data, category }) => {

  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return null;
  }
  const coursesForCategory = data.filter(course => course.category === category);

  if (!Array.isArray(coursesForCategory) || coursesForCategory.length === 0) {
    return (
      <section className='Courses'>
        <div className='listcourse'>
          <div className='container courses_container'>
            <h1>{category} Courses</h1>
            <p>No courses available for this category.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='Courses'>
      <div className='listcourse'>
        <div className='container courses_container'>
          <h1>{category} Courses</h1>
          <div className='courses_wrapper'>
            {coursesForCategory.map(({ _id, images, totalrating, title, description, NumberofLesson, learningTime }) => (
              <Card className="courses_course" key={_id}>
                <Link to={`/courses/${_id}`}>
                  <img src={images.length > 0 ? images[0].url : ''} alt={`Course: ${title}`} className="course-image" />
                </Link>
                <div className="star-icon">
                  <ReactStars
                    count={5}
                    value={totalrating}
                    edit={false}
                    size={24}
                    color2={'#ffd700'}
                  />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                <span>
                  <CiVideoOn /> {NumberofLesson} Lesson
                </span>
                <span>
                  <IoTimeOutline /> {learningTime}
                </span>
                <div className='empty'>border</div>
                <Link to={`/courses/${_id}`} className='Learning_button'>
                  Enroll Now
                </Link>
                <big>Free</big>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesByCategory;
