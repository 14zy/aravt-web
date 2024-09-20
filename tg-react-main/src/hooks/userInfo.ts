// userInfo.ts
import { tg } from './telegramInit';

// Интерфейс пользователя
export interface UserInfo {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
}

export interface StartParam {
    start_param: string;
}

// Получение информации о текущем пользователе
export const getUserInfo = (): UserInfo | null => {
    const user = tg.initDataUnsafe.user;
    return user ? user : null;
};

// Получение start_param из Telegram
export const getStartParam = (): StartParam | null => {
    const startParam = tg.initDataUnsafe.start_param; // предполагается, что start_param доступен здесь
    return startParam ? { start_param: startParam } : null;
};

// Пример использования: логирование информации о пользователе
// console.log(getUserInfo());
