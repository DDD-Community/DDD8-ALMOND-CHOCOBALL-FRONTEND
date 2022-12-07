import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai';
import './Home.css';
import Tag from '../components/Tag';

function Home() {
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

      <div className="image-container">
        <img
          className="main-image"
          alt="test"
          src="https://post-phinf.pstatic.net/MjAyMDA3MDZfMjA5/MDAxNTk0MDI1NzQ0ODA0.UjEnc6IODtka_-lyE8pPFF0OD0xqKq12kG9Y1T5KkXgg.MZQfSHOZbYU-hrMAvFJxMs_8PX5SKCR8gaURwMABeYMg.JPEG/5_%281%29.jpg?type=w1200"
        />
        <section>
          <div className="title-container">
            오늘 데이트 하는데 어떤 스타일이 제일 괜찮나요?
          </div>
          <div className="tag-container">
            <Tag text="태그태그" />
            <Tag text="태그태그" />
            <Tag text="태그태그" />
            <Tag text="태그태그" />
            <Tag text="태그태그" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
