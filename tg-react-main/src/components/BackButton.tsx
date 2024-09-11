import React, { useEffect } from 'react';
import { tg } from '../hooks/telegramInit'; // Импорт инициализированного SDK

const BackButton: React.FC = () => {
  useEffect(() => {
    if (!tg || !tg.BackButton) return;

    // Делаем кнопку видимой
    tg.BackButton.show();

    // Обработчик нажатия на кнопку "Назад"
    const handleClick = () => {
      // Переход назад
      window.history.back(); // Возвращает пользователя на предыдущую страницу
    };

    tg.BackButton.onClick(handleClick);

    // Чистка при размонтировании компонента
    return () => {
      tg.BackButton.offClick(handleClick);
      tg.BackButton.hide();
    };
  }, []);

  return null; // Компонент не отображает ничего на экране
};

export default BackButton;
