import { Observable } from 'rxjs';
import { UserCredentials } from './auth.dto';

export interface IAuthRepository {
  authentication(payload: UserCredentials): Observable<any>;
}
