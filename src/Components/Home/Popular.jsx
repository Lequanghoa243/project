import React , { useEffect, useState }from 'react';
import { courses } from '../../data';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { IoTimeOutline } from 'react-icons/io5';
import { CiVideoOn } from 'react-icons/ci';
import ReactStars from 'react-stars';
import { useDispatch, useSelector } from 'react-redux';
import { getCourse } from '../../Feature/course/courseSlice';


const Popular = () => {
  const { popularcourse} = courses;
  const dispatch = useDispatch();
  const courseState = useSelector((state) => state.course.course);
  const getAllCourse = () => {
    dispatch(getCourse());
  };

  useEffect(() => {
    getAllCourse();
  }, []);

  const course = courseState || [];

  if (!Array.isArray(course)) {
    console.error('course is not an array:', course);
    return null;
  }
  const sortedCourses = [...course].sort((a, b) => b.totalrating - a.totalrating);

  const topCourses = sortedCourses.slice(0, 6);
  if (!Array.isArray(topCourses)) {
    console.error('topCourses is not an array:', topCourses);
    return null;
  }
 
 
  return (
    <section className='courses'>
      <div className='container courses_container'>
        <h1>Popular Course</h1>
        <div className='courses_wrapper'>
          {topCourses.map(({ _id, images, totalrating, title, description, NumberofLesson, learningTime }) => {
            return (
              <Card className="courses_course" key={_id}>
                <Link to ={`/courses/${_id}`} >
                <img src={images.length > 0 ? images[0].url : ''} alt={`Course: ${title}`} className="course-image" /></Link>
                <div className="star-icon">
                <ReactStars
  count={5}
  value={totalrating}
  edit={false}
  size={24}
  color2={'#ffd700'} />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                <span>
                  <CiVideoOn /> {NumberofLesson} Lesson
                  </span>
                  <span>
                  <IoTimeOutline />{learningTime}
                </span>
                <div className='empty'>border</div>
                <Link to= {`/courses/${_id} `} className='Learning_button'>
                  Enroll Now
                </Link>
                <big>Free</big>
              </Card>
            );
          })}
        </div>
        <Link to ='/courses' className='Explore'>Explore all Courses</Link>
      </div>
    </section>
  );
};

export default Popular