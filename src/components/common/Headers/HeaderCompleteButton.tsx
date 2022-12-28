import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderSearchButton() {
  const navigate = useNavigate();
  return (
    <div>
      <span
        onClick={() => {
          navigate('/');
        }}
      >
        완료
      </span>
    </div>
  );
}

export default HeaderSearchButton;
