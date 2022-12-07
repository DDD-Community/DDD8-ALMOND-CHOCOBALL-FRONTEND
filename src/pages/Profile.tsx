import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai';

function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <Header
        left={
          <AiOutlineLeft
            style={{ width: '24px', height: '24px' }}
            onClick={() => navigate(-1)}
          />
        }
        centerText={'마이페이지'}
      />
    </div>
  );
}

export default Profile;
