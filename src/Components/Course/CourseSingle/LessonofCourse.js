import React, { useState, useEffect } from 'react';
import { getAllLesson } from '../../../Feature/course/courseSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { BsPlayCircle } from 'react-icons/bs';
import { PrivateRoute } from '../../../routes/privateRoute';


function LessonofCourse( courseId ) {
  const id = useParams();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  const courseState = useSelector(state => state.course.lesson);
  useEffect(() => {
    dispatch(getAllLesson(id.id));
  }, [dispatch, id]);


 
const lesson = courseState || [];

  return (
    <div className='courselesson_container'>
      <h2>Course Lessons</h2>
      <ul className= 'lessoncard'>
        {lesson.map((lesson) => (
          <div className='lessoncolumn'>
         
        <NavLink  to={authState?.customer == null ? "/login":`/lesson/${lesson._id}`} className='lessonlist'>
        <div  className='playicon'><BsPlayCircle/></div>
        <h3>{lesson.title}</h3> 
        <small>{lesson.description} </small>
        </NavLink>
          </div>
        ))}
      </ul>
      
    </div>
  );
}

export default LessonofCourse;

