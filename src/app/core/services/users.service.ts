import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUsersField } from "@core/validators/usersform.validator";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { IResponseBodyDto } from "@domain/http/response.body.dto";
import { ChangePassword, UserDto } from "@domain/users/user.dto";
import { IUserRepository } from "@domain/users/user.repository";
import { environment } from "@environment/environment";
import { Observable } from 'rxjs';

@Injectable()
export class UsersServices implements IUserRepository {

  constructor(private http: HttpClient) { }

  deleteUser(id: number, status: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.baseUrl}/api/Users/${id}`, { observe: 'response' });
  }

  getUserById(id: number): Observable<HttpResponse<UserDto>> {
    return this.http.get<UserDto>(`${environment.baseUrl}/api/Users/${id}`, { observe: 'response' });
  }

  updateUser(payload: IUsersField): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Users/${payload.id}`, payload, { observe: 'response' });
  }

  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBodyDto>> {
    return this.http.post<IResponseBodyDto>(`${environment.baseUrl}/api/Users/All`, payload, { observe: 'response' });
  }

  createUser(payload: IUsersField): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/Users`, payload, { observe: 'response' });
  }

  changePassword(id: number, payload: ChangePassword): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Users/ChangePassword/${id}`, payload, { observe: 'response' });
  }
}
