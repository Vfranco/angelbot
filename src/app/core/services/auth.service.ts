import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '@environment/environment';
import { Authentication, UserCredentials } from '@domain/auth/auth.dto';
import { IAuthRepository } from '@domain/auth/auth.repository';

@Injectable()
export class AuthService implements IAuthRepository {

  constructor(private http: HttpClient) { }

  authentication(payload: UserCredentials): Observable<HttpResponse<Authentication>> {
    return this.http.post<Authentication>(`${environment.baseUrl}/api/SignIn`, payload, { observe: 'response' });
  }
}
