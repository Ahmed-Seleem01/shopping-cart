import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import SwitchRoutes from './components/SwitchRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SwitchRoutes />
  </React.StrictMode>
);
