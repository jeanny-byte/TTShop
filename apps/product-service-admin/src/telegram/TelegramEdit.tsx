import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TelegramEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ChatBotID" source="chatBotId" />
        <TextInput label="ChatID" source="chatId" />
        <TextInput label="NetlifyApiKey" source="netlifyApiKey" />
      </SimpleForm>
    </Edit>
  );
};
