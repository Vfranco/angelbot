import { Observable } from 'rxjs';
import { UserCredentials } from './auth.dto';

export interface IAuthRepository {
  authentication(user: UserCredentials): Observable<any>;
}
