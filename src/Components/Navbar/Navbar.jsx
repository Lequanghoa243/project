import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.png';
import { links } from '../../datahome';
import { FaUserLarge } from 'react-icons/fa6';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isNavShowing, setIsNavShowing] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { customer } = authState;

  const handleLogout = async () => {
   
        localStorage.clear();
        sessionStorage.clear();
        navigate('/'); 
        window.location.reload();
    
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest('.userbtn') &&
        !event.target.closest('.dropdown-content')
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className="container nav_container">
        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <IoMdClose /> : <FaBars />}
        </button>

        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={logo} alt="Nav Logo" />
        </Link>

        <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_Nav'}`}>
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? 'active-nav' : ''
                }
                onClick={() => setIsNavShowing((prev) => !prev)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {customer ? (
        <div className='userdropmenu'>
          <button
            className="userbtn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <p>
              <FaUserLarge className='iconuser' /> {customer.firstname} {customer.lastname}
            </p>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <li><a class="dropdown-item" href="/user">Profile</a></li>
              <li>
                <button className="dropdown-item" onClick={handleLogout}>
              Logout  
                </button>
              </li>
            </div>
          )}
        </div>
      ) : (
          <Link to="/Login" className="login_button">
            <p>Login/Sign Up</p>
          </Link>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </nav>
  );
};

export default Navbar;
