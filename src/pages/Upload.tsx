import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import './Upload.css';

function Upload() {
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
        right={<span onClick={() => {}}>완료</span>}
      />
    </div>
  );
}

export default Upload;
