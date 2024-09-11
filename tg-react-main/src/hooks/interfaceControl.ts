 
// interfaceControl.ts
import { tg } from './telegramInit';

// Настройка основной кнопки
export const setupMainButton = (text: string, color: string): void => {
    tg.MainButton.text = text;
    tg.MainButton.color = color;
    tg.MainButton.show();
};

// Скрытие основной кнопки
export const hideMainButton = (): void => {
    tg.MainButton.hide();
};

// Пример использования: настройка и показ основной кнопки
setupMainButton("Click me", "#FF0000");
