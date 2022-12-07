import React from 'react';
import { Outlet } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { AiOutlineHome, AiOutlinePlusSquare } from 'react-icons/ai';
import { RxPerson } from 'react-icons/rx';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './MainLayout.css';

function Root() {
  const [navigationValue, setNavigationValue] = React.useState();
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'align',
        justifyContent: 'center',
      }}
    >
      <main>
        <Outlet />
      </main>
      <BottomNavigation
        className="bottom-navigation"
        sx={{
          backgroundColor: '#17171b',
          position: 'fixed',
          padding: 0,
          bottom: 0,
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
          icon={<AiOutlineHome />}
          className="bottom-navigation-action"
        />
        <BottomNavigationAction
          value={'upload'}
          sx={{ color: '#fff', fontSize: '36px', height: '100%', padding: 0 }}
          icon={<AiOutlinePlusSquare />}
          className="bottom-navigation-action"
        />
        <BottomNavigationAction
          value={'profile'}
          sx={{ color: '#fff', fontSize: '36px', height: '100%', padding: 0 }}
          icon={<RxPerson />}
          className="bottom-navigation-action"
        />
      </BottomNavigation>
    </Container>
  );
}

export default Root;
