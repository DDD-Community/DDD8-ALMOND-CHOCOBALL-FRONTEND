import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
              navigate('/mypage/detail');
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
