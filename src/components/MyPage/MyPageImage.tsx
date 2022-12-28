import React from 'react';
import styles from './MyPageImage.module.css';

interface Props {
  imgSrc: string;
  goodCount: number;
  badCount: number;
}
function MyPageImage({ imgSrc, goodCount, badCount }: Props) {
  return (
    <div className={styles.MyPageImage}>
      <img src={imgSrc} alt="my page images" />
    </div>
  );
}

export default MyPageImage;
