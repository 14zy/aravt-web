// src/aravt.tsx
import React from 'react';
import styles from '../assets/css/aravt.module.css';
import BackButton from './BackButton'; // Импорт компонента BackButton

import { TonConnectButton } from '@tonconnect/ui-react';

const Aravt6: React.FC = () => {
  return (
    <div className={styles.aravtContainer}>
      <h1 className={styles.header}>Join ARAVT Systems</h1>
      <p className={styles.footer}>Subscribe:<br></br>Channel<br></br>Youtube<br></br>Instagram</p>
      <TonConnectButton />
      <div className={styles.paginationDots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.active}`}></span>
      </div>
      <BackButton />
    </div>
  );
};

export default Aravt6;
