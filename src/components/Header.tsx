import React from 'react';
import './Header.css';

interface Props {
  left?: React.ReactNode;
  centerText?: String;
  right?: React.ReactNode;
}

function Header({ left, centerText, right }: Props) {
  return (
    <header>
      <div className="header-left">{left}</div>
      <div className="header-center">{centerText}</div>
      <div className="header-right">{right}</div>
    </header>
  );
}

export default Header;
