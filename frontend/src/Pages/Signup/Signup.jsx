import React, { useState }  from 'react'
import './Signup.css'
import logo from '../../Assets/jg-logo.png';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';
import Swal from "sweetalert2";

const Signup = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        age: '',
        gender: '',
        travelPreferences: '',
        email: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({});

      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        setErrors({
          ...errors,
          [name]: '',
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
        try {
          const response = await axios.post('http://localhost:8080/api/auth/Signup', formData);
          console.log(response.data); // handle success
  
          Swal.fire({
            title: "Registration Successful!",
            text: "You are heading towards Login page!",
            icon: "success"
          }).then(() => {
            navigate('/Login');
          });
        } catch (error) {
          Swal.fire({
            title: "Registration Failed!",
            icon: "error"
          })
          console.error(error.response.data); // handle error
        }

        // Reset form after submission
        setFormData({
          firstName: '',
          lastName: '',
          country: '',
          age: '',
          gender: '',
          travelPreferences: '',
          email: '',
          password: '',
        });
        setErrors({});
      };
    
      const validateForm = (data) => {
        let errors = {};
        if (!data.firstName.trim()) {
          errors.firstName = 'First Name is required';
        }
        if (!data.lastName.trim()) {
          errors.lastName = 'Last Name is required';
        }
        if (!data.country.trim()) {
          errors.country = 'Country is required';
        }
        if (!data.age.trim()) {
          errors.age = 'Age is required';
        } else if (isNaN(data.age) || parseInt(data.age) <= 0 || parseInt(data.age) < 18) {
          errors.age = 'Age must be a valid number';
        }
        if (!data.gender.trim()) {
          errors.gender = 'Gender is required';
        }
        if (!data.travelPreferences.trim()) {
          errors.travelPreferences = 'Travel Preferences is required';
        }
        if (!data.email.trim()) {
          errors.email = 'Email is required';
        } else if (!isValidEmail(data.email)) {
          errors.email = 'Invalid email format';
        }
        if (!data.password.trim()) {
          errors.password = 'Password is required';
        } else if (data.password.length < 6) {
          errors.password = 'Password must be at least 6 characters';
        }
        return errors;
      };
    
      const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

  return (
    <div className="signup-container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="signup-form">
          <img src={logo} alt="Logo" className="logo" />
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && <div className="error">{errors.firstName}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && <div className="error">{errors.lastName}</div>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
                {errors.country && <div className="error">{errors.country}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
                {errors.age && <div className="error">{errors.age}</div>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                />
                {errors.gender && <div className="error">{errors.gender}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="travelPreferences">Travel Preferences</label>
                <input
                  type="text"
                  id="travelPreferences"
                  name="travelPreferences"
                  value={formData.travelPreferences}
                  onChange={handleChange}
                  required
                />
                {errors.travelPreferences && <div className="error">{errors.travelPreferences}</div>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <div className="error">{errors.password}</div>}
              </div>
            </div>
            <div className="Login-link">
                  Already have an account? <Link to="/Login">Log In</Link>
                  
            </div>
            <div className="Signup-button">
              <button className='button' type="submit">Sign Up</button>
           </div>
            
          </form>
        </div>
        <div className="shape"></div>
      </div>
    </div>
  );
};

export default Signup
