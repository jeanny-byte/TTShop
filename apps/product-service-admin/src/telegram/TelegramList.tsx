import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TelegramList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Telegrams"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ChatBotID" source="chatBotId" />
        <TextField label="ChatID" source="chatId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="NetlifyApiKey" source="netlifyApiKey" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
