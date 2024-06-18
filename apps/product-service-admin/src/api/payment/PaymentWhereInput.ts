import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  id?: StringFilter;
  paystackPaymentApiKey?: StringNullableFilter;
};
