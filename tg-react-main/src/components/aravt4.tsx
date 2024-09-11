// src/aravt.tsx
import React from 'react';
import styles from '../assets/css/aravt.module.css';
import logo from '../assets/img/img(3).png'; // Make sure to have your logo in this path
import MainButton from './MainButton';
import BackButton from './BackButton'; // Импорт компонента BackButton

const Aravt4: React.FC = () => {
  return (
    <div className={styles.aravtContainer}>
      <h1 className={styles.header}>Build Your Future With ARAVT</h1>
      <div className={styles.logoSection}>
        <img src={logo} alt="ARAVT Logo" className={styles.logo} />
      </div>
      <p className={styles.footer}>Connect with other people in ARAVT and make a real things happen</p>
      <div className={styles.paginationDots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
      <MainButton text="Next (4/6)" link="/aravt5" />
       <BackButton />
    </div>
  );
};

export default Aravt4;
