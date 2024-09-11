// src/aravt.tsx
import React from 'react';
import styles from '../assets/css/aravt.module.css';
import logo from '../assets/img/img(1).png'; // Make sure to have your logo in this path
import MainButton from './MainButton';
import BackButton from './BackButton'; // Импорт компонента BackButton

const Aravt2: React.FC = () => {
  return (
    <div className={styles.aravtContainer}>
      <h1 className={styles.header}>Legend</h1>
      <div className={styles.logoSection}>
        <img src={logo} alt="ARAVT Logo" className={styles.logo} />
      </div>
      <p className={styles.footer}>Why the Mongolian army was so powerful</p>
      <div className={styles.paginationDots}>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
      <MainButton text="Next (2/6)" link="/aravt3" />
       <BackButton />
    </div>
  );
};

export default Aravt2;
