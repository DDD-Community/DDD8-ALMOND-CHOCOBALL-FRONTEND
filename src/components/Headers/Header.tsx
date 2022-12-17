import React from 'react';
import styles from './Header.module.css';
interface Props {
  left?: React.ReactNode;
  centerText?: String;
  right?: React.ReactNode;
}

function Header({ left, centerText, right }: Props) {
  return (
    <header className={styles.header}>
      <div className="header-left">{left}</div>
      <div className="header-center">{centerText}</div>
      <div className="header-right">{right}</div>
    </header>
  );
}

export default Header;
