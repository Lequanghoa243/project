import React from 'react'
import { Link } from 'react-router-dom';
import headerimg from '../../Images/header.png';

const Header = () => {
  return (
   <header className='main_header'>
    <div className='container main_header-container'>
        <div className='main_header-left'>
            <h4>#100DaysChallenge</h4>
            <h1>
             Unlock your 
             <br></br>learning potential
            </h1>
            <p>
            Discover job opportunities tailored to your skills and interests. We always stay updated with the latest trends and insights in the job market.
            </p>
            <Link to ='/Login' className='login_button'> Join for Free</Link>
        </div>
        <div className='main_header-right'>
        <div className='main_header-image'>
            <img src={headerimg} alt ='Main Header Image'/>
        </div>
        </div>
        
    </div>
   </header>
  )
}

export default Header