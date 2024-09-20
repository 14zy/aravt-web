// telegramInit.ts

// Определение интерфейсов и типов для Telegram WebApp SDK
interface MainButton {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setParams: (params: { text?: string; color?: string; text_color?: string; is_active?: boolean; is_visible?: boolean }) => void;
    setText: (text: string) => void;
    show: () => void;
    hide: () => void;
    enable: () => void;
    disable: () => void;
    showProgress: (leaveActive?: boolean) => void;
    hideProgress: () => void;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
}


interface BackButton {
    isVisible: boolean;
    show: () => BackButton;
    hide: () => BackButton;
    onClick: (callback: () => void) => BackButton;
    offClick: (callback: () => void) => BackButton;
}

interface TelegramWebApp {
    ready: () => void;
    MainButton: MainButton;
    BackButton: BackButton;
    initDataUnsafe: {
        user: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
        };
        start_param?: string;
    };
    sendData: (data: string) => void;
    close: () => void;
}

// Инициализация Telegram Web App SDK
export const initTelegram = (): TelegramWebApp => {
    const tg = (window as any).Telegram.WebApp as TelegramWebApp;

    // Основная инициализация, настройки можно расширить
    tg.ready();

    return tg;
};

// Экспорт инициализированного SDK для использования в других модулях
export const tg = initTelegram();
