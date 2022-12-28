import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './MainLayout.module.css';
import { IconHome, IconMyPage, IconUpload } from '../components/common/Icons';
import { Header, HeaderBackButton } from '../components/common/Headers';

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
        position: 'relative',
        overflowY: 'hidden',
      }}
    >
      <Header left={<HeaderBackButton />} />

      <main className={styles.main}>
        <Outlet />
      </main>

      <BottomNavigation
        sx={{
          backgroundColor: '#17171b',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          height: '80px',
        }}
        value={navigationValue}
        onChange={(event, newValue) => {
          setNavigationValue(newValue);
          navigate(newValue);
        }}
      >
        <BottomNavigationAction
          value={'home'}
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
