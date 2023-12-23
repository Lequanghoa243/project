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
  const { customer } = authState;

  const handleLogout = async () => {
   
        localStorage.clear();
        sessionStorage.clear();
        navigate('/'); 
        window.location.reload();
    
  };

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
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <p>
                <FaUserLarge /> {customer.firstname} {customer.lastname}
              </p>
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
            >
              <Link to="/user" className="dropdown-item">
                <p>Profile</p>
              </Link>
              <button className="dropdown-item" onClick={handleLogout}>
                <p>Logout</p>
              </button>
            </div>
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
