import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconIc } from '../Icons';

function HeaderBackButton() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(-1);
      }}
    >
      <IconIc width="24px" height="24px" fill="#fff" />
    </div>
  );
}

export default HeaderBackButton;
