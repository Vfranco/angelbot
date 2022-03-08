import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { DtoResponseAuthLogin, IUser} from '@domain/auth/auth.dto';
import { environment } from '@environment/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  addUser(userCredential: IUser): Observable<HttpResponse<DtoResponseAuthLogin>>{
    return this.http.post<DtoResponseAuthLogin>(`${environment.baseUrl}/api/SignIn`, userCredential,{observe:'response'});
  }
}
