import React from 'react';
import styles from './LoginPage.module.css';
import NaverIcon from '../../images/Naver.svg';
import LoginImage from '../../images/login-logo.png';
function LoginPage() {
  return (
    <div>
      <div className={styles.TitleContainer}>
        <div>내일 모입지?</div>
        <div>
          <span className={styles.highlight}>내모지</span>입니다.
        </div>
      </div>
      <div className={styles.MotionGraphicContainer}>
        <img src={LoginImage} alt="login logo" />
      </div>
      <div className={styles.ButtonContainer}>
        <button className={styles.NaverLoginBtn}>
          <img src={NaverIcon} alt="naver login" />
          네이버로 시작하기
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
