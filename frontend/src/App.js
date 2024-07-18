import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import { useContext } from "react"; 
import { AuthContext } from "./authContext"; 

//------------ PAGES -----------//

import Signup from './Pages/Signup/Signup'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import View from './Pages/View/View'
import ChatBot from './Pages/ChatBot/ChatBot';
import CreateReview from './Pages/CreateReview/CreateReview'
import Recommendation from './Pages/Recommendation/Recommendation';
import Booking from './Pages/Booking/Booking'
import LanguageTranslation from './Pages/LanguageTranslation/LanguageTranslation'
import CurrencyConverter from './Pages/Currency/CurrencyConverter';
import WeatherForecast from './Pages/WeatherForecast/WeatherForecast'
import Checkoutform from './Pages/Checkout/Checkoutform';
import AboutUs from './Pages/AboutUs/AboutUs';
import Profile from './Pages/Profile/MyProfile';
import Reviews from './Pages/Reviews/Reviews';
import PromptReview from './Pages/PromptReview/PromptReview';
import AllReviews from './Pages/AllReviews/AllReviews';

const App = () => {

  const { user } = useContext(AuthContext); 

  const ProtectedRoute = ({ children }) => { 
    if (!user) { 
      return <Login/>; 
    } else { 
      return children; 
    } 
  }; 

  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<ProtectedRoute> <Home/> </ProtectedRoute>} /> 
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} /> 
        <Route path="/Recommendation" element={<ProtectedRoute><Recommendation/></ProtectedRoute>} />
        <Route path="/Home" element={<ProtectedRoute><Home/> </ProtectedRoute>} />
        <Route path="/Booking" element={<ProtectedRoute><Booking/> </ProtectedRoute>} />
        <Route path="/Currency" element={<CurrencyConverter/>} />
        <Route path="/LanguageTranslation" element={<LanguageTranslation/>} />
        <Route path="/ChatBot" element={<ChatBot/>} />
        <Route path="/Booking/Checkout" element={<ProtectedRoute><Checkoutform/> </ProtectedRoute>} />
        <Route path="/create" element={<ProtectedRoute><CreateReview/></ProtectedRoute>} /> 
        <Route path="/view" element={<ProtectedRoute><View/></ProtectedRoute>} />
        <Route path="/Weather" element={<WeatherForecast/>} />
        <Route path="/Profile" element={<ProtectedRoute><Profile/> </ProtectedRoute>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/view/:id" element={<ProtectedRoute><View/></ProtectedRoute>} />
        <Route path="/Reviews/view/:id" element={<ProtectedRoute><View/></ProtectedRoute>} />
        <Route path="/Reviews" element={<ProtectedRoute><Reviews/></ProtectedRoute>} />
        <Route path="/AllReviews" element={<ProtectedRoute><AllReviews/></ProtectedRoute>} />
        <Route path="/PromptReview" element={<ProtectedRoute><PromptReview/></ProtectedRoute>} />

        {/* MORE ROUTES */}

        <Route path="/Recommendation" element={<Recommendation/>} />
        <Route path="/Recommendation/Home" element={<Home/>} />
        <Route path="/Recommendation/Booking" element={<Booking/>} />
        <Route path="/Recommendation/Home/Currency" element={<CurrencyConverter/>} />
        <Route path="/Recommendation/Home/LanguageTranslation" element={<LanguageTranslation/>} />
        <Route path="/Recommendation/Home/ChatBot" element={<ChatBot/>} />

        {/* MORE ROUTES */}

        <Route path="/Booking/Recommendation" element={<Recommendation/>} />
        <Route path="/Booking/Home" element={<Home/>} />
        <Route path="/Booking" element={<Booking/>} />
        <Route path="/Booking/Home/Currency" element={<CurrencyConverter/>} />
        <Route path="/Booking/Home/LanguageTranslation" element={<LanguageTranslation/>} />
        <Route path="/Booking/Home/ChatBot" element={<ChatBot/>} />

      </Routes> 
    </Router> 

    // <Booking/>

  
  
  );
}

export default App;
