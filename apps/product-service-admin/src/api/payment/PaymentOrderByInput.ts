import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  paystackPaymentApiKey?: SortOrder;
  updatedAt?: SortOrder;
};
