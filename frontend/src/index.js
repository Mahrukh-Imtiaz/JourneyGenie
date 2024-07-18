import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from "./App";
import { createRoot } from 'react-dom/client';
import { AuthContextProvider } from './authContext'; 

createRoot(document.getElementById('root')).render(
  <AuthContextProvider> 
        <React.StrictMode> 
            <App /> 
        </React.StrictMode> 
    </AuthContextProvider> 
);