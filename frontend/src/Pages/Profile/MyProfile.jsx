import React, {useContext, useEffect, useState } from 'react';
import "./MyProfile.css";
import pro from '../../Assets/pro.jpg';
import bg from '../../Assets/doddlebg.jpg';
import prof from '../../Assets/prof.svg';
import axios from 'axios';
import { AuthContext } from '../../authContext'; 

const MyProfile = () => {
  // const { user } = useContext(AuthContext); 
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    country: '',
    travelPreferences: '',
    email: '',
    password: '',
    entries: [],
  });

  useEffect(() => {
   
    const loggedInUser = localStorage.getItem('LoggedInUser');

    const userData = JSON.parse(loggedInUser);

    const userId = userData._id;

    axios.get('http://localhost:8080/api/profile/userData', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userId}`
        }
      })
        .then(response => {
          console.log('Fetched profile data:', response.data); // Log the fetched data
          console.log(profile.entries.photo)
          setProfile(response.data);
        })
        .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  return (
    <div className="desktop-1">
      <img className="desktop-1-child" alt="" src={pro} />
      <img className="desktop-1-item" alt="" src={prof} />
      <div className="my-profile">My Profile</div>
      <div className="desktop-1-inner" />
      <div className="firstname-lastname">
        <span className="admin">Name:</span>
        <span className="admin-label">{profile.firstName} {profile.lastName}</span>
      </div>
      <div className="gender">
        <span className="g">Gender:</span>
        <span className="g-label">{profile.gender}</span>
      </div>
      <div className="age">
        <span className="a">Age:</span>
        <span className="a-label">{profile.age}</span>
      </div>
      <div className="country">
        <span className="c">Country:</span>
        <span className="c-label">{profile.country}</span>
      </div>
      <div className="travelpreferences">
        <span className="t">Preferences:</span>
        <span className="t-label">{profile.travelPreferences}</span>
      </div>
      <div className="email">
        <span className="e">Email:</span>
        <span className="e-label">{profile.email}</span>
      </div>

      <div className="my-travel-history">Review History</div>
      <div className="entries-container">
      {profile.entries.map((entry, index) => (
        <div key={index} className="entry">
      <div className="rectangle-div" />
          <img className="rectangle-icon" alt="" src={`http://localhost:8080/uploads/${entry.photo}`}  />
          <div className="location">{entry.location}</div>
          <div className="date">{entry.date}</div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MyProfile;
