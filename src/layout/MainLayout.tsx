import React from 'react';
import { Outlet } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { AiOutlineHome, AiOutlinePlusSquare } from 'react-icons/ai';
import { RxPerson } from 'react-icons/rx';
import { Link } from 'react-router-dom';

function Root() {
  const [currentPage, setCurrentPage] = React.useState();
  return (
    <div>
      <Outlet />
      <BottomNavigation
        value={currentPage}
        onChange={(event, newValue) => {
          setCurrentPage(newValue);
        }}
      >
        <Link to="/home">
          <BottomNavigationAction icon={<AiOutlineHome />} />
        </Link>
        <Link to="upload">
          <BottomNavigationAction icon={<AiOutlinePlusSquare />} />
        </Link>
        <Link to="profile">
          <BottomNavigationAction icon={<RxPerson />} />
        </Link>
      </BottomNavigation>
    </div>
  );
}

export default Root;
