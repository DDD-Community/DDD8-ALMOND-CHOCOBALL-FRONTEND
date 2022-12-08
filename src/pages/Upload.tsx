import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import './Upload.css';
import { TextField } from '@mui/material';
import ImageUploading, { ImageListType } from 'react-images-uploading';

function Upload() {
  const navigate = useNavigate();
  const [images, setImages] = React.useState([]);
  const maxNumber = 5;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };
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

      <div className="upload-image-container">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
        >
          {({ imageList, onImageUpload, onImageRemove }) => (
            <div className="upload-image-select-wrapper">
              <div className="upload-image-select-box" onClick={onImageUpload}>
                사진
              </div>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img
                    className="image-item-image"
                    src={image.dataURL}
                    alt=""
                    width="100"
                  />
                  <div className="image-remove-button-wrapper">
                    <button
                      className="image-remove-button"
                      onClick={() => onImageRemove(index)}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>

      <div className="input-container">
        <label>제목</label>
        <input placeholder="간단한 제목을 입력해주세요." />
        <span className="character-count">0/38</span>
      </div>

      <div className="input-container">
        <label>내용</label>
        <input placeholder="최대 100자까지 작성 가능합니다." />
        <span className="character-count">0/38</span>
      </div>
    </div>
  );
}

export default Upload;
