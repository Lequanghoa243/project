// Watchpage.js
import React ,{useEffect}from 'react';
import {  useParams } from 'react-router-dom';
import { lessons } from '../../../datalesson';
import LessonofCourse from './LessonofCourse';
import "./Coursesingle.css"
import { getOneLesson } from '../../../Feature/lesson/lessonSlice';
import { useDispatch, useSelector } from 'react-redux';


function Watchpage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const courseState = useSelector(state => state.lesson.lesson);
  useEffect(() => {
    dispatch(getOneLesson(id));
  }, [dispatch, id]);

const lesson = courseState || [];
  return (
    <> <div className='container watchingvideo'>
   
    <div  className='videolesson'>
    <div className='video-container'>
      <iframe className='videoplay'
        title={lesson.title}
        width='880'
        height='515'
        src={lesson.videoURL}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
      ></iframe>
    </div>
    <div className='ListofCoursevideo'>
    <LessonofCourse />
    </div>
    </div>
    <h2>{lesson.title}</h2>
    <small>{lesson.description}</small>
  </div>
  </>
   
  );
}

export default Watchpage;

