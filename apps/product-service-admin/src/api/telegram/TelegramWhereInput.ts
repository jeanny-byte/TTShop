import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TelegramWhereInput = {
  chatBotId?: StringNullableFilter;
  chatId?: StringNullableFilter;
  id?: StringFilter;
  netlifyApiKey?: StringNullableFilter;
};
