// Course.js
import React, { useEffect, useState } from 'react';
import CoursesByCategory from './CoursesByCategory';
import './Course.css';
import Footer from '../Home/Footer';
import SearchBar from './search';
import Coursecate from './Coursecate';
import { useDispatch, useSelector } from 'react-redux';
import { getCourse } from '../../Feature/course/courseSlice';
import { getCategory } from '../../Feature/category/categorySlice';

const Course = () => {
  const dispatch = useDispatch();
  const courseState = useSelector((state) => state.course.course);
  const categoryState = useSelector((state) => state.category.category);

  const getAllCourse = () => {
    dispatch(getCourse());
    dispatch(getCategory());
  };

  useEffect(() => {
    getAllCourse();
  }, []);

  useEffect(() => {
    console.log('categoryState:', categoryState);
  }, [categoryState]);

  if (!Array.isArray(categoryState)) {
    console.error('categoryState is not an array:', categoryState);
    return null;
  }

  return (
    <>
      <div className="container small-navbar">
        <Coursecate />
        <SearchBar />
      </div>

      <div className="content-category">
        {categoryState.map((category) => (
          <CoursesByCategory key={category._id} data={courseState} category={category.title} />
        ))}
      </div>

      {/* Additional components or content can be added here */}
    </>
  );
};

export default Course;
