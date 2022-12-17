import React from 'react';
import { HeaderBackButton, Header } from '../components/Headers';
import GoodBadCount from '../components/MyPageDetail/GoodBadCount';
import { useNavigate } from 'react-router-dom';
// import { ImageListItem } from '@mui/material';
// import { useState } from 'react';
import styles from './MyPageDetail.module.css';

function MyPageDetail() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Header left={<HeaderBackButton />} centerText={'마이페이지'} />

      <div className={styles.imageContainer}>
        {/* <img
          className="profile-detail-image"
          src={require('./testImage.png')}
          srcSet={require('./testImage.png')}
          alt="title"
          loading="lazy"
          width={'100%'}
        /> */}
      </div>

      <div className={styles.contentContainer}>
        <div className="title">
          이번주에 여행가는데 어떤 스타일이 제일 괜찮나요?
        </div>
        <div className={styles.goodBadCountContainer}>
          <GoodBadCount goodOrBad="good" count={2000} />
          <GoodBadCount goodOrBad="bad" count={2000} />
        </div>
      </div>
    </div>
  );
}

export default MyPageDetail;
