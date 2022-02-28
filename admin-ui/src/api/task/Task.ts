import { User } from "../user/User";

export type Task = {
  author?: User;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string;
  updatedAt: Date;
};
