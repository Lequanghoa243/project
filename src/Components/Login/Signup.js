import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup'
import "./Login.css"
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Feature/user/userSlice';
import { Link } from 'react-router-dom';

const signupSchema = yup.object({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  mobile: yup.string().required("Mobile Number is not required"),
  email: yup.string().nullable().email("Email must be valid"),
  password: yup.string().required("password is required"),
});


const Signup = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      mobile:"",
      email: "",
      password:""
    },
    validationSchema:signupSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  return (
<>
<div className="login-container">
        <div className="form-box">
          <h3 className='title'>Sign Up</h3>
          <form action="" onSubmit={formik.handleSubmit}>
            <div>
              <input  name="firstname" placeholder='First Name' className='form-control' value={formik.values.firstname}
               onChange={formik.handleChange("firstname")} onBlur={formik.handleBlur("firstname")}/>
            </div>
            <div className="error">{formik.touched.firstname && formik.errors.firstname}</div>
            <div>
              <input  name="lastname" placeholder='Last Name' className='form-control' value={formik.values.lastname}
               onChange={formik.handleChange("lastname")} onBlur={formik.handleBlur("lastname")}/>
                      
            </div>
            <div className="error">{formik.touched.lastname && formik.errors.lastname}</div>
            <div> 
              <input type="tel" name="mobile" placeholder='Mobile Number' className='form-control'value={formik.values.mobile}
               onChange={formik.handleChange("mobile")} onBlur={formik.handleBlur("mobile")}/>
                       
            </div>
            <div className="error">{formik.touched.mobile && formik.errors.mobile}</div>
            <div>
              <input type="email" name="email" placeholder='Email' className='form-control' value={formik.values.email}
               onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")}/>    
            </div>
            <div className="error">{formik.touched.email && formik.errors.email}</div>
            <div>
              <input type="password" name='password' placeholder='Password' className='form-control' value={formik.values.password}
               onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")}/>
                      
            </div>
            <div className="error">{formik.touched.password && formik.errors.password}</div>
                      
            <div className="justify-button">    
            <button
            className="button"
            type="submit"
          >
            Sign Up
          </button>
            </div>
            <div className="Register">
            <p>Already have an account ?
              <Link to ='/Login' className='register-link'> Login</Link>
            </p>
          </div> 
          </form>
        </div>
</div>
</>



);};

export default Signup;
