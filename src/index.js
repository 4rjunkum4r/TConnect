import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Navbar from './Navbar';

import Profile from './Profile';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Profile />
    <Footer />
    <index />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
