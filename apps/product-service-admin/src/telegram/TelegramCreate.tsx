import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TelegramCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ChatBotID" source="chatBotId" />
        <TextInput label="ChatID" source="chatId" />
        <TextInput label="NetlifyApiKey" source="netlifyApiKey" />
      </SimpleForm>
    </Create>
  );
};
