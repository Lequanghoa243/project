import React, { useEffect } from 'react';
import "./User.css";
import avatar from "../../Images/account.png";
import { Link } from 'react-router-dom';
import { getUserCourse } from '../../Feature/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth.createdUser);

  const getCourseList = () => {
    dispatch(getUserCourse());
  };

  useEffect(() => {
    getCourseList();
  }, []);

  if (!userState) {
    return <p>Loading...</p>;
  }

  const createdAtDateString = userState.createdAt;
  const createdAtDate = new Date(createdAtDateString);
  const currentDate = new Date();
  
  const timeDifference = currentDate - createdAtDate;
  
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
  console.log(`Being a student for ${daysDifference} days ago`);
  

  const user = userState.courselist || [];
  return (
    <section>
      <div className='container usercontainer'>
        <div className='backgroundprofile'></div>
        <div className='headerprofile'>
          <div className="avatarprofie">
            <img src={avatar} alt='infor Image' />
          </div>
          <div className='nameuser'><h2>{userState.firstname} {userState.lastname}</h2></div>
        </div>

        <div className='proilecontent'>
          <div className='profileuser'>
            <h2>Profile</h2>
            <div className='userinfor'>
              <p>Being a student for {daysDifference} days ago</p>
              <p>Email: {userState.email} </p>
            </div>
          </div>
          <div className='usercourse'>
            <h2>Your Courses</h2>
            <div className="usercourseinfo">
              {user.map((course) => (
                <Link to={`/courses/${course._id}`} key={course._id}>
                  <img src={course.images[0].url} alt='imgcourse' className="courseimg" />
                  <div className="text-column">
                    <h4>{course.title}</h4>
                    <p>{course.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
