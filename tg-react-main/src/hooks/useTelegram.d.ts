// src/hooks/useTelegram.d.ts
export interface User {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

export interface MainButton {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
}

export interface Telegram {
  ready: () => void;
  MainButton: MainButton;
  close: () => void;
  initDataUnsafe?: {
    user?: User;
  };
}

export function useTelegram(): {
  onToggleButton: () => void;
  onClose: () => void;
  tg: Telegram;
  user?: User;
};
