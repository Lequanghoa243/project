
import { Link, useLocation } from 'react-router-dom';
import './Coursesingle.css';
import { BsSortUpAlt, BsPlayCircle, BsClock } from 'react-icons/bs';
import LessonofCourse from './LessonofCourse';
import CourseRate from './CourseRate';
import ReactStars from 'react-stars';
import React, { useState, useEffect } from 'react';
import { enrollCourse, getAllLesson } from '../../../Feature/course/courseSlice';
import { useDispatch, useSelector } from 'react-redux';

function Courseinfor({ course }) {

  const location = useLocation();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  const courseState = useSelector(state=> state.course.lesson)
  const ratings = useSelector(state=> state.course.course)
  const enrollACourse = (id) =>{
    dispatch(enrollCourse(id))
  }


  if (!course) {
    return <p>Loading...</p>; 
  }


  const { title, totalrating, description, images, _id, NumberofLesson, learningTime } = course;
  console.log(course);

  if (!title || !totalrating || !description || !images || !_id || !NumberofLesson || !learningTime) {
    return <p>Error: Incomplete course data</p>; 
  }

  return (
    <section>
      <div className="container courseinfo_container">
        <div className="courseinformation-left">
          <div className='courseinformation'>
            <h1 className="coursetitleinfor">{title}</h1>
            <big>Free</big>
            <div>
              <div className='containerreviews'>
                <div className='reivewcontent'>
                  <div className='ratingstars'>
                    <ReactStars
                      count={5}
                      value={totalrating}
                      edit={false}
                      size={24}
                      color2={'#ffd700'}
                    />
                    <span><a className='' href='#review' >  {ratings?.ratings?.length} Reviews </a></span>
                  </div>
                </div>
              </div>
            </div>
            <p>{description}</p>
            <ul className="listsentence">
              <li>Understand key course concepts.</li>
              <li>Apply knowledge with hands-on exercises.</li>
              <li>Learn optimization techniques.</li>
              <li>Gain skills in integrating external services.</li>
              <li>Understand the workflow of the subject.</li>
              <li>Engage in a practical project application.</li>
              <li>Learn deployment on platforms like GitHub/GitLab.</li>
            </ul>
          </div>
          <div className='lessonofcoursepart'><LessonofCourse data={_id} /></div>
          <div className='courseratepart'><CourseRate /></div>
        </div>
        <div className="courseinformation-right">
          <div className="cardcourseinfor">
            <div className="backgroundimg">
              <img src={images[0].url} alt={`Course: ${title}`} className="courseimage" />
            </div>
            <div className='icon-list'>
              <li> <BsSortUpAlt className="iconvideo" /> Basic level </li>
              <li> <BsPlayCircle className='iconvideo' /> {NumberofLesson} Lesson{' '}  </li>
              <li> <BsClock className='iconvideo' /> {learningTime}{' '}</li>
            </div>
            <Link
            to={
              authState?.customer == null || !courseState || courseState.length === 0
                ? `/Login`
                : `/lesson/${courseState[0]._id}`
            }
            onClick={(e) => {
              enrollACourse(_id);
            }}
            className="Enrollbtn"
          >
            Enroll Now
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courseinfor;
