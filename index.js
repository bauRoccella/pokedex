// This file is a production-only entry point that will be processed by Vite
// It will be bundled into the final JavaScript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, 
    React.createElement(App)
  )
); 