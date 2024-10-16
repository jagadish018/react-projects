

import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure you're importing from 'react-dom/client'
import App from './App'; // Adjust the path if needed
import './index.css'; // Optional: Import your CSS file here

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);