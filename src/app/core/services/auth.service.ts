import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IUser } from '../../domain/auth/auth.dto';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  addUser(user: IUser): Observable<any> {
    return this.http.post<any>(environment.baseUrl, user);
  }
}
