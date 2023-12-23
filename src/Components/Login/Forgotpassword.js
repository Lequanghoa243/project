import React from "react";
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  return (
   <>
   <div className="login-container">
        <div className="form-box">
          <h3 className='title'>Reset Your Password</h3>
          <p>We will sent you an email to reset your password</p>
          <form action="">
            <div>
              <input type="email" name="email" placeholder='Email' className='form-control' />
            </div>
            <div className="resetbuton">
              <button className='submitbtn' type="submit">Submit</button>
              <Link className="loginbtn"to="/">Cancel</Link>
            </div>
          </form>
        </div>
</div>
   </>
  );
};

export default Forgotpassword;