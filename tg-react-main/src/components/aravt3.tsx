// src/aravt.tsx
import React from 'react';
import styles from '../assets/css/aravt.module.css';
import logo from '../assets/img/img(2).png'; // Make sure to have your logo in this path
import MainButton from './MainButton';
import BackButton from './BackButton'; // Импорт компонента BackButton

const Aravt3: React.FC = () => {
  return (
    <div className={styles.aravtContainer}>
      <h1 className={styles.header}>ARAVT SYSTEM<br></br>10:100:1000</h1>
      <div className={styles.logoSection}>
        <img src={logo} alt="ARAVT Logo" className={styles.logo} />
      </div>
      <p className={styles.footer}>People uniting in tens and thousands to make thing<br></br><br></br>Solders : Arban: Zuun: Mingghan : Tumen</p>
      <div className={styles.paginationDots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
      <MainButton text="Next (3/6)" link="/aravt4" />
       <BackButton />
    </div>
  );
};

export default Aravt3;
