// src/aravt.tsx
import React from 'react';
import styles from '../assets/css/aravt.module.css';
import logo from '../assets/img/img(4).png'; // Make sure to have your logo in this path
import MainButton from './MainButton';
import BackButton from './BackButton'; // Импорт компонента BackButton

const Aravt5: React.FC = () => {
  return (
    <div className={styles.aravtContainer}>
      <h1 className={styles.header}>Invite 10 people</h1>
      <div className={styles.logoSection}>
        <img src={logo} alt="ARAVT Logo" className={styles.logo} />
      </div>
      <p className={styles.footer}>Create your ARAVT and receive leadership<br></br>Rank 1 Gerege</p>
      <div className={styles.paginationDots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
      </div>
      <MainButton text="Next (5/6)" link="/aravt6" />
      <BackButton />
    </div>
  );
};

export default Aravt5;
