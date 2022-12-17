import React from 'react';
import { HeaderBackButton, Header } from '../components/Headers';

import { useNavigate } from 'react-router-dom';
// import { ImageListItem } from '@mui/material';
// import { useState } from 'react';
import './MyPageDetail.css';

function MyPageDetail() {
  const navigate = useNavigate();

  return (
    <div>
      <Header left={<HeaderBackButton />} centerText={'마이페이지'} />

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
