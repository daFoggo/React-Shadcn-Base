import { IUser } from "./User";

export interface IUserMenuProps {
  user: IUser;
  variant?: "default" | "outline" | "secondary";
}
