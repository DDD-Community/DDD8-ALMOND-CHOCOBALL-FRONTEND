import React from 'react';
import styles from './Header.module.css';
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import { IconGood } from '../Icons';
interface Props {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

function Header({ left, right }: Props) {
  const location = useLocation();

  const getCenterContent = (pathname: string) => {
    if (pathname === '/' || pathname === '/home') return <IconGood />;
    if (pathname === '/mypage') return '마이페이지';
  };

  if (location.pathname === '/mypage/detail') {
    return null;
  }

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderLeft}>{left}</div>
      <div className={styles.HeaderCenter}>
        {getCenterContent(location.pathname)}
      </div>
      <div className={styles.HeaderRight}>{right}</div>
    </header>
  );
}

export default Header;
