import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { Home, Upload, Profile } from './pages';
import { Container } from '@mui/material';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'upload',
        element: <Upload />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <Container maxWidth="sm" sx={{ height: '100%' }}>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
