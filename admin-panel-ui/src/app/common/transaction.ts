import { Drug } from './drug';
import { User } from './user';
export class Transaction {
  id?: number;
  drug?: Drug;
  user?: User;
  purchaseDate: any;
}
