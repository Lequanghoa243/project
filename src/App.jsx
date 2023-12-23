// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import About from "./Components/About us/About";
import Course from "./Components/Course/Course";
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import "./App.css";
import UIUX from './Components/Course/Category/UIUX';
import Forgotpassword from './Components/Login/Forgotpassword';
import Signup from './Components/Login/Signup';
import Resetpassword from './Components/Login/Resetpassword';
import Single from './Components/Course/Single';
import Watchpage from './Components/Course/CourseSingle/Watchpage';
import Login from "./Components/Login/Login"
import Footer from './Components/Home/Footer';
import ScrollToTopButton from './Components/Scroll/Scrollbutton';
import User from './Components/Usser/User';
import { PrivateRoute } from './routes/privateRoute';
import { OpenRoute } from './routes/openRoute';




const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='Aboutus' element={<About />} />
        <Route path='courses' element={<Course />} />
        <Route path='contact' element={<Contact />} />
        <Route path='Login' element={<OpenRoute><Login /></OpenRoute>} />
        <Route path='Signup' element={<OpenRoute><Signup /></OpenRoute>} />
        <Route path='forgot-password' element={<OpenRoute><Forgotpassword /></OpenRoute>} />
        <Route path='Resetpassword' element={<OpenRoute><Resetpassword/></OpenRoute>} />
        <Route path='courses/UI-UX' element={<UIUX />} />
        <Route path='courses/:id' element={<Single />} />
        <Route path='lesson/:id' element={<PrivateRoute><Watchpage /></PrivateRoute>} />
        <Route path='user' element={<PrivateRoute><User /></PrivateRoute>}/>
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
