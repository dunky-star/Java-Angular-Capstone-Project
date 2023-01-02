import { Role } from "./role";

export class User {
  id?: number;
  firstName = '';
  lastName = '';
  email = '';
  username = '';
  password = '';
  role?: Role;
  token = '';
}
