import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { ImageList, ImageListItem } from '@mui/material';
import { useState } from 'react';
import './MyPage.css';

interface ImageItem {
  img: string;
  title: string;
}

function MyPage() {
  const navigate = useNavigate();
  const [imageItem, setImageItem] = useState<ImageItem[]>([]);

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

      <div className="myPage-container">
        <h3 className="myPage-id">춤추는 원숭</h3>
        <span className="myPage-posts">게시물 13</span>
      </div>
      <ImageList
        cols={2}
        style={{
          position: 'absolute',
          left: 0,
          width: '100vw',
          height: '100vh',
          overflowY: 'scroll',
          paddingBottom: '300px',
        }}
        gap={1}
      >
        {Array.from({ length: 9 }).map((item, index) => (
          <div
            onClick={() => {
              navigate('/myPage/detail');
            }}
          >
            <ImageListItem key={index}>
              <img
                src={require('./testImage.png')}
                srcSet={require('./testImage.png')}
                alt="title"
                loading="lazy"
              />
            </ImageListItem>
          </div>
        ))}
      </ImageList>
    </div>
  );
}

export default MyPage;
