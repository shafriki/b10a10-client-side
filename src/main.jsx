import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import AuthProvider from './providers/AuthProvider';
import router from './routes/Route'; // Ensure the import is named correctly

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
