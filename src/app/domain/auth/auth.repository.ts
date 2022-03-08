import { Observable } from 'rxjs';
import { IUser } from './auth.dto';

export interface IAuthRepository {
  addUser(user: IUser): Observable<any>;
}
