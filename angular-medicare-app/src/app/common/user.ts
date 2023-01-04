import { Role } from "./role";

export class User {
  id?: number;
  name?: string;
  email?: string;
  username?: string;
  password?: string;
  role?: Role;
  token?: string;
}
