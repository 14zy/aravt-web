import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Импорт useNavigate
import { tg } from '../hooks/telegramInit'; // Импорт инициализированного SDK

interface MainButtonProps {
  text: string;
  link: string; // link - теперь это роут, а не URL
}

const MainButton: React.FC<MainButtonProps> = ({ text, link }) => {
  const navigate = useNavigate(); // Инициализация useNavigate

  useEffect(() => {
    if (!tg || !tg.MainButton) return;

    // Устанавливаем текст кнопки и делаем её видимой и активной
    tg.MainButton.setText(text);
    tg.MainButton.show();
    tg.MainButton.enable();

    // Обработчик нажатия на кнопку
    const handleClick = () => {
      navigate(link); // Используем navigate вместо window.location.href
    };

    tg.MainButton.onClick(handleClick);

    // Чистка при размонтировании компонента
    return () => {
      tg.MainButton.offClick(handleClick);
      tg.MainButton.hide();
    };
  }, [text, link, navigate]); // Добавляем navigate в зависимости

  return null; // Компонент не отображает ничего на экране
};

export default MainButton;
