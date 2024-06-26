import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
