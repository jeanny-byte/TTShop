import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="PaystackPaymentApiKey"
          source="paystackPaymentApiKey"
        />
      </SimpleForm>
    </Create>
  );
};
