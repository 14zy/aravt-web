import React, { useState, useEffect } from 'react';
import styles from '../assets/css/aravt.module.css';
import Preloader from './Preloader'; // Импорт компонента Preloader
import logo from '../assets/img/img.png'; // Ensure your logo exists at this path
import MainButton from './MainButton';
import { getStartParam, StartParam } from '../hooks/userInfo';

const Aravt: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [startParam, setStartParam] = useState<StartParam | null>(null);
  const [error, setError] = useState<string | null>(null);


  // Функция, вызываемая после полной загрузки прелоадера
  const handleLoaded = () => {
    setIsLoaded(true);
  };
  
  useEffect(() => {
    try {
      const fetchedStartParam = getStartParam();
      if (fetchedStartParam) {
        setStartParam(fetchedStartParam);
      }
    } catch (err) {
      console.error('Error fetching user info:', err);
      setError('Failed to load user information');
    }
  }, []);

  return (
    <div className={styles.aravtContainer}>
      {!isLoaded ? (
        <Preloader onLoaded={handleLoaded} />
      ) : (
        <div> {/* Объединяем все элементы в один родительский <div> */}
          <h1 className={styles.header}>Welcome to ARAVT</h1>
          <div className={styles.logoSection}>
            <img src={logo} alt="ARAVT Logo" className={styles.logo} />
          </div>
          <p className={styles.footer}>Where people unite for making better things</p>
          <div className={styles.paginationDots}>
            <span className={`${styles.dot} ${styles.active}`}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
          {startParam ? (
         <p className="welcome-message">{startParam.start_param}</p>
       ) : (
         error && <p className="error-message">{error}</p>
       )}
          {/* Пример использования MainButton */}
          <MainButton text="Next (1/6)" link="/aravt2" />
        </div>
      )}
    </div>
  );
};

export default Aravt;
