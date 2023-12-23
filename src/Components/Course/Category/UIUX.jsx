import React from 'react'
import CoursesByCategory from '../CoursesByCategory';
import Footer from '../../Home/Footer';
import Coursecate from '../Coursecate';
import SearchBar from '../search';

const UIUX = () => {
  return (
    <>
    <div className="container small-navbar">
        <Coursecate />
        <SearchBar />
      </div>
    <CoursesByCategory category="UI/UX"  />
 
    </>
  )
}

export default UIUX