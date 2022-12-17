import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { Home, Upload, MyPageDetail, MyPage } from './pages';

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
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: 'profile/detail',
        element: <MyPageDetail />,
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
