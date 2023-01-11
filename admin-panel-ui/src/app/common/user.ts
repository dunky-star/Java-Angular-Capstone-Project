import { Role } from './role';

export class User {
  id?: number;
  name = '';
  email = '';
  username = '';
  password = '';
  role?: Role;
  token = '';
}
