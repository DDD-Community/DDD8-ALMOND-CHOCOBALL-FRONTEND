import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
// import { ImageListItem } from '@mui/material';
// import { useState } from 'react';
import './MyPageDetail.css';

function MyPageDetail() {
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

      <div className="profile-detail-image-container">
        <img
          className="profile-detail-image"
          src={require('./testImage.png')}
          srcSet={require('./testImage.png')}
          alt="title"
          loading="lazy"
          width={'100%'}
        />
      </div>

      <h2 className="profile-detail-title">
        오늘 데이터 하는데 어떤 스타일이 괜찮나요?
      </h2>
    </div>
  );
}

export default MyPageDetail;
