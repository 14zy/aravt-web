// Preloader.tsx
import React, { useEffect, useState } from 'react';
import styles from '../assets/css/preloader.module.css'; // Импорт стилей как модуля
import { useTelegram } from '../hooks/useTelegram';

interface PreloaderProps {
  onLoaded: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const { user } = useTelegram();
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(null);
  let interval: ReturnType<typeof setInterval> | undefined;

  useEffect(() => {

    if (user) {
      setUserId(user.id);
      console.log('Telegram user ID:', user.id);
    } else {
      console.error('Cannot get Telegram user ID');
      setError(true);
      setProgress(50);
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (userId !== null) {
      const updateProgress = () => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            onLoaded(); // Скрыть прелоадер и показать контент после загрузки
            return 100;
          }
          return prev + 1;
        });
      };

      interval = setInterval(updateProgress, 20); // каждые 70 мс для достижения 100 за 7 секунд
    }

    return () => clearInterval(interval);
  }, [userId, onLoaded]);

  return (
    <div className={styles.preloader}>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%`, backgroundColor: progress < 50 ? '#3498db' : '#2ecc71' }}
        ></div>
      </div>
      <p className={styles.percentage}>{progress}%</p>
      {error && <p className={styles.error}>Перезагрузитесь, произошла ошибка.</p>}
    </div>
  );
};

export default Preloader;
