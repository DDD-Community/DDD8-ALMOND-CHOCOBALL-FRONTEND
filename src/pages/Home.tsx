import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai';
import './Home.css';
import Tag from '../components/Tag';
import { useSwipeable } from 'react-swipeable';
import HomePost from '../components/HomePost';

function Home() {
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log('User Swiped!', eventData),
  });
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Header
        left={
          <AiOutlineLeft
            style={{ width: '24px', height: '24px' }}
            onClick={() => navigate(-1)}
          />
        }
        centerText={'logo'}
        right={
          <AiOutlineSearch
            style={{ width: '24px', height: '24px' }}
            onClick={() => {}}
          />
        }
      />

      <div className="image-container" {...handlers}>
        <HomePost
          title="title1"
          zIndex={1}
          src="http://www.kstarfashion.com/news/photo/201812/133429_71560_5413.jpg"
        />
        <HomePost
          title="title2"
          zIndex={2}
          src="https://mblogthumb-phinf.pstatic.net/MjAxNzAxMThfNSAg/MDAxNDg0NzA3NDI2NTM0.xPysRQo4Uc-SLxEJ2Se1g7NLeqqkwIvo4zG8ab7eqA8g.hwugr9361_FkOYIWmxzAvb9BnIcGHJfoPPN8sGQItn0g.JPEG.senti54/photo_6.jpg?type=w2"
        />
        <HomePost
          title="title3"
          zIndex={3}
          src="http://gdimg.gmarket.co.kr/1689551911/still/600?ver=1571370973"
        />
      </div>
    </div>
  );
}

export default Home;
