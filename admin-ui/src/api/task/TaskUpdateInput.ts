import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  author?: UserWhereUniqueInput;
  description?: string | null;
  title?: string;
};
