// CoursesByCategory.js
import React from 'react';

import { Link } from 'react-router-dom';
import { IoTimeOutline } from 'react-icons/io5';
import { CiVideoOn } from 'react-icons/ci';
import ReactStars from 'react-stars';


const CoursesByCategory = ({ category }) => {

 
  return ( 
<>
    <section className='Courses'>
      <div className='listcourse'> 
      <div className='container courses_container'>
        <h1>{category} Courses</h1>
        <div className='courses_wrapper'>
          {course.map(({ id, imgcourse, rating, title, description, numberOfLessons, learningTime, path }) => {
            return (
              <Card className="courses_course" key={id}>
                <Link to ={`/courses/${id}`} >
                <img src={imgcourse} alt={`Course: ${title}`} className="course-image" /></Link>
                <div className="star-icon">
                  {/* {renderStars(rating)} */}
                  <ReactStars
                count={5}
                value={rating}
                edit={false}
                size={24}
                color2={'#ffd700'} />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                <span>
                  <CiVideoOn /> {numberOfLessons} Lesson
                </span>
                <span>
                  <IoTimeOutline /> {learningTime}
                </span>
                <div className='empty'>border</div>
                <Link to= {`/courses/${id} `}  className='Learning_button'>
                  Enroll Now
                </Link>
                <big>Free</big>
              </Card>
            );
          })}
        </div>
      </div>
      </div>
    </section>
    </>
  );
};



export default CoursesByCategory;

