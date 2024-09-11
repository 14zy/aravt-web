// dataHandling.ts
import { tg } from './telegramInit';

// Отправка данных боту
export const sendDataToBot = (data: string): void => {
    tg.sendData(data);
};

// Обработчик нажатия на основную кнопку
export const handleMainButtonClick = (callback: () => void): void => {
    tg.MainButton.onClick(callback);
};

// Пример использования: отправка данных при нажатии на кнопку
handleMainButtonClick(() => {
    sendDataToBot("Data sent from Web App");
});
