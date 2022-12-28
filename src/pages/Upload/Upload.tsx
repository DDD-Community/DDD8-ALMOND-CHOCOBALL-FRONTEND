import React from 'react';

import { useState } from 'react';
import './Upload.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import styles from './Upload.module.css';

function Upload() {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);

  const maxNumber = 5;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList as never[]);
  };

  return (
    <div className={styles.UploadContainer}>
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
                      x
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>

      <div className="input-container">
        <div className="title-container">
          <label className="upload-label">제목</label>
          <div className="tag">필수</div>
        </div>
        <textarea
          className="upload-textarea"
          value={title}
          placeholder="간단한 제목을 입력해주세요."
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
          maxLength={38}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
        />
        <span className="character-count">{title.length}/38</span>
      </div>

      <div className="input-container">
        <label className="upload-label">내용</label>
        <textarea
          className="upload-textarea"
          placeholder="최대 100자까지 작성 가능합니다."
          value={content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
          maxLength={100}
        />
        <span className="character-count">{content.length}/100</span>
      </div>

      <div className="input-container">
        <label className="upload-label">태그</label>

        {tagList.length > 0 && (
          <div className="upload-tag-container">
            {tagList.map((tag, index) => (
              <span className="upload-tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <textarea
          className="upload-textarea"
          placeholder="태그를 설정하면 더 빠르게 피드백을 받을 수 있어요."
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              const tag = e.currentTarget.value.trim();
              setTagList([...tagList, tag]);
              e.currentTarget.value = '';
            }
          }}
        />
      </div>
    </div>
  );
}

export default Upload;
