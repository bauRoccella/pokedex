// This file is the entry point for the Vite build
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Create the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, 
    React.createElement(App)
  )
); 