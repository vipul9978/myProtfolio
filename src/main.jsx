import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
const rootElement = document.getElementById('root');



createRoot(rootElement).render(
  <React.StrictMode>
       <Router>
      <App />
    </Router>
  </React.StrictMode>
);