import React, {useState, useContext} from 'react'
import './Login.css'
import logo from '../../Assets/jg-logo.png'
import { useNavigate, Link } from "react-router-dom"; 
import axios from 'axios';
import { AuthContext } from '../../authContext';
import Swal from "sweetalert2";

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { dispatch } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
    setErrors({
        ...errors,
        [name]: ''
    });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch({ type: "LOGIN_START" }); 
  
  if (!formData.email.trim()) {
      setErrors({
          ...errors,
          email: 'Email is required'
      });
      return;
  }
  if (!formData.password.trim()) {
      setErrors({
          ...errors,
          password: 'Password is required'
      });
      return;
  }
  try {
    const response = await axios.post('http://localhost:8080/api/auth/Login', formData);
    console.log(response.data); 
    const sessionId = response.data.sessionId; // Extract sessionId from response
    localStorage.setItem('sessionId', sessionId); 
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("LoggedInUser",JSON.stringify(response.data.details));
    console.log(response.data.token)
    console.log(sessionId)

    dispatch({ 
      type: "LOGIN_SUCCESS", 
      payload: response.data.details 
    }); 
    Swal.fire({
      title: "Login Successful!",
      text: "You are heading towards Home page!",
      icon: "success"
    }).then(() => {
      navigate('/');
    }, 1000);
  } catch (error) {
    setErrors({
      general: error.response.data.error || "An error occurred"
    });
    console.log(error.response.data)
    Swal.fire({
      title: "Login Failed!",
      text: error.response.data.message,
      icon: "error"
    })
    dispatch({ 
      type: "LOGIN_FAILURE", 
      payload: "An error occurred while logging in" 
    }); 
  }
  
  // console.log('Form submitted:', formData);
};

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form onSubmit={handleSubmit} className="login-form">
        <img src={logo} className='logo' alt='Error'></img>

        <label htmlFor="email">Email</label>
                <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {/* {errors.email && <div className="error">{errors.email}</div>}
                {errors.general && <div className="error">{errors.general}</div>} */}

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {/* {errors.password && <div className="error">{errors.password}</div>} */}

                <div className="signup-link">
                  Don't have an account? <Link to="/Signup">Sign Up</Link>
                </div>

                <button className='login-button' type="submit">Log In</button>
      </form>
      <div className="shape"></div>
    </div>
  );
};

export default Login
