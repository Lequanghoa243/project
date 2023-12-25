import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { loginUser } from '../../Feature/user/userSlice';

const Schema = yup.object({
  email: yup.string().nullable().email("Email must be valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [refreshed, setRefreshed] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  const { isSuccess } = authState;

  useEffect(() => {
    if (isSuccess && !refreshed) {
      navigate("/");
      localStorage.setItem('pageRefreshed', 'true');
      setRefreshed(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      
    }
  }, [isSuccess, navigate, refreshed]);
  return (
    <>
      
      <div className="login-container">
        <div className="form-box">
          <h2 className='title'>Login</h2>
          <form action="" onSubmit={formik.handleSubmit}>
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
              <Link to="/forgot-password" className='forgot'>Forgot Password?</Link>
            <div className="justify-button">
            <button
            className="button"
            type="submit"
          >
            Log In
          </button>
            </div>
            <div className='Register'>
            <p>Don't have an account?
              <Link to ='/Signup' className='register-link'> Register</Link>
            </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
