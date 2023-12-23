// SingleCourse.js
import React ,{useEffect}from 'react';
import { courses } from '../../data';
import { useLocation, useParams } from 'react-router-dom';
import Courseinfor from './CourseSingle/Courseinfor';
import { getCourse, getOneCourse } from '../../Feature/course/courseSlice';
import { useDispatch, useSelector } from 'react-redux';
const Single = () => {
  // const { id } = useParams();

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const courseState = useSelector(state=> state.course.course)

  useEffect(()=>{
    dispatch(getOneCourse(id))
  },[])
  
  const course = courseState


  return (
    <>
      {course ? (
        <div>
          <Courseinfor course={course} />
        </div>
      ) : (
        <p>Course not found</p>
      )}
     
    </>
  );
};

export default Single;
