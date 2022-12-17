import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './MainLayout.module.css';
import { IconHome, IconMyPage, IconUpload } from '../components/Icons';
function Root() {
  const [navigationValue, setNavigationValue] = useState<
    'home' | 'upload' | 'mypage'
  >('home');
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <main className={styles.main}>
        <Outlet />
      </main>
      <BottomNavigation
        className="bottom-navigation"
        sx={{
          backgroundColor: '#17171b',
          position: 'fixed',
          padding: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
        }}
        value={navigationValue}
        onChange={(event, newValue) => {
          setNavigationValue(newValue);
          navigate(newValue);
        }}
      >
        <BottomNavigationAction
          value={'home'}
          sx={{ color: '#fff', fontSize: '36px', height: '100%', padding: 0 }}
          icon={
            <IconHome
              fill={navigationValue === 'home' ? '#fff' : '#8f8f8f'}
              width="36"
              height="36"
            />
          }
          className="bottom-navigation-action"
        />
        <BottomNavigationAction
          value={'upload'}
          sx={{ color: '#fff', fontSize: '36px', height: '100%', padding: 0 }}
          icon={
            <IconUpload
              fill={navigationValue === 'upload' ? '#fff' : '#8f8f8f'}
              width="36"
              height="36"
            />
          }
          className="bottom-navigation-action"
        />
        <BottomNavigationAction
          value={'mypage'}
          sx={{ color: '#fff', fontSize: '36px', height: '100%', padding: 0 }}
          icon={
            <IconMyPage
              fill={navigationValue === 'mypage' ? '#fff' : '#8f8f8f'}
              width="36"
              height="36"
            />
          }
          className="bottom-navigation-action"
        />
      </BottomNavigation>
    </Container>
  );
}

export default Root;
