import React from 'react';
import footericon from "../../Images/footericon.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <article>
           <Link to="/" className="logofooter">
            <center><img src={footericon} alt="Logofooter" /></center>
           </Link>
          
          <h4 className='sub'>Subscribe to get our Newsletter</h4>
          <div className="emailinput">
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="content">
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      

      <small className="container copyright">
        <p>© 2021 Class Technologies Inc.</p>
      </small>
      </article>
      </div>
    </footer>
  );
};

export default Footer;
