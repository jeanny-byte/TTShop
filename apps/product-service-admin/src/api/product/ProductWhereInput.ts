import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: StringNullableFilter;
  price?: FloatNullableFilter;
};
