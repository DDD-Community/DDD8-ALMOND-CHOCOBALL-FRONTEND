import React from 'react';
import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';
import { IconGood } from '../Icons';
import HeaderBackButton from './HeaderBackButton';
import HeaderSearchButton from './HeaderSearchButton';
import { useNavigate } from 'react-router-dom';
import { HeaderCompleteButton } from '.';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const getCenterContent = (pathname: string) => {
    if (pathname === '/' || pathname === '/home') return 'logo';
    if (pathname === '/mypage' || pathname === '/mypage/detail')
      return '마이페이지';
    if (pathname === '/login') return '로그인';
  };

  const getLeftContent = (pathname: string) => {
    return (
      <HeaderBackButton
        handleClick={() => {
          navigate(-1);
        }}
      />
    );
  };

  const getRightContent = (pathname: string) => {
    if (pathname === '/' || pathname === '/home') return <HeaderSearchButton />;
    if (pathname === '/upload') return <HeaderCompleteButton />;
    return '';
  };

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderLeft}>
        {getLeftContent(location.pathname)}
      </div>
      <div className={styles.HeaderCenter}>
        {getCenterContent(location.pathname)}
      </div>
      <div className={styles.HeaderRight}>
        {getRightContent(location.pathname)}
      </div>
    </header>
  );
}

export default Header;
