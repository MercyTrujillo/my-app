import React from 'react';

import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';


// const root = ReactDOM.createRoot( document.getElementById('root'));

const root = createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>

    <App />
   </React.StrictMode>
    
);

