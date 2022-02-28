import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  author?: UserWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
};
