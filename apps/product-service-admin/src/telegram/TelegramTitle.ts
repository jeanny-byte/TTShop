import { Telegram as TTelegram } from "../api/telegram/Telegram";

export const TELEGRAM_TITLE_FIELD = "chatBotId";

export const TelegramTitle = (record: TTelegram): string => {
  return record.chatBotId?.toString() || String(record.id);
};
