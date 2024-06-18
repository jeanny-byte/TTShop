import { TelegramWhereInput } from "./TelegramWhereInput";
import { TelegramOrderByInput } from "./TelegramOrderByInput";

export type TelegramFindManyArgs = {
  where?: TelegramWhereInput;
  orderBy?: Array<TelegramOrderByInput>;
  skip?: number;
  take?: number;
};
