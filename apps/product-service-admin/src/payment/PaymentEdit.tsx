import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="PaystackPaymentApiKey"
          source="paystackPaymentApiKey"
        />
      </SimpleForm>
    </Edit>
  );
};
