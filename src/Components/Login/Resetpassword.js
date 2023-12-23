import React from 'react';
import "./Login.css"
const Resetpassword = () => {
  return (
<>
<div className="login-container">
        <div className="form-box">
          <h3 className='title'>Reset Password</h3>
          <form action="">
            <div>
              <input type="password" name="password" placeholder='Password' className='form-control' />
            </div>
            <div>
              <input type="password" name="confpassword" placeholder='Confirm Password' className='form-control' />
            </div>
            <div className="submit-button">    
              <button className='submitbtn '>Submit</button>
            </div>
          </form>
        </div>
</div>
</>
)}

export default Resetpassword;
