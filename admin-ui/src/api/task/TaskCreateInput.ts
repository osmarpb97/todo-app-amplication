import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  author: UserWhereUniqueInput;
  description?: string | null;
  title: string;
};
