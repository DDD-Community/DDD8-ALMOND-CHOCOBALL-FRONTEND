import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { Home, Upload, MyPageDetail, MyPage, Post, Login } from './pages';

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
        path: 'post/:id',
        element: <Post />,
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
        path: 'mypage/detail',
        element: <MyPageDetail />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <Container maxWidth="sm" sx={{ height: '100%', overflow: 'hidden' }}>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
