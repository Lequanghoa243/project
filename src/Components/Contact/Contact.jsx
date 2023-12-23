import React from 'react';
import { contactData } from '../../datahome';
import "./Contact.css"; // Import CSS file
import img26 from "../../Images/26.png";

const Contact = () => {
  return (
    <> 
      <div className="container contact-container">
        
      <div className="column">
          <h1 className='titleh1'>Contact Us </h1>
          <h4 className='titleh4'>Contact us for more information</h4>
        </div>
        <div className="column">
          <img src={img26} alt='img26' className='new-image-class' />
        </div>
        </div>
        <div className='container contact-content'>
          {contactData.map((items) => (
            <div key={items.id} className='idcontact'>
              <span className='iconcontact'><items.icon /></span>
              <h5 className='titlecontact'>{items.title}</h5>
              <p className='contactinfo'> {items.contact} </p>
              </div>
          ))}
        </div>
    </>
  );
}

export default Contact;
