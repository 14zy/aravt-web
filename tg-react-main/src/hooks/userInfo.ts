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

// Получение информации о текущем пользователе
export const getUserInfo = (): UserInfo | null => {
    const user = tg.initDataUnsafe.user;
    return user ? user : null;
};

// Пример использования: логирование информации о пользователе
console.log(getUserInfo());
